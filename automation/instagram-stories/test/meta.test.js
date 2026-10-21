import assert from "node:assert/strict";
import test from "node:test";
import { getContentPublishingLimit, inspectInstagramAccount } from "../src/meta.js";

function metaConfig(overrides = {}) {
  return {
    metaGraphBaseUrl: "https://graph.facebook.com",
    metaApiVersion: "v24.0",
    instagramAccountId: "17841474189752293",
    metaExpectedUsername: "radiobraba",
    metaAccessToken: "token-de-teste",
    ...overrides,
  };
}

test("consulta somente id e username e envia o token no cabeçalho", async (context) => {
  const originalFetch = globalThis.fetch;
  context.after(() => { globalThis.fetch = originalFetch; });

  globalThis.fetch = async (url, options) => {
    assert.equal(url.searchParams.get("fields"), "id,username");
    assert.equal(url.searchParams.has("access_token"), false);
    assert.equal(options.headers.Authorization, "Bearer token-de-teste");
    return new Response(JSON.stringify({
      id: "17841474189752293",
      username: "radiobraba",
    }), { status: 200, headers: { "Content-Type": "application/json" } });
  };

  const account = await inspectInstagramAccount(metaConfig());
  assert.equal(account.username, "radiobraba");
});

test("rejeita um ID diferente do configurado", async (context) => {
  const originalFetch = globalThis.fetch;
  context.after(() => { globalThis.fetch = originalFetch; });
  globalThis.fetch = async () => new Response(JSON.stringify({
    id: "outra-conta",
    username: "radiobraba",
  }), { status: 200, headers: { "Content-Type": "application/json" } });

  await assert.rejects(
    inspectInstagramAccount(metaConfig()),
    /conta diferente de META_INSTAGRAM_ACCOUNT_ID/,
  );
});

test("rejeita um usuário diferente de radiobraba", async (context) => {
  const originalFetch = globalThis.fetch;
  context.after(() => { globalThis.fetch = originalFetch; });
  globalThis.fetch = async () => new Response(JSON.stringify({
    id: "17841474189752293",
    username: "outrousuario",
  }), { status: 200, headers: { "Content-Type": "application/json" } });

  await assert.rejects(
    inspectInstagramAccount(metaConfig()),
    /não corresponde a @radiobraba/,
  );
});

test("consulta a cota de publicação sem expor o token na URL", async (context) => {
  const originalFetch = globalThis.fetch;
  context.after(() => { globalThis.fetch = originalFetch; });
  globalThis.fetch = async (url, options) => {
    assert.equal(url.searchParams.get("fields"), "config,quota_usage");
    assert.equal(url.searchParams.has("access_token"), false);
    assert.equal(options.headers.Authorization, "Bearer token-de-teste");
    return new Response(JSON.stringify({
      data: [{
        quota_usage: 7,
        config: { quota_total: 100, quota_duration: 86400 },
      }],
    }), { status: 200, headers: { "Content-Type": "application/json" } });
  };

  assert.deepEqual(await getContentPublishingLimit(metaConfig()), {
    used: 7,
    total: 100,
    durationSeconds: 86400,
  });
});
