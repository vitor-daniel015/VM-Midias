const DEFAULT_SUPABASE_URL = "https://dtmoboiwgqaphlthoexe.supabase.co";
const DEFAULT_SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_QsbWeq7SpeQo-5etkC4noA_67efJh8M";

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL?.trim() || DEFAULT_SUPABASE_URL;
const supabasePublishableKey =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY?.trim() ||
  DEFAULT_SUPABASE_PUBLISHABLE_KEY;

export type ArtRequestPayload = {
  id: string;
  protocol: string;
  company_name: string;
  requester_name: string;
  whatsapp: string;
  email: string | null;
  request_type: "arte_estatica" | "video" | "arte_e_video";
  campaign_objective: string;
  main_message: string;
  details: string;
  call_to_action: string | null;
  display_information: string | null;
  visual_style: string | null;
  desired_deadline: string | null;
  materials_url: string | null;
  consent: true;
  source_page: "solicitar-arte";
};

export async function createArtRequest(payload: ArtRequestPayload) {
  const response = await fetch(`${supabaseUrl}/rest/v1/art_requests`, {
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
    console.error("Falha ao registrar solicitação de arte:", message);
    throw new Error("Não foi possível enviar sua solicitação agora.");
  }
}
