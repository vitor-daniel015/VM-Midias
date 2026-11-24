import type { AdminSession } from "./supabase";
import type { CampaignAsset, CampaignScreen, VeraoFormData } from "../data/veraoPremiado";
import { TERMS_VERSION, digits } from "../data/veraoPremiado";

function env(name: "VITE_SUPABASE_URL" | "VITE_SUPABASE_PUBLISHABLE_KEY") {
  const value = import.meta.env[name]?.trim();
  if (!value) throw new Error(`Configuração ausente: ${name}.`);
  return value;
}

const url = env("VITE_SUPABASE_URL");
const key = env("VITE_SUPABASE_PUBLISHABLE_KEY");
const bucket = "verao-premiado-assets";

function headers(token = key) {
  return { apikey: key, Authorization: `Bearer ${token}` };
}

function safeName(name: string) {
  const dot = name.lastIndexOf(".");
  const extension = dot >= 0 ? name.slice(dot).toLowerCase().replace(/[^a-z0-9.]/g, "") : "";
  const base = (dot >= 0 ? name.slice(0, dot) : name).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 55);
  return `${base || "arquivo"}${extension}`;
}

function encodePath(path: string) {
  return path.split("/").map(encodeURIComponent).join("/");
}

export async function listCampaignScreens() {
  const response = await fetch(`${url}/rest/v1/rpc/list_verao_premiado_screens`, {
    method: "POST", headers: { ...headers(), "Content-Type": "application/json" }, body: "{}", cache: "no-store",
  });
  if (!response.ok) throw new Error("As telas da campanha ainda não foram configuradas.");
  return (await response.json()) as CampaignScreen[];
}

export async function uploadCampaignFiles(submissionId: string, files: File[], kind: CampaignAsset["kind"]) {
  const allowed = new Set(["image/png", "image/jpeg", "application/pdf", "image/svg+xml"]);
  return Promise.all(files.map(async (file, index): Promise<CampaignAsset> => {
    if (!allowed.has(file.type) || file.size > 20 * 1024 * 1024) throw new Error(`O arquivo “${file.name}” não atende aos formatos ou ao limite de 20 MB.`);
    const path = `inscricoes/${submissionId}/${kind}/${crypto.randomUUID().slice(0, 8)}-${index + 1}-${safeName(file.name)}`;
    const response = await fetch(`${url}/storage/v1/object/${bucket}/${encodePath(path)}`, {
      method: "POST", headers: { ...headers(), "Content-Type": file.type, "cache-control": "3600", "x-upsert": "false" }, body: file,
    });
    if (!response.ok) throw new Error(`Não foi possível enviar “${file.name}”.`);
    return { path, name: file.name, size: file.size, mime_type: file.type, kind };
  }));
}

export async function createCampaignSubmission(args: {
  id: string; form: VeraoFormData; assets: CampaignAsset[]; declarations: boolean[];
  startedAt: string; honeypot: string;
}) {
  const commercialSnapshot = {
    campaign: "Verão Premiado 2027", period: "02/01/2027 a 27/02/2027",
    prize: "Moto elétrica Smart Wheel (prevista)", cash_price_brl: 250,
    installment_price_brl: 300, installments: "2x de R$ 150,00",
    collective_prize_contribution_brl: 100,
    legal_notice: "Campanha sujeita à autorização dos órgãos competentes e às condições do regulamento oficial.",
  };
  const payload = { ...args.form, cnpj: digits(args.form.cnpj) || null, cpf: digits(args.form.cpf), businessPhone: digits(args.form.businessPhone), responsiblePhone: digits(args.form.responsiblePhone), assets: args.assets, termsVersion: TERMS_VERSION, declarations: args.declarations, commercialSnapshot };
  const response = await fetch(`${url}/rest/v1/rpc/create_verao_premiado_submission`, {
    method: "POST", headers: { ...headers(), "Content-Type": "application/json" },
    body: JSON.stringify({ p_id: args.id, p_payload: payload, p_started_at: args.startedAt, p_honeypot: args.honeypot }),
  });
  if (!response.ok) {
    const detail = await response.text();
    if (/INSCRICAO_DUPLICADA/i.test(detail)) throw new Error("Já existe uma inscrição com este CPF ou CNPJ. Fale com a VM Mídias para revisar o cadastro.");
    if (/TELA_INDISPONIVEL/i.test(detail)) throw new Error("A tela escolhida não está mais disponível. Volte e selecione outra opção.");
    throw new Error("Não foi possível concluir a inscrição. Confira os dados e tente novamente.");
  }
  return (await response.json()) as { id: string; protocol: string; accepted_at: string; status: string };
}

