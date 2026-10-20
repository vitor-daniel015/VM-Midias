import { createHash } from "node:crypto";
import { config } from "./config.js";
import { NEWS_SOURCES } from "./news-sources.js";

const USER_AGENT = "VM-Midias-News/1.0 (+https://vmmidias.com.br)";
const PAGE_USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/140 Safari/537.36";

function decodeEntities(value) {
  const entities = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    nbsp: " ",
    quot: '"',
  };
  let decoded = String(value || "").replace(/^<!\[CDATA\[|\]\]>$/g, "");
  for (let pass = 0; pass < 3; pass += 1) {
    const previous = decoded;
    decoded = decoded
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
    if (decoded === previous) break;
  }
  return decoded;
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

function parsedNewsDate(value) {
  const months = {
    jan: "Jan", fev: "Feb", mar: "Mar", abr: "Apr", mai: "May", jun: "Jun",
    jul: "Jul", ago: "Aug", set: "Sep", out: "Oct", nov: "Nov", dez: "Dec",
  };
  const translated = String(value || "").replace(
    /\b(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)\b/gi,
    (month) => months[month.toLowerCase()],
  );
  return Date.parse(translated);
}

function hasBrokenEncoding(value) {
  return /�|Ã[\u0080-\u00bf]|Â[\u0080-\u00bf]/.test(String(value || ""));
}

export function isLowValueNews(title, summary = "") {
  const value = normalized(`${title} ${summary}`);
  const program = /\b(jornal|telejornal|eptv|sptv|bom dia|jornal hoje|jornal nacional|jornal do almoco|jornal anhanguera|link vanguarda|jac\s?1|mg\s?1|rj\s?1|df\s?1|globonews)\b/;
  return /^videos?\s*:/i.test(normalized(title)) ||
    (/\b(assista|acompanhe|veja)\b/.test(value) && /\b(videos?|jornal|edicao)\b/.test(value)) ||
    (program.test(value) && /\b(ao vivo|esta no ar|agora no ar|integra|edicao|segunda|terca|quarta|quinta|sexta|sabado|domingo)\b/.test(value)) ||
    /^ao vivo\s*:/i.test(normalized(title));
}

const GENERIC_IMAGE_PATTERN = /(?:logo-30-anos|share-30-anos|favicon|spacer|pixel|placeholder|sem[-_ ]imagem|\/logo(?:[-_.\/]|$)|lh3\.googleusercontent\.com\/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc)/i;

export function isUsableNewsImage(value) {
  return /^https?:\/\//i.test(String(value || "")) &&
    !GENERIC_IMAGE_PATTERN.test(String(value || ""));
}

function upgradedUolImage(value) {
  const upgraded = /^https?:\/\/conteudo\.imguol\.com\.br\//i.test(value)
    ? value.replace(/_\d+x\d+(\.(?:jpe?g|png|webp))(?=$|\?)/i, "_615x300$1")
    : value;
  return isUsableNewsImage(upgraded) ? upgraded : "";
}

