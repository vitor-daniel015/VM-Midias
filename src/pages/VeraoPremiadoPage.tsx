import {
  ChangeEvent,
  FormEvent,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";
import {
  Check,
  Download,
  FileCheck2,
  LoaderCircle,
  ShieldCheck,
  Upload,
  X,
} from "lucide-react";
import { VMLogo } from "../components/VMLogo";
import { siteConfig } from "../data/siteConfig";
import {
  PROPOSAL_URL,
  initialVeraoForm,
  isValidCnpj,
  isValidCpf,
  maskCep,
  maskCnpj,
  maskCpf,
  maskCpfReview,
  requiredDeclarations,
  type VeraoFormData,
} from "../data/veraoPremiado";
import {
  createCampaignSubmission,
  uploadCampaignFiles,
} from "../lib/veraoPremiadoApi";
import { VeraoPremiadoStory } from "../sections/VeraoPremiadoStory";

const steps = [
  "Dados",
  "Logotipo",
  "Publicidade",
  "Pagamento",
  "Vale-compras",
  "Revisão",
];
const inputClass =
  "mt-2 min-h-14 w-full rounded-2xl border border-white/12 bg-white/[0.045] px-4 text-base text-white outline-none transition duration-200 placeholder:text-white/25 hover:border-white/22 focus:border-[#ffca0a]/70 focus:bg-white/[0.065] focus:ring-4 focus:ring-[#ffca0a]/10";
const labelClass = "block text-sm font-extrabold text-white/78";

type Confirmation = { protocol: string; accepted_at: string; status: string };

export function VeraoPremiadoPage() {
  const [form, setForm] = useState<VeraoFormData>(initialVeraoForm);
  const [step, setStep] = useState(0);
  const [logo, setLogo] = useState<File | null>(null);
  const [declarations, setDeclarations] = useState(
    requiredDeclarations.map(() => false),
  );
  const [finalConsent, setFinalConsent] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [confirmation, setConfirmation] = useState<Confirmation | null>(null);
  const formRef = useRef<HTMLElement>(null);
  const logoPreview = useMemo(
    () =>
      logo && logo.type.startsWith("image/") && logo.type !== "image/svg+xml"
        ? URL.createObjectURL(logo)
        : "",
    [logo],
  );

  useEffect(() => {
    document.title = "Verão Premiado 2027 | VM Mídias";
  }, []);

  useEffect(
    () => () => {
      if (logoPreview) URL.revokeObjectURL(logoPreview);
    },
    [logoPreview],
  );

  const setField = <K extends keyof VeraoFormData>(
    key: K,
    value: VeraoFormData[K],
  ) => setForm((current) => ({ ...current, [key]: value }));

  const validateStep = (current: number) => {
    switch (current) {
      case 0:
        if (form.businessName.trim().length < 2)
          return "Informe o nome completo do comércio.";
        if (form.segment.trim().length < 2)
          return "Informe o segmento comercial.";
        if (
          !form.cep.trim() ||
          !form.street.trim() ||
          !form.number.trim() ||
          !form.neighborhood.trim() ||
          !form.city.trim() ||
          !form.state.trim()
        )
          return "Preencha o endereço completo do comércio.";
        if (form.responsibleName.trim().length < 4)
          return "Informe o nome completo do responsável.";
        if (!isValidCpf(form.cpf))
          return "Informe um CPF válido para o responsável.";
        if (!isValidCnpj(form.cnpj))
          return "Informe um CNPJ válido ou deixe o campo em branco.";
        return "";
      case 1:
        return logo ? "" : "Envie a logomarca do estabelecimento.";
      case 2:
        return "";
      case 3:
        return form.paymentOption ? "" : "Escolha a modalidade de pagamento.";
      case 4:
        return "";
      default:
        return "";
    }
  };

  const go = (direction: 1 | -1) => {
    if (direction === 1) {
      const message = validateStep(step);
      if (message) {
        setError(message);
        return;
      }
    }
    setError("");
    setStep((current) => Math.max(0, Math.min(5, current + direction)));
    window.setTimeout(
      () =>
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
      0,
    );
  };

  const selectLogo = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file && file.size > 20 * 1024 * 1024) {
      setError("A logomarca deve ter no máximo 20 MB.");
      return;
    }
    setLogo(file);
    setError("");
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const invalid = Array.from({ length: 5 }, (_, index) =>
      validateStep(index),
    ).find(Boolean);
    if (invalid) {
      setError(invalid);
      return;
    }
    if (declarations.some((item) => !item) || !finalConsent) {
      setError("Marque todas as declarações e o aceite final para concluir.");
      return;
    }
    if (!logo) return;
    setSubmitting(true);
    setError("");
    setUploadProgress(0);
    const id = crypto.randomUUID();
    try {
      const files = [{ file: logo, kind: "logo" as const }];
      const assets = [];
      for (let index = 0; index < files.length; index += 1) {
        const result = await uploadCampaignFiles(
          id,
          [files[index].file],
          files[index].kind,
        );
        assets.push(...result);
        setUploadProgress(Math.round(((index + 1) / files.length) * 80));
      }
      const result = await createCampaignSubmission({
        id,
        form,
        assets,
        declarations,
      });
      setUploadProgress(100);
      setConfirmation(result);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (reason) {
      setError(
        reason instanceof Error
          ? reason.message
          : "Não foi possível enviar a inscrição.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (confirmation)
    return <ConfirmationPage confirmation={confirmation} form={form} />;

  return (
    <div className="min-h-screen bg-[#050305] text-white selection:bg-[#ffcc00] selection:text-black">
      <CampaignHeader
        onJoin={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}
      />
      <main>
        <VeraoPremiadoStory
          onJoin={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}
        />

        <section
          ref={formRef}
          id="inscricao"
          className="vp-form-section scroll-mt-20 border-t border-white/10 px-4 py-24 sm:px-8 lg:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <div className="vp-form-layout">
              <Progress step={step} />
              <div className="vp-form-card">
                <form onSubmit={submit} className="p-5 sm:p-9 lg:p-11">
                  <div className="mb-8 border-b border-white/8 pb-7">
                    <p className="text-xs font-black uppercase tracking-[.16em] text-[#ffcc0b]">
                      Etapa {step + 1} de {steps.length}
                    </p>
                    <h3 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                      {stepTitles[step]}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-white/50">
                      {stepDescriptions[step]}
                    </p>
                  </div>
                  <div key={step} className="vp-form-step">
                    {step === 0 && (
                      <BusinessAndResponsibleStep
                        form={form}
                        setField={setField}
                      />
                    )}
                    {step === 1 && (
                      <LogoStep
                        file={logo}
                        preview={logoPreview || ""}
                        onChange={selectLogo}
                        onRemove={() => setLogo(null)}
                      />
                    )}
                    {step === 2 && (
                      <AdvertisingStep form={form} setField={setField} />
                    )}
                    {step === 3 && (
                      <PaymentStep
                        selected={form.paymentOption}
                        onSelect={(v) => setField("paymentOption", v)}
                      />
                    )}
                    {step === 4 && (
                      <VoucherStep
                        form={form}
                        setField={setField}
                        onSkip={() => {
                          setField("contributionType", "");
                          setField("contributionDescription", "");
                          go(1);
                        }}
                      />
                    )}
                    {step === 5 && (
                      <ReviewStep
                        form={form}
                        logo={logo}
                        declarations={declarations}
                        setDeclarations={setDeclarations}
                        finalConsent={finalConsent}
                        setFinalConsent={setFinalConsent}
                      />
                    )}
                  </div>
                  {error && (
                    <div
                      role="alert"
                      className="mt-6 rounded-xl border border-red-400/30 bg-red-400/10 p-4 text-sm text-red-100"
                    >
                      {error}
                    </div>
                  )}
                  {submitting && (
                    <div className="mt-6">
                      <div className="flex justify-between text-xs font-bold">
                        <span>Enviando inscrição com segurança</span>
                        <span>{uploadProgress}%</span>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full bg-[#ffcc0b] transition-all"
                          style={{ width: `${uploadProgress}%` }}
                        />
                      </div>
                    </div>
                  )}
                  <div className="mt-8 flex flex-col-reverse gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-between">
                    <button
                      type="button"
                      disabled={step === 0 || submitting}
                      onClick={() => go(-1)}
                      className="vp-form-nav-button border border-white/15 text-white/70 disabled:opacity-30"
                    >
                      Voltar
                    </button>
                    {step < 5 ? (
                      <button
                        type="button"
                        onClick={() => go(1)}
                        className="vp-form-nav-button bg-[#f20b2f] text-white shadow-[0_14px_36px_rgba(248,3,45,.28)]"
                      >
                        Continuar
                      </button>
                    ) : (
                      <button
                        disabled={submitting}
                        className="vp-form-nav-button inline-flex min-h-14 items-center justify-center gap-2 bg-[#ffcc0b] text-black disabled:opacity-55"
                      >
                        {submitting ? (
                          <LoaderCircle className="h-5 w-5 animate-spin" />
                        ) : (
                          <Check className="h-5 w-5" />
                        )}
                        Eu concordo e quero participar
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CampaignFooter />
    </div>
  );
}

const stepTitles = [
  "Dados do comércio",
  "Envie o logotipo",
  "Publicidade do seu negócio",
  "Forma de pagamento",
  "Vale-compras",
  "Revise e aceite os termos",
];
const stepDescriptions = [
  "Informe os dados do estabelecimento e do responsável.",
  "Utilizaremos a marca nos materiais oficiais da campanha.",
  "As duas informações são opcionais e podem ser preenchidas de forma resumida.",
  "Escolha entre pagamento à vista ou parcelado.",
  "Esta etapa é opcional. Você pode informar o vale-compras ou pular.",
  "Confira os dados principais e registre seu aceite.",
];

function CampaignHeader({ onJoin }: { onJoin: () => void }) {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <div className="pointer-events-auto mx-auto flex min-h-[68px] max-w-7xl items-center justify-between rounded-2xl border border-white/12 bg-[#090506]/82 px-4 shadow-2xl shadow-black/25 backdrop-blur-2xl sm:px-6">
        <a href="/" aria-label="Voltar ao site da VM Mídias">
          <VMLogo size="sm" />
        </a>
        <div className="flex items-center gap-2">
          <a
            href={PROPOSAL_URL}
            target="_blank"
            className="hidden rounded-full border border-white/12 px-4 py-2.5 text-xs font-black uppercase tracking-wide text-white/60 transition hover:border-white/30 hover:text-white sm:inline-flex"
          >
            Ver proposta
          </a>
          <button
            onClick={onJoin}
            className="rounded-full bg-[#f20b2f] px-5 py-3 text-xs font-black uppercase tracking-wide shadow-[0_10px_30px_rgba(248,3,45,.32)] transition hover:-translate-y-0.5 hover:bg-[#ff2448]"
          >
            Quero participar
          </button>
        </div>
      </div>
    </header>
  );
}

function CampaignFooter() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <VMLogo size="sm" />
          <p className="mt-3">
            Capela do Alto - SP · {siteConfig.company.whatsappFormatted}
          </p>
        </div>
        <div className="flex flex-wrap gap-5">
          <a href="/politica-de-privacidade" className="hover:text-white">
            Aviso de privacidade
          </a>
          <a href={PROPOSAL_URL} target="_blank" className="hover:text-white">
            Proposta comercial
          </a>
          <a
            href={`https://wa.me/${siteConfig.company.whatsappRaw}`}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            Atendimento oficial
          </a>
        </div>
      </div>
    </footer>
  );
}

function Progress({ step }: { step: number }) {
  return (
    <aside className="vp-form-progress" aria-label="Progresso da inscrição">
      <ol>
        {steps.map((label, index) => (
          <li
            key={label}
            className={
              index === step ? "is-current" : index < step ? "is-done" : ""
            }
          >
            <b>
              {index < step ? <Check className="h-3.5 w-3.5" /> : index + 1}
            </b>
            <span>{label}</span>
          </li>
        ))}
      </ol>
    </aside>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className={labelClass}>
      {label}
      {required && <span className="text-[#ffcc0b]"> *</span>}
      {children}
    </label>
  );
}
function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={inputClass} />;
}
function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea {...props} className={`${inputClass} min-h-36 resize-y py-3`} />
  );
}

