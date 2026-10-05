function requireEnvironmentValue(value: string | undefined, variableName: string): string {
  const normalized = value?.trim();
  if (!normalized) {
    throw new Error(
      `Configuração do Supabase ausente. Defina ${variableName} no arquivo .env.`,
    );
  }
  return normalized;
}

const supabaseUrl = requireEnvironmentValue(
  import.meta.env.VITE_SUPABASE_URL,
  "VITE_SUPABASE_URL",
);
const supabasePublishableKey = requireEnvironmentValue(
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
  "VITE_SUPABASE_PUBLISHABLE_KEY",
);

const VIDEO_ASSETS_BUCKET = "video-request-assets";
const BUSINESS_ASSETS_BUCKET = "business-assets";
const ADMIN_SESSION_KEY = "vm-admin-supabase-session";

export type UploadedAsset = {
  path: string;
  name: string;
  size: number;
  mime_type: string;
};

export type VideoRequestPayload = {
  id: string;
  protocol: string;
  business_id: string;
  campaign_objective: string;
  objective_other: string | null;
  video_idea: string;
  uploaded_assets: UploadedAsset[];
  consent: true;
  video_format: "vertical_9_16";
  duration_seconds: 20;
};

export type BusinessPayload = {
  id: string;
  name: string;
  whatsapp: string | null;
  address: string | null;
  segment: string;
  description: string | null;
  assets: UploadedAsset[];
  consent: true;
};

export type BusinessRecord = BusinessPayload & {
  created_at: string;
  updated_at: string;
};

export type VideoRequestStatus =
  | "novo"
  | "em_analise"
  | "visual_key_em_criacao"
  | "visual_key_em_aprovacao"
  | "video_em_criacao"
  | "aguardando_cliente"
  | "em_revisao"
  | "aprovado"
  | "entregue"
  | "cancelado";

export type VideoRequestRecord = Omit<VideoRequestPayload, "business_id"> & {
  business_id: string | null;
  status: VideoRequestStatus;
  internal_notes: string | null;
  created_at: string;
  updated_at: string;
};

export type AdminSession = {
  access_token: string;
  refresh_token: string;
  expires_at: number;
  user: {
    id: string;
    email?: string;
  };
};

export const videoAssetsBucket = VIDEO_ASSETS_BUCKET;
export const businessAssetsBucket = BUSINESS_ASSETS_BUCKET;

function safeFileName(fileName: string) {
  const lastDot = fileName.lastIndexOf(".");
  const extension = lastDot >= 0 ? fileName.slice(lastDot).toLowerCase() : "";
  const base = (lastDot >= 0 ? fileName.slice(0, lastDot) : fileName)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 70);

  return `${base || "arquivo"}${extension.replace(/[^a-z0-9.]/g, "")}`;
}

function encodeStoragePath(path: string) {
  return path.split("/").map(encodeURIComponent).join("/");
}

export async function uploadVideoRequestFiles(
  requestId: string,
  files: File[],
  businessId: string,
) {
  const folder = `solicitacoes/${businessId}`;

  const uploads = files.map(async (file, index): Promise<UploadedAsset> => {
    const path = `${folder}/${requestId}/${String(index + 1).padStart(2, "0")}-${safeFileName(file.name)}`;
    const response = await fetch(
      `${supabaseUrl}/storage/v1/object/${VIDEO_ASSETS_BUCKET}/${encodeStoragePath(path)}`,
      {
        method: "POST",
        headers: {
          apikey: supabasePublishableKey,
          Authorization: `Bearer ${supabasePublishableKey}`,
          "Content-Type": file.type || "application/octet-stream",
          "cache-control": "3600",
          "x-upsert": "false",
        },
        body: file,
      },
    );

    if (!response.ok) {
      const message = await response.text();
      console.error("Falha ao enviar material do vídeo:", message);
      throw new Error(
        `Não foi possível enviar o arquivo “${file.name}”. Verifique o formato e tente novamente.`,
      );
    }

    return {
      path,
      name: file.name,
      size: file.size,
      mime_type: file.type || "application/octet-stream",
    };
  });

  return Promise.all(uploads);
}

