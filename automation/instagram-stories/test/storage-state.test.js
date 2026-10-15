import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { readState, writeState } from "../src/state.js";
import { ensureStorageBucket } from "../src/storage.js";

function storageConfig(overrides = {}) {
  return {
    publishEnabled: true,
    supabaseUrl: "https://projeto.supabase.co",
    supabaseServiceRoleKey: "service-role-de-teste",
    storageBucket: "instagram-story-assets",
    remoteStatePath: "automation/state.json",
    ...overrides,
  };
}

test("configura o bucket privado para imagens e para o histórico JSON", async (context) => {
  const originalFetch = globalThis.fetch;
  context.after(() => { globalThis.fetch = originalFetch; });
  const requests = [];
  globalThis.fetch = async (url, options = {}) => {
    requests.push({ url: String(url), options });
    return new Response("{}", { status: 200, headers: { "Content-Type": "application/json" } });
  };

  await ensureStorageBucket(storageConfig());

  assert.equal(requests.length, 2);
  assert.equal(requests[1].options.method, "PUT");
  assert.deepEqual(JSON.parse(requests[1].options.body).allowed_mime_types, [
    "image/jpeg",
    "application/json",
  ]);
});

test("lê o histórico remoto em produção", async (context) => {
  const originalFetch = globalThis.fetch;
  context.after(() => { globalThis.fetch = originalFetch; });
  globalThis.fetch = async () => new Response(JSON.stringify({
    initialized: true,
    articles: { noticia: { status: "published" } },
  }), { status: 200, headers: { "Content-Type": "application/json" } });

  const state = await readState(storageConfig({ stateFile: "arquivo-local-inexistente.json" }));

  assert.equal(state.initialized, true);
  assert.equal(state.articles.noticia.status, "published");
});

test("salva o histórico local e no bucket privado", async (context) => {
  const originalFetch = globalThis.fetch;
  const directory = await fs.mkdtemp(path.join(process.cwd(), "test-runtime-"));
  context.after(async () => {
    globalThis.fetch = originalFetch;
    await fs.rm(directory, { recursive: true, force: true });
  });
  let uploaded;
  globalThis.fetch = async (_url, options) => {
    uploaded = JSON.parse(options.body);
    return new Response("{}", { status: 200, headers: { "Content-Type": "application/json" } });
  };
  const config = storageConfig({ stateFile: path.join(directory, "state.json") });

  await writeState(config, {
    initialized: true,
    articles: { noticia: { status: "publishing" } },
  });

  const local = JSON.parse(await fs.readFile(config.stateFile, "utf8"));
  assert.equal(local.articles.noticia.status, "publishing");
  assert.equal(uploaded.articles.noticia.status, "publishing");
});