function BusinessAndResponsibleStep({ form, setField }: StepProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <Field label="Nome do comércio" required>
        <Input
          value={form.businessName}
          onChange={(e) => setField("businessName", e.target.value)}
        />
      </Field>
      <Field label="CNPJ">
        <Input
          inputMode="numeric"
          value={form.cnpj}
          onChange={(e) => setField("cnpj", maskCnpj(e.target.value))}
          placeholder="00.000.000/0000-00"
        />
      </Field>
      <Field label="Segmento comercial" required>
        <Input
          value={form.segment}
          onChange={(e) => setField("segment", e.target.value)}
          placeholder="Ex.: roupas, alimentação, serviços"
        />
      </Field>
      <Field label="Instagram">
        <Input
          value={form.businessInstagram}
          onChange={(e) => setField("businessInstagram", e.target.value)}
          placeholder="@seucomercio"
        />
      </Field>
      <Field label="CEP" required>
        <Input
          inputMode="numeric"
          value={form.cep}
          onChange={(e) => setField("cep", maskCep(e.target.value))}
        />
      </Field>
      <Field label="Rua ou avenida" required>
        <Input
          value={form.street}
          onChange={(e) => setField("street", e.target.value)}
        />
      </Field>
      <Field label="Número" required>
        <Input
          value={form.number}
          onChange={(e) => setField("number", e.target.value)}
        />
      </Field>
      <Field label="Complemento">
        <Input
          value={form.complement}
          onChange={(e) => setField("complement", e.target.value)}
        />
      </Field>
      <Field label="Bairro" required>
        <Input
          value={form.neighborhood}
          onChange={(e) => setField("neighborhood", e.target.value)}
        />
      </Field>
      <div className="grid grid-cols-[1.5fr_1fr] gap-3">
        <Field label="Cidade" required>
          <Input
            value={form.city}
            onChange={(e) => setField("city", e.target.value)}
          />
        </Field>
        <Field label="Estado" required>
          <Input
            value={form.state}
            onChange={(e) => setField("state", e.target.value)}
          />
        </Field>
      </div>
      <div className="sm:col-span-2 mt-2 border-t border-white/10 pt-6">
        <p className="text-xs font-black uppercase tracking-[.16em] text-[#ffcc0b]">
          Responsável
        </p>
      </div>
      <Field label="Nome do responsável" required>
        <Input
          value={form.responsibleName}
          onChange={(e) => setField("responsibleName", e.target.value)}
        />
      </Field>
      <Field label="CPF do responsável" required>
        <Input
          inputMode="numeric"
          value={form.cpf}
          onChange={(e) => setField("cpf", maskCpf(e.target.value))}
          placeholder="000.000.000-00"
        />
      </Field>
    </div>
  );
}

