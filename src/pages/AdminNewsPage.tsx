import {
  Check,
  Building2,
  Clock3,
  ExternalLink,
  ImageOff,
  LoaderCircle,
  LogOut,
  Newspaper,
  RefreshCw,
  Send,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { VMLogo } from "../components/VMLogo";
import {
  AdminSession,
  NewsArticleRecord,
  clearAdminSession,
  ensureAdminSession,
  getStoredAdminSession,
  listNewsAdmin,
  moderateNewsArticle,
  signInAdmin,
} from "../lib/supabase";
import { AdminLogin } from "./AdminRequestsPage";

type QueueView = "pending" | "approved" | "published" | "rejected";

const viewLabels: Record<QueueView, string> = {
  pending: "Avaliar para Stories",
  approved: "Fila de Stories",
  published: "Publicadas nos Stories",
  rejected: "Fora dos Stories",
};

const storyLabels: Record<NewsArticleRecord["story_status"], string> = {
  waiting_approval: "Aguardando aprovação",
  queued: "Na fila",
  publishing: "Publicando agora",
  published: "Publicada no Instagram",
  failed: "Tentará novamente",
  needs_review: "Requer conferência",
  skipped: "Fora da fila",
};

function articleView(article: NewsArticleRecord): QueueView {
  if (article.moderation_status === "pending") return "pending";
  if (article.moderation_status === "rejected") return "rejected";
  return article.story_status === "published" ? "published" : "approved";
}

function formatDate(value: string | null) {
  if (!value) return "";
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "America/Sao_Paulo",
  }).format(new Date(value));
}

export function AdminNewsPage() {
  const [session, setSession] = useState<AdminSession | null>(() =>
    getStoredAdminSession(),
  );
  const [articles, setArticles] = useState<NewsArticleRecord[]>([]);
  const [view, setView] = useState<QueueView>("pending");
  const [loading, setLoading] = useState(Boolean(session));
  const [workingId, setWorkingId] = useState("");
  const [error, setError] = useState("");

  const load = async (currentSession: AdminSession) => {
    setLoading(true);
    setError("");
    try {
      const valid = await ensureAdminSession(currentSession);
      setSession(valid);
      setArticles(await listNewsAdmin(valid.access_token));
    } catch (reason) {
      const message =
        reason instanceof Error
          ? reason.message
          : "Não foi possível carregar as notícias.";
      setError(message);
      if (
        message.includes("sessão") ||
        message.includes("administrativ") ||
        message.includes("permissão")
      ) {
        clearAdminSession();
        setSession(null);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = "Stories de notícias | VM MÍDIAS";
    if (session) void load(session);
  }, []);

  const counts = useMemo(
    () =>
      articles.reduce(
        (total, article) => {
          total[articleView(article)] += 1;
          return total;
        },
        { pending: 0, approved: 0, published: 0, rejected: 0 } as Record<
          QueueView,
          number
        >,
      ),
    [articles],
  );

  const visibleArticles = useMemo(() => {
    const filtered = articles.filter((article) => articleView(article) === view);
    if (view !== "approved") return filtered;
    return filtered.sort(
      (left, right) =>
        new Date(left.queued_at || left.published_at).getTime() -
        new Date(right.queued_at || right.published_at).getTime(),
    );
  }, [articles, view]);

  const decide = async (
    article: NewsArticleRecord,
    decision: "approved" | "rejected",
  ) => {
    if (!session) return;
    if (
      decision === "rejected" &&
      !window.confirm("Deseja realmente recusar esta notícia?")
    ) {
      return;
    }
    setWorkingId(article.id);
    setError("");
    try {
      const valid = await ensureAdminSession(session);
      setSession(valid);
      await moderateNewsArticle(valid.access_token, article.id, decision);
      const now = new Date().toISOString();
      setArticles((current) =>
        current.map((item) =>
          item.id === article.id
            ? {
                ...item,
                moderation_status: decision,
                story_status:
                  decision === "approved"
                    ? item.story_status === "published"
                      ? "published"
                      : "queued"
                    : "skipped",
                reviewed_at: now,
                queued_at: decision === "approved" ? now : item.queued_at,
                last_story_error:
                  decision === "approved" ? null : item.last_story_error,
                updated_at: now,
              }
            : item,
        ),
      );
    } catch (reason) {
      setError(
        reason instanceof Error
          ? reason.message
          : "Não foi possível atualizar esta notícia.",
      );
    } finally {
      setWorkingId("");
    }
  };

  if (!session) {
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
  }

  return (
    <div className="min-h-screen bg-[#050609] text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050609]/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[76px] max-w-[1500px] items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <div className="flex min-w-0 items-center gap-4 sm:gap-5">
            <a href="/" aria-label="Voltar ao site">
              <VMLogo size="sm" />
            </a>
            <div className="min-w-0">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ff3155]">
                Administração
              </p>
              <h1 className="truncate font-black">Stories de notícias</h1>
            </div>
          </div>
          <div className="flex gap-2">
            <a
              href="/admin/solicitacoes"
              aria-label="Negócios e solicitações"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70"
            >
              <Building2 className="h-4 w-4" />
              <span className="hidden sm:inline">Negócios</span>
            </a>
            <button
              onClick={() => void load(session)}
              disabled={loading}
              aria-label="Atualizar notícias"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
              <span className="hidden md:inline">Atualizar</span>
            </button>
            <button
              onClick={() => {
                clearAdminSession();
                setSession(null);
              }}
              aria-label="Sair"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1500px] px-5 py-8 sm:px-8 sm:py-12">
        <section className="border-b border-white/10 pb-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]">
            Fila editorial
          </p>
          <h2 className="mt-2 max-w-3xl text-3xl font-black sm:text-5xl">
            Você decide o que vai para os Stories.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/55 sm:text-base">
            Todas as notícias coletadas aparecem automaticamente na TV e no
            site. Aqui você escolhe quais também entram, uma por vez, na fila
            dos Stories.
          </p>
        </section>

        <nav className="mt-6 grid grid-cols-2 gap-2 lg:grid-cols-4" aria-label="Filtrar notícias">
          {(Object.keys(viewLabels) as QueueView[]).map((item) => (
            <button
              key={item}
              onClick={() => setView(item)}
              className={`rounded-xl border px-4 py-3 text-left transition ${
                view === item
                  ? "border-[#f40b36] bg-[#f40b36]/12"
                  : "border-white/10 bg-[#0c0e12] hover:border-white/20"
              }`}
            >
              <span className="block text-2xl font-black">{counts[item]}</span>
              <span className="mt-1 block text-xs font-bold text-white/55">
                {viewLabels[item]}
              </span>
            </button>
          ))}
        </nav>

        {error && (
          <p className="mt-6 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100">
            {error}
          </p>
        )}

        {loading && !articles.length ? (
          <div className="flex min-h-72 items-center justify-center">
            <LoaderCircle className="h-8 w-8 animate-spin text-[#f40b36]" />
          </div>
        ) : visibleArticles.length ? (
          <section className="mt-6 grid gap-5 xl:grid-cols-2">
            {visibleArticles.map((article, index) => (
              <NewsCard
                key={article.id}
                article={article}
                queuePosition={view === "approved" ? index + 1 : undefined}
                working={workingId === article.id}
                onApprove={() => void decide(article, "approved")}
                onReject={() => void decide(article, "rejected")}
              />
            ))}
          </section>
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed border-white/15 py-20 text-center text-white/45">
            <Newspaper className="mx-auto mb-4 h-9 w-9" />
            Nenhuma notícia nesta etapa.
          </div>
        )}
      </main>
    </div>
  );
}

