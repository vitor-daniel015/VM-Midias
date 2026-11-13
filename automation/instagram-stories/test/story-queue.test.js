import assert from "node:assert/strict";
import test from "node:test";
import { config } from "../src/config.js";
import {
  claimNewsStoryForPublishing,
  newsStoryCanStillPublish,
} from "../src/news.js";

const articleId = "11111111-1111-4111-8111-111111111111";

async function withMockedSupabase(handler, run) {
  const originalFetch = globalThis.fetch;
  const originalUrl = config.supabaseUrl;
  const originalKey = config.supabaseServiceRoleKey;
  config.supabaseUrl = "https://project.supabase.co";
  config.supabaseServiceRoleKey = "service-role-test";
  globalThis.fetch = handler;
  try {
    await run();
  } finally {
    globalThis.fetch = originalFetch;
    config.supabaseUrl = originalUrl;
    config.supabaseServiceRoleKey = originalKey;
  }
}

test("reserva somente uma notícia que continua aprovada e na fila", async () => {
  await withMockedSupabase(async (url, options) => {
    assert.match(String(url), /moderation_status=eq\.approved/);
    assert.match(String(url), /story_status=in\.\(queued,failed\)/);
    assert.equal(options.method, "PATCH");
    assert.equal(JSON.parse(options.body).story_status, "publishing");
    return new Response(JSON.stringify([{ id: articleId }]), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }, async () => {
    assert.equal(await claimNewsStoryForPublishing(articleId), true);
  });
});

test("não reserva uma notícia que foi retirada da fila", async () => {
  await withMockedSupabase(async () => new Response("[]", {
    status: 200,
    headers: { "Content-Type": "application/json" },
  }), async () => {
    assert.equal(await claimNewsStoryForPublishing(articleId), false);
  });
});

test("confere novamente a aprovação imediatamente antes da Meta", async () => {
  await withMockedSupabase(async (url, options) => {
    assert.match(String(url), /moderation_status=eq\.approved/);
    assert.match(String(url), /story_status=eq\.publishing/);
    assert.equal(options.cache, "no-store");
    return new Response(JSON.stringify([{ id: articleId }]), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }, async () => {
    assert.equal(await newsStoryCanStillPublish(articleId), true);
  });
});
