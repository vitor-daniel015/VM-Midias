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

const genericNewsImage = /(?:logo-30-anos|share-30-anos|favicon|spacer|pixel|placeholder|sem[-_ ]imagem|\/logo(?:[-_.\/]|$)|lh3\.googleusercontent\.com\/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc)/i;

function normalizedNewsText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function cleanNewsText(value: string | null) {
  const entities: Record<string, string> = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    nbsp: " ",
    quot: '"',
  };
  let cleaned = String(value || "").replace(/<!\[CDATA\[|\]\]>/gi, "");
  for (let pass = 0; pass < 3; pass += 1) {
    const previous = cleaned;
    cleaned = cleaned
      .replace(/&#(x?[0-9a-f]+);/gi, (match, number: string) => {
        const code = Number.parseInt(number.replace(/^x/i, ""), /^x/i.test(number) ? 16 : 10);
        return Number.isFinite(code) && code <= 0x10ffff ? String.fromCodePoint(code) : match;
      })
      .replace(/&(amp|apos|gt|lt|nbsp|quot);/gi, (_match, name: string) => entities[name.toLowerCase()]);
    if (cleaned === previous) break;
  }
  return cleaned.replace(/\s+/g, " ").trim();
}

function sanitizeNewsArticle(article: NewsArticleRecord): NewsArticleRecord {
  return {
    ...article,
    title: cleanNewsText(article.title),
    summary: cleanNewsText(article.summary) || null,
  };
}

function isUsefulStoryNews(article: NewsArticleRecord) {
  const title = normalizedNewsText(article.title);
  const content = normalizedNewsText(`${article.title} ${article.summary || ""}`);
  const program = /\b(jornal|telejornal|eptv|sptv|bom dia|jornal hoje|jornal nacional|jornal do almoco|jornal anhanguera|link vanguarda|jac\s?1|mg\s?1|rj\s?1|df\s?1|globonews)\b/;
  return !(
    /^videos?\s*:/.test(title) ||
    (/\b(assista|acompanhe|veja)\b/.test(content) && /\b(videos?|jornal|edicao)\b/.test(content)) ||
    (program.test(content) && /\b(ao vivo|esta no ar|agora no ar|integra|edicao|segunda|terca|quarta|quinta|sexta|sabado|domingo)\b/.test(content)) ||
    /^ao vivo\s*:/.test(title)
  );
}

function hasUsableStoryImage(article: NewsArticleRecord) {
  return /^https?:\/\//i.test(article.image_url || "") &&
    !genericNewsImage.test(article.image_url || "");
}

