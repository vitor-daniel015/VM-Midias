-- Remove campos duplicados/antigos da tabela de solicitações.
-- Os dados permanentes do comércio passam a existir somente em public.businesses.

alter table public.businesses
  drop constraint if exists businesses_assets_check;

alter table public.businesses
  add constraint businesses_assets_check check (
    jsonb_typeof(assets) = 'array' and jsonb_array_length(assets) <= 5
  ) not valid;

-- Primeiro relaciona solicitações antigas a comércios que já foram cadastrados.
update public.video_requests as request
set business_id = business.id
from public.businesses as business
where request.business_id is null
  and lower(trim(request.company_name)) = lower(trim(business.name));

-- Preserva solicitações antigas criando o comércio correspondente quando necessário.
insert into public.businesses (
  id, name, whatsapp, address, segment, description, assets, consent, created_at, updated_at
)
select
  gen_random_uuid(),
  legacy.company_name,
  legacy.whatsapp,
  null,
  coalesce(nullif(legacy.business_segment, ''), 'Cadastro anterior'),
  legacy.business_description,
  '[]'::jsonb,
  true,
  legacy.created_at,
  legacy.updated_at
from (
  select distinct on (lower(trim(company_name)))
    company_name, whatsapp, business_segment, business_description, created_at, updated_at
  from public.video_requests
  where business_id is null
  order by lower(trim(company_name)), created_at asc
) as legacy
where not exists (
  select 1 from public.businesses as business
  where lower(trim(business.name)) = lower(trim(legacy.company_name))
);

update public.video_requests as request
set business_id = business.id
from public.businesses as business
where request.business_id is null
  and lower(trim(request.company_name)) = lower(trim(business.name));

alter table public.video_requests
  alter column business_id set not null;

drop policy if exists "public_can_create_video_requests" on public.video_requests;

revoke insert on public.video_requests from anon, authenticated;

alter table public.video_requests
  drop column if exists request_kind,
  drop column if exists company_name,
  drop column if exists whatsapp,
  drop column if exists business_segment,
  drop column if exists business_description,
  drop column if exists product_service,
  drop column if exists target_audience,
  drop column if exists offer_details,
  drop column if exists main_message,
  drop column if exists required_texts,
  drop column if exists call_to_action,
  drop column if exists brand_colors,
  drop column if exists avoid_colors,
  drop column if exists brand_personality,
  drop column if exists visual_references,
  drop column if exists source_page;

grant insert (
  id, protocol, business_id, campaign_objective, objective_other,
  video_idea, uploaded_assets, video_format, duration_seconds, consent
) on public.video_requests to anon, authenticated;

create policy "public_can_create_video_requests"
  on public.video_requests for insert to anon, authenticated
  with check (
    status = 'novo'
    and consent = true
    and video_format = 'vertical_9_16'
    and duration_seconds = 20
    and business_id is not null
  );

comment on table public.video_requests is
  'Solicitações de novos vídeos vinculadas aos comércios cadastrados.';
comment on column public.video_requests.campaign_objective is
  'Objetivo único selecionado para o novo vídeo.';
comment on column public.video_requests.video_idea is
  'Descrição opcional do que o cliente deseja no novo vídeo.';
