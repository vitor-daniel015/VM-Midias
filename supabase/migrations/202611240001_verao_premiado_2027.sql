-- Verão Premiado 2027: inscrições comerciais, telas, aceite e arquivos privados.

create extension if not exists pgcrypto;

create table if not exists public.verao_premiado_screens (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(trim(name)) between 2 and 120),
  address text not null check (char_length(trim(address)) between 5 and 240),
  description text,
  photo_url text,
  capacity integer check (capacity is null or capacity > 0),
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.verao_premiado_submissions (
  id uuid primary key,
  protocol text not null unique,
  business_name text not null,
  cnpj text,
  cnpj_hash text,
  segment text not null,
  business_phone text,
  business_instagram text,
  business_email text,
  cep text not null,
  street text not null,
  address_number text not null,
  complement text,
  neighborhood text not null,
  city text not null,
  state text not null,
  responsible_name text not null,
  cpf text not null,
  cpf_hash text not null,
  responsible_phone text,
  responsible_email text,
  responsible_role text,
  radio_briefing text,
  motion_briefing text,
  screen_id uuid references public.verao_premiado_screens(id),
  payment_option text not null check (payment_option in ('avista', 'parcelado')),
  contribution_type text check (contribution_type in ('produto', 'servico', 'vale_compra')),
  contribution_description text,
  contribution_conditions text,
  contribution_notes text,
  assets jsonb not null default '[]'::jsonb check (jsonb_typeof(assets) = 'array'),
  terms_version text not null,
  declarations jsonb not null check (jsonb_typeof(declarations) = 'array'),
  commercial_snapshot jsonb not null check (jsonb_typeof(commercial_snapshot) = 'object'),
  accepted_at timestamptz not null default now(),
  registration_status text not null default 'recebida' check (registration_status in ('recebida','em_analise','aprovada','cancelada')),
  financial_status text not null default 'aguardando_pagamento' check (financial_status in ('aguardando_pagamento','parcialmente_pago','pago')),
  spot_status text not null default 'aguardando_producao' check (spot_status in ('aguardando_producao','em_producao','aguardando_aprovacao','finalizado')),
  video_status text not null default 'aguardando_producao' check (video_status in ('aguardando_producao','em_producao','aguardando_aprovacao','finalizado')),
  kit_status text not null default 'aguardando_producao' check (kit_status in ('aguardando_producao','em_producao','disponivel','entregue')),
  contribution_status text not null default 'pendente' check (contribution_status in ('pendente','definida','recebida')),
  payment_notes text,
  internal_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists verao_premiado_active_cpf_idx
  on public.verao_premiado_submissions (cpf_hash)
  where registration_status <> 'cancelada';
create unique index if not exists verao_premiado_active_cnpj_idx
  on public.verao_premiado_submissions (cnpj_hash)
  where cnpj_hash is not null and registration_status <> 'cancelada';
create index if not exists verao_premiado_created_idx on public.verao_premiado_submissions (created_at desc);
create index if not exists verao_premiado_screen_idx on public.verao_premiado_submissions (screen_id);

alter table public.verao_premiado_screens enable row level security;
alter table public.verao_premiado_submissions enable row level security;

revoke all on public.verao_premiado_screens from anon, authenticated;
revoke all on public.verao_premiado_submissions from anon, authenticated;
grant select, insert, update on public.verao_premiado_screens to authenticated;
grant select, update on public.verao_premiado_submissions to authenticated;

drop policy if exists "admins_manage_verao_screens" on public.verao_premiado_screens;
create policy "admins_manage_verao_screens" on public.verao_premiado_screens
  for all to authenticated using (public.is_vm_admin()) with check (public.is_vm_admin());

drop policy if exists "admins_read_verao_submissions" on public.verao_premiado_submissions;
create policy "admins_read_verao_submissions" on public.verao_premiado_submissions
  for select to authenticated using (public.is_vm_admin());
drop policy if exists "admins_update_verao_submissions" on public.verao_premiado_submissions;
create policy "admins_update_verao_submissions" on public.verao_premiado_submissions
  for update to authenticated using (public.is_vm_admin()) with check (public.is_vm_admin());

create or replace function public.list_verao_premiado_screens()
returns table (
  id uuid, name text, address text, description text, photo_url text,
  capacity integer, selected_count bigint, available boolean
)
language sql stable security definer set search_path = ''
as $$
  select s.id, s.name, s.address, s.description, s.photo_url, s.capacity,
    count(i.id) filter (where i.registration_status <> 'cancelada') as selected_count,
    (s.capacity is null or count(i.id) filter (where i.registration_status <> 'cancelada') < s.capacity) as available
  from public.verao_premiado_screens s
  left join public.verao_premiado_submissions i on i.screen_id = s.id
  where s.is_active = true
  group by s.id
  order by s.name;
$$;
revoke all on function public.list_verao_premiado_screens() from public;
grant execute on function public.list_verao_premiado_screens() to anon, authenticated;

create or replace function public.create_verao_premiado_submission(
  p_id uuid, p_payload jsonb, p_started_at timestamptz, p_honeypot text default ''
)
returns table (id uuid, protocol text, accepted_at timestamptz, status text)
language plpgsql security definer set search_path = ''
as $$
declare
  v_protocol text;
  v_cpf text := regexp_replace(coalesce(p_payload->>'cpf',''), '\D', '', 'g');
  v_cnpj text := nullif(regexp_replace(coalesce(p_payload->>'cnpj',''), '\D', '', 'g'), '');
  v_assets jsonb := coalesce(p_payload->'assets', '[]'::jsonb);
  v_declarations jsonb := coalesce(p_payload->'declarations', '[]'::jsonb);
  v_accepted timestamptz := now();
begin
  if coalesce(trim(p_honeypot), '') <> '' or p_started_at is null or p_started_at > now() - interval '3 seconds' or p_started_at < now() - interval '24 hours' then
    raise exception 'FORMULARIO_INVALIDO';
  end if;
  if p_id is null or v_cpf !~ '^\d{11}$' or (v_cnpj is not null and v_cnpj !~ '^\d{14}$') then
    raise exception 'DOCUMENTO_INVALIDO';
  end if;
  if jsonb_typeof(v_assets) <> 'array' or jsonb_array_length(v_assets) < 1 or jsonb_array_length(v_assets) > 11 then
    raise exception 'ARQUIVOS_INVALIDOS';
  end if;
  if jsonb_typeof(v_declarations) <> 'array' or jsonb_array_length(v_declarations) <> 5
     or exists (select 1 from jsonb_array_elements(v_declarations) d where d <> 'true'::jsonb) then
    raise exception 'ACEITES_INCOMPLETOS';
  end if;
  if p_payload->>'termsVersion' <> 'verao-premiado-2027-v2' then raise exception 'TERMOS_INVALIDOS'; end if;
  if char_length(trim(coalesce(p_payload->>'businessName',''))) < 2
     or char_length(trim(coalesce(p_payload->>'segment',''))) < 2
     or char_length(trim(coalesce(p_payload->>'responsibleName',''))) < 4
     then
    raise exception 'CAMPOS_OBRIGATORIOS';
  end if;
  v_protocol := 'VP2027-' || to_char(v_accepted at time zone 'America/Sao_Paulo', 'YYYYMMDD') || '-' || upper(substring(replace(p_id::text,'-','') from 1 for 6));

  insert into public.verao_premiado_submissions (
    id, protocol, business_name, cnpj, cnpj_hash, segment, business_phone, business_instagram, business_email,
    cep, street, address_number, complement, neighborhood, city, state,
    responsible_name, cpf, cpf_hash, responsible_phone, responsible_email, responsible_role,
    radio_briefing, motion_briefing, screen_id, payment_option,
    contribution_type, contribution_description, contribution_conditions, contribution_notes,
    assets, terms_version, declarations, commercial_snapshot, accepted_at
  ) values (
    p_id, v_protocol, trim(p_payload->>'businessName'), v_cnpj,
    case when v_cnpj is null then null else encode(extensions.digest(v_cnpj, 'sha256'),'hex') end,
    trim(p_payload->>'segment'), nullif(trim(p_payload->>'businessPhone'),''), nullif(trim(p_payload->>'businessInstagram'),''), nullif(trim(p_payload->>'businessEmail'),''),
    p_payload->>'cep', trim(p_payload->>'street'), trim(p_payload->>'number'), nullif(trim(p_payload->>'complement'),''), trim(p_payload->>'neighborhood'), trim(p_payload->>'city'), trim(p_payload->>'state'),
    trim(p_payload->>'responsibleName'), v_cpf, encode(extensions.digest(v_cpf, 'sha256'),'hex'), nullif(trim(p_payload->>'responsiblePhone'),''), nullif(trim(p_payload->>'responsibleEmail'),''), nullif(trim(p_payload->>'responsibleRole'),''),
    nullif(trim(p_payload->>'radioBriefing'),''), nullif(trim(p_payload->>'motionBriefing'),''), null, p_payload->>'paymentOption',
    nullif(p_payload->>'contributionType',''), nullif(trim(p_payload->>'contributionDescription'),''), nullif(trim(p_payload->>'contributionConditions'),''), nullif(trim(p_payload->>'contributionNotes'),''),
    v_assets, p_payload->>'termsVersion', v_declarations, p_payload->'commercialSnapshot', v_accepted
  );

  return query select p_id, v_protocol, v_accepted, 'recebida'::text;
exception when unique_violation then
  raise exception 'INSCRICAO_DUPLICADA';
end;
$$;
revoke all on function public.create_verao_premiado_submission(uuid, jsonb, timestamptz, text) from public;
grant execute on function public.create_verao_premiado_submission(uuid, jsonb, timestamptz, text) to anon, authenticated;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('verao-premiado-assets', 'verao-premiado-assets', false, 20971520,
  array['image/png','image/jpeg','application/pdf','image/svg+xml'])
on conflict (id) do update set public = false, file_size_limit = excluded.file_size_limit, allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "public_uploads_verao_assets" on storage.objects;
create policy "public_uploads_verao_assets" on storage.objects for insert to anon, authenticated
  with check (bucket_id = 'verao-premiado-assets' and (storage.foldername(name))[1] = 'inscricoes' and array_length(storage.foldername(name), 1) >= 3);
drop policy if exists "admins_read_verao_assets" on storage.objects;
create policy "admins_read_verao_assets" on storage.objects for select to authenticated
  using (bucket_id = 'verao-premiado-assets' and public.is_vm_admin());

comment on table public.verao_premiado_submissions is 'Inscrições comerciais privadas da campanha Verão Premiado 2027.';
notify pgrst, 'reload schema';
