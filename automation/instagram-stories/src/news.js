import { createHash } from "node:crypto";
import { config } from "./config.js";
import { NEWS_SOURCES } from "./news-sources.js";

const USER_AGENT = "VM-Midias-News/1.0 (+https://vmmidias.com.br)";

function decodeEntities(value) {
  const entities = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    nbsp: " ",
    quot: '"',
  };
  return String(value || "")
    .replace(/^<!\[CDATA\[|\]\]>$/g, "")
    .replace(/&#(x?[0-9a-f]+);/gi, (match, number) => {
      const codePoint = parseInt(
        number.replace(/^x/i, ""),
        /^x/i.test(number) ? 16 : 10,
      );
      return Number.isFinite(codePoint) && codePoint <= 0x10ffff
        ? String.fromCodePoint(codePoint)
        : match;
    })
    .replace(/&([a-z]+);/gi, (match, name) => entities[name.toLowerCase()] || match);
}

function plain(value) {
  return decodeEntities(value)
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tag(block, names) {
  for (const name of names) {
    const escaped = name.replace(":", "\\:");
    const match = block.match(new RegExp(`<${escaped}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${escaped}>`, "i"));
    if (match) return match[1];
  }
  return "";
}

function attribute(block, tagNames, attributeName) {
  for (const name of tagNames) {
    const escaped = name.replace(":", "\\:");
    const match = block.match(new RegExp(`<${escaped}\\b[^>]*\\b${attributeName}=["']([^"']+)["'][^>]*>`, "i"));
    if (match) return decodeEntities(match[1]);
  }
  return "";
}

function normalized(value) {
  return plain(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function isBroadcastPromo(title) {
  const value = normalized(title);
  return /\b(jornal|telejornal|eptv|sptv|bom dia|jornal hoje|jornal nacional|link vanguarda|jac\s?1|mg\s?1|rj\s?1|df\s?1|globonews)\b/.test(value) &&
    /\b(assista|acompanhe|ao vivo|esta no ar|agora no ar)\b/.test(value);
}

function articleImage(block, description) {
  const enclosure = block.match(/<enclosure\b[^>]*\burl=["']([^"']+)["'][^>]*\btype=["']image\//i);
  const htmlImage = String(description || "").match(/<img\b[^>]*\bsrc=["']([^"']+)["']/i);
  const value = attribute(block, ["media:content", "media:thumbnail"], "url") ||
    (enclosure && decodeEntities(enclosure[1])) ||
    (htmlImage && decodeEntities(htmlImage[1])) ||
    "";
  return /^https?:\/\//i.test(value) && !/(logo|favicon|spacer|pixel)/i.test(value)
    ? value
    : "";
}

export function parseFeed(xml, source) {
  const blocks = xml.match(/<(?:item|entry)\b[\s\S]*?<\/(?:item|entry)>/gi) || [];
  const oldest = Date.now() - config.newsMaxAgeDays * 24 * 60 * 60 * 1000;
  const articles = [];

  for (const block of blocks) {
    const title = plain(tag(block, ["title"]));
    if (!title || isBroadcastPromo(title)) continue;

    const rawDate = plain(tag(block, ["pubDate", "published", "updated", "dc:date"]));
    const publishedAt = Date.parse(rawDate);
    if (Number.isFinite(publishedAt) && publishedAt < oldest) continue;

    const description = tag(block, ["description", "content:encoded", "summary", "content"]);
    const link = plain(tag(block, ["link"])) || attribute(block, ["link"], "href");
    const guid = plain(tag(block, ["guid", "id"])) || link || title;
    const externalId = createHash("sha256")
      .update(`${source.name}|${guid}`)
      .digest("hex");

    articles.push({
      external_id: externalId,
      title,
      summary: plain(description).slice(0, 420) || null,
      source_name: source.name,
      category: source.category,
      image_url: articleImage(block, description) || null,
      article_url: /^https?:\/\//i.test(link) ? link : null,
      published_at: new Date(Number.isFinite(publishedAt) ? publishedAt : Date.now()).toISOString(),
      updated_at: new Date().toISOString(),
    });
  }
  return articles.slice(0, config.newsItemsPerSource);
}

async function fetchWithRetry(url, attempts = 3) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: { "User-Agent": USER_AGENT, Accept: "application/rss+xml, application/xml, text/xml, */*" },
        redirect: "follow",
        signal: AbortSignal.timeout(config.newsRequestTimeoutMs),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.text();
    } catch (error) {
      lastError = error;
      if (attempt < attempts) await new Promise((resolve) => setTimeout(resolve, 700 * attempt));
    }
  }
  throw lastError;
}

function serviceHeaders(extra = {}) {
  return {
    apikey: config.supabaseServiceRoleKey,
    Authorization: `Bearer ${config.supabaseServiceRoleKey}`,
    ...extra,
  };
}

export async function ingestNews() {
  if (!config.supabaseUrl || !config.supabaseServiceRoleKey) {
    throw new Error("SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY são obrigatórios para coletar notícias.");
  }

  const settled = await Promise.allSettled(
    NEWS_SOURCES.map(async (source) => ({ source, articles: parseFeed(await fetchWithRetry(source.url), source) })),
  );
  const articles = [];
  const failures = [];
  const seen = new Set();

  for (const result of settled) {
    if (result.status === "rejected") {
      failures.push(result.reason?.message || "erro desconhecido");
      continue;
    }
    for (const article of result.value.articles) {
      const key = normalized(article.title);
      if (!key || seen.has(key)) continue;
      seen.add(key);
      articles.push(article);
    }
  }

  if (!articles.length) {
    throw new Error(`Nenhuma fonte RSS respondeu com notícias válidas. ${failures.join("; ")}`);
  }

  const response = await fetch(
    `${config.supabaseUrl}/rest/v1/news_articles?on_conflict=external_id`,
    {
      method: "POST",
      headers: serviceHeaders({
        "Content-Type": "application/json",
        // Uma matéria já moderada nunca pode voltar ao estado inicial quando
        // a mesma fonte RSS for coletada novamente.
        Prefer: "resolution=ignore-duplicates,missing=default,return=minimal",
      }),
      body: JSON.stringify(articles),
    },
  );

  if (!response.ok) {
    const details = await response.text();
    if (response.status === 404 || /news_articles/i.test(details)) {
      throw new Error("A fila de notícias ainda não foi instalada no Supabase. Aplique a migração 202610190001_news_moderation_queue.sql.");
    }
    throw new Error(`Não foi possível salvar a fila de notícias (HTTP ${response.status}).`);
  }

  return { imported: articles.length, failedSources: failures.length };
}

export async function updateNewsStoryStatus(articleId, storyStatus, fields = {}) {
  if (!articleId || !config.supabaseUrl || !config.supabaseServiceRoleKey) return;
  const response = await fetch(
    `${config.supabaseUrl}/rest/v1/news_articles?id=eq.${encodeURIComponent(articleId)}`,
    {
      method: "PATCH",
      headers: serviceHeaders({
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      }),
      body: JSON.stringify({
        story_status: storyStatus,
        updated_at: new Date().toISOString(),
        ...fields,
      }),
    },
  );
  if (!response.ok) throw new Error(`Não foi possível atualizar o estado da notícia (HTTP ${response.status}).`);
}
