import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Check, Download, File, LayoutGrid, ListChecks, LoaderCircle, LogOut, Plus, RefreshCw, Search, Settings2, Store, Table2, UserPlus, X } from "lucide-react";
import { VMLogo } from "../components/VMLogo";
import { VeraoPremiadoTable } from "../components/admin/VeraoPremiadoTable";
import { AdminLogin } from "./AdminRequestsPage";
import { clearAdminSession, ensureAdminSession, getStoredAdminSession, signInAdmin, type AdminSession } from "../lib/supabase";
import {
  listCampaignSubmissions, listScreensAdmin, saveScreenAdmin, signedCampaignAssetUrl,
  updateCampaignSubmission, type CampaignSubmissionAdmin,
} from "../lib/veraoPremiadoApi";
import type { CampaignScreen } from "../data/veraoPremiado";

const statusOptions = {
  registration_status: ["recebida", "em_analise", "aprovada", "cancelada"],
  financial_status: ["aguardando_pagamento", "parcialmente_pago", "pago"],
  spot_status: ["aguardando_producao", "em_producao", "aguardando_aprovacao", "finalizado"],
  video_status: ["aguardando_producao", "em_producao", "aguardando_aprovacao", "finalizado"],
  kit_status: ["aguardando_producao", "em_producao", "disponivel", "entregue"],
  contribution_status: ["pendente", "definida", "recebida"],
} as const;
const statusLabels: Record<string, string> = {
  recebida: "Recebida", em_analise: "Em análise", aprovada: "Aprovada", cancelada: "Cancelada",
  aguardando_pagamento: "Aguardando pagamento", parcialmente_pago: "Parcialmente pago", pago: "Pago",
  aguardando_producao: "Aguardando produção", em_producao: "Em produção", aguardando_aprovacao: "Aguardando aprovação",
  finalizado: "Finalizado", disponivel: "Disponível", entregue: "Entregue", pendente: "Pendente", definida: "Definida",
};