export type CampaignSubmissionAdmin = {
  id: string; protocol: string; business_name: string; responsible_name: string;
  responsible_phone: string; responsible_email: string | null; payment_option: string;
  registration_status: string; financial_status: string; spot_status: string;
  video_status: string; kit_status: string; contribution_status: string;
  assets: CampaignAsset[]; created_at: string; screen_id: string;
  cnpj: string | null; segment: string; business_phone: string; business_instagram: string | null;
  business_email: string | null; cep: string; street: string; address_number: string;
  complement: string | null; neighborhood: string; city: string; state: string;
  cpf: string; responsible_role: string | null; radio_briefing: string; motion_briefing: string;
  contribution_type: string; contribution_description: string; contribution_conditions: string | null;
  contribution_notes: string | null; terms_version: string; declarations: boolean[];
  commercial_snapshot: Record<string, unknown>; accepted_at: string; payment_notes: string | null;
  internal_notes: string | null; updated_at: string;
};

export async function listCampaignSubmissions(session: AdminSession) {
  const response = await fetch(`${url}/rest/v1/verao_premiado_submissions?select=*&order=created_at.desc`, { headers: headers(session.access_token), cache: "no-store" });
  if (!response.ok) throw new Error("Não foi possível carregar as inscrições. Aplique a migração da campanha.");
  return (await response.json()) as CampaignSubmissionAdmin[];
}

export async function updateCampaignSubmission(session: AdminSession, id: string, updates: Record<string, string | null>) {
  const response = await fetch(`${url}/rest/v1/verao_premiado_submissions?id=eq.${id}`, {
    method: "PATCH", headers: { ...headers(session.access_token), "Content-Type": "application/json", Prefer: "return=minimal" }, body: JSON.stringify(updates),
  });
  if (!response.ok) throw new Error("Não foi possível atualizar a inscrição.");
}

export async function listScreensAdmin(session: AdminSession) {
  const response = await fetch(`${url}/rest/v1/verao_premiado_screens?select=*&order=name.asc`, { headers: headers(session.access_token), cache: "no-store" });
  if (!response.ok) throw new Error("Não foi possível carregar as telas.");
  return (await response.json()) as (CampaignScreen & { is_active: boolean })[];
}

export async function saveScreenAdmin(session: AdminSession, screen: { id?: string; name: string; address: string; description?: string; photo_url?: string; capacity?: number | null; is_active?: boolean }) {
  const editing = Boolean(screen.id);
  const response = await fetch(`${url}/rest/v1/verao_premiado_screens${editing ? `?id=eq.${screen.id}` : ""}`, {
    method: editing ? "PATCH" : "POST", headers: { ...headers(session.access_token), "Content-Type": "application/json", Prefer: "return=minimal" }, body: JSON.stringify(screen),
  });
  if (!response.ok) throw new Error("Não foi possível salvar a tela.");
}

export async function signedCampaignAssetUrl(session: AdminSession, path: string) {
  const response = await fetch(`${url}/storage/v1/object/sign/${bucket}/${encodePath(path)}`, {
    method: "POST", headers: { ...headers(session.access_token), "Content-Type": "application/json" }, body: JSON.stringify({ expiresIn: 3600 }),
  });
  if (!response.ok) throw new Error("Não foi possível abrir o arquivo.");
  const data = await response.json();
  const pathOrUrl = data.signedURL || data.signedUrl;
  return pathOrUrl.startsWith("http") ? pathOrUrl : `${url}/storage/v1${pathOrUrl}`;
}