export async function uploadBusinessFiles(businessId: string, files: File[], startIndex = 0) {
  const uploads = files.map(async (file, index): Promise<UploadedAsset> => {
    const path = `negocios/${businessId}/${String(startIndex + index + 1).padStart(2, "0")}-${crypto.randomUUID().slice(0, 8)}-${safeFileName(file.name)}`;
    const response = await fetch(
      `${supabaseUrl}/storage/v1/object/${BUSINESS_ASSETS_BUCKET}/${encodeStoragePath(path)}`,
      {
        method: "POST",
        headers: {
          apikey: supabasePublishableKey,
          Authorization: `Bearer ${supabasePublishableKey}`,
          "Content-Type": file.type || "application/octet-stream",
          "cache-control": "3600",
          "x-upsert": "false",
        },
        body: file,
      },
    );
    if (!response.ok) throw new Error(`Não foi possível enviar “${file.name}”.`);
    return { path, name: file.name, size: file.size, mime_type: file.type || "application/octet-stream" };
  });
  return Promise.all(uploads);
}

export function publicBusinessAssetUrl(path: string) {
  return `${supabaseUrl}/storage/v1/object/public/${BUSINESS_ASSETS_BUCKET}/${encodeStoragePath(path)}`;
}

export async function createBusiness(payload: BusinessPayload) {
  const response = await fetch(`${supabaseUrl}/rest/v1/rpc/create_business_secure`, {
    method: "POST",
    headers: {
      apikey: supabasePublishableKey,
      Authorization: `Bearer ${supabasePublishableKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      p_id: payload.id,
      p_name: payload.name,
      p_whatsapp: payload.whatsapp,
      p_address: payload.address,
      p_segment: payload.segment,
      p_description: payload.description,
      p_assets: payload.assets,
      p_consent: payload.consent,
    }),
  });
  if (!response.ok) throw new Error("Não foi possível cadastrar o negócio agora.");
}

export async function listBusinessesPublic() {
  const response = await fetch(`${supabaseUrl}/rest/v1/rpc/list_businesses_public`, {
    method: "POST",
    headers: { apikey: supabasePublishableKey, Authorization: `Bearer ${supabasePublishableKey}`, "Content-Type": "application/json" },
    body: "{}",
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Não foi possível carregar os negócios. Aplique a nova migração no Supabase.");
  return (await response.json()) as BusinessRecord[];
}

export async function updateBusiness(
  id: string,
  payload: Partial<Omit<BusinessPayload, "id" | "assets" | "consent">>,
  newAssets: UploadedAsset[],
) {
  const response = await fetch(`${supabaseUrl}/rest/v1/rpc/update_business_secure`, {
    method: "POST",
    headers: {
      apikey: supabasePublishableKey,
      Authorization: `Bearer ${supabasePublishableKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      p_business_id: id,
      p_name: payload.name,
      p_whatsapp: payload.whatsapp,
      p_address: payload.address,
      p_segment: payload.segment,
      p_description: payload.description,
      p_new_assets: newAssets,
    }),
  });
  if (!response.ok) {
    const details = await response.text();
    if (/LIMITE_IMAGENS/i.test(details)) throw new Error("O negócio pode possuir no máximo 10 imagens.");
    throw new Error("Não foi possível atualizar as informações do negócio.");
  }
}

