import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  Clapperboard,
  FileImage,
  FileText,
  Film,
  FolderUp,
  Image as ImageIcon,
  LoaderCircle,
  Palette,
  ShieldCheck,
  Sparkles,
  Trash2,
  UploadCloud,
  UserRoundCheck,
} from "lucide-react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { VMLogo } from "../components/VMLogo";
import {
  createVideoRequest,
  uploadVideoRequestFiles,
  VideoRequestKind,
} from "../lib/supabase";

type FormState = {
  requestKind: VideoRequestKind;
  companyName: string;
  whatsapp: string;
  businessSegment: string;
  businessDescription: string;
  productService: string;
  targetAudience: string;
  campaignObjective: string;
  offerDetails: string;
  mainMessage: string;
  requiredTexts: string;
  callToAction: string;
  brandColors: string;
  avoidColors: string;
  brandPersonality: string;
  visualReferences: string;
  videoIdea: string;
  consent: boolean;
  website: string;
};

const initialForm: FormState = {
  requestKind: "new_client",
  companyName: "",
  whatsapp: "",
  businessSegment: "",
  businessDescription: "",
  productService: "",
  targetAudience: "",
  campaignObjective: "",
  offerDetails: "",
  mainMessage: "",
  requiredTexts: "",
  callToAction: "",
  brandColors: "",
  avoidColors: "",
  brandPersonality: "",
  visualReferences: "",
  videoIdea: "",
  consent: false,
  website: "",
};

const MAX_FILES = 8;
const MAX_FILE_SIZE = 25 * 1024 * 1024;
const ALLOWED_FILE_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/svg+xml",
  "application/pdf",
  "video/mp4",
  "video/quicktime",
]);

const inputClass =
  "mt-2 min-h-12 w-full rounded-lg border border-white/12 bg-[#090a0d] px-4 py-3 text-[15px] text-white placeholder:text-white/30 transition focus:border-[#f40b36] focus:outline-none focus:ring-2 focus:ring-[#f40b36]/20";
const labelClass = "text-sm font-bold text-white/86";
const sectionTitleClass =
  "text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]";

function clean(value: string) {
  return value.trim() || null;
}

function makeProtocol() {
  const now = new Date();
  const date = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
  ].join("");
  return `VMV-${date}-${crypto.randomUUID().slice(0, 6).toUpperCase()}`;
}