function selectStoryReviewCandidates(articles: NewsArticleRecord[]) {
  const oldest = Date.now() - 48 * 60 * 60 * 1000;
  const seen = new Set<string>();
  const perSource = new Map<string, number>();
  const selected: NewsArticleRecord[] = [];

  for (const article of articles) {
    if (articleView(article) !== "pending" || !hasUsableStoryImage(article) || !isUsefulStoryNews(article)) continue;
    const publishedAt = Date.parse(article.published_at);
    if (Number.isFinite(publishedAt) && publishedAt < oldest) continue;
    const key = normalizedNewsText(article.title).trim();
    if (!key || seen.has(key)) continue;
    const sourceCount = perSource.get(article.source_name) || 0;
    if (sourceCount >= 3) continue;
    seen.add(key);
    perSource.set(article.source_name, sourceCount + 1);
    selected.push(article);
    if (selected.length >= 24) break;
  }
  return selected;
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
      setArticles((await listNewsAdmin(valid.access_token)).map(sanitizeNewsArticle));
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

  useEffect(() => {
    if (!session) return;
    const refresh = window.setInterval(() => void load(session), 60_000);
    return () => window.clearInterval(refresh);
  }, [session?.access_token]);

  const storyReviewCandidates = useMemo(
    () => selectStoryReviewCandidates(articles),
    [articles],
  );

  const counts = useMemo(() => {
    const totals = articles.reduce(
        (total, article) => {
          total[articleView(article)] += 1;
          return total;
        },
        { pending: 0, approved: 0, published: 0, rejected: 0 } as Record<
          QueueView,
          number
        >,
      );
    totals.pending = storyReviewCandidates.length;
    return totals;
  }, [articles, storyReviewCandidates]);

  const visibleArticles = useMemo(() => {
    if (view === "pending") return storyReviewCandidates;
    const filtered = articles.filter((article) => articleView(article) === view);
    if (view !== "approved") return filtered;
    return filtered.sort(
      (left, right) =>
        new Date(left.queued_at || left.published_at).getTime() -
        new Date(right.queued_at || right.published_at).getTime(),
    );
  }, [articles, storyReviewCandidates, view]);

  const decide = async (
    article: NewsArticleRecord,
    decision: "approved" | "rejected",
  ) => {
    if (!session) return;
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
            A TV e o site recebem automaticamente as notícias úteis. Aqui você
            avalia uma seleção menor para os Stories. A prévia 9:16 mostra o
            corte real da imagem antes da aprovação.
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

        {view === "rejected" && (
          <p className="mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0c0e12] px-4 py-3 text-xs leading-5 text-white/55">
            <Clock3 className="h-4 w-4 shrink-0 text-[#ff3155]" />
            As notícias recusadas são excluídas definitivamente do banco quando
            o dia termina, considerando o horário de São Paulo.
          </p>
        )}

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
  const canApprove = hasUsableStoryImage(article);
  return (
    <article className="overflow-hidden rounded-2xl border border-white/12 bg-[#0c0e12]">
      <div className="grid md:grid-cols-[220px_minmax(0,1fr)]">
        <div className="border-b border-white/10 bg-black/30 p-4 md:border-b-0 md:border-r">
          <StoryPreview article={article} />
        </div>
        <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-black uppercase tracking-[0.12em]">
          <span className="rounded-full bg-[#f40b36]/12 px-2.5 py-1 text-[#ff5c78]">
            {article.category}
          </span>
          <span className="text-white/40">{article.source_name}</span>
          {queuePosition && (
            <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 text-white/65">
              <Clock3 className="h-3 w-3" /> #{queuePosition} da fila · até {queuePosition}h
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
              disabled={working || !canApprove}
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
                disabled={working || !canApprove}
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
        {!canApprove && (
          <p className="mt-4 rounded-lg border border-white/10 bg-white/[.03] p-3 text-xs leading-5 text-white/55">
            Esta matéria não possui uma fotografia válida para o formato 9:16.
          </p>
        )}
        </div>
      </div>
    </article>
  );
}

function StoryPreview({ article }: { article: NewsArticleRecord }) {
  const hasImage = hasUsableStoryImage(article);
  const previewTitleSize = article.title.length > 170
    ? 10
    : article.title.length > 130
      ? 12
      : article.title.length > 95
        ? 14
        : 17;
  return (
    <div>
      <div
        className="relative mx-auto aspect-[9/16] w-full max-w-[220px] overflow-hidden rounded-xl border border-white/12 bg-[#030305] shadow-2xl"
        aria-label="Prévia do Story em proporção 9 por 16"
      >
        <div className="absolute inset-x-0 top-0 h-[57%] overflow-hidden bg-[#111116]">
          {hasImage ? (
            <img
              src={article.image_url || ""}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-2 text-white/30">
              <ImageOff className="h-8 w-8" />
              <span className="text-[10px] font-bold">Sem imagem válida</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#030305]" />
          <img
            src="/images/braba-news.png"
            alt="BRABA NEWS"
            className="absolute left-1/2 top-[3%] w-[43%] -translate-x-1/2 object-contain"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 top-[54%] bg-[#030305] px-[6%] pb-[3%] pt-[4%]">
          <p className="text-[7px] font-black uppercase tracking-[.18em] text-[#ff3155]">
            {article.category || "Informação"}
          </p>
          <h4
            className="mt-2 font-black leading-[1.02] tracking-[-.035em] text-white"
            style={{ fontSize: `${previewTitleSize}px` }}
          >
            {article.title}
          </h4>
          <div className="mt-2 h-1 w-[37%] bg-gradient-to-r from-[#f8034b] via-[#86152f] to-[#33121d]" />
          {article.summary && (
            <p className="mt-3 line-clamp-3 text-[9px] leading-[1.45] text-white/80">
              {article.summary}
            </p>
          )}
          <div className="absolute inset-x-[6%] bottom-[3%] flex items-center justify-between border-t border-white/20 pt-2 text-[7px] text-white/55">
            <strong className="text-white">BRABA NEWS</strong>
            <span className="max-w-[48%] truncate">{article.source_name}</span>
          </div>
        </div>
      </div>
      <p className="mt-2 text-center text-[10px] font-bold uppercase tracking-[.12em] text-white/35">
        Prévia 9:16 · corte exato
      </p>
    </div>
  );
}
