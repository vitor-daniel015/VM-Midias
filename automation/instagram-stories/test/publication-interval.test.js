import assert from "node:assert/strict";
import test from "node:test";
import { availablePublishSlots, remainingPublishDelayMs } from "../src/index.js";

test("respeita o intervalo mínimo de uma hora entre Stories", () => {
  const now = Date.parse("2026-10-20T18:00:00.000Z");
  const state = {
    articles: {
      noticia: {
        status: "published",
        publishedToInstagramAt: "2026-10-20T17:30:00.000Z",
      },
    },
  };

  assert.equal(remainingPublishDelayMs(state, 60, now), 30 * 60 * 1000);
  assert.equal(remainingPublishDelayMs(state, 60, now + 31 * 60 * 1000), 0);
});

test("libera a primeira publicação quando não há histórico", () => {
  assert.equal(remainingPublishDelayMs({ articles: {} }, 60), 0);
});

test("recupera publicações atrasadas sem ultrapassar o limite do ciclo", () => {
  const now = Date.parse("2026-10-21T18:00:00.000Z");
  const state = {
    articles: {
      noticia: {
        status: "published",
        publishedToInstagramAt: "2026-10-21T16:00:00.000Z",
      },
    },
  };

  assert.equal(availablePublishSlots(state, 20, 5, now), 5);
  assert.equal(availablePublishSlots(state, 20, 5, now - 110 * 60 * 1000), 0);
  assert.equal(availablePublishSlots({ articles: {} }, 20, 5, now), 5);
});
