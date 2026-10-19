-- Fila editorial das notícias exibidas nas TVs e publicadas nos Stories.

create table if not exists public.news_articles (
  id uuid primary key default gen_random_uuid(),
  external_id text not null unique,
  title text not null check (char_length(title) between 5 and 500),
  summary text,
  source_name text not null,
  category text not null default 'Informação',
  image_url text,
  article_url text,
  published_at timestamptz not null,
  moderation_status text not null default 'pending'
    check (moderation_status in ('pending', 'approved', 'rejected')),
  story_status text not null default 'waiting_approval'
    check (story_status in (
      'waiting_approval', 'queued', 'publishing', 'published', 'failed', 'needs_review', 'skipped'
    )),
  reviewed_at timestamptz,
  reviewed_by uuid references auth.users(id) on delete set null,
  queued_at timestamptz,
  story_published_at timestamptz,
  meta_media_id text,
  last_story_error text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists news_articles_moderation_queue_idx
  on public.news_articles (moderation_status, story_status, published_at desc);

alter table public.news_articles enable row level security;
revoke all on table public.news_articles from anon, authenticated;
grant select on table public.news_articles to anon, authenticated;

drop policy if exists "public_can_read_approved_news" on public.news_articles;
create policy "public_can_read_approved_news"
  on public.news_articles for select to anon, authenticated
  using (moderation_status = 'approved');

drop policy if exists "admins_can_read_all_news" on public.news_articles;
create policy "admins_can_read_all_news"
  on public.news_articles for select to authenticated
  using (public.is_vm_admin());

create or replace function public.list_approved_news()
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
  where article.moderation_status = 'approved'
    and article.published_at >= now() - interval '14 days'
  order by article.published_at desc;
$$;

create or replace function public.moderate_news_article_admin(
  p_article_id uuid,
  p_decision text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_vm_admin() then
    raise exception 'NAO_AUTORIZADO';
  end if;

  if p_decision not in ('approved', 'rejected') then
    raise exception 'DECISAO_INVALIDA';
  end if;

  update public.news_articles
  set
    moderation_status = p_decision,
    story_status = case
      when p_decision = 'approved' and story_status <> 'published' then 'queued'
      when p_decision = 'rejected' then 'skipped'
      else story_status
    end,
    reviewed_at = now(),
    reviewed_by = auth.uid(),
    queued_at = case
      when p_decision = 'approved' and story_status <> 'published' then now()
      else queued_at
    end,
    last_story_error = case when p_decision = 'approved' then null else last_story_error end,
    updated_at = now()
  where id = p_article_id;

  if not found then
    raise exception 'NOTICIA_NAO_ENCONTRADA';
  end if;
end;
$$;

revoke all on function public.list_approved_news() from public;
grant execute on function public.list_approved_news() to anon, authenticated;

revoke all on function public.moderate_news_article_admin(uuid, text) from public;
grant execute on function public.moderate_news_article_admin(uuid, text)
  to authenticated;

comment on table public.news_articles is
  'Fila editorial alimentada pelas fontes RSS e moderada antes de TV/site/Stories.';

notify pgrst, 'reload schema';
