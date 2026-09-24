create extension if not exists pgcrypto;

create table if not exists public.art_requests (
  id uuid primary key default gen_random_uuid(),
  protocol text not null unique,
  company_name text not null check (char_length(company_name) between 2 and 120),
  requester_name text not null check (char_length(requester_name) between 2 and 120),
  whatsapp text not null check (char_length(whatsapp) between 8 and 30),
  email text,
  request_type text not null check (request_type in ('arte_estatica', 'video', 'arte_e_video')),
  campaign_objective text not null,
  main_message text not null check (char_length(main_message) between 3 and 180),
  details text not null check (char_length(details) between 30 and 2000),
  call_to_action text,
  display_information text,
  visual_style text,
  desired_deadline date,
  materials_url text,
  consent boolean not null default false check (consent = true),
  source_page text not null default 'solicitar-arte' check (source_page = 'solicitar-arte'),
  status text not null default 'novo' check (status in ('novo', 'em_analise', 'aguardando_cliente', 'em_criacao', 'aguardando_aprovacao', 'aprovado', 'publicado', 'cancelado')),
  internal_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists art_requests_status_created_at_idx
  on public.art_requests (status, created_at desc);

alter table public.art_requests enable row level security;

revoke all on table public.art_requests from anon;
grant insert (
  id,
  protocol,
  company_name,
  requester_name,
  whatsapp,
  email,
  request_type,
  campaign_objective,
  main_message,
  details,
  call_to_action,
  display_information,
  visual_style,
  desired_deadline,
  materials_url,
  consent,
  source_page
) on public.art_requests to anon, authenticated;

drop policy if exists "public_can_create_art_requests" on public.art_requests;
create policy "public_can_create_art_requests"
  on public.art_requests
  for insert
  to anon, authenticated
  with check (
    status = 'novo'
    and consent = true
    and source_page = 'solicitar-arte'
  );

comment on table public.art_requests is
  'Solicitações de novas artes e vídeos enviadas pelos clientes da VM MÍDIAS.';

comment on column public.art_requests.internal_notes is
  'Campo interno. Nunca deve ser exposto pela chave publicável.';
