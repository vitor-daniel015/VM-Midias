import { useMemo, useState, type ReactNode } from "react";
import {
  Bell,
  CalendarClock,
  Edit3,
  Eye,
  MessageCircle,
  Save,
  Trash2,
  X,
} from "lucide-react";
import type { AdminSession } from "../../lib/supabase";
import {
  deleteCampaignSubmission,
  updateCampaignSubmission,
  type CampaignSubmissionAdmin,
} from "../../lib/veraoPremiadoApi";

type Props = {
  rows: CampaignSubmissionAdmin[];
  session: AdminSession;
  onOpen: (row: CampaignSubmissionAdmin) => void;
  onUpdated: (row: CampaignSubmissionAdmin) => void;
  onDeleted: (id: string) => void;
};

const installmentOptions = [
  ["pendente", "Pendente"],
  ["pago", "Pago"],
  ["atrasado", "Atrasado"],
  ["dispensado", "Dispensado"],
] as const;

const financialOptions = [
  ["aguardando_pagamento", "Aguardando"],
  ["parcialmente_pago", "Parcial"],
  ["pago", "Pago"],
] as const;

const registrationOptions = [
  ["recebida", "Recebida"],
  ["em_analise", "Em análise"],
  ["aprovada", "Aprovada"],
  ["cancelada", "Cancelada"],
] as const;

function todayInSaoPaulo() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

function formatDate(value: string | null) {
  if (!value) return "Sem data";
  return new Intl.DateTimeFormat("pt-BR", { timeZone: "UTC" }).format(
    new Date(`${value}T12:00:00Z`),
  );
}

function digits(value: string | null | undefined) {
  return (value || "").replace(/\D/g, "");
}

function whatsappNumber(value: string | null | undefined) {
  const number = digits(value);
  if (number.length === 10 || number.length === 11) return `55${number}`;
  return number;
}

function isPending(status: string) {
  return status !== "pago" && status !== "dispensado";
}

function isOverdue(date: string | null, status: string) {
  return Boolean(date && isPending(status) && date < todayInSaoPaulo());
}

function dueTone(date: string | null, status: string) {
  if (status === "pago") return "border-emerald-400/25 bg-emerald-400/8 text-emerald-300";
  if (status === "dispensado") return "border-white/10 bg-white/[.03] text-white/35";
  if (isOverdue(date, status) || status === "atrasado") return "border-red-400/30 bg-red-400/10 text-red-200";
  return "border-amber-300/25 bg-amber-300/8 text-amber-100";
}

