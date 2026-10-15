import fs from "node:fs/promises";
import path from "node:path";

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

export async function readState(stateFile) {
  try {
    const parsed = JSON.parse(await fs.readFile(stateFile, "utf8"));
    return {
      ...initialState(),
      ...parsed,
      articles: parsed && typeof parsed.articles === "object" ? parsed.articles : {},
    };
  } catch (error) {
    if (error && error.code === "ENOENT") return initialState();
    throw new Error(`Não foi possível ler o histórico da automação: ${error.message}`);
  }
}

export async function writeState(stateFile, state) {
  const next = { ...state, updatedAt: new Date().toISOString() };
  const temporaryFile = `${stateFile}.${process.pid}.tmp`;
  await fs.mkdir(path.dirname(stateFile), { recursive: true });
  await fs.writeFile(temporaryFile, `${JSON.stringify(next, null, 2)}\n`, "utf8");
  await fs.rename(temporaryFile, stateFile);
}

export async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}
