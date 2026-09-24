import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  FileText,
  Image,
  Link as LinkIcon,
  LoaderCircle,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  Video,
} from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { VMLogo } from "../components/VMLogo";
import {
  ArtRequestPayload,
  createArtRequest,
} from "../lib/supabase";

type FormState = {
  companyName: string;
  requesterName: string;
  whatsapp: string;
  email: string;
  requestType: ArtRequestPayload["request_type"];
  campaignObjective: string;
  mainMessage: string;
  details: string;
  callToAction: string;
  displayInformation: string;
  visualStyle: string;
  desiredDeadline: string;
  materialsUrl: string;
  consent: boolean;
  website: string;
};

const initialForm: FormState = {
  companyName: "",
  requesterName: "",
  whatsapp: "",
  email: "",
  requestType: "arte_estatica",
  campaignObjective: "",
  mainMessage: "",
  details: "",
  callToAction: "",
  displayInformation: "",
  visualStyle: "",
  desiredDeadline: "",
  materialsUrl: "",
  consent: false,
  website: "",
};

const inputClass =
  "mt-2 min-h-12 w-full rounded-lg border border-white/12 bg-[#090a0d] px-4 py-3 text-[15px] text-white placeholder:text-white/30 transition focus:border-[#f40b36] focus:outline-none focus:ring-2 focus:ring-[#f40b36]/20";
const labelClass = "text-sm font-bold text-white/86";

function clean(value: string) {
  const result = value.trim();
  return result || null;
}

function makeProtocol() {
  const now = new Date();
  const date = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
  ].join("");
  return `VM-${date}-${crypto.randomUUID().slice(0, 6).toUpperCase()}`;
}

function localDateInputValue() {
  const now = new Date();
  return [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
  ].join("-");
}