export async function createVideoRequest(payload: VideoRequestPayload) {
  const response = await fetch(`${supabaseUrl}/rest/v1/rpc/create_video_request_secure`, {
    method: "POST",
    headers: {
      apikey: supabasePublishableKey,
      Authorization: `Bearer ${supabasePublishableKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      p_id: payload.id,
      p_protocol: payload.protocol,
      p_business_id: payload.business_id,
      p_campaign_objective: payload.campaign_objective,
      p_objective_other: payload.objective_other,
      p_video_idea: payload.video_idea,
      p_uploaded_assets: payload.uploaded_assets,
      p_consent: payload.consent,
    }),
  });

  if (!response.ok) {
    const message = await response.text();
    console.error("Falha ao registrar solicitação de vídeo:", message);
    throw new Error("Não foi possível registrar sua solicitação agora.");
  }
}

export function getStoredAdminSession(): AdminSession | null {
  try {
    const value = localStorage.getItem(ADMIN_SESSION_KEY);
    if (!value) return null;
    const session = JSON.parse(value) as AdminSession;
    if (!session.access_token || !session.expires_at) return null;
    return session;
  } catch {
    return null;
  }
}

export function clearAdminSession() {
  localStorage.removeItem(ADMIN_SESSION_KEY);
}

export async function signInAdmin(email: string, password: string) {
  const response = await fetch(
    `${supabaseUrl}/auth/v1/token?grant_type=password`,
    {
      method: "POST",
      headers: {
        apikey: supabasePublishableKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    },
  );

  if (!response.ok) {
    let reason = "";
    try {
      const details = await response.json();
      reason = String(details?.msg || details?.message || details?.error_description || "");
    } catch {
      // Mantém a mensagem amigável caso o serviço não retorne JSON.
    }
    if (/email not confirmed/i.test(reason)) {
      throw new Error("Este usuário ainda não confirmou o e-mail no Supabase.");
    }
    throw new Error("E-mail ou senha inválidos.");
  }

  const result = await response.json();
  const session: AdminSession = {
    access_token: result.access_token,
    refresh_token: result.refresh_token,
    expires_at: Math.floor(Date.now() / 1000) + Number(result.expires_in || 3600),
    user: result.user,
  };
  localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(session));
  return session;
}

export async function refreshAdminSession(session: AdminSession) {
  const response = await fetch(
    `${supabaseUrl}/auth/v1/token?grant_type=refresh_token`,
    {
      method: "POST",
      headers: {
        apikey: supabasePublishableKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh_token: session.refresh_token }),
    },
  );

  if (!response.ok) {
    clearAdminSession();
    throw new Error("Sua sessão expirou. Entre novamente.");
  }

  const result = await response.json();
  const refreshed: AdminSession = {
    access_token: result.access_token,
    refresh_token: result.refresh_token,
    expires_at: Math.floor(Date.now() / 1000) + Number(result.expires_in || 3600),
    user: result.user,
  };
  localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(refreshed));
  return refreshed;
}

export async function ensureAdminSession(session: AdminSession) {
  if (session.expires_at > Math.floor(Date.now() / 1000) + 60) return session;
  return refreshAdminSession(session);
}

function authenticatedHeaders(accessToken: string) {
  return {
    apikey: supabasePublishableKey,
    Authorization: `Bearer ${accessToken}`,
  };
}

export async function listVideoRequests(accessToken: string) {
  const response = await fetch(
    `${supabaseUrl}/rest/v1/video_requests?select=*&order=created_at.desc`,
    {
      headers: authenticatedHeaders(accessToken),
      cache: "no-store",
    },
  );

  if (!response.ok) {
    if (response.status === 401) throw new Error("Sua sessão expirou. Entre novamente.");
    throw new Error("Não foi possível carregar as solicitações. Confira as permissões do Supabase.");
  }

  return (await response.json()) as VideoRequestRecord[];
}

export async function listBusinessesAdmin(accessToken: string) {
  const response = await fetch(`${supabaseUrl}/rest/v1/businesses?select=id,name,whatsapp,address,segment,description,assets,consent,created_at,updated_at&order=name.asc`, {
    headers: authenticatedHeaders(accessToken),
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Não foi possível carregar os negócios no painel.");
  return (await response.json()) as BusinessRecord[];
}

export async function createSignedAssetUrl(
  accessToken: string,
  assetPath: string,
  expiresIn = 3600,
) {
  const response = await fetch(
    `${supabaseUrl}/storage/v1/object/sign/${VIDEO_ASSETS_BUCKET}/${encodeStoragePath(assetPath)}`,
    {
      method: "POST",
      headers: {
        ...authenticatedHeaders(accessToken),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ expiresIn }),
    },
  );

  if (!response.ok) throw new Error("Não foi possível abrir este arquivo.");
  const result = await response.json();
  const signedPath = result.signedURL || result.signedUrl;
  if (!signedPath) throw new Error("O Supabase não retornou o link do arquivo.");
  return signedPath.startsWith("http") ? signedPath : `${supabaseUrl}/storage/v1${signedPath}`;
}
