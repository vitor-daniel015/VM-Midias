import {
  ArrowLeft,
  Building2,
  Check,
  ChevronRight,
  Clipboard,
  Download,
  File,
  LoaderCircle,
  LockKeyhole,
  LogOut,
  RefreshCw,
  Search,
} from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { VMLogo } from "../components/VMLogo";
import VIDEO_CREATION_PROMPT from "../data/videoCreationPrompt.txt?raw";
import {
  AdminSession,
  BusinessRecord,
  UploadedAsset,
  VideoRequestRecord,
  businessAssetsBucket,
  clearAdminSession,
  createSignedAssetUrl,
  ensureAdminSession,
  getStoredAdminSession,
  listBusinessesAdmin,
  listVideoRequests,
  publicBusinessAssetUrl,
  signInAdmin,
  videoAssetsBucket,
} from "../lib/supabase";

const objectiveLabels: Record<string, string> = {
  institucional: "Publicidade institucional da marca",
  produto_servico: "Divulgar determinado produto ou serviço",
  promocao: "Promoção exclusiva e/ou inédita",
  fortalecer_marca: "Fortalecer a marca",
  visita_estabelecimento: "Incentivar a visita no estabelecimento",
  outro: "Outro",
};

function isEmpty(value: unknown) {
  return (
    value === null ||
    value === undefined ||
    value === "" ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === "object" &&
      value !== null &&
      Object.keys(value).length === 0)
  );
}

function compact(value: unknown): unknown {
  if (Array.isArray(value))
    return value.map(compact).filter((item) => !isEmpty(item));
  if (value && typeof value === "object")
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>)
        .filter(([, item]) => !isEmpty(item))
        .map(([key, item]) => [key, compact(item)]),
    );
  return value;
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "America/Sao_Paulo",
  }).format(new Date(value));
}

function requestJson(
  business: BusinessRecord,
  request: VideoRequestRecord,
  signedUrls: Record<string, string>,
) {
  return compact({
    negocio: {
      id: business.id,
      nome: business.name,
      whatsapp: business.whatsapp,
      endereco: business.address,
      segmento: business.segment,
      descricao: business.description,
      imagens: business.assets.map((asset) => ({
        nome: asset.name,
        caminho_bucket: `${businessAssetsBucket}/${asset.path}`,
        url: publicBusinessAssetUrl(asset.path),
        tipo: asset.mime_type,
      })),
      cadastrado_em: business.created_at,
    },
    solicitacao_video: {
      id: request.id,
      protocolo: request.protocol,
      objetivo:
        objectiveLabels[request.campaign_objective || ""] ||
        request.campaign_objective,
      outro_objetivo: request.objective_other,
      descricao_do_video: request.video_idea,
      imagens_adicionais: request.uploaded_assets.map((asset) => ({
        nome: asset.name,
        caminho_bucket: `${videoAssetsBucket}/${asset.path}`,
        url: signedUrls[asset.path],
        url_valida_por: "7 dias",
        tipo: asset.mime_type,
      })),
      formato: "Vertical 9:16",
      duracao_segundos: request.duration_seconds,
      status: request.status,
      solicitado_em: request.created_at,
    },
    prompt_para_ia: VIDEO_CREATION_PROMPT.trim(),
  });
}

type BusinessGroup = {
  business: BusinessRecord;
  requests: VideoRequestRecord[];
};