type StepProps = {
  form: VeraoFormData;
  setField: <K extends keyof VeraoFormData>(
    key: K,
    value: VeraoFormData[K],
  ) => void;
};
function LogoStep({
  file,
  preview,
  onChange,
  onRemove,
}: {
  file: File | null;
  preview: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onRemove: () => void;
}) {
  return (
    <div>
      <p className="mb-5 text-sm leading-6 text-white/55">
        Utilizaremos sua logomarca para personalizar os materiais oficiais da
        campanha e produzir suas peças publicitárias.
      </p>
      {file ? (
        <div className="flex items-center gap-4 rounded-2xl border border-[#ffcc0b]/30 bg-[#ffcc0b]/5 p-4">
          {preview ? (
            <img
              src={preview}
              alt="Pré-visualização da logomarca"
              className="h-24 w-24 rounded-xl bg-white object-contain p-2"
            />
          ) : (
            <FileCheck2 className="h-14 w-14 text-[#ffcc0b]" />
          )}
          <div className="min-w-0 flex-1">
            <p className="truncate font-bold">{file.name}</p>
            <p className="mt-1 text-sm text-white/45">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
          <button
            type="button"
            onClick={onRemove}
            aria-label="Remover arquivo"
            className="rounded-lg border border-white/15 p-3"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      ) : (
        <label className="flex min-h-64 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/18 bg-black/20 p-8 text-center hover:border-[#ffcc0b]/60">
          <Upload className="h-10 w-10 text-[#ffcc0b]" />
          <span className="mt-4 text-lg font-black">Selecione a logomarca</span>
          <span className="mt-2 text-sm text-white/45">
            PNG, JPG, JPEG, PDF ou SVG · até 20 MB
          </span>
          <input
            type="file"
            accept=".png,.jpg,.jpeg,.pdf,.svg,image/png,image/jpeg,application/pdf,image/svg+xml"
            className="sr-only"
            onChange={onChange}
          />
        </label>
      )}
    </div>
  );
}

