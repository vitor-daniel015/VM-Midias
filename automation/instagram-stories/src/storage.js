import fs from "node:fs/promises";

function encodedPath(value) {
  return String(value).split("/").map(encodeURIComponent).join("/");
}

async function errorMessage(response) {
  const body = await response.text();
  try {
    const parsed = JSON.parse(body);
    return parsed.message || parsed.error || body;
  } catch {
    return body || `${response.status} ${response.statusText}`;
  }
}

function headers(config, contentType) {
  return {
    apikey: config.supabaseServiceRoleKey,
    Authorization: `Bearer ${config.supabaseServiceRoleKey}`,
    ...(contentType ? { "Content-Type": contentType } : {}),
  };
}

export async function ensureStorageBucket(config) {
  const bucketConfiguration = {
    public: false,
    file_size_limit: 10485760,
    allowed_mime_types: ["image/jpeg", "application/json"],
  };
  const existing = await fetch(
    `${config.supabaseUrl}/storage/v1/bucket/${encodeURIComponent(config.storageBucket)}`,
    { headers: headers(config) },
  );
  if (existing.ok) {
    const update = await fetch(
      `${config.supabaseUrl}/storage/v1/bucket/${encodeURIComponent(config.storageBucket)}`,
      {
        method: "PUT",
        headers: headers(config, "application/json"),
        body: JSON.stringify(bucketConfiguration),
      },
    );
    if (!update.ok) {
      throw new Error(`Não foi possível atualizar o bucket: ${await errorMessage(update)}`);
    }
    return;
  }
  if (existing.status !== 404) {
    throw new Error(`Não foi possível verificar o bucket: ${await errorMessage(existing)}`);
  }
  const response = await fetch(`${config.supabaseUrl}/storage/v1/bucket`, {
    method: "POST",
    headers: headers(config, "application/json"),
    body: JSON.stringify({
      id: config.storageBucket,
      name: config.storageBucket,
      ...bucketConfiguration,
    }),
  });
  if (!response.ok && response.status !== 409) {
    throw new Error(`Não foi possível preparar o bucket: ${await errorMessage(response)}`);
  }
}

export async function downloadAutomationState(config) {
  const response = await fetch(
    `${config.supabaseUrl}/storage/v1/object/${config.storageBucket}/${encodedPath(config.remoteStatePath)}`,
    { headers: headers(config) },
  );
  if (!response.ok) {
    const message = await errorMessage(response);
    if (response.status === 404 || /not found|não encontrado/i.test(message)) return null;
    throw new Error(`Não foi possível baixar o histórico remoto: ${message}`);
  }
  try {
    return await response.json();
  } catch {
    throw new Error("O histórico remoto da automação está inválido.");
  }
}

export async function uploadAutomationState(config, state) {
  const response = await fetch(
    `${config.supabaseUrl}/storage/v1/object/${config.storageBucket}/${encodedPath(config.remoteStatePath)}`,
    {
      method: "POST",
      headers: {
        ...headers(config, "application/json"),
        "cache-control": "no-cache",
        "x-upsert": "true",
      },
      body: JSON.stringify(state),
    },
  );
  if (!response.ok) {
    throw new Error(`Não foi possível salvar o histórico remoto: ${await errorMessage(response)}`);
  }
}

export async function uploadStory(config, filePath, objectPath) {
  const file = await fs.readFile(filePath);
  const response = await fetch(
    `${config.supabaseUrl}/storage/v1/object/${config.storageBucket}/${encodedPath(objectPath)}`,
    {
      method: "POST",
      headers: {
        ...headers(config, "image/jpeg"),
        "cache-control": "3600",
        "x-upsert": "true",
      },
      body: file,
    },
  );
  if (!response.ok) {
    throw new Error(`Falha ao enviar a imagem: ${await errorMessage(response)}`);
  }

  const signResponse = await fetch(
    `${config.supabaseUrl}/storage/v1/object/sign/${config.storageBucket}/${encodedPath(objectPath)}`,
    {
      method: "POST",
      headers: headers(config, "application/json"),
      body: JSON.stringify({ expiresIn: config.signedUrlSeconds }),
    },
  );
  if (!signResponse.ok) {
    throw new Error(`Falha ao criar a URL temporária: ${await errorMessage(signResponse)}`);
  }
  const signed = await signResponse.json();
  const relativeUrl = signed.signedURL || signed.signedUrl;
  if (!relativeUrl) throw new Error("O Supabase não devolveu a URL assinada da imagem.");
  return relativeUrl.startsWith("http")
    ? relativeUrl
    : new URL(relativeUrl, `${config.supabaseUrl}/`).toString();
}
