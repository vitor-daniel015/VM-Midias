const DEFAULT_SUPABASE_URL = "https://dtmoboiwgqaphlthoexe.supabase.co";
const DEFAULT_SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_QsbWeq7SpeQo-5etkC4noA_67efJh8M";

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL?.trim() || DEFAULT_SUPABASE_URL;
const supabasePublishableKey =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY?.trim() ||
  DEFAULT_SUPABASE_PUBLISHABLE_KEY;

const VIDEO_ASSETS_BUCKET = "video-request-assets";

export type VideoRequestKind = "new_client" | "existing_client";

export type UploadedAsset = {
  path: string;
  name: string;
  size: number;
  mime_type: string;
};

export type VideoRequestPayload = {
  id: string;
  protocol: string;
  request_kind: VideoRequestKind;
  company_name: string;
  whatsapp: string | null;
  business_segment: string | null;
  business_description: string | null;
  product_service: string | null;
  target_audience: string | null;
  campaign_objective: string | null;
  offer_details: string | null;
  main_message: string | null;
  required_texts: string | null;
  call_to_action: string | null;
  brand_colors: string | null;
  avoid_colors: string | null;
  brand_personality: string | null;
  visual_references: string | null;
  video_idea: string;
  uploaded_assets: UploadedAsset[];
  consent: true;
  source_page: "solicitar-video";
  video_format: "vertical_9_16";
  duration_seconds: 20;
};

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
  requestKind: VideoRequestKind,
  files: File[],
) {
  const folder =
    requestKind === "new_client" ? "novos-clientes" : "clientes-atuais";

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

export async function createVideoRequest(payload: VideoRequestPayload) {
  const response = await fetch(`${supabaseUrl}/rest/v1/video_requests`, {
    method: "POST",
    headers: {
      apikey: supabasePublishableKey,
      Authorization: `Bearer ${supabasePublishableKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const message = await response.text();
    console.error("Falha ao registrar solicitação de vídeo:", message);
    throw new Error("Não foi possível registrar sua solicitação agora.");
  }
}