function AdvertisingStep({ form, setField }: StepProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <Field label="Publicidade na Rádio Braba (opcional)">
        <TextArea
          value={form.radioBriefing}
          maxLength={1200}
          onChange={(e) => setField("radioBriefing", e.target.value)}
          placeholder="O que gostaria de divulgar na rádio?"
        />
      </Field>
      <Field label="Publicidade no vídeo de 20 segundos (opcional)">
        <TextArea
          value={form.motionBriefing}
          maxLength={1200}
          onChange={(e) => setField("motionBriefing", e.target.value)}
          placeholder="Qual mensagem gostaria de destacar no vídeo?"
        />
      </Field>
      <p className="sm:col-span-2 text-sm leading-6 text-white/45">
        Você pode preencher uma, as duas ou nenhuma opção. A equipe da VM Mídias
        poderá alinhar os detalhes posteriormente.
      </p>
    </div>
  );
}

function PaymentStep({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (v: "avista" | "parcelado") => void;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {[
        {
          id: "avista" as const,
          title: "Pagamento à vista",
          price: "R$ 250",
          note: "Valor total à vista",
        },
        {
          id: "parcelado" as const,
          title: "Pagamento parcelado",
          price: "2x de R$ 150",
          note: "Total de R$ 300",
        },
      ].map((option) => (
        <button
          type="button"
          key={option.id}
          onClick={() => onSelect(option.id)}
          className={`rounded-2xl border p-6 text-left transition ${selected === option.id ? "border-[#ffcc0b] bg-[#ffcc0b]/8 shadow-[0_0_0_3px_rgba(255,204,11,.08)]" : "border-white/12 bg-black/20 hover:border-white/30"}`}
        >
          <span className="text-sm font-black uppercase text-white/50">
            {option.title}
          </span>
          <strong className="mt-3 block text-3xl">{option.price}</strong>
          <span className="mt-2 block text-sm text-white/45">
            {option.note}
          </span>
        </button>
      ))}
      <p className="sm:col-span-2 text-sm leading-6 text-white/45">
        A página não realiza cobrança automática. Datas e vencimentos serão
        confirmados pela equipe da VM Mídias.
      </p>
    </div>
  );
}

