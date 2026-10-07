import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  FileImage,
  Image as ImageIcon,
  LoaderCircle,
  MapPin,
  Pencil,
  Plus,
  Search,
  Trash2,
  UploadCloud,
} from "lucide-react";
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { VMLogo } from "../components/VMLogo";
import {
  BusinessPayload,
  BusinessRecord,
  createBusiness,
  createVideoRequest,
  listBusinessesPublic,
  publicBusinessAssetUrl,
  updateBusiness,
  uploadBusinessFiles,
  uploadVideoRequestFiles,
} from "../lib/supabase";

const MAX_FILES = 5;
const MAX_FILE_SIZE = 25 * 1024 * 1024;
const IMAGE_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/svg+xml",
]);
const inputClass =
  "mt-2 min-h-12 w-full rounded-xl border border-white/20 bg-[#07080b] px-4 py-3 text-[15px] text-white placeholder:text-white/40 transition hover:border-white/30 focus:border-[#f40b36] focus:outline-none focus:ring-2 focus:ring-[#f40b36]/25";
const labelClass = "block text-sm font-bold text-white";

const objectives = [
  ["institucional", "Publicidade institucional da marca"],
  ["produto_servico", "Divulgar determinado produto ou serviço"],
  ["promocao", "Promoção exclusiva e/ou inédita"],
  ["fortalecer_marca", "Fortalecer a marca"],
  ["visita_estabelecimento", "Incentivar a visita no meu estabelecimento"],
  ["outro", "Outro"],
] as const;

function makeProtocol() {
  const now = new Date();
  const date = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
  return `VMV-${date}-${crypto.randomUUID().slice(0, 6).toUpperCase()}`;
}

function clean(value: string) {
  return value.trim() || null;
}

function validateFiles(current: File[], selected: File[]) {
  if (current.length + selected.length > MAX_FILES)
    return `Envie no máximo ${MAX_FILES} imagens.`;
  const invalid = selected.find((file) => !IMAGE_TYPES.has(file.type));
  if (invalid) return `O formato de “${invalid.name}” não é aceito.`;
  const tooLarge = selected.find((file) => file.size > MAX_FILE_SIZE);
  if (tooLarge) return `O arquivo “${tooLarge.name}” ultrapassa 25 MB.`;
  return "";
}

function PortalShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#030406] text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#030406]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link to="/" aria-label="Voltar ao site">
            <VMLogo size="sm" />
          </Link>
          <div className="flex items-center gap-5">
            <span className="hidden text-[10px] font-black uppercase tracking-[0.18em] text-white/35 sm:inline">
              Portal de vídeos
            </span>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-white/60 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Voltar ao site</span>
            </Link>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}

function PageIntro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 px-5 py-12 sm:px-8 sm:py-16">
      <div className="pointer-events-none absolute inset-0 bg-led-grid opacity-35" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#f40b36]/12 blur-[110px]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="brand-eyebrow justify-center">
          <span className="brand-eyebrow-line" />
          {eyebrow}
        </p>
        <h1 className="brand-section-title">{title}</h1>
        <p className="brand-section-copy mx-auto">{copy}</p>
      </div>
    </section>
  );
}

