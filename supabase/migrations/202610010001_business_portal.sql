-- Portal de comércios e solicitações vinculadas.

create table if not exists public.businesses (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 120),
  whatsapp text,
  address text,
  segment text not null check (char_length(segment) between 2 and 120),
  description text,
  assets jsonb not null default '[]'::jsonb check (
    jsonb_typeof(assets) = 'array' and jsonb_array_length(assets) between 1 and 5
  ),
  consent boolean not null default false check (consent = true),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists businesses_name_idx on public.businesses (lower(name));
alter table public.businesses enable row level security;

grant select on table public.businesses to anon, authenticated;
grant insert (id, name, whatsapp, address, segment, description, assets, consent)
  on public.businesses to anon, authenticated;
grant update (name, whatsapp, address, segment, description, updated_at)
  on public.businesses to anon, authenticated;

drop policy if exists "public_can_read_businesses" on public.businesses;
create policy "public_can_read_businesses"
  on public.businesses for select to anon, authenticated using (true);

drop policy if exists "public_can_create_businesses" on public.businesses;
create policy "public_can_create_businesses"
  on public.businesses for insert to anon, authenticated
  with check (consent = true and jsonb_array_length(assets) between 1 and 5);

drop policy if exists "public_can_update_businesses" on public.businesses;
create policy "public_can_update_businesses"
  on public.businesses for update to anon, authenticated
  using (true) with check (consent = true);

alter table public.video_requests
  add column if not exists business_id uuid references public.businesses(id) on delete set null,
  add column if not exists objective_other text;

alter table public.video_requests
  drop constraint if exists new_client_briefing_required,
  drop constraint if exists video_requests_video_idea_check;

alter table public.video_requests
  add constraint video_requests_video_idea_check
  check (char_length(video_idea) between 0 and 2400) not valid;

grant insert (business_id, objective_other) on public.video_requests to anon, authenticated;
create index if not exists video_requests_business_id_created_at_idx
  on public.video_requests (business_id, created_at desc);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'business-assets', 'business-assets', true, 26214400,
  array['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "public_can_upload_business_assets" on storage.objects;
create policy "public_can_upload_business_assets"
  on storage.objects for insert to anon, authenticated
  with check (
    bucket_id = 'business-assets'
    and (storage.foldername(name))[1] = 'comercios'
    and array_length(storage.foldername(name), 1) >= 2
  );

drop policy if exists "public_can_read_business_assets" on storage.objects;
create policy "public_can_read_business_assets"
  on storage.objects for select to anon, authenticated
  using (bucket_id = 'business-assets');

drop policy if exists "public_can_upload_video_request_assets" on storage.objects;
create policy "public_can_upload_video_request_assets"
  on storage.objects for insert to anon, authenticated
  with check (
    bucket_id = 'video-request-assets'
    and (storage.foldername(name))[1] in ('novos-clientes', 'clientes-atuais', 'solicitacoes')
    and array_length(storage.foldername(name), 1) >= 2
  );

comment on table public.businesses is
  'Cadastro principal de comércios atendidos pela VM MÍDIAS.';
comment on column public.video_requests.business_id is
  'Comércio ao qual a solicitação de vídeo pertence.';