function VoucherStep({
  form,
  setField,
  onSkip,
}: StepProps & { onSkip: () => void }) {
  return (
    <div>
      <Field label="Descrição do vale-compras (opcional)">
        <Input
          value={form.contributionDescription}
          onChange={(e) => {
            setField("contributionDescription", e.target.value);
            setField(
              "contributionType",
              e.target.value.trim() ? "vale_compra" : "",
            );
          }}
          placeholder="Ex.: vale-compras de R$ 100"
        />
      </Field>
      <p className="mt-3 text-sm leading-6 text-white/45">
        Se não quiser disponibilizar um vale-compras, pule esta etapa.
      </p>
      <button
        type="button"
        onClick={onSkip}
        className="mt-6 rounded-full border border-white/15 px-5 py-3 text-xs font-black uppercase text-white/70 transition hover:border-white/35 hover:text-white"
      >
        Pular esta etapa
      </button>
    </div>
  );
}

function ReviewStep({
  form,
  logo,
  declarations,
  setDeclarations,
  finalConsent,
  setFinalConsent,
}: {
  form: VeraoFormData;
  logo: File | null;
  declarations: boolean[];
  setDeclarations: (v: boolean[]) => void;
  finalConsent: boolean;
  setFinalConsent: (v: boolean) => void;
}) {
  const rows = [
    ["Estabelecimento", form.businessName],
    ["Responsável", form.responsibleName],
    ["CPF", maskCpfReview(form.cpf)],
    ["Logotipo", logo?.name || "Não enviado"],
    [
      "Pagamento",
      form.paymentOption === "avista"
        ? "R$ 250,00 à vista"
        : "2x de R$ 150,00 (total R$ 300,00)",
    ],
    ["Vale-compras", form.contributionDescription || "Não informado"],
  ] as const;
  return (
    <div>
      <div className="divide-y divide-white/8 rounded-2xl border border-white/10 bg-black/20">
        {rows.map(([label, value]) => (
          <div
            key={label}
            className="grid gap-2 p-4 sm:grid-cols-[140px_1fr] sm:items-start"
          >
            <strong className="text-sm text-white/45">{label}</strong>
            <span className="text-sm leading-6">{value}</span>
          </div>
        ))}
      </div>
      <div className="mt-7 rounded-2xl border border-[#ffcc0b]/25 bg-[#ffcc0b]/5 p-5">
        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-[#ffcc0b]" />
          <div>
            <h4 className="font-black">
              Termos de adesão - Verão Premiado 2027
            </h4>
            <p className="mt-2 text-sm leading-6 text-white/55">
              O aceite registra data, horário, versão dos termos, declarações,
              responsável e uma referência imutável das condições comerciais.
            </p>
            <a
              href={PROPOSAL_URL}
              target="_blank"
              className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#ffcc0b]"
            >
              <Download className="h-4 w-4" />
              Ler e baixar a proposta comercial
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6 space-y-3">
        {requiredDeclarations.map((text, index) => (
          <label
            key={text}
            className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 text-sm leading-6"
          >
            <input
              type="checkbox"
              checked={declarations[index]}
              onChange={(e) =>
                setDeclarations(
                  declarations.map((value, i) =>
                    i === index ? e.target.checked : value,
                  ),
                )
              }
              className="mt-1 h-5 w-5 shrink-0 accent-[#ffcc0b]"
            />
            {text}
          </label>
        ))}
      </div>
      <label className="mt-5 flex cursor-pointer items-center gap-3 rounded-xl border-2 border-[#ffcc0b]/45 bg-[#ffcc0b]/7 p-5 font-black">
        <input
          type="checkbox"
          checked={finalConsent}
          onChange={(e) => setFinalConsent(e.target.checked)}
          className="h-6 w-6 shrink-0 accent-[#ffcc0b]"
        />
        Eu li e concordo com os termos de adesão ao Verão Premiado 2027.
      </label>
    </div>
  );
}

function ConfirmationPage({
  confirmation,
  form,
}: {
  confirmation: Confirmation;
  form: VeraoFormData;
}) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(242,11,47,.2),transparent_38%),#050305] px-5 py-12 text-white">
      <main className="mx-auto max-w-2xl">
        <VMLogo size="md" />
        <div className="mt-10 rounded-3xl border border-white/12 bg-[#0c080a] p-6 sm:p-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400 text-black">
            <Check className="h-7 w-7" />
          </div>
          <h1 className="mt-6 text-4xl font-black sm:text-5xl">
            Recebemos sua inscrição!
          </h1>
          <p className="mt-4 leading-7 text-white/60">
            Obrigado por fazer parte do Verão Premiado 2027 da VM Mídias. Nossa
            equipe irá conferir suas informações e dar continuidade ao processo
            de adesão.
          </p>
          <dl className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10">
            {[
              ["Comércio", form.businessName],
              ["Protocolo", confirmation.protocol],
              [
                "Data da inscrição",
                new Intl.DateTimeFormat("pt-BR", {
                  dateStyle: "long",
                  timeStyle: "short",
                  timeZone: "America/Sao_Paulo",
                }).format(new Date(confirmation.accepted_at)),
              ],
              [
                "Forma de pagamento",
                form.paymentOption === "avista"
                  ? "À vista - R$ 250,00"
                  : "Parcelado - 2x de R$ 150,00",
              ],
              ["Status", "Recebida - aguardando análise"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="grid gap-1 p-4 sm:grid-cols-[160px_1fr]"
              >
                <dt className="text-sm text-white/45">{label}</dt>
                <dd className="font-bold">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-7 rounded-xl bg-white/5 p-5">
            <p className="font-black">Próximos passos</p>
            <p className="mt-2 text-sm leading-6 text-white/55">
              A equipe validará os dados, os materiais e a contribuição. Depois
              entrará em contato pelo canal informado. O recebimento não
              confirma pagamento nem aprovação definitiva.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={`https://wa.me/${siteConfig.company.whatsappRaw}?text=${encodeURIComponent(`Olá! Minha inscrição no Verão Premiado 2027 é ${confirmation.protocol}.`)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#f20b2f] px-5 text-sm font-black uppercase"
            >
              Falar com a VM Mídias
            </a>
            <a
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 px-5 text-sm font-bold"
            >
              Voltar ao site
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