function articleImage(block, description) {
  const decodedDescription = decodeEntities(description);
  const enclosureUrl = attribute(block, ["enclosure"], "url");
  const enclosureTag = block.match(/<enclosure\b[^>]*>/i)?.[0] || "";
  const enclosureIsImage = /\btype=["']image\//i.test(enclosureTag) ||
    /\.(?:avif|gif|jpe?g|png|webp)(?:[?#]|$)/i.test(enclosureUrl);
  const htmlImage = String(decodedDescription || "").match(/<img\b[^>]*\bsrc\s*=\s*["']?([^"'\s>]+)/i);
  const value = attribute(block, ["media:content", "media:thumbnail"], "url") ||
    (enclosureIsImage && enclosureUrl) ||
    (htmlImage && decodeEntities(htmlImage[1])) ||
    "";
  const upgraded = upgradedUolImage(value);
  return isUsableNewsImage(upgraded) ? upgraded : "";
}

function charsetFrom(contentType, bytes) {
  const header = String(contentType || "").match(/charset\s*=\s*["']?([^;"'\s]+)/i)?.[1];
  if (header) return header;
  const prefix = new TextDecoder("windows-1252").decode(bytes.slice(0, 240));
  return prefix.match(/<\?xml[^>]*encoding=["']([^"']+)["']/i)?.[1] || "utf-8";
}

export function decodeFeedBytes(bytes, contentType = "") {
  const encoding = charsetFrom(contentType, bytes)
    .toLowerCase()
    .replace(/^latin-?1$/, "windows-1252")
    .replace(/^iso-8859-1$/, "windows-1252");
  try {
    return new TextDecoder(encoding).decode(bytes);
  } catch {
    return new TextDecoder("utf-8").decode(bytes);
  }
}

function htmlAttribute(tagValue, name) {
  const match = String(tagValue || "").match(
    new RegExp(`\\b${name}\\s*=\\s*(["'])(.*?)\\1`, "i"),
  );
  return match ? decodeEntities(match[2]) : "";
}

export function extractPageMetadata(html) {
  const metadata = {};
  const imageCandidates = [];
  const tags = String(html || "").match(/<meta\b[^>]*>/gi) || [];
  for (const meta of tags) {
    const key = (htmlAttribute(meta, "property") || htmlAttribute(meta, "name")).toLowerCase();
    if (!["og:title", "og:description", "og:image", "twitter:image", "twitter:image:src"].includes(key)) continue;
    const content = htmlAttribute(meta, "content");
    if (!content) continue;
    if (["og:image", "twitter:image", "twitter:image:src"].includes(key)) {
      imageCandidates.push(content);
    } else if (!metadata[key]) {
      metadata[key] = content;
    }
  }
  const links = String(html || "").match(/<link\b[^>]*>/gi) || [];
  for (const link of links) {
    const rel = htmlAttribute(link, "rel").toLowerCase();
    if (rel === "image_src" || rel === "preload" && htmlAttribute(link, "as").toLowerCase() === "image") {
      imageCandidates.push(htmlAttribute(link, "href"));
    }
  }
  const imageUrl = imageCandidates
    .map((value) => upgradedUolImage(value))
    .find((value) => isUsableNewsImage(value)) || "";
  return {
    title: plain(metadata["og:title"] || ""),
    summary: plain(metadata["og:description"] || ""),
    image_url: imageUrl,
  };
}

function isGoogleNewsFeed(source) {
  return /^https?:\/\/news\.google\.com(?:\/|$)/i.test(String(source?.url || ""));
}

function cleanGoogleNewsTitle(value) {
  return String(value || "").replace(/\s+-\s+[^–—-]{2,80}$/u, "").trim();
}

function cleanGoogleNewsSummary(value, title) {
  const summary = plain(value);
  const normalizedTitle = normalized(title);
  const normalizedSummary = normalized(summary);
  if (
    normalizedSummary === normalizedTitle ||
    normalizedSummary.startsWith(`${normalizedTitle} `) &&
      normalizedSummary.length - normalizedTitle.length <= 80
  ) {
    return null;
  }
  return summary.slice(0, 420) || null;
}

export function parseFeed(xml, source) {
  const blocks = xml.match(/<(?:item|entry)\b[\s\S]*?<\/(?:item|entry)>/gi) || [];
  const oldest = Date.now() - config.newsMaxAgeDays * 24 * 60 * 60 * 1000;
  const articles = [];
  const googleNewsFeed = isGoogleNewsFeed(source);

  for (const block of blocks) {
    const rawTitle = plain(tag(block, ["title"]));
    const title = googleNewsFeed ? cleanGoogleNewsTitle(rawTitle) : rawTitle;
    const description = tag(block, ["description", "content:encoded", "summary", "content"]);
    const summary = googleNewsFeed
      ? cleanGoogleNewsSummary(description, title)
      : plain(description).slice(0, 420) || null;
    if (!title || isLowValueNews(title, summary || "")) continue;

    const rawDate = plain(tag(block, ["pubDate", "published", "updated", "dc:date"]));
    const publishedAt = parsedNewsDate(rawDate);
    if (Number.isFinite(publishedAt) && publishedAt < oldest) continue;

    const link = plain(tag(block, ["link"])) || attribute(block, ["link"], "href");
    const guid = plain(tag(block, ["guid", "id"])) || link || title;
    const externalId = createHash("sha256")
      .update(`${source.name}|${guid}`)
      .digest("hex");

    articles.push({
      external_id: externalId,
      title,
      summary,
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

async function fetchWithRetry(
  url,
  attempts = 3,
  accept = "application/rss+xml, application/xml, text/xml, */*",
  userAgent = USER_AGENT,
) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: { "User-Agent": userAgent, Accept: accept },
        redirect: "follow",
        signal: AbortSignal.timeout(config.newsRequestTimeoutMs),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const bytes = new Uint8Array(await response.arrayBuffer());
      return decodeFeedBytes(bytes, response.headers.get("content-type") || "");
    } catch (error) {
      lastError = error;
      if (attempt < attempts) await new Promise((resolve) => setTimeout(resolve, 700 * attempt));
    }
  }
  throw lastError;
}

async function enrichArticle(article) {
  if (!article.article_url) return article;
  try {
    const html = await fetchWithRetry(
      article.article_url,
      2,
      "text/html,application/xhtml+xml",
      PAGE_USER_AGENT,
    );
    const metadata = extractPageMetadata(html);
    return {
      ...article,
      title: hasBrokenEncoding(article.title) && metadata.title ? metadata.title : article.title,
      summary: hasBrokenEncoding(article.summary) && metadata.summary ? metadata.summary : article.summary,
      image_url: upgradedUolImage(
        isUsableNewsImage(article.image_url) ? article.image_url : metadata.image_url || "",
      ) || null,
    };
  } catch {
    return article;
  }
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
  const rssArticleCount = articles.length;

  const newestAccepted = new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString();
  const existingResponse = await fetch(
    `${config.supabaseUrl}/rest/v1/news_articles?select=external_id,title,summary,source_name,category,image_url,article_url,published_at&published_at=gte.${encodeURIComponent(newestAccepted)}&limit=1000`,
    { headers: serviceHeaders(), cache: "no-store" },
  );
  if (!existingResponse.ok) {
    const details = await existingResponse.text();
    if (existingResponse.status === 404 || /news_articles/i.test(details)) {
      throw new Error("A fila de notícias ainda não foi instalada no Supabase. Aplique a migração 202610190001_news_moderation_queue.sql.");
    }
    throw new Error(`Não foi possível consultar a fila de notícias (HTTP ${existingResponse.status}).`);
  }

  const existing = new Map((await existingResponse.json()).map((item) => [item.external_id, item]));
  const recordsToSync = new Map(articles.map((article) => [article.external_id, article]));
  const googleNewsSourceNames = new Set(
    NEWS_SOURCES.filter(isGoogleNewsFeed).map((source) => source.name),
  );

  for (const article of recordsToSync.values()) {
    const current = existing.get(article.external_id);
    if (!isUsableNewsImage(article.image_url) && isUsableNewsImage(current?.image_url)) {
      article.image_url = upgradedUolImage(current.image_url);
    }
    if (!isUsableNewsImage(article.image_url)) article.image_url = null;
  }
  for (const item of existing.values()) {
    const googleNewsArticle = googleNewsSourceNames.has(item.source_name);
    const cleanedTitle = googleNewsArticle ? cleanGoogleNewsTitle(item.title) : item.title;
    const cleanedSummary = googleNewsArticle
      ? cleanGoogleNewsSummary(item.summary, cleanedTitle)
      : item.summary;
    const needsGoogleCleanup = googleNewsArticle && (
      cleanedTitle !== item.title || cleanedSummary !== item.summary
    );
    if (
      (
        !isUsableNewsImage(item.image_url) ||
        hasBrokenEncoding(item.title) ||
        hasBrokenEncoding(item.summary) ||
        needsGoogleCleanup
      ) &&
      !recordsToSync.has(item.external_id)
    ) {
      recordsToSync.set(item.external_id, {
        ...item,
        title: cleanedTitle,
        summary: cleanedSummary,
        image_url: isUsableNewsImage(item.image_url)
          ? upgradedUolImage(item.image_url)
          : null,
      });
    }
  }

  const articlesToEnrich = [...recordsToSync.values()].filter((article) =>
    !isUsableNewsImage(article.image_url) ||
    hasBrokenEncoding(article.title) ||
    hasBrokenEncoding(article.summary),
  );
  let enrichIndex = 0;
  const enrichWorkers = Array.from({ length: Math.min(8, articlesToEnrich.length) }, async () => {
    while (enrichIndex < articlesToEnrich.length) {
      const article = articlesToEnrich[enrichIndex++];
      recordsToSync.set(article.external_id, await enrichArticle(article));
    }
  });
  await Promise.all(enrichWorkers);

  const synchronizedArticles = [...recordsToSync.values()];
  const contentFields = [
    "title", "summary", "source_name", "category", "image_url", "article_url", "published_at",
  ];
  const sameContent = (left, right) => contentFields.every((field) => {
    if (field === "published_at") {
      return Date.parse(left?.[field] || "") === Date.parse(right?.[field] || "");
    }
    return String(left?.[field] ?? "") === String(right?.[field] ?? "");
  });
  const additions = synchronizedArticles.filter((article) => !existing.has(article.external_id));
  const updates = synchronizedArticles.filter((article) => {
    const current = existing.get(article.external_id);
    return current && !sameContent(current, article);
  });

  if (additions.length) {
    const insertResponse = await fetch(
      `${config.supabaseUrl}/rest/v1/news_articles?on_conflict=external_id`,
      {
        method: "POST",
        headers: serviceHeaders({
          "Content-Type": "application/json",
          Prefer: "resolution=ignore-duplicates,missing=default,return=minimal",
        }),
        body: JSON.stringify(additions),
      },
    );
    if (!insertResponse.ok) {
      throw new Error(`Não foi possível adicionar notícias à fila (HTTP ${insertResponse.status}).`);
    }
  }

  let updateIndex = 0;
  const workers = Array.from({ length: Math.min(8, updates.length) }, async () => {
    while (updateIndex < updates.length) {
      const article = updates[updateIndex++];
      const body = Object.fromEntries(contentFields.map((field) => [field, article[field]]));
      body.updated_at = new Date().toISOString();
      const updateResponse = await fetch(
        `${config.supabaseUrl}/rest/v1/news_articles?external_id=eq.${article.external_id}`,
        {
          method: "PATCH",
          headers: serviceHeaders({
            "Content-Type": "application/json",
            Prefer: "return=minimal",
          }),
          body: JSON.stringify(body),
        },
      );
      if (!updateResponse.ok) {
        throw new Error(`Não foi possível corrigir uma notícia existente (HTTP ${updateResponse.status}).`);
      }
    }
  });
  await Promise.all(workers);

  return {
    imported: rssArticleCount,
    added: additions.length,
    updated: updates.length,
    failedSources: failures.length,
  };
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
