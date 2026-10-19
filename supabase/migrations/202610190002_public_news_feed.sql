-- A moderação controla somente os Stories. TV e site recebem todas as matérias.

create or replace function public.list_live_news()
returns table (
  id uuid,
  external_id text,
  title text,
  summary text,
  source_name text,
  category text,
  image_url text,
  article_url text,
  published_at timestamptz,
  queued_at timestamptz,
  story_status text
)
language sql
stable
security definer
set search_path = public
as $$
  select
    article.id,
    article.external_id,
    article.title,
    article.summary,
    article.source_name,
    article.category,
    article.image_url,
    article.article_url,
    article.published_at,
    article.queued_at,
    article.story_status
  from public.news_articles as article
  where article.published_at >= now() - interval '14 days'
  order by article.published_at desc;
$$;

revoke all on function public.list_live_news() from public;
grant execute on function public.list_live_news() to anon, authenticated;

comment on function public.list_live_news() is
  'Feed público da TV e do site. A aprovação editorial permanece exclusiva dos Stories.';

comment on table public.news_articles is
  'Notícias exibidas diretamente na TV/site, com moderação separada para os Stories.';

notify pgrst, 'reload schema';
