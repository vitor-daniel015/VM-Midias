import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { chromium } from "playwright";

test("mantém o título grande na arte vertical exportada", async (context) => {
  try {
    await fs.access(chromium.executablePath());
  } catch {
    context.skip("Chromium ainda não foi instalado neste ambiente.");
    return;
  }
  const htmlPath = path.resolve(process.cwd(), "../..", "public", "VM", "index.html");
  const original = await fs.readFile(htmlPath, "utf8");
  const html = original.replace(
    '<script src="/vm-public-config.js"></script>',
    '<script>window.VM_PUBLIC_CONFIG={supabaseUrl:"https://test.supabase.co",supabasePublishableKey:"public-test"}</script>',
  );
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
    await page.route("https://test.supabase.co/rest/v1/rpc/list_live_news", (route) =>
      route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify([
          {
            id: "00000000-0000-0000-0000-000000000001",
            external_id: "layout-test",
            title: "Título da notícia com o mesmo destaque usado na TV e no site",
            summary: "Resumo usado apenas para validar a composição vertical.",
            source_name: "BRABA NEWS",
            category: "Regional",
            image_url: null,
            article_url: null,
            published_at: new Date().toISOString(),
            queued_at: new Date().toISOString(),
            story_status: "queued",
          },
        ]),
      }),
    );
    await page.setContent(html, { waitUntil: "domcontentloaded" });
    await page.waitForFunction(() =>
      document.getElementById("news-main")?.getAttribute("data-news-ready") === "true",
    );
    const fontSize = await page.locator("#title").evaluate((element) =>
      parseFloat(getComputedStyle(element).fontSize),
    );
    assert.ok(fontSize >= 59, `Título ficou menor do que o esperado: ${fontSize}px`);
    if (process.env.STORY_LAYOUT_SCREENSHOT) {
      await page.locator("#news-main").screenshot({
        path: process.env.STORY_LAYOUT_SCREENSHOT,
        type: "png",
      });
    }
  } finally {
    await browser.close();
  }
});
