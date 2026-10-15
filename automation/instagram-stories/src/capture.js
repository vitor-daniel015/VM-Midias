import path from "node:path";
import { createHash } from "node:crypto";
import { chromium } from "playwright";

function shortHash(value) {
  return createHash("sha256").update(String(value)).digest("hex").slice(0, 16);
}

function safeName(value) {
  return String(value || "noticia")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60) || "noticia";
}

export function articleKey(article) {
  return shortHash(`${article.id}|${article.published_at || ""}|${article.title}`);
}

export function captureFilePath(config, article) {
  const date = article.published_at ? new Date(article.published_at) : new Date();
  const stamp = Number.isNaN(date.getTime())
    ? "sem-data"
    : date.toISOString().replace(/[:.]/g, "-");
  return path.join(config.captureDirectory, `${stamp}-${safeName(article.title)}-${articleKey(article)}.jpg`);
}

export async function openRenderer(config) {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1080, height: 1920 },
    deviceScaleFactor: 1,
    locale: "pt-BR",
    timezoneId: "America/Sao_Paulo",
  });
  const page = await context.newPage();
  page.setDefaultTimeout(config.navigationTimeoutMs);

  await page.goto(config.storyPageUrl, {
    waitUntil: "domcontentloaded",
    timeout: config.navigationTimeoutMs,
  });
  await page.waitForFunction(() =>
    Boolean(window.VMNewsExport && window.VMNewsExport.ready),
  );

  const list = async () => page.evaluate(() => window.VMNewsExport.list());

  const capture = async (article, outputPath) => {
    const selected = await page.evaluate(
      (id) => window.VMNewsExport.select(id),
      article.id,
    );
    if (!selected) throw new Error(`A notícia não está mais disponível: ${article.title}`);

    await page.waitForFunction(
      (id) => {
        const root = document.getElementById("news-main");
        const image = document.getElementById("news-image");
        return root &&
          root.getAttribute("data-news-ready") === "true" &&
          root.getAttribute("data-news-id") === String(id) &&
          image && image.complete && image.naturalWidth > 0;
      },
      article.id,
    );
    await page.evaluate(() => document.fonts && document.fonts.ready);
    await page.locator("#news-main").screenshot({
      path: outputPath,
      type: "jpeg",
      quality: 94,
      animations: "disabled",
    });
  };

  return {
    list,
    capture,
    close: () => browser.close(),
  };
}