export function BusinessDirectoryPage() {
  const [businesses, setBusinesses] = useState<BusinessRecord[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Escolha seu negócio | VM MÍDIAS";
    listBusinessesPublic()
      .then(setBusinesses)
      .catch((reason) =>
        setError(
          reason instanceof Error
            ? reason.message
            : "Não foi possível carregar os negócios.",
        ),
      )
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    const value = query.trim().toLocaleLowerCase("pt-BR");
    if (!value) return businesses;
    return businesses.filter((business) =>
      `${business.name} ${business.segment}`
        .toLocaleLowerCase("pt-BR")
        .includes(value),
    );
  }, [businesses, query]);

  return (
    <PortalShell>
      <main>
        <PageIntro
          eyebrow="Seu espaço na VM MÍDIAS"
          title={
            <>
              Encontre seu <span className="text-[#f40b36]">negócio</span>
            </>
          }
          copy="Pesquise o nome do seu negócio para consultar os dados cadastrados e solicitar um novo vídeo."
        />
        <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
          <div className="flex flex-col gap-4 rounded-2xl border border-white/12 bg-[#0d0f13] p-4 sm:flex-row sm:items-center sm:p-5">
            <label className="relative min-w-0 flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/35" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="h-14 w-full rounded-xl border border-white/15 bg-black/30 pl-12 pr-4 text-base outline-none placeholder:text-white/35 focus:border-[#f40b36]"
                placeholder="Digite o nome do negócio"
                autoFocus
              />
            </label>
            <Link
              to="/solicitar-video/novo-negocio"
              className="brand-button brand-button-primary whitespace-nowrap"
            >
              <Plus className="h-4 w-4" />
              Cadastrar negócio
            </Link>
          </div>
          {error && (
            <p className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100">
              {error}
            </p>
          )}
          {loading ? (
            <div className="flex min-h-64 items-center justify-center">
              <LoaderCircle className="h-8 w-8 animate-spin text-[#f40b36]" />
            </div>
          ) : filtered.length ? (
            <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((business) => (
                <BusinessCard key={business.id} business={business} />
              ))}
            </div>
          ) : (
            <div className="mt-7 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-6 py-16 text-center">
              <Building2 className="mx-auto h-9 w-9 text-white/25" />
              <h2 className="mt-4 text-xl font-black">
                Negócio não encontrado
              </h2>
              <p className="mt-2 text-sm text-white/50">
                Confira o nome ou cadastre o negócio para continuar.
              </p>
            </div>
          )}
        </section>
      </main>
    </PortalShell>
  );
}