export function ArtRequestPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [protocol, setProtocol] = useState("");

  const today = useMemo(localDateInputValue, []);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Solicitar nova arte ou vídeo | VM MÍDIAS";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (form.website) {
      setProtocol(makeProtocol());
      return;
    }

    if (form.details.trim().length < 30) {
      setError("Descreva o pedido com pelo menos 30 caracteres.");
      return;
    }

    const requestProtocol = makeProtocol();
    const requestId = crypto.randomUUID();
    setSubmitting(true);

    try {
      await createArtRequest({
        id: requestId,
        protocol: requestProtocol,
        company_name: form.companyName.trim(),
        requester_name: form.requesterName.trim(),
        whatsapp: form.whatsapp.trim(),
        email: clean(form.email),
        request_type: form.requestType,
        campaign_objective: form.campaignObjective,
        main_message: form.mainMessage.trim(),
        details: form.details.trim(),
        call_to_action: clean(form.callToAction),
        display_information: clean(form.displayInformation),
        visual_style: clean(form.visualStyle),
        desired_deadline: clean(form.desiredDeadline),
        materials_url: clean(form.materialsUrl),
        consent: true,
        source_page: "solicitar-arte",
      });
      setProtocol(requestProtocol);
      setForm(initialForm);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Não foi possível enviar sua solicitação agora.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (protocol) {
    return (
      <div className="min-h-screen bg-[#030406] text-white">
        <header className="border-b border-white/10 bg-[#050609]">
          <div className="mx-auto flex h-[76px] max-w-6xl items-center justify-between px-5 sm:px-8">
            <a href="/" aria-label="Voltar ao site da VM MÍDIAS">
              <VMLogo size="sm" />
            </a>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/45">
              Portal do cliente
            </span>
          </div>
        </header>

        <main className="mx-auto flex min-h-[calc(100vh-76px)] max-w-3xl items-center px-5 py-16 sm:px-8">
          <section className="w-full rounded-2xl border border-emerald-400/25 bg-[#0d1012] p-7 text-center shadow-2xl shadow-black/40 sm:p-12">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/35 bg-emerald-400/10 text-emerald-300">
              <CheckCircle2 className="h-8 w-8" />
            </span>
            <p className="mt-7 text-xs font-black uppercase tracking-[0.22em] text-emerald-300">
              Solicitação recebida
            </p>
            <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              Seu pedido já está com a VM.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/60">
              Nossa equipe vai analisar o briefing e entrar em contato caso seja
              necessário confirmar alguma informação.
            </p>

            <div className="mx-auto mt-8 max-w-sm rounded-xl border border-white/10 bg-black/30 p-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
                Protocolo do pedido
              </span>
              <strong className="mt-2 block text-xl tracking-[0.08em] text-white">
                {protocol}
              </strong>
            </div>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setProtocol("")}
                className="brand-button brand-button-primary"
              >
                Fazer outro pedido
                <ArrowRight className="h-4 w-4" />
              </button>
              <a href="/" className="brand-button brand-button-outline">
                Voltar ao site
              </a>
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030406] text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#030406]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="/" aria-label="Voltar ao site da VM MÍDIAS">
            <VMLogo size="sm" />
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-white/58 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Voltar ao site</span>
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/10 px-5 py-14 sm:px-8 sm:py-20">
          <div className="pointer-events-none absolute inset-0 bg-led-grid opacity-40" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#f40b36]/12 blur-[110px]" />
          <div className="relative mx-auto max-w-5xl text-center">
            <p className="brand-eyebrow justify-center">
              <span className="brand-eyebrow-line" />
              Área exclusiva para clientes
            </p>
            <h1 className="brand-section-title mx-auto max-w-4xl">
              Solicite uma nova <span className="text-[#f40b36]">arte ou vídeo</span>
            </h1>
            <p className="brand-section-copy mx-auto">
              Conte para a nossa equipe o que precisa mudar ou qual campanha
              deseja colocar no ar. Quanto mais detalhes, mais rápido conseguimos
              transformar sua ideia em uma peça pronta para aprovação.
            </p>
          </div>
        </section>

        <section className="px-5 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
            <form
              onSubmit={handleSubmit}
              className="brand-panel rounded-2xl p-5 sm:p-8 lg:p-10"
            >
              <div className="flex items-start gap-4 border-b border-white/10 pb-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#f40b36]/12 text-[#ff3155]">
                  <FileText className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="text-xl font-black">Briefing da solicitação</h2>
                  <p className="mt-1 text-sm leading-6 text-white/48">
                    Campos com * são obrigatórios.
                  </p>
                </div>
              </div>

              <fieldset className="mt-8">
                <legend className="text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]">
                  01 · Seus dados
                </legend>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <label className={labelClass}>
                    Empresa *
                    <input
                      required
                      maxLength={120}
                      value={form.companyName}
                      onChange={(event) => update("companyName", event.target.value)}
                      className={inputClass}
                      placeholder="Nome da empresa"
                      autoComplete="organization"
                    />
                  </label>
                  <label className={labelClass}>
                    Seu nome *
                    <input
                      required
                      maxLength={120}
                      value={form.requesterName}
                      onChange={(event) => update("requesterName", event.target.value)}
                      className={inputClass}
                      placeholder="Quem está solicitando?"
                      autoComplete="name"
                    />
                  </label>
                  <label className={labelClass}>
                    WhatsApp *
                    <input
                      required
                      type="tel"
                      maxLength={30}
                      value={form.whatsapp}
                      onChange={(event) => update("whatsapp", event.target.value)}
                      className={inputClass}
                      placeholder="(15) 99999-9999"
                      autoComplete="tel"
                    />
                  </label>
                  <label className={labelClass}>
                    E-mail
                    <input
                      type="email"
                      maxLength={160}
                      value={form.email}
                      onChange={(event) => update("email", event.target.value)}
                      className={inputClass}
                      placeholder="contato@suaempresa.com.br"
                      autoComplete="email"
                    />
                  </label>
                </div>
              </fieldset>

              <fieldset className="mt-10 border-t border-white/10 pt-8">
                <legend className="text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]">
                  02 · O que vamos criar
                </legend>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {[
                    {
                      value: "arte_estatica" as const,
                      label: "Arte estática",
                      icon: Image,
                    },
                    { value: "video" as const, label: "Vídeo", icon: Video },
                    {
                      value: "arte_e_video" as const,
                      label: "Arte + vídeo",
                      icon: Sparkles,
                    },
                  ].map((option) => {
                    const Icon = option.icon;
                    const selected = form.requestType === option.value;
                    return (
                      <label
                        key={option.value}
                        className={`flex min-h-24 cursor-pointer flex-col justify-between rounded-xl border p-4 transition ${selected ? "border-[#f40b36] bg-[#f40b36]/10 text-white" : "border-white/10 bg-black/20 text-white/58 hover:border-white/25"}`}
                      >
                        <input
                          type="radio"
                          name="requestType"
                          value={option.value}
                          checked={selected}
                          onChange={() => update("requestType", option.value)}
                          className="sr-only"
                        />
                        <Icon className="h-5 w-5" />
                        <span className="mt-4 text-sm font-black">
                          {option.label}
                        </span>
                      </label>
                    );
                  })}
                </div>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <label className={labelClass}>
                    Objetivo da campanha *
                    <select
                      required
                      value={form.campaignObjective}
                      onChange={(event) =>
                        update("campaignObjective", event.target.value)
                      }
                      className={inputClass}
                    >
                      <option value="" disabled>
                        Selecione uma opção
                      </option>
                      <option value="promocao">Promoção ou oferta</option>
                      <option value="institucional">Institucional</option>
                      <option value="produto_servico">
                        Produto ou serviço
                      </option>
                      <option value="evento">Evento</option>
                      <option value="data_comemorativa">
                        Data comemorativa
                      </option>
                      <option value="comunicado">Comunicado</option>
                      <option value="outro">Outro</option>
                    </select>
                  </label>
                  <label className={labelClass}>
                    Estilo visual desejado
                    <select
                      value={form.visualStyle}
                      onChange={(event) => update("visualStyle", event.target.value)}
                      className={inputClass}
                    >
                      <option value="">Deixe a VM sugerir</option>
                      <option value="moderno">Moderno e impactante</option>
                      <option value="elegante">Elegante e sofisticado</option>
                      <option value="promocional">Promocional e chamativo</option>
                      <option value="minimalista">Limpo e minimalista</option>
                      <option value="divertido">Leve e divertido</option>
                    </select>
                  </label>
                </div>
              </fieldset>

              <fieldset className="mt-10 border-t border-white/10 pt-8">
                <legend className="text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]">
                  03 · Conteúdo e orientação
                </legend>
                <div className="mt-5 grid gap-5">
                  <label className={labelClass}>
                    Mensagem principal *
                    <input
                      required
                      maxLength={180}
                      value={form.mainMessage}
                      onChange={(event) => update("mainMessage", event.target.value)}
                      className={inputClass}
                      placeholder="Ex.: Semana do cliente com 20% de desconto"
                    />
                    <span className="mt-2 block text-xs font-normal text-white/35">
                      {form.mainMessage.length}/180 caracteres
                    </span>
                  </label>

                  <label className={labelClass}>
                    Descreva como você imagina a nova peça *
                    <textarea
                      required
                      minLength={30}
                      maxLength={2000}
                      rows={7}
                      value={form.details}
                      onChange={(event) => update("details", event.target.value)}
                      className={inputClass}
                      placeholder="Conte quais produtos devem aparecer, cores, público, período da promoção e qualquer detalhe importante para a criação."
                    />
                    <span className="mt-2 block text-xs font-normal text-white/35">
                      {form.details.length}/2000 caracteres
                    </span>
                  </label>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className={labelClass}>
                      Chamada para ação
                      <input
                        maxLength={160}
                        value={form.callToAction}
                        onChange={(event) =>
                          update("callToAction", event.target.value)
                        }
                        className={inputClass}
                        placeholder="Ex.: Peça agora pelo WhatsApp"
                      />
                    </label>
                    <label className={labelClass}>
                      Informações que devem aparecer
                      <input
                        maxLength={500}
                        value={form.displayInformation}
                        onChange={(event) =>
                          update("displayInformation", event.target.value)
                        }
                        className={inputClass}
                        placeholder="Telefone, endereço, @ do Instagram..."
                      />
                    </label>
                  </div>
                </div>
              </fieldset>

              <fieldset className="mt-10 border-t border-white/10 pt-8">
                <legend className="text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]">
                  04 · Prazo e materiais
                </legend>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <label className={labelClass}>
                    Data desejada
                    <span className="relative block">
                      <CalendarDays className="pointer-events-none absolute right-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-white/38" />
                      <input
                        type="date"
                        min={today}
                        value={form.desiredDeadline}
                        onChange={(event) =>
                          update("desiredDeadline", event.target.value)
                        }
                        className={`${inputClass} pr-11`}
                      />
                    </span>
                  </label>
                  <label className={labelClass}>
                    Link dos materiais
                    <span className="relative block">
                      <LinkIcon className="pointer-events-none absolute right-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-white/38" />
                      <input
                        type="url"
                        maxLength={500}
                        value={form.materialsUrl}
                        onChange={(event) =>
                          update("materialsUrl", event.target.value)
                        }
                        className={`${inputClass} pr-11`}
                        placeholder="Drive, Canva, Dropbox..."
                      />
                    </span>
                  </label>
                </div>
                <p className="mt-3 text-xs leading-5 text-white/36">
                  Para logos, fotos e referências, compartilhe uma pasta com
                  acesso por link. Não coloque senhas neste formulário.
                </p>
              </fieldset>

              <div className="sr-only" aria-hidden="true">
                <label>
                  Website
                  <input
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={(event) => update("website", event.target.value)}
                  />
                </label>
              </div>

              <div className="mt-8 flex items-start gap-3 rounded-xl border border-white/10 bg-black/25 p-4 text-sm leading-6 text-white/58">
                <input
                  id="art-request-consent"
                  required
                  type="checkbox"
                  checked={form.consent}
                  onChange={(event) => update("consent", event.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 accent-[#f40b36]"
                />
                <label htmlFor="art-request-consent" className="cursor-pointer">
                  Autorizo a VM MÍDIAS a utilizar estas informações para analisar
                  a solicitação e entrar em contato sobre a criação, conforme a{" "}
                  <a
                    href="/politica-de-privacidade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-white underline decoration-white/35 underline-offset-4 hover:decoration-[#f40b36]"
                  >
                    Política de Privacidade
                  </a>
                  . *
                </label>
              </div>

              {error && (
                <div
                  role="alert"
                  className="mt-5 rounded-lg border border-red-400/25 bg-red-400/10 px-4 py-3 text-sm text-red-200"
                >
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="brand-button brand-button-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-55"
              >
                {submitting ? (
                  <>
                    <LoaderCircle className="h-4 w-4 animate-spin" />
                    Enviando solicitação
                  </>
                ) : (
                  <>
                    Enviar solicitação
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>

            <aside className="space-y-5 lg:sticky lg:top-24">
              <div className="brand-panel rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f40b36]/12 text-[#ff3155]">
                    <MessageSquareText className="h-5 w-5" />
                  </span>
                  <h2 className="font-black">O que acontece depois?</h2>
                </div>
                <ol className="mt-6 space-y-5">
                  {[
                    "Recebemos e organizamos o seu briefing.",
                    "A equipe confere os materiais e tira dúvidas.",
                    "Criamos a peça e enviamos para sua aprovação.",
                    "Após aprovada, programamos a exibição nas telas.",
                  ].map((item, index) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-white/58">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#f40b36]/35 text-[10px] font-black text-[#ff3155]">
                        {index + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.055] p-6">
                <ShieldCheck className="h-6 w-6 text-emerald-300" />
                <h2 className="mt-4 font-black">Pedido seguro e organizado</h2>
                <p className="mt-2 text-sm leading-6 text-white/52">
                  Cada solicitação recebe um protocolo e fica registrada para a
                  equipe acompanhar o andamento sem perder informações.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-white/38">
                  Antes de enviar
                </p>
                <ul className="mt-4 space-y-3">
                  {["Revise os textos e preços", "Confira o telefone e endereço", "Libere o acesso ao link dos materiais"].map(
                    (item) => (
                      <li key={item} className="flex gap-2.5 text-sm text-white/58">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#ff3155]" />
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}