export function AdminRequestsPage() {
  const [session, setSession] = useState<AdminSession | null>(() =>
    getStoredAdminSession(),
  );
  const [businesses, setBusinesses] = useState<BusinessRecord[]>([]);
  const [requests, setRequests] = useState<VideoRequestRecord[]>([]);
  const [selectedId, setSelectedId] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(Boolean(session));
  const [error, setError] = useState("");

  const load = async (currentSession: AdminSession) => {
    setLoading(true);
    setError("");
    try {
      const valid = await ensureAdminSession(currentSession);
      setSession(valid);
      const [businessRows, requestRows] = await Promise.all([
        listBusinessesAdmin(valid.access_token),
        listVideoRequests(valid.access_token),
      ]);
      setBusinesses(businessRows);
      setRequests(requestRows);
    } catch (reason) {
      const message =
        reason instanceof Error
          ? reason.message
          : "Não foi possível carregar o painel.";
      setError(message);
      if (message.includes("sessão")) {
        clearAdminSession();
        setSession(null);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = "Painel administrativo | VM MÍDIAS";
    if (session) void load(session);
  }, []);

  const groups = useMemo<BusinessGroup[]>(() => {
    const result = businesses.map((business) => ({
      business,
      requests: requests.filter(
        (request) => request.business_id === business.id,
      ),
    }));
    const normalized = query.trim().toLocaleLowerCase("pt-BR");
    return normalized
      ? result.filter(({ business }) =>
          `${business.name} ${business.segment}`
            .toLocaleLowerCase("pt-BR")
            .includes(normalized),
        )
      : result;
  }, [businesses, query, requests]);
  const selected =
    groups.find((group) => group.business.id === selectedId) || null;

  if (!session)
    return (
      <AdminLogin
        loading={loading}
        error={error}
        onLogin={async (email, password) => {
          setLoading(true);
          setError("");
          try {
            const logged = await signInAdmin(email, password);
            setSession(logged);
            await load(logged);
          } catch (reason) {
            setError(
              reason instanceof Error
                ? reason.message
                : "Não foi possível entrar.",
            );
          } finally {
            setLoading(false);
          }
        }}
      />
    );

  return (
    <div className="min-h-screen bg-[#050609] text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050609]/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[76px] max-w-[1500px] items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <div className="flex items-center gap-5">
            <a href="/">
              <VMLogo size="sm" />
            </a>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ff3155]">
                Administração
              </p>
              <h1 className="font-black">Negócios e solicitações</h1>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => void load(session)}
              disabled={loading}
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70"
            >
              <RefreshCw
                className={`h-4 w-4 ${loading ? "animate-spin" : ""}`}
              />
              <span className="hidden sm:inline">Atualizar</span>
            </button>
            <button
              onClick={() => {
                clearAdminSession();
                setSession(null);
              }}
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Sair</span>
            </button>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-[1500px] px-5 py-8 sm:px-8 sm:py-12">
        <section className="flex flex-col gap-5 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]">
              Painel de clientes
            </p>
            <h2 className="mt-2 text-3xl font-black sm:text-5xl">
              Um card para cada negócio.
            </h2>
          </div>
          <label className="relative block w-full max-w-md">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="h-12 w-full rounded-xl border border-white/12 bg-[#0c0d11] pl-11 pr-4 outline-none focus:border-[#f40b36]"
              placeholder="Buscar negócio"
            />
          </label>
        </section>
        {error && (
          <p className="mt-6 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100">
            {error}
          </p>
        )}
        {loading && !businesses.length ? (
          <div className="flex min-h-64 items-center justify-center">
            <LoaderCircle className="h-8 w-8 animate-spin text-[#f40b36]" />
          </div>
        ) : !selected ? (
          groups.length ? (
            <section className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {groups.map((group) => (
                <BusinessAdminCard
                  key={group.business.id}
                  group={group}
                  onOpen={() => setSelectedId(group.business.id)}
                />
              ))}
            </section>
          ) : (
            <div className="mt-7 rounded-2xl border border-dashed border-white/15 py-20 text-center text-white/45">
              Nenhum negócio cadastrado.
            </div>
          )
        ) : (
          <BusinessAdminDetail
            group={selected}
            session={session}
            onBack={() => setSelectedId("")}
          />
        )}
      </main>
    </div>
  );
}

