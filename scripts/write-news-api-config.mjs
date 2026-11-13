import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

function required(name) {
  const value = String(process.env[name] || "").trim();
  if (!value) throw new Error(`${name} não configurada.`);
  return value;
}

function phpString(value) {
  return `'${value.replaceAll("\\", "\\\\").replaceAll("'", "\\'")}'`;
}

const supabaseUrl = required("SUPABASE_URL").replace(/\/$/, "");
const serviceRoleKey = required("SUPABASE_SERVICE_ROLE_KEY");
const outputDirectory = path.resolve("dist", "api");
const outputPath = path.join(outputDirectory, ".news-config.php");

await mkdir(outputDirectory, { recursive: true });
await writeFile(
  outputPath,
  `<?php\n\nreturn [\n    'supabase_url' => ${phpString(supabaseUrl)},\n    'service_role_key' => ${phpString(serviceRoleKey)},\n];\n`,
  { encoding: "utf8", mode: 0o600 },
);

console.log("Configuração privada da busca manual gerada em dist/api.");