export function VeraoPremiadoTable({ rows, session, onOpen, onUpdated, onDeleted }: Props) {
  const [paymentFilter, setPaymentFilter] = useState("all");
  const [registrationFilter, setRegistrationFilter] = useState("all");
  const [dueFilter, setDueFilter] = useState("all");
  const [saving, setSaving] = useState("");
  const [error, setError] = useState("");
  const [editing, setEditing] = useState<CampaignSubmissionAdmin | null>(null);

  const filtered = useMemo(
    () =>
      rows.filter((row) => {
        if (paymentFilter !== "all" && row.financial_status !== paymentFilter) return false;
        if (registrationFilter !== "all" && row.registration_status !== registrationFilter) return false;
        if (dueFilter === "overdue") {
          return (
            isOverdue(row.payment_due_date_1, row.payment_installment_1_status) ||
            isOverdue(row.payment_due_date_2, row.payment_installment_2_status)
          );
        }
        if (dueFilter === "installments" && row.payment_option !== "parcelado") return false;
        if (dueFilter === "missing") return row.payment_option === "parcelado" && !row.payment_due_date_1;
        return true;
      }),
    [dueFilter, paymentFilter, registrationFilter, rows],
  );

  const patchRow = async (
    row: CampaignSubmissionAdmin,
    updates: Record<string, string | number | null>,
    key: string,
  ) => {
    setSaving(`${row.id}:${key}`);
    setError("");
    try {
      await updateCampaignSubmission(session, row.id, updates);
      onUpdated({ ...row, ...updates } as CampaignSubmissionAdmin);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Não foi possível atualizar.");
    } finally {
      setSaving("");
    }
  };

  const sendReminder = async (row: CampaignSubmissionAdmin) => {
    if (row.payment_option !== "parcelado") return;
    const phone = whatsappNumber(row.responsible_phone || row.business_phone);
    if (phone.length < 12) {
      setError(`Cadastre o WhatsApp de ${row.business_name} antes de enviar o lembrete.`);
      setEditing(row);
      return;
    }

    const firstPending = isPending(row.payment_installment_1_status);
    const installment = firstPending ? 1 : 2;
    const dueDate = firstPending ? row.payment_due_date_1 : row.payment_due_date_2;
    const message = [
      `Olá, ${row.responsible_name}!`,
      `Este é um lembrete da VM Mídias sobre a ${installment}ª parcela do Verão Premiado 2027, no valor de R$ 150,00.`,
      dueDate ? `Vencimento: ${formatDate(dueDate)}.` : "Entre em contato conosco para confirmar o vencimento.",
      "Se o pagamento já foi realizado, desconsidere esta mensagem. Obrigado!",
    ].join("\n\n");

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    await patchRow(
      row,
      {
        payment_reminder_sent_at: new Date().toISOString(),
        payment_reminder_count: (row.payment_reminder_count || 0) + 1,
      },
      "reminder",
    );
  };

  const remove = async (row: CampaignSubmissionAdmin) => {
    const confirmed = window.confirm(
      `Excluir definitivamente a inscrição de ${row.business_name}? Esta ação não pode ser desfeita.`,
    );
    if (!confirmed) return;
    setSaving(`${row.id}:delete`);
    setError("");
    try {
      await deleteCampaignSubmission(session, row.id);
      onDeleted(row.id);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Não foi possível excluir.");
    } finally {
      setSaving("");
    }
  };

  return (
    <section className="mt-5">
      <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#0a0c10] p-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <h3 className="font-black">Controle operacional</h3>
          <p className="mt-1 text-sm text-white/42">{filtered.length} de {rows.length} comércios visíveis</p>
        </div>
        <div className="grid gap-2 sm:grid-cols-3">
          <FilterSelect value={registrationFilter} onChange={setRegistrationFilter} label="Inscrição" options={[["all", "Todas"], ...registrationOptions]} />
          <FilterSelect value={paymentFilter} onChange={setPaymentFilter} label="Financeiro" options={[["all", "Todos"], ...financialOptions]} />
          <FilterSelect value={dueFilter} onChange={setDueFilter} label="Vencimentos" options={[["all", "Todos"], ["installments", "Parcelados"], ["overdue", "Em atraso"], ["missing", "Sem vencimento"]]} />
        </div>
      </div>

      {error && (
        <div className="mt-4 flex items-start justify-between gap-3 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100">
          <span>{error}</span>
          <button type="button" onClick={() => setError("")} aria-label="Fechar aviso"><X className="h-4 w-4" /></button>
        </div>
      )}

      <div className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-[#080a0e] shadow-2xl shadow-black/20">
        <table className="min-w-[1420px] w-full border-collapse text-left text-sm">
          <thead className="bg-white/[.035] text-[11px] font-black uppercase tracking-[.08em] text-white/40">
            <tr>
              <th className="sticky left-0 z-20 min-w-64 border-b border-white/10 bg-[#0c0e12] px-4 py-4">Comércio</th>
              <th className="min-w-56 border-b border-white/10 px-4 py-4">Responsável</th>
              <th className="min-w-40 border-b border-white/10 px-4 py-4">Pagamento</th>
              <th className="min-w-52 border-b border-white/10 px-4 py-4">1ª parcela</th>
              <th className="min-w-52 border-b border-white/10 px-4 py-4">2ª parcela</th>
              <th className="min-w-48 border-b border-white/10 px-4 py-4">Financeiro</th>
              <th className="min-w-48 border-b border-white/10 px-4 py-4">Inscrição</th>
              <th className="min-w-56 border-b border-white/10 px-4 py-4">Produção</th>
              <th className="sticky right-0 z-20 min-w-52 border-b border-white/10 bg-[#0c0e12] px-4 py-4">Ações</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row) => (
              <tr key={row.id} className="border-b border-white/[.07] transition hover:bg-white/[.025]">
                <td className="sticky left-0 z-10 bg-[#080a0e] px-4 py-4 align-top">
                  <button type="button" onClick={() => onOpen(row)} className="block text-left">
                    <strong className="block text-base text-white">{row.business_name}</strong>
                    <span className="mt-1 block text-xs text-white/35">{row.segment}</span>
                    <span className="mt-2 block text-[11px] font-bold text-[#ffcc0b]/70">{row.protocol}</span>
                  </button>
                </td>
                <td className="px-4 py-4 align-top">
                  <strong className="block text-white/85">{row.responsible_name}</strong>
                  <span className="mt-1 block text-xs text-white/38">{row.responsible_phone || row.business_phone || "WhatsApp não cadastrado"}</span>
                </td>
                <td className="px-4 py-4 align-top">
                  <span className="rounded-full border border-white/10 bg-white/[.04] px-3 py-1.5 text-xs font-bold">
                    {row.payment_option === "avista" ? "R$ 250 à vista" : "2x de R$ 150"}
                  </span>
                </td>
                <td className="px-4 py-4 align-top">
                  <InstallmentCell row={row} number={1} saving={saving} onPatch={patchRow} />
                </td>
                <td className="px-4 py-4 align-top">
                  {row.payment_option === "avista" ? (
                    <span className="text-xs text-white/28">Não se aplica</span>
                  ) : (
                    <InstallmentCell row={row} number={2} saving={saving} onPatch={patchRow} />
                  )}
                </td>
                <td className="px-4 py-4 align-top">
                  <InlineSelect
                    value={row.financial_status}
                    disabled={saving === `${row.id}:financial_status`}
                    options={financialOptions}
                    onChange={(value) => void patchRow(row, { financial_status: value }, "financial_status")}
                  />
                </td>
                <td className="px-4 py-4 align-top">
                  <InlineSelect
                    value={row.registration_status}
                    disabled={saving === `${row.id}:registration_status`}
                    options={registrationOptions}
                    onChange={(value) => void patchRow(row, { registration_status: value }, "registration_status")}
                  />
                </td>
                <td className="px-4 py-4 align-top text-xs leading-6 text-white/48">
                  <span className="block">Rádio: {row.spot_status.replaceAll("_", " ")}</span>
                  <span className="block">Vídeo: {row.video_status.replaceAll("_", " ")}</span>
                  <span className="block">Kit: {row.kit_status.replaceAll("_", " ")}</span>
                </td>
                <td className="sticky right-0 z-10 bg-[#080a0e] px-4 py-4 align-top">
                  <div className="grid grid-cols-2 gap-2">
                    <ActionButton label="Ver" icon={<Eye className="h-4 w-4" />} onClick={() => onOpen(row)} />
                    <ActionButton label="Editar" icon={<Edit3 className="h-4 w-4" />} onClick={() => setEditing(row)} />
                    {row.payment_option === "parcelado" && (
                      <ActionButton label="WhatsApp" icon={<MessageCircle className="h-4 w-4" />} onClick={() => void sendReminder(row)} disabled={saving === `${row.id}:reminder`} />
                    )}
                    <ActionButton label="Excluir" icon={<Trash2 className="h-4 w-4" />} onClick={() => void remove(row)} disabled={saving === `${row.id}:delete`} danger />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!filtered.length && <p className="px-6 py-20 text-center text-white/40">Nenhum comércio corresponde aos filtros.</p>}
      </div>

      <p className="mt-3 flex items-center gap-2 text-xs text-white/32">
        <Bell className="h-3.5 w-3.5" /> O botão WhatsApp abre uma mensagem pronta; o administrador confirma o envio no aplicativo.
      </p>

      {editing && (
        <EditCommerceModal
          row={editing}
          session={session}
          onClose={() => setEditing(null)}
          onSaved={(next) => {
            onUpdated(next);
            setEditing(null);
          }}
        />
      )}
    </section>
  );
}