export function AdminVeraoPremiadoPage() {
  const [session, setSession] = useState<AdminSession | null>(() => getStoredAdminSession());
  const [rows, setRows] = useState<CampaignSubmissionAdmin[]>([]);
  const [screens, setScreens] = useState<(CampaignScreen & { is_active: boolean })[]>([]);
  const [selectedId, setSelectedId] = useState("");
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<"registrations" | "screens">("registrations");
  const [view, setView] = useState<"cards" | "table">("cards");
  const [loading, setLoading] = useState(Boolean(session));
  const [loginLoading, setLoginLoading] = useState(false);
  const [error, setError] = useState("");

  const load = async (current: AdminSession) => {
    setLoading(true); setError("");
    try {
      const valid = await ensureAdminSession(current); setSession(valid);
      const [nextRows, nextScreens] = await Promise.all([listCampaignSubmissions(valid), listScreensAdmin(valid)]);
      setRows(nextRows); setScreens(nextScreens);
    } catch (reason) { setError(reason instanceof Error ? reason.message : "Não foi possível carregar o painel."); }
    finally { setLoading(false); }
  };

  useEffect(() => { document.title = "Verão Premiado 2027 | Administração"; if (session) void load(session); }, []);
  const selected = rows.find((row) => row.id === selectedId);
  const filtered = useMemo(() => {
    const term = query.trim().toLocaleLowerCase("pt-BR");
    if (!term) return rows;
    return rows.filter((row) => `${row.business_name} ${row.responsible_name} ${row.protocol}`.toLocaleLowerCase("pt-BR").includes(term));
  }, [query, rows]);
  const overdueCount = useMemo(() => {
    const today = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Sao_Paulo", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
    return rows.filter((row) => row.payment_option === "parcelado" && ((row.payment_due_date_1 && row.payment_due_date_1 < today && !["pago", "dispensado"].includes(row.payment_installment_1_status)) || (row.payment_due_date_2 && row.payment_due_date_2 < today && !["pago", "dispensado"].includes(row.payment_installment_2_status)))).length;
  }, [rows]);

  if (!session) return <AdminLogin loading={loginLoading} error={error} onLogin={async (email, password) => { setLoginLoading(true); setError(""); try { const logged = await signInAdmin(email, password); setSession(logged); await load(logged); } catch (reason) { setError(reason instanceof Error ? reason.message : "Não foi possível entrar."); } finally { setLoginLoading(false); } }} />;

  const exportCsv = () => {
    const header = ["Protocolo", "Comércio", "CNPJ", "Responsável", "CPF", "Telefone", "Pagamento", "Vencimento 1", "Status parcela 1", "Vencimento 2", "Status parcela 2", "Último lembrete", "Inscrição", "Financeiro", "Spot", "Vídeo", "Kit", "Contribuição", "Data"];
    const values = rows.map((row) => [row.protocol, row.business_name, row.cnpj || "", row.responsible_name, row.cpf, row.responsible_phone || "", row.payment_option, row.payment_due_date_1 || "", row.payment_installment_1_status || "", row.payment_due_date_2 || "", row.payment_installment_2_status || "", row.payment_reminder_sent_at || "", row.registration_status, row.financial_status, row.spot_status, row.video_status, row.kit_status, row.contribution_status, row.created_at]);
    const csv = [header, ...values].map((line) => line.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(";")).join("\n");
    const link = document.createElement("a"); link.href = URL.createObjectURL(new Blob(["\uFEFF", csv], { type: "text/csv;charset=utf-8" })); link.download = "verao-premiado-2027-inscricoes.csv"; link.click(); URL.revokeObjectURL(link.href);
  };

  return <div className="min-h-screen bg-[#050609] text-white">
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050609]/95 backdrop-blur-xl"><div className="mx-auto flex min-h-[76px] max-w-[1500px] items-center justify-between gap-4 px-5 py-3 sm:px-8"><div className="flex min-w-0 items-center gap-4"><a href="/"><VMLogo size="sm" /></a><div className="min-w-0"><p className="text-[10px] font-black uppercase tracking-[.2em] text-[#ffcc0b]">Administração</p><h1 className="truncate font-black">Verão Premiado 2027</h1></div></div><div className="flex gap-2"><a href="/admin/solicitacoes" className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70"><Store className="h-4 w-4" /><span className="hidden sm:inline">Negócios</span></a><button onClick={() => void load(session)} disabled={loading} aria-label="Atualizar" className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70"><RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} /></button><button onClick={() => { clearAdminSession(); setSession(null); }} aria-label="Sair" className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70"><LogOut className="h-4 w-4" /></button></div></div></header>
    <main className="mx-auto max-w-[1500px] px-5 py-8 sm:px-8">
      <div className="flex flex-col gap-5 border-b border-white/10 pb-7 lg:flex-row lg:items-end lg:justify-between"><div><p className="text-xs font-black uppercase tracking-[.18em] text-[#ffcc0b]">Gestão da campanha</p><h2 className="mt-2 text-3xl font-black sm:text-5xl">Inscrições, produção e premiação.</h2></div><div className="flex flex-wrap gap-2"><button onClick={() => setTab("registrations")} className={`inline-flex h-11 items-center gap-2 rounded-lg px-4 text-xs font-black uppercase ${tab === "registrations" ? "bg-[#f40b36]" : "border border-white/12"}`}><LayoutGrid className="h-4 w-4" />Inscrições</button><button onClick={() => setTab("screens")} className={`inline-flex h-11 items-center gap-2 rounded-lg px-4 text-xs font-black uppercase ${tab === "screens" ? "bg-[#f40b36]" : "border border-white/12"}`}><Settings2 className="h-4 w-4" />Telas</button></div></div>
      {error && <p className="mt-6 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100">{error}</p>}
      {loading ? <div className="flex min-h-64 items-center justify-center"><LoaderCircle className="h-8 w-8 animate-spin text-[#f40b36]" /></div> : tab === "screens" ? <ScreensManager session={session} screens={screens} onSaved={() => void load(session)} /> : selected ? <SubmissionDetail row={selected} session={session} screen={screens.find((s) => s.id === selected.screen_id)} onBack={() => setSelectedId("")} onUpdated={(next) => setRows((current) => current.map((row) => row.id === next.id ? next : row))} /> : <>
        <section className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <MetricCard label="Comércios cadastrados" value={rows.length} note="Total da campanha" />
          <MetricCard label="Aguardando pagamento" value={rows.filter((row) => row.financial_status !== "pago").length} note="À vista e parcelados" />
          <MetricCard label="Parcelas em atraso" value={overdueCount} note="Precisam de acompanhamento" attention={overdueCount > 0} />
          <MetricCard label="Cadastros aprovados" value={rows.filter((row) => row.registration_status === "aprovada").length} note="Prontos para produção" />
        </section>
        <div className="mt-7 flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
          <label className="relative block w-full max-w-md"><Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar comércio, responsável ou protocolo" className="h-12 w-full rounded-xl border border-white/12 bg-[#0c0d11] pl-11 pr-4 outline-none focus:border-[#f40b36]" /></label>
          <div className="flex flex-wrap gap-2">
            <div className="flex rounded-xl border border-white/10 bg-[#0c0d11] p-1"><button type="button" onClick={() => setView("cards")} className={`inline-flex h-10 items-center gap-2 rounded-lg px-3 text-xs font-black uppercase ${view === "cards" ? "bg-white/10 text-white" : "text-white/40"}`}><LayoutGrid className="h-4 w-4" />Cartões</button><button type="button" onClick={() => setView("table")} className={`inline-flex h-10 items-center gap-2 rounded-lg px-3 text-xs font-black uppercase ${view === "table" ? "bg-[#f40b36] text-white" : "text-white/40"}`}><Table2 className="h-4 w-4" />Tabela</button></div>
            <a href="/veraopremiado#inscricao" target="_blank" rel="noreferrer" className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/12 px-4 text-xs font-black uppercase"><UserPlus className="h-4 w-4" />Novo comércio</a>
            <button onClick={exportCsv} className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/12 px-4 text-xs font-black uppercase"><Download className="h-4 w-4" />Exportar CSV</button>
          </div>
        </div>
        {view === "table" ? <VeraoPremiadoTable rows={filtered} session={session} onOpen={(row) => setSelectedId(row.id)} onUpdated={(next) => setRows((current) => current.map((row) => row.id === next.id ? next : row))} onDeleted={(id) => setRows((current) => current.filter((row) => row.id !== id))} /> : filtered.length ? <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{filtered.map((row) => <button key={row.id} onClick={() => setSelectedId(row.id)} className="rounded-2xl border border-white/12 bg-[#0c0e12] p-5 text-left transition hover:-translate-y-0.5 hover:border-[#f40b36]/55"><div className="flex items-center justify-between gap-3"><span className="rounded-full bg-[#f40b36]/12 px-3 py-1 text-[10px] font-black uppercase text-[#ff6982]">{statusLabels[row.registration_status]}</span><span className="text-xs text-white/35">{new Date(row.created_at).toLocaleDateString("pt-BR")}</span></div><h3 className="mt-4 text-xl font-black">{row.business_name}</h3><p className="mt-1 text-sm text-white/48">{row.responsible_name}</p><div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-4"><p className="text-xs font-bold text-white/38">{row.protocol}</p><span className="inline-flex items-center gap-1 text-[10px] font-black uppercase text-[#ffcc0b]/65"><ListChecks className="h-3.5 w-3.5" />Abrir</span></div></button>)}</section> : <p className="mt-7 rounded-2xl border border-dashed border-white/15 py-20 text-center text-white/45">Nenhuma inscrição encontrada.</p>}
      </>}
    </main>
  </div>;
}

function MetricCard({ label, value, note, attention }: { label: string; value: number; note: string; attention?: boolean }) { return <article className={`rounded-2xl border p-5 ${attention ? "border-red-400/25 bg-red-400/[.07]" : "border-white/10 bg-[#0c0e12]"}`}><p className="text-[10px] font-black uppercase tracking-[.12em] text-white/38">{label}</p><strong className={`mt-2 block text-3xl font-black ${attention ? "text-red-300" : "text-white"}`}>{value}</strong><p className="mt-1 text-xs text-white/35">{note}</p></article>; }

function SubmissionDetail({ row, session, screen, onBack, onUpdated }: { row: CampaignSubmissionAdmin; session: AdminSession; screen?: CampaignScreen; onBack: () => void; onUpdated: (row: CampaignSubmissionAdmin) => void }) {
  const [saving, setSaving] = useState(""); const [error, setError] = useState("");
  const update = async (key: keyof typeof statusOptions | "payment_notes" | "internal_notes", value: string) => { setSaving(key); setError(""); try { await updateCampaignSubmission(session, row.id, { [key]: value || null }); onUpdated({ ...row, [key]: value }); } catch (reason) { setError(reason instanceof Error ? reason.message : "Falha ao atualizar."); } finally { setSaving(""); } };
  const openAsset = async (path: string) => { try { window.open(await signedCampaignAssetUrl(session, path), "_blank", "noopener,noreferrer"); } catch (reason) { setError(reason instanceof Error ? reason.message : "Não foi possível abrir."); } };
  return <section className="mt-7"><button onClick={onBack} className="inline-flex items-center gap-2 text-sm font-bold text-white/55"><ArrowLeft className="h-4 w-4" />Todas as inscrições</button><div className="mt-5 grid gap-5 xl:grid-cols-[1.2fr_.8fr]"><div className="space-y-5"><article className="rounded-2xl border border-white/12 bg-[#0c0e12] p-5 sm:p-7"><p className="text-xs font-black uppercase tracking-[.16em] text-[#ffcc0b]">{row.protocol}</p><h2 className="mt-2 text-3xl font-black sm:text-4xl">{row.business_name}</h2><p className="mt-2 text-sm text-white/50">{row.segment} · {row.business_phone || "Sem telefone comercial"} · {row.business_instagram || "Sem Instagram"}</p><Info title="Endereço" value={`${row.street}, ${row.address_number}${row.complement ? ` - ${row.complement}` : ""} · ${row.neighborhood} · ${row.city}/${row.state} · CEP ${row.cep}`} /><Info title="Responsável" value={`${row.responsible_name} · CPF ${row.cpf} · ${row.responsible_phone || "WhatsApp não cadastrado"} · ${row.responsible_email || "Sem e-mail"}`} /></article><article className="rounded-2xl border border-white/12 bg-[#0c0e12] p-5 sm:p-7"><h3 className="text-xl font-black">Conteúdo publicitário</h3><Info title="Briefing da rádio" value={row.radio_briefing || "Não informado"} /><Info title="Briefing do vídeo" value={row.motion_briefing || "Não informado"} /><Info title="Tela escolhida" value={screen ? `${screen.name} · ${screen.address}` : row.screen_id || "Não se aplica"} /><Info title="Investimento" value={row.payment_option === "avista" ? "R$ 250,00 à vista" : "2x de R$ 150,00 (R$ 300,00)"} /><Info title="Vencimentos" value={row.payment_option === "avista" ? "Pagamento à vista · lembrete não necessário" : `1ª parcela: ${formatAdminDate(row.payment_due_date_1)} · ${statusLabels[row.payment_installment_1_status] || row.payment_installment_1_status || "Pendente"}\n2ª parcela: ${formatAdminDate(row.payment_due_date_2)} · ${statusLabels[row.payment_installment_2_status] || row.payment_installment_2_status || "Pendente"}\nÚltimo lembrete: ${row.payment_reminder_sent_at ? new Date(row.payment_reminder_sent_at).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }) : "Ainda não enviado"}`} /><Info title="Contribuição" value={row.contribution_description || "Não informada"} /></article><article className="rounded-2xl border border-white/12 bg-[#0c0e12] p-5 sm:p-7"><h3 className="text-xl font-black">Arquivos privados</h3><div className="mt-4 grid gap-3 sm:grid-cols-2">{row.assets.map((asset) => <button key={asset.path} onClick={() => void openAsset(asset.path)} className="flex items-center gap-3 rounded-xl border border-white/10 p-4 text-left"><File className="h-6 w-6 text-[#ffcc0b]" /><span className="min-w-0 flex-1 truncate text-sm font-bold">{asset.name}</span><Download className="h-4 w-4 text-white/35" /></button>)}</div></article></div><aside className="space-y-5"><article className="rounded-2xl border border-white/12 bg-[#0c0e12] p-5"><h3 className="font-black">Andamento</h3><div className="mt-5 space-y-4">{(Object.keys(statusOptions) as (keyof typeof statusOptions)[]).map((key) => <label key={key} className="block text-xs font-bold uppercase tracking-wide text-white/48">{statusTitle[key]}<select value={row[key]} disabled={saving === key} onChange={(e) => void update(key, e.target.value)} className="mt-2 h-11 w-full rounded-lg border border-white/12 bg-[#06070a] px-3 text-sm normal-case text-white outline-none">{statusOptions[key].map((value) => <option key={value} value={value}>{statusLabels[value]}</option>)}</select></label>)}</div></article><NoteEditor label="Observações financeiras" value={row.payment_notes || ""} disabled={Boolean(saving)} onSave={(value) => void update("payment_notes", value)} /><NoteEditor label="Observações internas" value={row.internal_notes || ""} disabled={Boolean(saving)} onSave={(value) => void update("internal_notes", value)} /><article className="rounded-2xl border border-white/12 bg-[#0c0e12] p-5"><h3 className="font-black">Registro do aceite</h3><p className="mt-3 text-sm text-white/55">{new Date(row.accepted_at).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}</p><p className="mt-2 text-xs text-white/35">Versão: {row.terms_version}</p><p className="mt-4 text-xs leading-5 text-white/42">{row.declarations.filter(Boolean).length} de {row.declarations.length} declarações registradas.</p></article>{error && <p className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100">{error}</p>}</aside></div></section>;
}

function formatAdminDate(value: string | null | undefined) { return value ? new Intl.DateTimeFormat("pt-BR", { timeZone: "UTC" }).format(new Date(`${value}T12:00:00Z`)) : "Não definido"; }

const statusTitle: Record<keyof typeof statusOptions, string> = { registration_status: "Inscrição", financial_status: "Financeiro", spot_status: "Spot", video_status: "Vídeo", kit_status: "Kit promocional", contribution_status: "Contribuição" };
function Info({ title, value }: { title: string; value: string }) { return <div className="mt-5 border-t border-white/10 pt-4"><p className="text-xs font-black uppercase tracking-wide text-white/35">{title}</p><p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-white/68">{value}</p></div>; }
function NoteEditor({ label, value, disabled, onSave }: { label: string; value: string; disabled: boolean; onSave: (value: string) => void }) { const [draft, setDraft] = useState(value); useEffect(() => setDraft(value), [value]); return <article className="rounded-2xl border border-white/12 bg-[#0c0e12] p-5"><label className="text-sm font-black">{label}<textarea value={draft} onChange={(e) => setDraft(e.target.value)} className="mt-3 min-h-28 w-full rounded-lg border border-white/12 bg-black/20 p-3 text-sm outline-none" /></label><button disabled={disabled || draft === value} onClick={() => onSave(draft)} className="mt-3 inline-flex h-10 items-center gap-2 rounded-lg bg-[#f40b36] px-4 text-xs font-black uppercase disabled:opacity-35"><Check className="h-4 w-4" />Salvar</button></article>; }

function ScreensManager({ session, screens, onSaved }: { session: AdminSession; screens: (CampaignScreen & { is_active: boolean })[]; onSaved: () => void }) {
  const empty = { name: "", address: "", description: "", photo_url: "", capacity: "", is_active: true };
  const [draft, setDraft] = useState(empty); const [saving, setSaving] = useState(false); const [error, setError] = useState("");
  const save = async () => { if (!draft.name.trim() || !draft.address.trim()) { setError("Informe nome e endereço reais da tela."); return; } setSaving(true); setError(""); try { await saveScreenAdmin(session, { name: draft.name, address: draft.address, description: draft.description, photo_url: draft.photo_url, capacity: draft.capacity ? Number(draft.capacity) : null, is_active: draft.is_active }); setDraft(empty); onSaved(); } catch (reason) { setError(reason instanceof Error ? reason.message : "Não foi possível salvar."); } finally { setSaving(false); } };
  const toggle = async (screen: CampaignScreen & { is_active: boolean }) => { try { await saveScreenAdmin(session, { id: screen.id, name: screen.name, address: screen.address, description: screen.description || "", photo_url: screen.photo_url || "", capacity: screen.capacity, is_active: !screen.is_active }); onSaved(); } catch (reason) { setError(reason instanceof Error ? reason.message : "Não foi possível atualizar."); } };
  return <section className="mt-7 grid gap-6 lg:grid-cols-[.75fr_1.25fr]"><article className="rounded-2xl border border-white/12 bg-[#0c0e12] p-5 sm:p-7"><h3 className="text-xl font-black">Cadastrar tela real</h3><p className="mt-2 text-sm leading-6 text-white/45">As opções ativas aparecem no formulário público. Não use dados fictícios.</p><div className="mt-5 space-y-4">{[["Nome do local", "name"], ["Endereço", "address"], ["Descrição", "description"], ["URL da foto", "photo_url"], ["Capacidade (opcional)", "capacity"]].map(([label, key]) => <label key={key} className="block text-sm font-bold">{label}<input type={key === "capacity" ? "number" : "text"} value={String(draft[key as keyof typeof draft])} onChange={(e) => setDraft((current) => ({ ...current, [key]: e.target.value }))} className="mt-2 h-11 w-full rounded-lg border border-white/12 bg-black/20 px-3 outline-none" /></label>)}</div>{error && <p className="mt-4 text-sm text-red-300">{error}</p>}<button onClick={() => void save()} disabled={saving} className="mt-5 inline-flex h-11 items-center gap-2 rounded-lg bg-[#f40b36] px-4 text-xs font-black uppercase"><Plus className="h-4 w-4" />Cadastrar tela</button></article><div><h3 className="text-xl font-black">Telas cadastradas ({screens.length})</h3><div className="mt-4 grid gap-4 sm:grid-cols-2">{screens.map((screen) => <article key={screen.id} className="rounded-2xl border border-white/12 bg-[#0c0e12] p-5"><div className="flex items-start justify-between gap-3"><div><h4 className="font-black">{screen.name}</h4><p className="mt-2 text-sm text-white/45">{screen.address}</p></div><span className={`rounded-full px-2.5 py-1 text-[10px] font-black uppercase ${screen.is_active ? "bg-emerald-400/10 text-emerald-300" : "bg-white/8 text-white/40"}`}>{screen.is_active ? "Ativa" : "Inativa"}</span></div><p className="mt-4 text-xs text-white/35">Capacidade: {screen.capacity ?? "Sem limite"}</p><button onClick={() => void toggle(screen)} className="mt-4 h-9 rounded-lg border border-white/12 px-3 text-xs font-bold">{screen.is_active ? "Desativar" : "Ativar"}</button></article>)}</div></div></section>;
}
