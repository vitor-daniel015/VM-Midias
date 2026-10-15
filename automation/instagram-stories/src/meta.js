const wait = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

async function graphRequest(config, path, { method = "GET", fields, body } = {}) {
  const url = new URL(
    `${config.metaGraphBaseUrl || "https://graph.facebook.com"}/${config.metaApiVersion}/${path}`,
  );
  if (fields) url.searchParams.set("fields", fields);
  if (method === "GET") url.searchParams.set("access_token", config.metaAccessToken);

  const response = await fetch(url, {
    method,
    headers: method === "POST" ? { "Content-Type": "application/x-www-form-urlencoded" } : undefined,
    body: method === "POST"
      ? new URLSearchParams({ ...body, access_token: config.metaAccessToken })
      : undefined,
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || payload.error) {
    const message = payload.error && payload.error.message
      ? payload.error.message
      : `${response.status} ${response.statusText}`;
    throw new Error(`A API da Meta recusou a operação: ${message}`);
  }
  return payload;
}

export async function inspectInstagramAccount(config) {
  return graphRequest(config, config.instagramAccountId, {
    fields: "id,username,account_type",
  });
}

export async function publishInstagramStory(config, imageUrl) {
  const container = await graphRequest(config, `${config.instagramAccountId}/media`, {
    method: "POST",
    body: {
      media_type: "STORIES",
      image_url: imageUrl,
    },
  });
  if (!container.id) throw new Error("A Meta não devolveu o identificador do Story.");

  let status = "IN_PROGRESS";
  for (let attempt = 0; attempt < 30; attempt += 1) {
    const result = await graphRequest(config, container.id, {
      fields: "status_code,status",
    });
    status = result.status_code || status;
    if (status === "FINISHED") break;
    if (status === "ERROR" || status === "EXPIRED") {
      throw new Error(`A Meta não conseguiu processar a imagem (${status}).`);
    }
    await wait(2000);
  }
  if (status !== "FINISHED") {
    throw new Error("A Meta demorou demais para processar a imagem do Story.");
  }

  const published = await graphRequest(config, `${config.instagramAccountId}/media_publish`, {
    method: "POST",
    body: { creation_id: container.id },
  });
  if (!published.id) throw new Error("A Meta não confirmou a publicação do Story.");
  return { containerId: container.id, mediaId: published.id };
}