function InstallmentCell({
  row,
  number,
  saving,
  onPatch,
}: {
  row: CampaignSubmissionAdmin;
  number: 1 | 2;
  saving: string;
  onPatch: (row: CampaignSubmissionAdmin, updates: Record<string, string | number | null>, key: string) => Promise<void>;
}) {
  const dateKey = `payment_due_date_${number}` as "payment_due_date_1" | "payment_due_date_2";
  const statusKey = `payment_installment_${number}_status` as "payment_installment_1_status" | "payment_installment_2_status";
  const status = row[statusKey] || "pendente";
  const date = row[dateKey];
  return (
    <div className={`rounded-xl border p-2.5 ${dueTone(date, status)}`}>
      <input
        type="date"
        value={date || ""}
        disabled={saving === `${row.id}:${dateKey}`}
        onChange={(event) => void onPatch(row, { [dateKey]: event.target.value || null }, dateKey)}
        className="h-8 w-full bg-transparent text-xs font-bold outline-none [color-scheme:dark]"
        aria-label={`Vencimento da ${number}ª parcela de ${row.business_name}`}
      />
      <select
        value={status}
        disabled={saving === `${row.id}:${statusKey}`}
        onChange={(event) => void onPatch(row, { [statusKey]: event.target.value }, statusKey)}
        className="mt-1 h-8 w-full rounded-lg border border-white/10 bg-black/20 px-2 text-xs font-bold outline-none"
        aria-label={`Status da ${number}ª parcela de ${row.business_name}`}
      >
        {installmentOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
      </select>
    </div>
  );
}

function InlineSelect({ value, options, onChange, disabled }: { value: string; options: readonly (readonly [string, string])[]; onChange: (value: string) => void; disabled?: boolean }) {
  return (
    <select value={value} disabled={disabled} onChange={(event) => onChange(event.target.value)} className="h-10 w-full rounded-lg border border-white/10 bg-[#0d0f14] px-2 text-xs font-bold text-white outline-none focus:border-[#f40b36]">
      {options.map(([option, label]) => <option key={option} value={option}>{label}</option>)}
    </select>
  );
}

function FilterSelect({ value, onChange, label, options }: { value: string; onChange: (value: string) => void; label: string; options: readonly (readonly [string, string])[] }) {
  return (
    <label className="text-[10px] font-black uppercase tracking-wide text-white/35">
      {label}
      <select value={value} onChange={(event) => onChange(event.target.value)} className="mt-1 h-10 w-full min-w-40 rounded-lg border border-white/10 bg-[#050609] px-3 text-xs font-bold normal-case text-white outline-none">
        {options.map(([option, text]) => <option key={option} value={option}>{text}</option>)}
      </select>
    </label>
  );
}

function ActionButton({ label, icon, onClick, disabled, danger }: { label: string; icon: ReactNode; onClick: () => void; disabled?: boolean; danger?: boolean }) {
  return (
    <button type="button" onClick={onClick} disabled={disabled} className={`inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border px-2 text-[10px] font-black uppercase disabled:opacity-35 ${danger ? "border-red-400/20 text-red-300 hover:bg-red-400/10" : "border-white/10 text-white/62 hover:border-white/25 hover:text-white"}`}>
      {icon}{label}
    </button>
  );
}

function EditCommerceModal({ row, session, onClose, onSaved }: { row: CampaignSubmissionAdmin; session: AdminSession; onClose: () => void; onSaved: (row: CampaignSubmissionAdmin) => void }) {
  const [draft, setDraft] = useState({
    business_name: row.business_name,
    segment: row.segment,
    business_instagram: row.business_instagram || "",
    responsible_name: row.responsible_name,
    responsible_phone: row.responsible_phone || row.business_phone || "",
    responsible_email: row.responsible_email || "",
    cep: row.cep,
    street: row.street,
    address_number: row.address_number,
    complement: row.complement || "",
    neighborhood: row.neighborhood,
    city: row.city,
    state: row.state,
    payment_option: row.payment_option,
    payment_due_date_1: row.payment_due_date_1 || "",
    payment_due_date_2: row.payment_due_date_2 || "",
    payment_installment_1_status: row.payment_installment_1_status || "pendente",
    payment_installment_2_status: row.payment_installment_2_status || (row.payment_option === "avista" ? "dispensado" : "pendente"),
    contribution_description: row.contribution_description || "",
    payment_notes: row.payment_notes || "",
    internal_notes: row.internal_notes || "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const set = (key: keyof typeof draft, value: string) => setDraft((current) => ({ ...current, [key]: value }));
  const save = async () => {
    if (draft.business_name.trim().length < 2 || draft.responsible_name.trim().length < 4) {
      setError("Informe o comércio e o nome completo do responsável.");
      return;
    }
    setSaving(true);
    setError("");
    const updates: Record<string, string | null> = {
      ...draft,
      business_instagram: draft.business_instagram.trim() || null,
      responsible_phone: draft.responsible_phone.trim() || null,
      responsible_email: draft.responsible_email.trim() || null,
      complement: draft.complement.trim() || null,
      contribution_description: draft.contribution_description.trim() || null,
      payment_notes: draft.payment_notes.trim() || null,
      internal_notes: draft.internal_notes.trim() || null,
      payment_due_date_1: draft.payment_due_date_1 || null,
      payment_due_date_2: draft.payment_option === "avista" ? null : draft.payment_due_date_2 || null,
      payment_installment_2_status: draft.payment_option === "avista" ? "dispensado" : draft.payment_installment_2_status,
    };
    try {
      await updateCampaignSubmission(session, row.id, updates);
      onSaved({ ...row, ...updates } as CampaignSubmissionAdmin);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Não foi possível salvar.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[80] overflow-y-auto bg-black/80 p-3 backdrop-blur-sm sm:p-6" role="dialog" aria-modal="true" aria-label={`Editar ${row.business_name}`}>
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/12 bg-[#0b0d12] shadow-2xl">
        <header className="sticky top-0 z-10 flex items-center justify-between gap-4 rounded-t-3xl border-b border-white/10 bg-[#0b0d12]/95 p-5 backdrop-blur-xl sm:px-7">
          <div><p className="text-[10px] font-black uppercase tracking-[.18em] text-[#ffcc0b]">Editar cadastro</p><h2 className="mt-1 text-2xl font-black">{row.business_name}</h2></div>
          <button type="button" onClick={onClose} className="grid h-11 w-11 place-items-center rounded-xl border border-white/10" aria-label="Fechar"><X className="h-5 w-5" /></button>
        </header>
        <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-2">
          <EditSection title="Comércio">
            <EditField label="Nome do comércio" value={draft.business_name} onChange={(value) => set("business_name", value)} />
            <EditField label="Segmento" value={draft.segment} onChange={(value) => set("segment", value)} />
            <EditField label="Instagram" value={draft.business_instagram} onChange={(value) => set("business_instagram", value)} />
            <EditField label="Responsável" value={draft.responsible_name} onChange={(value) => set("responsible_name", value)} />
            <EditField label="WhatsApp para cobrança" value={draft.responsible_phone} onChange={(value) => set("responsible_phone", value)} placeholder="(15) 99999-9999" />
            <EditField label="E-mail" value={draft.responsible_email} onChange={(value) => set("responsible_email", value)} type="email" />
          </EditSection>
          <EditSection title="Endereço">
            <div className="grid grid-cols-[.7fr_1.3fr] gap-3"><EditField label="CEP" value={draft.cep} onChange={(value) => set("cep", value)} /><EditField label="Rua ou avenida" value={draft.street} onChange={(value) => set("street", value)} /></div>
            <div className="grid grid-cols-2 gap-3"><EditField label="Número" value={draft.address_number} onChange={(value) => set("address_number", value)} /><EditField label="Complemento" value={draft.complement} onChange={(value) => set("complement", value)} /></div>
            <EditField label="Bairro" value={draft.neighborhood} onChange={(value) => set("neighborhood", value)} />
            <div className="grid grid-cols-[1.4fr_.6fr] gap-3"><EditField label="Cidade" value={draft.city} onChange={(value) => set("city", value)} /><EditField label="Estado" value={draft.state} onChange={(value) => set("state", value)} /></div>
          </EditSection>
          <EditSection title="Pagamento">
            <label className="text-xs font-bold text-white/55">Forma de pagamento<select value={draft.payment_option} onChange={(event) => set("payment_option", event.target.value)} className="mt-2 h-11 w-full rounded-xl border border-white/10 bg-black/20 px-3 text-sm text-white outline-none"><option value="avista">R$ 250 à vista</option><option value="parcelado">2x de R$ 150</option></select></label>
            <div className="grid grid-cols-2 gap-3"><EditField label="Vencimento 1" value={draft.payment_due_date_1} onChange={(value) => set("payment_due_date_1", value)} type="date" /><EditField label="Vencimento 2" value={draft.payment_due_date_2} onChange={(value) => set("payment_due_date_2", value)} type="date" disabled={draft.payment_option === "avista"} /></div>
            <div className="grid grid-cols-2 gap-3"><EditSelect label="Status parcela 1" value={draft.payment_installment_1_status} onChange={(value) => set("payment_installment_1_status", value)} options={installmentOptions} /><EditSelect label="Status parcela 2" value={draft.payment_installment_2_status} onChange={(value) => set("payment_installment_2_status", value)} options={installmentOptions} disabled={draft.payment_option === "avista"} /></div>
            <EditField label="Vale-compras" value={draft.contribution_description} onChange={(value) => set("contribution_description", value)} />
          </EditSection>
          <EditSection title="Anotações">
            <EditArea label="Observações financeiras" value={draft.payment_notes} onChange={(value) => set("payment_notes", value)} />
            <EditArea label="Observações internas" value={draft.internal_notes} onChange={(value) => set("internal_notes", value)} />
          </EditSection>
        </div>
        {error && <p className="mx-5 mb-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100 sm:mx-7">{error}</p>}
        <footer className="flex flex-col-reverse gap-3 border-t border-white/10 p-5 sm:flex-row sm:justify-end sm:px-7">
          <button type="button" onClick={onClose} className="h-11 rounded-xl border border-white/12 px-5 text-xs font-black uppercase text-white/60">Cancelar</button>
          <button type="button" onClick={() => void save()} disabled={saving} className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#f40b36] px-5 text-xs font-black uppercase disabled:opacity-40"><Save className="h-4 w-4" />{saving ? "Salvando" : "Salvar alterações"}</button>
        </footer>
      </div>
    </div>
  );
}

function EditSection({ title, children }: { title: string; children: ReactNode }) {
  return <section className="space-y-4 rounded-2xl border border-white/10 bg-black/15 p-4 sm:p-5"><h3 className="flex items-center gap-2 border-b border-white/8 pb-3 font-black"><CalendarClock className="h-4 w-4 text-[#ffcc0b]" />{title}</h3>{children}</section>;
}

function EditField({ label, value, onChange, type = "text", placeholder, disabled }: { label: string; value: string; onChange: (value: string) => void; type?: string; placeholder?: string; disabled?: boolean }) {
  return <label className="block text-xs font-bold text-white/55">{label}<input type={type} value={value} placeholder={placeholder} disabled={disabled} onChange={(event) => onChange(event.target.value)} className="mt-2 h-11 w-full rounded-xl border border-white/10 bg-black/20 px-3 text-sm text-white outline-none focus:border-[#f40b36] disabled:opacity-35 [color-scheme:dark]" /></label>;
}

function EditArea({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return <label className="block text-xs font-bold text-white/55">{label}<textarea value={value} onChange={(event) => onChange(event.target.value)} className="mt-2 min-h-28 w-full resize-y rounded-xl border border-white/10 bg-black/20 p-3 text-sm text-white outline-none focus:border-[#f40b36]" /></label>;
}

function EditSelect({ label, value, onChange, options, disabled }: { label: string; value: string; onChange: (value: string) => void; options: readonly (readonly [string, string])[]; disabled?: boolean }) {
  return <label className="block text-xs font-bold text-white/55">{label}<select value={value} disabled={disabled} onChange={(event) => onChange(event.target.value)} className="mt-2 h-11 w-full rounded-xl border border-white/10 bg-black/20 px-3 text-sm text-white outline-none disabled:opacity-35">{options.map(([option, text]) => <option key={option} value={option}>{text}</option>)}</select></label>;
}
