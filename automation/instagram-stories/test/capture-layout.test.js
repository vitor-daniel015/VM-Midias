import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { chromium } from "playwright";

test("exibe o título completo na arte vertical sem reticências", async (context) => {
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
            title: "Trump diz estar aberto a reunião com China e Rússia para discutir desarmamento nuclear e fim das tensões internacionais",
            summary: "]]>&nbsp;Os presidentes anunciaram uma reunião para discutir segurança internacional e novos acordos.",
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
    const layout = await page.locator("#title").evaluate((element) => {
      const summary = document.getElementById("summary");
      const credit = element.parentElement?.querySelector(".credit");
      const style = getComputedStyle(element);
      return {
        fontSize: Number.parseFloat(style.fontSize),
        lineClamp: style.webkitLineClamp,
        overflow: style.overflow,
        text: element.textContent,
        summaryText: summary?.textContent,
        summaryBottom: summary?.getBoundingClientRect().bottom || 0,
        creditTop: credit?.getBoundingClientRect().top || 0,
      };
    });
    assert.equal(layout.text, "Trump diz estar aberto a reunião com China e Rússia para discutir desarmamento nuclear e fim das tensões internacionais");
    assert.equal(layout.summaryText, "Os presidentes anunciaram uma reunião para discutir segurança internacional e novos acordos.");
    assert.ok(layout.lineClamp === "none" || layout.lineClamp === "");
    assert.equal(layout.overflow, "visible");
    assert.ok(layout.fontSize >= 37, `Título ficou pequeno demais: ${layout.fontSize}px`);
    assert.ok(layout.summaryBottom < layout.creditTop, "Título e resumo invadiram o rodapé da arte.");
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
