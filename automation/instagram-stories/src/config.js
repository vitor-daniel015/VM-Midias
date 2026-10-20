import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";

const moduleDirectory = path.dirname(fileURLToPath(import.meta.url));
export const automationRoot = path.resolve(moduleDirectory, "..");

dotenv.config({
  path: process.env.STORY_ENV_FILE || path.join(automationRoot, ".env"),
  quiet: true,
});

function numberFromEnv(name, fallback, minimum, maximum) {
  const parsed = Number(process.env[name]);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.min(maximum, Math.max(minimum, parsed));
}

function booleanFromEnv(name, fallback = false) {
  const value = process.env[name];
  if (value == null || value === "") return fallback;
  return /^(1|true|yes|sim)$/i.test(value.trim());
}

function clean(value) {
  return String(value || "").trim();
}

function storyPageUrl() {
  const raw = clean(process.env.STORY_PAGE_URL) ||
    "http://localhost:3000/VM/index.html?view=noticias";
  const url = new URL(raw);
  url.searchParams.set("view", "noticias");
  url.searchParams.set("screen", "instagram-stories");
  url.searchParams.set("troca", "1800");
  url.searchParams.set("export", "stories");
  return url.toString();
}

const firstRunMode = clean(process.env.STORY_FIRST_RUN_MODE || "all").toLowerCase();
if (!new Set(["latest", "recent", "all"]).has(firstRunMode)) {
  throw new Error("STORY_FIRST_RUN_MODE deve ser latest, recent ou all.");
}

export const config = {
  storyPageUrl: storyPageUrl(),
  newsMaxAgeDays: numberFromEnv("NEWS_MAX_AGE_DAYS", 7, 1, 30),
  newsItemsPerSource: numberFromEnv("NEWS_ITEMS_PER_SOURCE", 50, 1, 50),
  newsRequestTimeoutMs: numberFromEnv("NEWS_REQUEST_TIMEOUT_MS", 15000, 5000, 60000),
  checkIntervalMinutes: numberFromEnv("STORY_CHECK_INTERVAL_MINUTES", 10, 1, 1440),
  maxAgeHours: numberFromEnv("STORY_MAX_AGE_HOURS", 48, 1, 720),
  maxPerCycle: numberFromEnv("STORY_MAX_PER_CYCLE", 5, 1, 25),
  firstRunMode,
  publishEnabled: booleanFromEnv("STORY_PUBLISH_ENABLED", false),
  navigationTimeoutMs: numberFromEnv("STORY_NAVIGATION_TIMEOUT_MS", 90000, 15000, 180000),
  runtimeDirectory: path.join(automationRoot, "runtime"),
  captureDirectory: path.join(automationRoot, "runtime", "captures"),
  stateFile: path.join(automationRoot, "runtime", "state.json"),
  lockFile: path.join(automationRoot, "runtime", "automation.lock"),
  supabaseUrl: clean(process.env.SUPABASE_URL).replace(/\/$/, ""),
  supabaseServiceRoleKey: clean(process.env.SUPABASE_SERVICE_ROLE_KEY),
  storageBucket: clean(process.env.SUPABASE_STORY_BUCKET || "instagram-story-assets"),
  remoteStatePath: clean(process.env.STORY_STATE_OBJECT_PATH || "automation/state.json"),
  signedUrlSeconds: numberFromEnv("STORY_SIGNED_URL_SECONDS", 3600, 600, 86400),
  metaApiVersion: clean(process.env.META_GRAPH_API_VERSION),
  instagramAccountId: clean(process.env.META_INSTAGRAM_ACCOUNT_ID),
  metaExpectedUsername: clean(process.env.META_EXPECTED_USERNAME || "radiobraba")
    .replace(/^@/, "")
    .toLowerCase(),
  metaAccessToken: clean(process.env.META_ACCESS_TOKEN),
};

export function validateMetaDiagnosticConfig() {
  const missing = [];
  if (!config.metaApiVersion) missing.push("META_GRAPH_API_VERSION");
  if (!config.instagramAccountId) missing.push("META_INSTAGRAM_ACCOUNT_ID");
  if (!config.metaAccessToken) missing.push("META_ACCESS_TOKEN");
  if (missing.length) {
    throw new Error(`Configuração do diagnóstico da Meta incompleta: ${missing.join(", ")}.`);
  }
  if (!/^v\d+\.\d+$/.test(config.metaApiVersion)) {
    throw new Error("META_GRAPH_API_VERSION deve seguir o formato vXX.X informado no painel da Meta.");
  }
}

export function validatePublishingConfig() {
  if (!config.publishEnabled) return;
  const missing = [];
  if (!config.supabaseUrl) missing.push("SUPABASE_URL");
  if (!config.supabaseServiceRoleKey) missing.push("SUPABASE_SERVICE_ROLE_KEY");
  if (!config.metaApiVersion) missing.push("META_GRAPH_API_VERSION");
  if (!config.instagramAccountId) missing.push("META_INSTAGRAM_ACCOUNT_ID");
  if (!config.metaAccessToken) missing.push("META_ACCESS_TOKEN");
  if (missing.length) {
    throw new Error(`Configuração de publicação incompleta: ${missing.join(", ")}.`);
  }
  if (/publishable|anon/i.test(config.supabaseServiceRoleKey)) {
    throw new Error("Use a service_role somente no processo local; a chave publicável não pode enviar os Stories.");
  }
  validateMetaDiagnosticConfig();
}