function NewsCard({
  article,
  queuePosition,
  working,
  onApprove,
  onReject,
}: {
  article: NewsArticleRecord;
  queuePosition?: number;
  working: boolean;
  onApprove: () => void;
  onReject: () => void;
}) {
  const view = articleView(article);
  return (
    <article className="overflow-hidden rounded-2xl border border-white/12 bg-[#0c0e12]">
      <div className="aspect-[16/9] overflow-hidden border-b border-white/10 bg-black/40">
        {article.image_url ? (
          <img
            src={article.image_url}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 text-white/35">
            <ImageOff className="h-9 w-9" />
            <span className="text-xs font-bold">Fonte sem imagem</span>
          </div>
        )}
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-black uppercase tracking-[0.12em]">
          <span className="rounded-full bg-[#f40b36]/12 px-2.5 py-1 text-[#ff5c78]">
            {article.category}
          </span>
          <span className="text-white/40">{article.source_name}</span>
          {queuePosition && (
            <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 text-white/65">
              <Clock3 className="h-3 w-3" /> #{queuePosition} da fila
            </span>
          )}
        </div>
        <h3 className="mt-4 text-xl font-black leading-tight sm:text-2xl">
          {article.title}
        </h3>
        {article.summary && (
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/55">
            {article.summary}
          </p>
        )}
        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-white/40">
          <span>{formatDate(article.published_at)}</span>
          {article.article_url && (
            <a
              href={article.article_url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-bold text-white/65 hover:text-white"
            >
              Abrir matéria <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>

        {view === "pending" ? (
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              onClick={onReject}
              disabled={working}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/12 font-black transition hover:border-red-400/50 hover:text-red-200 disabled:opacity-50"
            >
              {working ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <X className="h-4 w-4" />}
              Não enviar
            </button>
            <button
              onClick={onApprove}
              disabled={working}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#f40b36] font-black shadow-[0_12px_35px_rgba(244,11,54,.2)] transition hover:bg-[#ff1644] disabled:opacity-50"
            >
              {working ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}
              Enviar aos Stories
            </button>
          </div>
        ) : (
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold text-white/55">
              {view === "approved" ? <Send className="h-4 w-4 text-[#ff3155]" /> : null}
              {storyLabels[article.story_status]}
            </span>
            {view === "rejected" && (
              <button
                onClick={onApprove}
                disabled={working}
                className="rounded-lg border border-white/12 px-3 py-2 text-xs font-black hover:border-[#f40b36]/60 disabled:opacity-50"
              >
                Enviar aos Stories
              </button>
            )}
            {view === "approved" && article.story_status === "needs_review" && (
              <button
                onClick={onApprove}
                disabled={working}
                className="rounded-lg border border-amber-300/25 px-3 py-2 text-xs font-black text-amber-100 hover:border-amber-300/60 disabled:opacity-50"
              >
                Reenfileirar
              </button>
            )}
          </div>
        )}

        {article.last_story_error && (
          <p className="mt-4 rounded-lg border border-amber-300/20 bg-amber-300/8 p-3 text-xs leading-5 text-amber-100/80">
            {article.last_story_error}
          </p>
        )}
      </div>
    </article>
  );
}
