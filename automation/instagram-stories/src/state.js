import fs from "node:fs/promises";
import path from "node:path";
import { downloadAutomationState, uploadAutomationState } from "./storage.js";

const initialState = () => ({
  version: 1,
  initialized: false,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  articles: {},
});

export async function ensureRuntime(config) {
  await fs.mkdir(config.captureDirectory, { recursive: true });
}

export async function acquireLock(lockFile) {
  await fs.mkdir(path.dirname(lockFile), { recursive: true });
  try {
    const handle = await fs.open(lockFile, "wx");
    await handle.writeFile(JSON.stringify({ pid: process.pid, startedAt: new Date().toISOString() }));
    await handle.close();
  } catch (error) {
    if (error && error.code === "EEXIST") {
      throw new Error("A automação já está em execução.");
    }
    throw error;
  }
}

export async function releaseLock(lockFile) {
  await fs.rm(lockFile, { force: true });
}

function normalizeState(parsed) {
  return {
    ...initialState(),
    ...parsed,
    articles: parsed && typeof parsed.articles === "object" ? parsed.articles : {},
  };
}

export async function readState(config) {
  if (config.publishEnabled) {
    const remote = await downloadAutomationState(config);
    if (remote) return normalizeState(remote);
  }
  try {
    const parsed = JSON.parse(await fs.readFile(config.stateFile, "utf8"));
    return normalizeState(parsed);
  } catch (error) {
    if (error && error.code === "ENOENT") return initialState();
    throw new Error(`Não foi possível ler o histórico da automação: ${error.message}`);
  }
}

export async function writeState(config, state) {
  const next = { ...state, updatedAt: new Date().toISOString() };
  const temporaryFile = `${config.stateFile}.${process.pid}.tmp`;
  await fs.mkdir(path.dirname(config.stateFile), { recursive: true });
  await fs.writeFile(temporaryFile, `${JSON.stringify(next, null, 2)}\n`, "utf8");
  await fs.rename(temporaryFile, config.stateFile);
  if (config.publishEnabled) await uploadAutomationState(config, next);
}

export async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}