function BusinessAdminCard({
  group,
  onOpen,
}: {
  group: BusinessGroup;
  onOpen: () => void;
}) {
  const logo = group.business.assets[0];
  return (
    <button
      onClick={onOpen}
      className="group rounded-2xl border border-white/12 bg-[#0c0e12] p-5 text-left transition hover:-translate-y-1 hover:border-[#f40b36]/55"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/30">
          {logo ? (
            <img
              src={publicBusinessAssetUrl(logo.path)}
              alt=""
              className="h-full w-full object-contain p-2"
            />
          ) : (
            <Building2 className="h-7 w-7 text-white/30" />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-xl font-black">{group.business.name}</h3>
          <p className="mt-1 truncate text-sm text-white/45">
            {group.business.segment}
          </p>
        </div>
        <ChevronRight className="h-5 w-5 text-white/30 group-hover:text-[#ff3155]" />
      </div>
      <div className="mt-5 border-t border-white/10 pt-4">
        <span className="rounded-full border border-[#f40b36]/25 bg-[#f40b36]/10 px-3 py-1.5 text-xs font-black text-[#ff6a82]">
          {group.requests.length}{" "}
          {group.requests.length === 1 ? "solicitação" : "solicitações"}
        </span>
      </div>
    </button>
  );
}

function BusinessAdminDetail({
  group,
  session,
  onBack,
}: {
  group: BusinessGroup;
  session: AdminSession;
  onBack: () => void;
}) {
  const business = group.business;
  return (
    <section className="mt-7">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-bold text-white/55 hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Todos os negócios
      </button>
      <div className="mt-5 rounded-2xl border border-white/12 bg-[#0c0e12] p-5 sm:p-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/30">
            {business.assets[0] ? (
              <img
                src={publicBusinessAssetUrl(business.assets[0].path)}
                alt=""
                className="h-full w-full object-contain p-2"
              />
            ) : (
              <Building2 className="h-8 w-8 text-white/30" />
            )}
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ff3155]">
              Negócio
            </p>
            <h2 className="mt-1 text-3xl font-black sm:text-4xl">
              {business.name}
            </h2>
            <p className="mt-2 text-sm text-white/50">
              {[business.segment, business.whatsapp, business.address]
                .filter(Boolean)
                .join(" · ")}
            </p>
          </div>
        </div>
        {business.description && (
          <p className="mt-6 border-t border-white/10 pt-5 text-sm leading-7 text-white/60">
            {business.description}
          </p>
        )}
        <AssetGallery assets={business.assets} publicAssets />
      </div>
      <h3 className="mt-8 text-2xl font-black">Solicitações deste negócio</h3>
      {group.requests.length ? (
        <div className="mt-5 grid gap-5 xl:grid-cols-2">
          {group.requests.map((request) => (
            <RequestCard
              key={request.id}
              business={business}
              request={request}
              session={session}
            />
          ))}
        </div>
      ) : (
        <div className="mt-5 rounded-xl border border-dashed border-white/15 p-12 text-center text-white/45">
          Este negócio ainda não solicitou vídeos.
        </div>
      )}
    </section>
  );
}

function RequestCard({
  business,
  request,
  session,
}: {
  business: BusinessRecord;
  request: VideoRequestRecord;
  session: AdminSession;
}) {
  const [copied, setCopied] = useState(false);
  const [copying, setCopying] = useState(false);
  const [error, setError] = useState("");
  const copyJson = async () => {
    setCopying(true);
    setError("");
    try {
      const entries = await Promise.all(
        request.uploaded_assets.map(
          async (asset) =>
            [
              asset.path,
              await createSignedAssetUrl(
                session.access_token,
                asset.path,
                7 * 24 * 60 * 60,
              ),
            ] as const,
        ),
      );
      await navigator.clipboard.writeText(
        JSON.stringify(
          requestJson(business, request, Object.fromEntries(entries)),
          null,
          2,
        ),
      );
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch (reason) {
      setError(
        reason instanceof Error
          ? reason.message
          : "Não foi possível gerar o JSON.",
      );
    } finally {
      setCopying(false);
    }
  };
  return (
    <article className="overflow-hidden rounded-2xl border border-white/12 bg-[#0c0e12]">
      <header className="flex flex-col gap-4 border-b border-white/10 p-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase text-white/60">
            {request.status}
          </span>
          <h4 className="mt-4 text-xl font-black">
            {objectiveLabels[request.campaign_objective || ""] || "Novo vídeo"}
          </h4>
          <p className="mt-2 text-xs text-white/40">
            {request.protocol} · {formatDate(request.created_at)}
          </p>
        </div>
        <button
          onClick={() => void copyJson()}
          disabled={copying}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#f40b36] px-4 text-xs font-black uppercase tracking-[0.08em] disabled:opacity-60"
        >
          {copying ? (
            <LoaderCircle className="h-4 w-4 animate-spin" />
          ) : copied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Clipboard className="h-4 w-4" />
          )}
          {copying ? "Gerando URLs" : copied ? "JSON copiado" : "Copiar JSON"}
        </button>
      </header>
      <div className="p-5">
        {request.video_idea && (
          <p className="text-sm leading-7 text-white/65">
            {request.video_idea}
          </p>
        )}
        {request.objective_other && (
          <p className="mt-3 text-sm text-white/55">
            Outro objetivo: {request.objective_other}
          </p>
        )}
        {request.uploaded_assets.length > 0 && (
          <AssetGallery
            assets={request.uploaded_assets}
            accessToken={session.access_token}
          />
        )}
        {error && <p className="mt-4 text-xs text-red-300">{error}</p>}
      </div>
    </article>
  );
}

function AssetGallery({
  assets,
  accessToken,
  publicAssets = false,
}: {
  assets: UploadedAsset[];
  accessToken?: string;
  publicAssets?: boolean;
}) {
  const [urls, setUrls] = useState<Record<string, string>>(() =>
    publicAssets
      ? Object.fromEntries(
          assets.map((asset) => [
            asset.path,
            publicBusinessAssetUrl(asset.path),
          ]),
        )
      : {},
  );
  useEffect(() => {
    if (publicAssets || !accessToken) return;
    Promise.all(
      assets.map(
        async (asset) =>
          [
            asset.path,
            await createSignedAssetUrl(accessToken, asset.path, 3600),
          ] as const,
      ),
    )
      .then((entries) => setUrls(Object.fromEntries(entries)))
      .catch(() => undefined);
  }, [accessToken, assets, publicAssets]);
  return (
    <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
      {assets.map((asset) => {
        const url = urls[asset.path];
        return (
          <div
            key={asset.path}
            className="rounded-xl border border-white/10 bg-black/25 p-2"
          >
            {asset.mime_type.startsWith("image/") && url ? (
              <img
                src={url}
                alt={asset.name}
                className="h-24 w-full rounded-lg object-cover"
              />
            ) : (
              <div className="flex h-24 items-center justify-center">
                <File className="h-7 w-7 text-white/30" />
              </div>
            )}
            <span className="mt-2 block truncate text-[11px] font-bold text-white/70">
              {asset.name}
            </span>
            {url && (
              <a
                href={url}
                download={asset.name}
                className="mt-2 inline-flex h-8 w-full items-center justify-center gap-2 rounded-lg border border-white/12 text-[10px] font-black uppercase text-white/70 hover:border-[#f40b36]/55"
              >
                <Download className="h-3.5 w-3.5" />
                Baixar
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
}

function AdminLogin({
  onLogin,
  loading,
  error,
}: {
  onLogin: (email: string, password: string) => Promise<void>;
  loading: boolean;
  error: string;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submit = (event: FormEvent) => {
    event.preventDefault();
    void onLogin(email.trim(), password);
  };
  return (
    <div className="min-h-screen bg-[#050609] px-5 py-10 text-white">
      <a
        href="/"
        className="mx-auto flex max-w-6xl items-center gap-2 text-xs font-bold text-white/55"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar ao site
      </a>
      <main className="mx-auto flex min-h-[calc(100vh-80px)] max-w-md items-center">
        <form
          onSubmit={submit}
          className="w-full rounded-2xl border border-white/12 bg-[#0d0f13] p-6 sm:p-9"
        >
          <VMLogo size="md" />
          <LockKeyhole className="mt-8 h-10 w-10 text-[#ff3155]" />
          <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]">
            Acesso restrito
          </p>
          <h1 className="mt-2 text-3xl font-black">Painel administrativo</h1>
          <label className="mt-7 block text-sm font-bold">
            E-mail
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 h-12 w-full rounded-lg border border-white/12 bg-black/25 px-4 outline-none focus:border-[#f40b36]"
            />
          </label>
          <label className="mt-5 block text-sm font-bold">
            Senha
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 h-12 w-full rounded-lg border border-white/12 bg-black/25 px-4 outline-none focus:border-[#f40b36]"
            />
          </label>
          {error && (
            <p className="mt-5 rounded-lg border border-red-400/25 bg-red-400/10 p-3 text-sm text-red-100">
              {error}
            </p>
          )}
          <button
            disabled={loading}
            className="brand-button brand-button-primary mt-6 w-full"
          >
            {loading ? (
              <LoaderCircle className="h-4 w-4 animate-spin" />
            ) : (
              <LockKeyhole className="h-4 w-4" />
            )}
            Entrar no painel
          </button>
        </form>
      </main>
    </div>
  );
}