function formatFileSize(bytes: number) {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${Math.ceil(bytes / 1024)} KB`;
}

function FieldSection({
  number,
  title,
  icon: Icon,
  children,
}: {
  number: string;
  title: string;
  icon: typeof FileText;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="mt-9 border-t border-white/10 pt-8 first:mt-0 first:border-0 first:pt-0">
      <legend className="flex items-center gap-3 pr-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#f40b36]/25 bg-[#f40b36]/10 text-[#ff3155]">
          <Icon className="h-4 w-4" />
        </span>
        <span className={sectionTitleClass}>{number} · {title}</span>
      </legend>
      <div className="mt-6">{children}</div>
    </fieldset>
  );
}

export function VideoRequestPage({ requestKind }: { requestKind: VideoRequestKind }) {
  const [form, setForm] = useState<FormState>({ ...initialForm, requestKind });
  const [files, setFiles] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState("");
  const [error, setError] = useState("");
  const [protocol, setProtocol] = useState("");
  const [chooserOpen, setChooserOpen] = useState(true);
  const isNewClient = requestKind === "new_client";

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Solicitar vídeo vertical | VM MÍDIAS";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(event.target.files ?? []);
    event.target.value = "";
    setError("");

    if (files.length + selected.length > MAX_FILES) {
      setError(`Envie no máximo ${MAX_FILES} arquivos por solicitação.`);
      return;
    }
    const invalidType = selected.find((file) => !ALLOWED_FILE_TYPES.has(file.type));
    if (invalidType) {
      setError(`O formato do arquivo “${invalidType.name}” não é aceito.`);
      return;
    }
    const tooLarge = selected.find((file) => file.size > MAX_FILE_SIZE);
    if (tooLarge) {
      setError(`O arquivo “${tooLarge.name}” ultrapassa o limite de 25 MB.`);
      return;
    }
    setFiles((current) => [...current, ...selected]);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (form.website) {
      setProtocol(makeProtocol());
      return;
    }
    if (form.videoIdea.trim().length < 30) {
      setError("Descreva a ideia do vídeo com pelo menos 30 caracteres.");
      return;
    }
    if (isNewClient && files.length === 0) {
      setError("Envie ao menos um logo ou foto para criarmos o Visual Key.");
      return;
    }

    const requestProtocol = makeProtocol();
    const requestId = crypto.randomUUID();
    setSubmitting(true);

    try {
      let uploadedAssets: Awaited<ReturnType<typeof uploadVideoRequestFiles>> = [];
      if (files.length > 0) {
        setUploadProgress(`Enviando ${files.length} ${files.length === 1 ? "arquivo" : "arquivos"}…`);
        uploadedAssets = await uploadVideoRequestFiles(requestId, requestKind, files);
      }
      setUploadProgress("Registrando o briefing…");
      await createVideoRequest({
        id: requestId,
        protocol: requestProtocol,
        request_kind: requestKind,
        company_name: form.companyName.trim(),
        whatsapp: isNewClient ? clean(form.whatsapp) : null,
        business_segment: isNewClient ? clean(form.businessSegment) : null,
        business_description: isNewClient ? clean(form.businessDescription) : null,
        product_service: isNewClient ? clean(form.productService) : null,
        target_audience: isNewClient ? clean(form.targetAudience) : null,
        campaign_objective: isNewClient ? clean(form.campaignObjective) : null,
        offer_details: isNewClient ? clean(form.offerDetails) : null,
        main_message: isNewClient ? clean(form.mainMessage) : null,
        required_texts: isNewClient ? clean(form.requiredTexts) : null,
        call_to_action: isNewClient ? clean(form.callToAction) : null,
        brand_colors: isNewClient ? clean(form.brandColors) : null,
        avoid_colors: isNewClient ? clean(form.avoidColors) : null,
        brand_personality: isNewClient ? clean(form.brandPersonality) : null,
        visual_references: isNewClient ? clean(form.visualReferences) : null,
        video_idea: form.videoIdea.trim(),
        uploaded_assets: uploadedAssets,
        consent: true,
        source_page: "solicitar-video",
        video_format: "vertical_9_16",
        duration_seconds: 20,
      });
      setProtocol(requestProtocol);
      setForm({ ...initialForm, requestKind });
      setFiles([]);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "Não foi possível enviar sua solicitação agora.");
    } finally {
      setSubmitting(false);
      setUploadProgress("");
    }
  };

  if (protocol) {
    return (
      <div className="min-h-screen bg-[#030406] text-white">
        <header className="border-b border-white/10 bg-[#050609]">
          <div className="mx-auto flex h-[76px] max-w-6xl items-center justify-between px-5 sm:px-8">
            <a href="/" aria-label="Voltar ao site da VM MÍDIAS"><VMLogo size="sm" /></a>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/45">Portal do cliente</span>
          </div>
        </header>
        <main className="mx-auto flex min-h-[calc(100vh-76px)] max-w-3xl items-center px-5 py-16 sm:px-8">
          <section className="w-full rounded-2xl border border-emerald-400/25 bg-[#0d1012] p-7 text-center shadow-2xl shadow-black/40 sm:p-12">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/35 bg-emerald-400/10 text-emerald-300"><CheckCircle2 className="h-8 w-8" /></span>
            <p className="mt-7 text-xs font-black uppercase tracking-[0.22em] text-emerald-300">Solicitação recebida</p>
            <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Seu próximo vídeo começou aqui.</h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/60">Recebemos o briefing e os materiais. A VM MÍDIAS vai organizar a criação em formato vertical 9:16 e entrar em contato se precisar confirmar algum detalhe.</p>
            <div className="mx-auto mt-8 max-w-sm rounded-xl border border-white/10 bg-black/30 p-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">Protocolo do pedido</span>
              <strong className="mt-2 block text-xl tracking-[0.08em] text-white">{protocol}</strong>
            </div>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <button type="button" onClick={() => setProtocol("")} className="brand-button brand-button-primary">Solicitar outro vídeo <ArrowRight className="h-4 w-4" /></button>
              <a href="/" className="brand-button brand-button-outline">Voltar ao site</a>
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030406] text-white">
      {chooserOpen && (
        <ClientTypeModal
          currentKind={requestKind}
          onContinue={() => setChooserOpen(false)}
        />
      )}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#030406]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="/" aria-label="Voltar ao site da VM MÍDIAS"><VMLogo size="sm" /></a>
          <div className="flex items-center gap-5">
            <span className="hidden text-[10px] font-black uppercase tracking-[0.18em] text-white/35 sm:inline">Portal de vídeos</span>
            <a href="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-white/58 transition hover:text-white"><ArrowLeft className="h-4 w-4" /><span className="hidden sm:inline">Voltar ao site</span></a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/10 px-5 py-10 sm:px-8 sm:py-12">
          <div className="pointer-events-none absolute inset-0 bg-led-grid opacity-40" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#f40b36]/12 blur-[110px]" />
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="brand-eyebrow justify-center"><span className="brand-eyebrow-line" />{isNewClient ? "Primeiro vídeo" : "Cliente VM MÍDIAS"}</p>
            <h1 className="brand-section-title mx-auto max-w-4xl">
              {isNewClient ? <>Vamos criar a <span className="text-[#f40b36]">identidade da sua marca</span></> : <>Solicite um <span className="text-[#f40b36]">novo vídeo</span></>}
            </h1>
            <p className="brand-section-copy mx-auto">
              {isNewClient ? "Responda com calma. Suas informações serão usadas para criar o Visual Key e o primeiro vídeo vertical de 20 segundos." : "Informe a empresa, descreva a ideia e envie os novos materiais. A VM cuidará do restante usando sua identidade já aprovada."}
            </p>
          </div>
        </section>

        <section className="px-5 py-10 sm:px-8 sm:py-14">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
              <form onSubmit={handleSubmit} className="brand-panel rounded-2xl p-5 sm:p-8 lg:p-10">
                <div className="flex items-start gap-4 border-b border-white/10 pb-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#f40b36]/12 text-[#ff3155]">{isNewClient ? <Sparkles className="h-5 w-5" /> : <Film className="h-5 w-5" />}</span>
                  <div><h2 className="text-xl font-black">{isNewClient ? "Briefing para o Visual Key" : "Briefing do novo vídeo"}</h2></div>
                </div>

                <div className="mt-8">
                  <CompanyFields form={form} update={update} isNewClient={isNewClient} />
                  {isNewClient && <NewClientFields form={form} update={update} />}
                  <VideoIdeaFields form={form} update={update} isNewClient={isNewClient} />
                  <UploadFields files={files} onFiles={handleFiles} onRemove={(index) => setFiles((current) => current.filter((_, itemIndex) => itemIndex !== index))} isNewClient={isNewClient} />
                </div>

                <div className="sr-only" aria-hidden="true"><label>Website<input tabIndex={-1} autoComplete="off" value={form.website} onChange={(event) => update("website", event.target.value)} /></label></div>
                <div className="mt-8 flex items-start gap-3 rounded-xl border border-white/10 bg-black/25 p-4 text-sm leading-6 text-white/58">
                  <input id="video-request-consent" required type="checkbox" checked={form.consent} onChange={(event) => update("consent", event.target.checked)} className="mt-1 h-4 w-4 shrink-0 accent-[#f40b36]" />
                  <label htmlFor="video-request-consent" className="cursor-pointer">Autorizo a VM MÍDIAS a utilizar as informações e os arquivos enviados para produzir este vídeo e entrar em contato, conforme a <a href="/politica-de-privacidade" target="_blank" rel="noopener noreferrer" className="font-bold text-white underline decoration-white/35 underline-offset-4 hover:decoration-[#f40b36]">Política de Privacidade</a>. *</label>
                </div>
                {error && <div role="alert" className="mt-5 rounded-lg border border-red-400/25 bg-red-400/10 px-4 py-3 text-sm text-red-200">{error}</div>}
                <button type="submit" disabled={submitting} className="brand-button brand-button-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-55">
                  {submitting ? <><LoaderCircle className="h-4 w-4 animate-spin" />{uploadProgress || "Enviando solicitação…"}</> : <>Enviar solicitação de vídeo<ArrowRight className="h-4 w-4" /></>}
                </button>
              </form>
              <WorkflowAside isNewClient={isNewClient} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ClientTypeModal({
  currentKind,
  onContinue,
}: {
  currentKind: VideoRequestKind;
  onContinue: () => void;
}) {
  const options = [
    {
      value: "new_client" as const,
      href: "/solicitar-video/novo-cliente",
      icon: Sparkles,
      title: "É meu primeiro vídeo",
      copy: "Ainda não tenho um Visual Key criado pela VM MÍDIAS.",
    },
    {
      value: "existing_client" as const,
      href: "/solicitar-video/cliente-atual",
      icon: UserRoundCheck,
      title: "Já sou cliente",
      copy: "Minha empresa já possui identidade e vídeos com a VM MÍDIAS.",
    },
  ];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-4 py-8 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="client-type-title"
    >
      <div className="w-full max-w-2xl rounded-2xl border border-white/15 bg-[#101115] p-5 shadow-2xl sm:p-8">
        <div className="text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f40b36]/12 text-[#ff3155]">
            <UserRoundCheck className="h-7 w-7" />
          </span>
          <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]">
            Antes de começar
          </p>
          <h2 id="client-type-title" className="mt-2 text-2xl font-black sm:text-3xl">
            Qual é a sua situação?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base leading-7 text-white/60">
            Escolha uma opção para abrir o formulário certo. É rápido e você pode voltar se escolher errado.
          </p>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {options.map((option) => {
            const isCurrent = currentKind === option.value;
            const Icon = option.icon;
            const content = (
              <>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#f40b36]/30 bg-[#f40b36]/10 text-[#ff3155]">
                  <Icon className="h-6 w-6" />
                </span>
                <strong className="mt-4 block text-lg">{option.title}</strong>
                <span className="mt-2 block text-sm leading-6 text-white/50">{option.copy}</span>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-white">
                  Continuar <ArrowRight className="h-4 w-4" />
                </span>
              </>
            );

            return isCurrent ? (
              <button
                key={option.value}
                type="button"
                onClick={onContinue}
                className="rounded-xl border border-[#f40b36] bg-[#f40b36]/10 p-5 text-left transition hover:bg-[#f40b36]/15 focus:outline-none focus:ring-2 focus:ring-[#f40b36]"
              >
                {content}
              </button>
            ) : (
              <a
                key={option.value}
                href={option.href}
                className="rounded-xl border border-white/12 bg-black/25 p-5 text-left transition hover:border-[#f40b36]/60 hover:bg-[#f40b36]/5 focus:outline-none focus:ring-2 focus:ring-[#f40b36]"
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

type UpdateForm = <K extends keyof FormState>(key: K, value: FormState[K]) => void;

function CompanyFields({ form, update, isNewClient }: { form: FormState; update: UpdateForm; isNewClient: boolean }) {
  return (
    <FieldSection number="01" title={isNewClient ? "Contato e empresa" : "Identificação"} icon={BriefcaseBusiness}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClass}>Nome da empresa *<input required maxLength={120} value={form.companyName} onChange={(event) => update("companyName", event.target.value)} className={inputClass} placeholder="Nome da empresa" autoComplete="organization" /></label>
        {isNewClient && <>
          <label className={labelClass}>WhatsApp *<input required type="tel" maxLength={30} value={form.whatsapp} onChange={(event) => update("whatsapp", event.target.value)} className={inputClass} placeholder="(15) 99999-9999" autoComplete="tel" /></label>
          <label className={labelClass}>Segmento da empresa *<input required maxLength={120} value={form.businessSegment} onChange={(event) => update("businessSegment", event.target.value)} className={inputClass} placeholder="Ex.: restaurante, academia, loja" /></label>
          <label className={labelClass}>Principal produto ou serviço *<input required maxLength={180} value={form.productService} onChange={(event) => update("productService", event.target.value)} className={inputClass} placeholder="O que deseja destacar?" /></label>
        </>}
      </div>
      {isNewClient && <label className={`${labelClass} mt-5 block`}>Descreva sua empresa *<textarea required minLength={30} maxLength={1200} rows={4} value={form.businessDescription} onChange={(event) => update("businessDescription", event.target.value)} className={inputClass} placeholder="Conte o que a empresa faz, seus diferenciais e como gostaria de ser percebida." /></label>}
    </FieldSection>
  );
}

function NewClientFields({ form, update }: { form: FormState; update: UpdateForm }) {
  return <>
    <FieldSection number="02" title="Campanha e público" icon={Clapperboard}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClass}>Objetivo do vídeo *<select required value={form.campaignObjective} onChange={(event) => update("campaignObjective", event.target.value)} className={inputClass}><option value="" disabled>Selecione uma opção</option><option value="vender">Vender produto ou serviço</option><option value="promocao">Divulgar promoção ou oferta</option><option value="marca">Fortalecer a marca</option><option value="lancamento">Apresentar lançamento</option><option value="evento">Divulgar evento</option><option value="outro">Outro objetivo</option></select></label>
        <label className={labelClass}>Público que deseja atingir *<input required maxLength={300} value={form.targetAudience} onChange={(event) => update("targetAudience", event.target.value)} className={inputClass} placeholder="Ex.: famílias de Capela do Alto" /></label>
        <label className={labelClass}>Oferta, preço ou condição<input maxLength={300} value={form.offerDetails} onChange={(event) => update("offerDetails", event.target.value)} className={inputClass} placeholder="Ex.: 20% de desconto até domingo" /></label>
        <label className={labelClass}>Chamada para ação *<input required maxLength={160} value={form.callToAction} onChange={(event) => update("callToAction", event.target.value)} className={inputClass} placeholder="Ex.: Peça agora pelo WhatsApp" /></label>
      </div>
      <label className={`${labelClass} mt-5 block`}>Mensagem principal *<input required maxLength={180} value={form.mainMessage} onChange={(event) => update("mainMessage", event.target.value)} className={inputClass} placeholder="A frase mais importante do vídeo" /></label>
      <label className={`${labelClass} mt-5 block`}>Textos e informações obrigatórias<textarea maxLength={1000} rows={4} value={form.requiredTexts} onChange={(event) => update("requiredTexts", event.target.value)} className={inputClass} placeholder="Telefone, endereço, Instagram, preços e outros textos que devem aparecer." /></label>
    </FieldSection>
    <FieldSection number="03" title="Identidade para o Visual Key" icon={Palette}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClass}>Cores da marca *<input required maxLength={250} value={form.brandColors} onChange={(event) => update("brandColors", event.target.value)} className={inputClass} placeholder="Ex.: vermelho, preto e branco" /></label>
        <label className={labelClass}>Cores ou estilos que devemos evitar<input maxLength={250} value={form.avoidColors} onChange={(event) => update("avoidColors", event.target.value)} className={inputClass} placeholder="Ex.: não usar tons pastéis" /></label>
        <label className={labelClass}>Personalidade da marca *<select required value={form.brandPersonality} onChange={(event) => update("brandPersonality", event.target.value)} className={inputClass}><option value="" disabled>Selecione a personalidade</option><option value="moderna_impactante">Moderna e impactante</option><option value="elegante_premium">Elegante e premium</option><option value="popular_promocional">Popular e promocional</option><option value="leve_divertida">Leve e divertida</option><option value="confiavel_profissional">Confiável e profissional</option><option value="minimalista">Limpa e minimalista</option></select></label>
        <label className={labelClass}>Referências visuais<input maxLength={500} value={form.visualReferences} onChange={(event) => update("visualReferences", event.target.value)} className={inputClass} placeholder="Marcas, campanhas ou estilos que você gosta" /></label>
      </div>
    </FieldSection>
  </>;
}

function VideoIdeaFields({ form, update, isNewClient }: { form: FormState; update: UpdateForm; isNewClient: boolean }) {
  return (
    <FieldSection number={isNewClient ? "04" : "02"} title="Ideia do vídeo" icon={Film}>
      <label className={labelClass}>{isNewClient ? "Como você imagina o vídeo? *" : "Conte a ideia do novo vídeo *"}<textarea required minLength={30} maxLength={2400} rows={7} value={form.videoIdea} onChange={(event) => update("videoIdea", event.target.value)} className={inputClass} placeholder={isNewClient ? "Descreva cenas, sequência, clima, produtos que devem aparecer e qualquer ideia importante." : "Explique a nova campanha, o que deve aparecer, a mensagem, oferta e o que mudou em relação ao vídeo anterior."} /><span className="mt-2 block text-xs font-normal text-white/35">{form.videoIdea.length}/2400 caracteres</span></label>
    </FieldSection>
  );
}

function UploadFields({ files, onFiles, onRemove, isNewClient }: { files: File[]; onFiles: (event: ChangeEvent<HTMLInputElement>) => void; onRemove: (index: number) => void; isNewClient: boolean }) {
  return (
    <FieldSection number={isNewClient ? "05" : "03"} title={isNewClient ? "Logo, fotos e referências" : "Materiais do novo vídeo"} icon={FolderUp}>
      <label className="group flex cursor-pointer flex-col items-center rounded-xl border border-dashed border-white/18 bg-black/20 px-5 py-8 text-center transition hover:border-[#f40b36]/60 hover:bg-[#f40b36]/5">
        <input type="file" multiple accept="image/jpeg,image/png,image/webp,image/svg+xml,application/pdf,video/mp4,video/quicktime" onChange={onFiles} className="sr-only" />
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f40b36]/12 text-[#ff3155]"><UploadCloud className="h-6 w-6" /></span>
        <strong className="mt-4 text-sm">Clique para escolher os arquivos</strong>
        <span className="mt-2 max-w-lg text-xs leading-5 text-white/38">PNG, JPG, WEBP, SVG, PDF, MP4 ou MOV · até 25 MB por arquivo · máximo de {MAX_FILES} arquivos</span>
      </label>
      {files.length > 0 && <ul className="mt-4 grid gap-2 sm:grid-cols-2">{files.map((file, index) => <li key={`${file.name}-${file.lastModified}-${index}`} className="flex min-w-0 items-center gap-3 rounded-lg border border-white/10 bg-black/25 p-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#ff3155]">{file.type.startsWith("image/") ? <ImageIcon className="h-4 w-4" /> : <FileImage className="h-4 w-4" />}</span><span className="min-w-0 flex-1"><span className="block truncate text-xs font-bold text-white/78">{file.name}</span><span className="mt-0.5 block text-[10px] text-white/35">{formatFileSize(file.size)}</span></span><button type="button" onClick={() => onRemove(index)} aria-label={`Remover ${file.name}`} className="rounded-md p-2 text-white/35 transition hover:bg-red-400/10 hover:text-red-300"><Trash2 className="h-4 w-4" /></button></li>)}</ul>}
    </FieldSection>
  );
}

function WorkflowAside({ isNewClient }: { isNewClient: boolean }) {
  const steps = isNewClient
    ? ["Organizamos seu briefing e seus materiais.", "Criamos e aprovamos o Visual Key.", "Produzimos duas partes contínuas de 10s.", "Unimos, revisamos e entregamos o vídeo 9:16."]
    : ["Recebemos a nova ideia e os materiais.", "Recuperamos a identidade visual da sua marca.", "Produzimos duas partes contínuas de 10s.", "Revisamos e entregamos o vídeo final de 20s."];
  return (
    <aside className="space-y-5 lg:sticky lg:top-24">
      <div className="brand-panel rounded-2xl p-6"><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f40b36]/12 text-[#ff3155]"><Clapperboard className="h-5 w-5" /></span><h2 className="font-black">Fluxo de produção</h2></div><ol className="mt-6 space-y-5">{steps.map((item, index) => <li key={item} className="flex gap-3 text-sm leading-6 text-white/58"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#f40b36]/35 text-[10px] font-black text-[#ff3155]">{index + 1}</span><span>{item}</span></li>)}</ol></div>
      <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.055] p-6"><ShieldCheck className="h-6 w-6 text-emerald-300" /><h2 className="mt-4 font-black">Arquivos privados</h2><p className="mt-2 text-sm leading-6 text-white/52">Os materiais são enviados para uma área privada no Supabase e organizados por tipo de cliente e protocolo.</p></div>
      <div className="rounded-2xl border border-white/10 bg-black/20 p-6"><p className="text-xs font-black uppercase tracking-[0.16em] text-white/38">Padrão de entrega</p><ul className="mt-4 space-y-3">{["Formato vertical 9:16", "Duração final de 20 segundos", "Continuidade entre Parte 1 e Parte 2", "Textos, logo e identidade revisados"].map((item) => <li key={item} className="flex gap-2.5 text-sm text-white/58"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#ff3155]" />{item}</li>)}</ul></div>
    </aside>
  );
}