function BusinessCard({ business }: { business: BusinessRecord }) {
  const logo = business.assets[0];
  return (
    <Link
      to={`/solicitar-video/negocio/${business.id}`}
      className="group overflow-hidden rounded-2xl border border-white/12 bg-[#0d0f13] p-5 transition hover:-translate-y-1 hover:border-[#f40b36]/55 hover:shadow-2xl hover:shadow-[#f40b36]/10"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/35">
          {logo ? (
            <img
              src={publicBusinessAssetUrl(logo.path)}
              alt={`Logo de ${business.name}`}
              className="h-full w-full object-contain p-2"
            />
          ) : (
            <Building2 className="h-8 w-8 text-white/30" />
          )}
        </div>
        <div className="min-w-0">
          <h2 className="truncate text-xl font-black">{business.name}</h2>
          <p className="mt-1 truncate text-sm text-white/50">
            {business.segment}
          </p>
        </div>
      </div>
      <span className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-black uppercase tracking-[0.1em] text-white/65 group-hover:text-white">
        Abrir negócio <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}

type BusinessFormState = {
  name: string;
  whatsapp: string;
  instagram: string;
  address: string;
  segment: string;
  description: string;
  consent: boolean;
};
const emptyBusiness: BusinessFormState = {
  name: "",
  whatsapp: "",
  instagram: "",
  address: "",
  segment: "",
  description: "",
  consent: false,
};

export function BusinessRegistrationPage() {
  const [form, setForm] = useState(emptyBusiness);
  const [files, setFiles] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [created, setCreated] = useState<BusinessRecord | null>(null);

  useEffect(() => {
    document.title = "Cadastrar negócio | VM MÍDIAS";
  }, []);
  const chooseFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(event.target.files ?? []);
    event.target.value = "";
    const problem = validateFiles(files, selected);
    if (problem) return setError(problem);
    setError("");
    setFiles((current) => [...current, ...selected]);
  };
  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setError("");
    if (!files.length)
      return setError("Envie o logo ou ao menos uma imagem do negócio.");
    setSubmitting(true);
    try {
      const id = crypto.randomUUID();
      const assets = await uploadBusinessFiles(id, files);
      const payload: BusinessPayload = {
        id,
        name: form.name.trim(),
        whatsapp: clean(form.whatsapp),
        instagram: clean(form.instagram),
        address: clean(form.address),
        segment: form.segment.trim(),
        description: clean(form.description),
        assets,
        consent: true,
      };
      await createBusiness(payload);
      setCreated({
        ...payload,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (reason) {
      setError(
        reason instanceof Error
          ? reason.message
          : "Não foi possível cadastrar o negócio.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (created)
    return (
      <SuccessPanel
        title="Negócio cadastrado"
        copy="Agora o negócio já pode ser encontrado na pesquisa e receber novas solicitações de vídeo."
        action={
          <Link
            to={`/solicitar-video/negocio/${created.id}`}
            className="brand-button brand-button-primary"
          >
            Abrir negócio <ArrowRight className="h-4 w-4" />
          </Link>
        }
      />
    );

  return (
    <PortalShell>
      <main>
        <PageIntro
          eyebrow="Primeiro acesso"
          title={
            <>
              Cadastre seu <span className="text-[#f40b36]">negócio</span>
            </>
          }
          copy="Preencha somente as informações principais. Elas ficarão salvas para os próximos vídeos."
        />
        <section className="mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-14">
          <form
            onSubmit={submit}
            className="brand-panel rounded-2xl p-5 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className={`${labelClass} sm:col-span-2`}>
                Nome do negócio *
                <input
                  required
                  maxLength={120}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                  placeholder="Nome do negócio"
                />
              </label>
              <label className={labelClass}>
                Segmento do negócio *
                <input
                  required
                  maxLength={120}
                  value={form.segment}
                  onChange={(e) =>
                    setForm({ ...form, segment: e.target.value })
                  }
                  className={inputClass}
                  placeholder="Ex.: bar, mercado, academia"
                />
              </label>
              <label className={labelClass}>
                Endereço (caso seja físico)
                <input
                  maxLength={300}
                  value={form.address}
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
                  className={inputClass}
                  placeholder="Rua, número e bairro"
                />
              </label>
              <label className={labelClass}>
                WhatsApp
                <input
                  maxLength={30}
                  value={form.whatsapp}
                  onChange={(e) =>
                    setForm({ ...form, whatsapp: e.target.value })
                  }
                  className={inputClass}
                  placeholder="(15) 99999-9999"
                />
              </label>
              <label className={labelClass}>
                Instagram
                <input
                  maxLength={120}
                  value={form.instagram}
                  onChange={(e) =>
                    setForm({ ...form, instagram: e.target.value })
                  }
                  className={inputClass}
                  placeholder="@nomedonegocio"
                />
              </label>
            </div>
            <label className={`${labelClass} mt-5`}>
              Faça uma breve descrição sobre o negócio
              <textarea
                rows={4}
                maxLength={1200}
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                className={inputClass}
                placeholder="Conte brevemente o que o negócio oferece"
              />
            </label>
            <FilePicker
              files={files}
              onFiles={chooseFiles}
              onRemove={(index) =>
                setFiles((current) => current.filter((_, i) => i !== index))
              }
              title="Logo e imagens do negócio *"
              copy="Envie primeiro o logo e depois fotos da fachada, ambiente, produtos ou serviços. Máximo de 5 imagens."
            />
            <Consent
              checked={form.consent}
              onChange={(consent) => setForm({ ...form, consent })}
            />
            {error && (
              <p className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100">
                {error}
              </p>
            )}
            <button
              disabled={submitting}
              className="brand-button brand-button-primary mt-6 w-full disabled:opacity-55"
            >
              {submitting ? (
                <>
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                  Salvando negócio…
                </>
              ) : (
                <>
                  Cadastrar negócio <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </section>
      </main>
    </PortalShell>
  );
}

export function BusinessDetailPage() {
  const { businessId = "" } = useParams();
  const [business, setBusiness] = useState<BusinessRecord | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [editForm, setEditForm] = useState(emptyBusiness);
  const [editFiles, setEditFiles] = useState<File[]>([]);
  const [objective, setObjective] = useState("");
  const [objectiveOther, setObjectiveOther] = useState("");
  const [idea, setIdea] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [protocol, setProtocol] = useState("");

  useEffect(() => {
    listBusinessesPublic()
      .then((items) => {
        const found = items.find((item) => item.id === businessId) || null;
        setBusiness(found);
        if (found)
          setEditForm({
            name: found.name,
            whatsapp: found.whatsapp || "",
            instagram: found.instagram || "",
            address: found.address || "",
            segment: found.segment,
            description: found.description || "",
            consent: true,
          });
      })
      .catch((reason) =>
        setError(
          reason instanceof Error
            ? reason.message
            : "Não foi possível abrir o negócio.",
        ),
      )
      .finally(() => setLoading(false));
  }, [businessId]);

  const chooseFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(event.target.files ?? []);
    event.target.value = "";
    const problem = validateFiles(files, selected);
    if (problem) return setError(problem);
    setError("");
    setFiles((current) => [...current, ...selected]);
  };
  const chooseEditFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(event.target.files ?? []);
    event.target.value = "";
    const problem = validateFiles(editFiles, selected);
    if (problem) return setError(problem);
    if (
      (business?.assets.length || 0) + editFiles.length + selected.length >
      10
    )
      return setError("O negócio pode possuir no máximo 10 imagens.");
    setError("");
    setEditFiles((current) => [...current, ...selected]);
  };
  const saveBusiness = async () => {
    if (!business) return;
    setSubmitting(true);
    setError("");
    try {
      const newAssets = editFiles.length
        ? await uploadBusinessFiles(
            business.id,
            editFiles,
            business.assets.length,
          )
        : [];
      const patch = {
        name: editForm.name.trim(),
        whatsapp: clean(editForm.whatsapp),
        instagram: clean(editForm.instagram),
        address: clean(editForm.address),
        segment: editForm.segment.trim(),
        description: clean(editForm.description),
      };
      await updateBusiness(business.id, patch, newAssets);
      setBusiness({
        ...business,
        ...patch,
        assets: [...business.assets, ...newAssets],
        updated_at: new Date().toISOString(),
      });
      setEditFiles([]);
      setEditing(false);
    } catch (reason) {
      setError(
        reason instanceof Error
          ? reason.message
          : "Não foi possível alterar os dados.",
      );
    } finally {
      setSubmitting(false);
    }
  };
  const sendRequest = async (event: FormEvent) => {
    event.preventDefault();
    if (!business) return;
    setError("");
    if (!objective) return setError("Escolha um objetivo para o vídeo.");
    setSubmitting(true);
    try {
      const id = crypto.randomUUID();
      const requestProtocol = makeProtocol();
      const assets = files.length
        ? await uploadVideoRequestFiles(id, files, business.id)
        : [];
      await createVideoRequest({
        id,
        business_id: business.id,
        protocol: requestProtocol,
        campaign_objective: objective,
        objective_other: objective === "outro" ? clean(objectiveOther) : null,
        video_idea: idea.trim(),
        uploaded_assets: assets,
        consent: true,
        video_format: "vertical_9_16",
        duration_seconds: 20,
      });
      setProtocol(requestProtocol);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (reason) {
      setError(
        reason instanceof Error
          ? reason.message
          : "Não foi possível enviar o pedido.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (loading)
    return (
      <PortalShell>
        <div className="flex min-h-[60vh] items-center justify-center">
          <LoaderCircle className="h-8 w-8 animate-spin text-[#f40b36]" />
        </div>
      </PortalShell>
    );
  if (!business)
    return (
      <PortalShell>
        <div className="mx-auto max-w-xl px-5 py-24 text-center">
          <h1 className="text-3xl font-black">Negócio não encontrado</h1>
          <Link
            to="/solicitar-video"
            className="brand-button brand-button-primary mt-7"
          >
            Voltar para a pesquisa
          </Link>
        </div>
      </PortalShell>
    );
  if (protocol)
    return (
      <SuccessPanel
        title="Novo vídeo solicitado"
        copy={`Recebemos o pedido de ${business.name}. Guarde o protocolo ${protocol}.`}
        action={
          <Link
            to="/solicitar-video"
            className="brand-button brand-button-primary"
          >
            Voltar aos negócios
          </Link>
        }
      />
    );

  const logo = business.assets[0];
  return (
    <PortalShell>
      <main className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
        <Link
          to="/solicitar-video"
          className="inline-flex items-center gap-2 text-sm font-bold text-white/55 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para a pesquisa
        </Link>
        <section className="mt-6 rounded-2xl border border-white/12 bg-[#0d0f13] p-5 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/12 bg-black/30">
              {logo ? (
                <img
                  src={publicBusinessAssetUrl(logo.path)}
                  alt={`Logo de ${business.name}`}
                  className="h-full w-full object-contain p-2"
                />
              ) : (
                <Building2 className="h-9 w-9 text-white/30" />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]">
                Negócio cadastrado
              </p>
              <h1 className="mt-2 text-3xl font-black sm:text-5xl">
                {business.name}
              </h1>
              <p className="mt-2 text-white/50">
                {business.segment}
                {business.address ? ` · ${business.address}` : ""}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setEditing(!editing)}
              className="brand-button brand-button-outline"
            >
              <Pencil className="h-4 w-4" />
              Alterar informações
            </button>
          </div>
          {editing && (
            <div className="mt-7 border-t border-white/10 pt-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className={`${labelClass} sm:col-span-2`}>
                  Nome do negócio *
                  <input
                    required
                    value={editForm.name}
                    onChange={(e) =>
                      setEditForm({ ...editForm, name: e.target.value })
                    }
                    className={inputClass}
                  />
                </label>
                <label className={labelClass}>
                  Segmento *
                  <input
                    required
                    value={editForm.segment}
                    onChange={(e) =>
                      setEditForm({ ...editForm, segment: e.target.value })
                    }
                    className={inputClass}
                  />
                </label>
                <label className={labelClass}>
                  Endereço
                  <input
                    value={editForm.address}
                    onChange={(e) =>
                      setEditForm({ ...editForm, address: e.target.value })
                    }
                    className={inputClass}
                  />
                </label>
                <label className={labelClass}>
                  WhatsApp
                  <input
                    value={editForm.whatsapp}
                    onChange={(e) =>
                      setEditForm({ ...editForm, whatsapp: e.target.value })
                    }
                    className={inputClass}
                  />
                </label>
                <label className={labelClass}>
                  Instagram
                  <input
                    maxLength={120}
                    value={editForm.instagram}
                    onChange={(e) =>
                      setEditForm({ ...editForm, instagram: e.target.value })
                    }
                    className={inputClass}
                    placeholder="@nomedonegocio"
                  />
                </label>
              </div>
              <label className={`${labelClass} mt-5`}>
                Descrição
                <textarea
                  rows={3}
                  value={editForm.description}
                  onChange={(e) =>
                    setEditForm({ ...editForm, description: e.target.value })
                  }
                  className={inputClass}
                />
              </label>
              <FilePicker
                files={editFiles}
                onFiles={chooseEditFiles}
                onRemove={(index) =>
                  setEditFiles((current) =>
                    current.filter((_, i) => i !== index),
                  )
                }
                title="Adicionar novas imagens"
                copy={`Este negócio possui ${business.assets.length} de 10 imagens. Você pode adicionar até 5 por vez.`}
              />
              <button
                type="button"
                disabled={submitting}
                onClick={() => void saveBusiness()}
                className="brand-button brand-button-primary mt-5 disabled:opacity-50"
              >
                {submitting ? (
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                ) : null}
                Salvar alterações
              </button>
            </div>
          )}
        </section>

        <form
          onSubmit={sendRequest}
          className="brand-panel mt-7 rounded-2xl p-5 sm:p-8"
        >
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]">
            Novo pedido
          </p>
          <h2 className="mt-2 text-2xl font-black sm:text-4xl">
            Solicitar novo vídeo
          </h2>
          <p className="mt-3 text-sm leading-6 text-white/50">
            O pedido ficará automaticamente relacionado a {business.name}.
          </p>
          <fieldset className="mt-8">
            <legend className="text-base font-black">
              1. Objetivo do vídeo *
            </legend>
            <p className="mt-1 text-sm text-white/45">
              Escolha apenas uma opção.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {objectives.map(([value, text]) => (
                <label
                  key={value}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm font-bold transition ${objective === value ? "border-[#f40b36] bg-[#f40b36]/10" : "border-white/12 bg-black/20 hover:border-white/25"}`}
                >
                  <input
                    required
                    type="radio"
                    name="objective"
                    value={value}
                    checked={objective === value}
                    onChange={() => setObjective(value)}
                    className="h-4 w-4 accent-[#f40b36]"
                  />
                  {text}
                </label>
              ))}
            </div>
            {objective === "outro" && (
              <label className={`${labelClass} mt-4`}>
                Qual?
                <input
                  maxLength={300}
                  value={objectiveOther}
                  onChange={(e) => setObjectiveOther(e.target.value)}
                  className={inputClass}
                  placeholder="Descreva o outro objetivo"
                />
              </label>
            )}
          </fieldset>
          <label className={`${labelClass} mt-8`}>
            2. Escreva brevemente o que deseja no vídeo
            <textarea
              rows={5}
              maxLength={2400}
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              className={inputClass}
              placeholder="Conte sua ideia de forma simples"
            />
            <span className="mt-2 block text-xs font-normal text-white/35">
              {idea.length}/2400 caracteres
            </span>
          </label>
          <FilePicker
            files={files}
            onFiles={chooseFiles}
            onRemove={(index) =>
              setFiles((current) => current.filter((_, i) => i !== index))
            }
            title="3. Imagens adicionais"
            copy="Envie somente imagens úteis para este novo vídeo. Máximo de 5 imagens."
          />
          <Consent checked={consent} onChange={setConsent} />
          {error && (
            <p className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100">
              {error}
            </p>
          )}
          <button
            disabled={submitting}
            className="brand-button brand-button-primary mt-6 w-full disabled:opacity-55"
          >
            {submitting ? (
              <>
                <LoaderCircle className="h-4 w-4 animate-spin" />
                Enviando pedido…
              </>
            ) : (
              <>
                Solicitar novo vídeo <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
      </main>
    </PortalShell>
  );
}

function FilePicker({
  files,
  onFiles,
  onRemove,
  title,
  copy,
}: {
  files: File[];
  onFiles: (event: ChangeEvent<HTMLInputElement>) => void;
  onRemove: (index: number) => void;
  title: string;
  copy: string;
}) {
  return (
    <div className="mt-7">
      <p className="text-sm font-bold">{title}</p>
      <label className="mt-2 flex cursor-pointer flex-col items-center rounded-xl border border-dashed border-white/20 bg-black/20 px-5 py-7 text-center hover:border-[#f40b36]/60 hover:bg-[#f40b36]/5">
        <input
          type="file"
          multiple
          accept="image/jpeg,image/png,image/webp,image/svg+xml"
          onChange={onFiles}
          className="sr-only"
        />
        <UploadCloud className="h-7 w-7 text-[#ff3155]" />
        <strong className="mt-3 text-sm">Escolher imagens</strong>
        <span className="mt-2 max-w-lg text-xs leading-5 text-white/40">
          {copy}
        </span>
      </label>
      {files.length > 0 && (
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {files.map((file, index) => (
            <li
              key={`${file.name}-${file.lastModified}-${index}`}
              className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/25 p-3"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-[#ff3155]">
                {file.type.startsWith("image/") ? (
                  <ImageIcon className="h-4 w-4" />
                ) : (
                  <FileImage className="h-4 w-4" />
                )}
              </span>
              <span className="min-w-0 flex-1 truncate text-xs font-bold">
                {file.name}
              </span>
              <button
                type="button"
                onClick={() => onRemove(index)}
                aria-label={`Remover ${file.name}`}
                className="rounded-md p-2 text-white/40 hover:bg-red-400/10 hover:text-red-300"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Consent({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="mt-7 flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-black/25 p-4 text-sm leading-6 text-white/60">
      <input
        required
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-1 h-4 w-4 accent-[#f40b36]"
      />
      Autorizo a VM MÍDIAS a utilizar as informações e imagens enviadas para
      produzir os vídeos e entrar em contato.
    </label>
  );
}

function SuccessPanel({
  title,
  copy,
  action,
}: {
  title: string;
  copy: string;
  action: React.ReactNode;
}) {
  return (
    <PortalShell>
      <main className="mx-auto flex min-h-[calc(100vh-76px)] max-w-2xl items-center px-5 py-16">
        <section className="w-full rounded-2xl border border-emerald-400/25 bg-[#0d1012] p-8 text-center">
          <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-300" />
          <h1 className="mt-6 text-3xl font-black sm:text-5xl">{title}</h1>
          <p className="mx-auto mt-4 max-w-lg leading-7 text-white/55">
            {copy}
          </p>
          <div className="mt-8">{action}</div>
        </section>
      </main>
    </PortalShell>
  );
}
