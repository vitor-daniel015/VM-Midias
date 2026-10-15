import path from "node:path";
import { pathToFileURL } from "node:url";
import {
  config,
  validateMetaDiagnosticConfig,
  validatePublishingConfig,
} from "./config.js";
import { articleKey, captureFilePath, openRenderer } from "./capture.js";
import { inspectInstagramAccount, publishInstagramStory } from "./meta.js";
import { ensureStorageBucket, uploadStory } from "./storage.js";
import {
  acquireLock,
  ensureRuntime,
  fileExists,
  readState,
  releaseLock,
  writeState,
} from "./state.js";

const once = process.argv.includes("--once");
const doctor = process.argv.includes("--doctor");
let stopping = false;

function log(message) {
  console.log(`[${new Date().toLocaleString("pt-BR")}] ${message}`);
}

function objectPath(article, key) {
  const value = article.published_at ? new Date(article.published_at) : new Date();
  const date = Number.isNaN(value.getTime()) ? new Date() : value;
  return [
    String(date.getUTCFullYear()),
    String(date.getUTCMonth() + 1).padStart(2, "0"),
    String(date.getUTCDate()).padStart(2, "0"),
    `${key}.jpg`,
  ].join("/");
}

function eligibleArticles(items, state) {
  const oldestAccepted = Date.now() - config.maxAgeHours * 60 * 60 * 1000;
  return items
    .filter((item) => {
      const key = articleKey(item);
      const record = state.articles[key];
      if (record && [
        "published",
        "ignored-bootstrap",
        "publishing",
        "needs-review",
      ].includes(record.status)) return false;
      if (record && record.status === "captured" && !config.publishEnabled) return false;
      if (config.firstRunMode === "all") return true;
      const published = Number(item.published_at);
      return !Number.isFinite(published) || published >= oldestAccepted;
    })
    .sort((a, b) => Number(a.published_at || 0) - Number(b.published_at || 0));
}

async function initializeState(items, state) {
  if (state.initialized) return;
  if (config.firstRunMode === "latest" && items.length > 1) {
    const latest = [...items].sort(
      (a, b) => Number(b.published_at || 0) - Number(a.published_at || 0),
    )[0];
    for (const item of items) {
      if (articleKey(item) === articleKey(latest)) continue;
      const key = articleKey(item);
      state.articles[key] = {
        status: "ignored-bootstrap",
        title: item.title,
        publishedAt: item.published_at || null,
        updatedAt: new Date().toISOString(),
      };
    }
  }
  state.initialized = true;
  await writeState(config, state);
}

async function runDoctor() {
  validateMetaDiagnosticConfig();
  log(`Abrindo a arte em ${config.storyPageUrl}`);
  const renderer = await openRenderer(config);
  try {
    const items = await renderer.list();
    if (!items.length) throw new Error("Nenhuma notícia com imagem foi encontrada.");
    const target = items[0];
    const output = captureFilePath(config, target);
    await renderer.capture(target, output);
    log(`Captura aprovada: ${output}`);
  } finally {
    await renderer.close();
  }

  const account = await inspectInstagramAccount(config);
  log(`Conta da Meta aprovada: @${account.username} (ID conferido).`);
  if (!config.publishEnabled) {
    log("Publicação desativada (STORY_PUBLISH_ENABLED=false). Nenhum Story foi publicado.");
  }
  log("Diagnóstico concluído. Nenhum Story foi publicado.");
}

async function processCycle() {
  if (config.publishEnabled) await ensureStorageBucket(config);
  const state = await readState(config);
  const renderer = await openRenderer(config);
  try {
    const items = await renderer.list();
    if (!items.length) {
      log("Nenhuma notícia com imagem disponível neste ciclo.");
      return;
    }
    await initializeState(items, state);
    const queue = eligibleArticles(items, state).slice(0, config.maxPerCycle);
    if (!queue.length) {
      log(`Sem notícias novas. ${items.length} matérias foram verificadas.`);
      return;
    }

    for (const article of queue) {
      const key = articleKey(article);
      const output = captureFilePath(config, article);
      const previous = state.articles[key] || {};
      let publicationStarted = false;
      try {
        if (!(await fileExists(output))) {
          log(`Gerando Story: ${article.title}`);
          await renderer.capture(article, output);
        }
        const record = {
          ...previous,
          status: "captured",
          title: article.title,
          source: article.source,
          publishedAt: article.published_at || null,
          captureFile: path.relative(config.runtimeDirectory, output),
          capturedAt: previous.capturedAt || new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        state.articles[key] = record;
        await writeState(config, state);

        if (!config.publishEnabled) {
          log("Imagem salva. Publicação desativada para teste.");
          continue;
        }

        const remotePath = objectPath(article, key);
        const signedUrl = await uploadStory(config, output, remotePath);
        state.articles[key] = {
          ...record,
          status: "publishing",
          storagePath: `${config.storageBucket}/${remotePath}`,
          publicationStartedAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        await writeState(config, state);
        publicationStarted = true;
        const published = await publishInstagramStory(config, signedUrl);
        state.articles[key] = {
          ...record,
          status: "published",
          storagePath: `${config.storageBucket}/${remotePath}`,
          metaContainerId: published.containerId,
          metaMediaId: published.mediaId,
          publishedToInstagramAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        await writeState(config, state);
        log(`Story publicado: ${article.title}`);
      } catch (error) {
        state.articles[key] = {
          ...(state.articles[key] || previous),
          status: publicationStarted ? "needs-review" : "failed",
          title: article.title,
          attempts: Number(previous.attempts || 0) + 1,
          lastError: error.message,
          updatedAt: new Date().toISOString(),
        };
        await writeState(config, state);
        console.error(`Falha em “${article.title}”: ${error.message}`);
      }
    }
  } finally {
    await renderer.close();
  }
}

async function main() {
  validatePublishingConfig();
  await ensureRuntime(config);
  await acquireLock(config.lockFile);
  try {
    if (doctor) {
      await runDoctor();
      return;
    }
    do {
      await processCycle();
      if (once || stopping) break;
      log(`Nova verificação em ${config.checkIntervalMinutes} minuto(s).`);
      await new Promise((resolve) => setTimeout(resolve, config.checkIntervalMinutes * 60000));
    } while (!stopping);
  } finally {
    await releaseLock(config.lockFile);
  }
}

process.on("SIGINT", () => { stopping = true; });
process.on("SIGTERM", () => { stopping = true; });

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(`Automação encerrada: ${error.message}`);
    process.exitCode = 1;
  });
}
