create extension if not exists pgcrypto;

create table if not exists public.video_requests (
  id uuid primary key default gen_random_uuid(),
  protocol text not null unique,
  request_kind text not null check (request_kind in ('new_client', 'existing_client')),
  company_name text not null check (char_length(company_name) between 2 and 120),
  whatsapp text,
  business_segment text,
  business_description text,
  product_service text,
  target_audience text,
  campaign_objective text,
  offer_details text,
  main_message text,
  required_texts text,
  call_to_action text,
  brand_colors text,
  avoid_colors text,
  brand_personality text,
  visual_references text,
  video_idea text not null check (char_length(video_idea) between 30 and 2400),
  uploaded_assets jsonb not null default '[]'::jsonb
    check (jsonb_typeof(uploaded_assets) = 'array'),
  video_format text not null default 'vertical_9_16'
    check (video_format = 'vertical_9_16'),
  duration_seconds smallint not null default 20 check (duration_seconds = 20),
  consent boolean not null default false check (consent = true),
  source_page text not null default 'solicitar-video'
    check (source_page = 'solicitar-video'),
  status text not null default 'novo' check (
    status in (
      'novo', 'em_analise', 'visual_key_em_criacao',
      'visual_key_em_aprovacao', 'video_em_criacao', 'aguardando_cliente',
      'em_revisao', 'aprovado', 'entregue', 'cancelado'
    )
  ),
  internal_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint new_client_briefing_required check (
    request_kind = 'existing_client'
    or (
      whatsapp is not null and business_segment is not null
      and business_description is not null
      and product_service is not null and target_audience is not null
      and campaign_objective is not null and main_message is not null
      and call_to_action is not null and brand_colors is not null
      and brand_personality is not null
    )
  )
);

create index if not exists video_requests_status_created_at_idx
  on public.video_requests (status, created_at desc);
create index if not exists video_requests_company_name_idx
  on public.video_requests (lower(company_name));

alter table public.video_requests enable row level security;
revoke all on table public.video_requests from anon;
grant insert (
  id, protocol, request_kind, company_name, whatsapp,
  business_segment, business_description, product_service, target_audience,
  campaign_objective, offer_details, main_message, required_texts,
  call_to_action, brand_colors, avoid_colors, brand_personality,
  visual_references, video_idea,
  uploaded_assets, video_format, duration_seconds, consent, source_page
) on public.video_requests to anon, authenticated;

drop policy if exists "public_can_create_video_requests" on public.video_requests;
create policy "public_can_create_video_requests"
  on public.video_requests for insert to anon, authenticated
  with check (
    status = 'novo' and consent = true and source_page = 'solicitar-video'
    and video_format = 'vertical_9_16' and duration_seconds = 20
  );

insert into storage.buckets (
  id, name, public, file_size_limit, allowed_mime_types
)
values (
  'video-request-assets', 'video-request-assets', false, 26214400,
  array[
    'image/jpeg', 'image/png', 'image/webp', 'image/svg+xml',
    'application/pdf', 'video/mp4', 'video/quicktime'
  ]
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "public_can_upload_video_request_assets" on storage.objects;
create policy "public_can_upload_video_request_assets"
  on storage.objects for insert to anon, authenticated
  with check (
    bucket_id = 'video-request-assets'
    and (storage.foldername(name))[1] in ('novos-clientes', 'clientes-atuais')
    and array_length(storage.foldername(name), 1) >= 2
  );

comment on table public.video_requests is
  'Briefings para vídeos verticais de 20 segundos da VM MÍDIAS.';
comment on column public.video_requests.uploaded_assets is
  'Metadados e caminhos privados dos arquivos enviados ao Storage.';
comment on column public.video_requests.internal_notes is
  'Campo interno. Nunca deve ser exposto pela chave publicável.';
