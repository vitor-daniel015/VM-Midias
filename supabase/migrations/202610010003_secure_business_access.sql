-- Protege os dados dos negócios com PIN e remove escrita pública direta.

alter table public.businesses
  add column if not exists edit_pin_hash text;

alter table public.businesses
  drop constraint if exists businesses_assets_check;

alter table public.businesses
  add constraint businesses_assets_check check (
    jsonb_typeof(assets) = 'array' and jsonb_array_length(assets) <= 10
  ) not valid;

revoke select, insert, update on public.businesses from anon;
revoke insert, update on public.businesses from authenticated;
grant select on public.businesses to authenticated;

drop policy if exists "public_can_read_businesses" on public.businesses;
drop policy if exists "public_can_create_businesses" on public.businesses;
drop policy if exists "public_can_update_businesses" on public.businesses;

drop policy if exists "authenticated_can_read_businesses" on public.businesses;
create policy "authenticated_can_read_businesses"
  on public.businesses for select to authenticated
  using (true);

create or replace function public.list_businesses_public()
returns table (
  id uuid,
  name text,
  whatsapp text,
  address text,
  segment text,
  description text,
  assets jsonb,
  consent boolean,
  created_at timestamptz,
  updated_at timestamptz
)
language sql
stable
security definer
set search_path = public
as $$
  select
    business.id,
    business.name,
    business.whatsapp,
    business.address,
    business.segment,
    business.description,
    business.assets,
    business.consent,
    business.created_at,
    business.updated_at
  from public.businesses as business
  order by business.name asc;
$$;

create or replace function public.create_business_secure(
  p_id uuid,
  p_name text,
  p_whatsapp text,
  p_address text,
  p_segment text,
  p_description text,
  p_assets jsonb,
  p_consent boolean,
  p_edit_pin text
)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_edit_pin !~ '^[0-9]{4}$' then
    raise exception 'PIN_INVALIDO';
  end if;
  if not p_consent then
    raise exception 'CONSENTIMENTO_OBRIGATORIO';
  end if;
  if p_name is null or char_length(trim(p_name)) < 2
     or p_segment is null or char_length(trim(p_segment)) < 2 then
    raise exception 'DADOS_OBRIGATORIOS_AUSENTES';
  end if;
  if jsonb_typeof(p_assets) <> 'array' or jsonb_array_length(p_assets) not between 1 and 5 then
    raise exception 'IMAGENS_INVALIDAS';
  end if;

  insert into public.businesses (
    id, name, whatsapp, address, segment, description,
    assets, consent, edit_pin_hash
  ) values (
    p_id, trim(p_name), nullif(trim(p_whatsapp), ''), nullif(trim(p_address), ''),
    trim(p_segment), nullif(trim(p_description), ''), p_assets, true,
    extensions.crypt(p_edit_pin, extensions.gen_salt('bf', 10))
  );

  return p_id;
end;
$$;

create or replace function public.verify_business_pin(
  p_business_id uuid,
  p_edit_pin text
)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select coalesce(
    business.edit_pin_hash is not null
    and business.edit_pin_hash = extensions.crypt(p_edit_pin, business.edit_pin_hash),
    false
  )
  from public.businesses as business
  where business.id = p_business_id;
$$;

create or replace function public.update_business_secure(
  p_business_id uuid,
  p_edit_pin text,
  p_name text,
  p_whatsapp text,
  p_address text,
  p_segment text,
  p_description text,
  p_new_assets jsonb default '[]'::jsonb
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  current_business public.businesses%rowtype;
begin
  select * into current_business
  from public.businesses
  where id = p_business_id
  for update;

  if not found then
    raise exception 'NEGOCIO_NAO_ENCONTRADO';
  end if;
  if current_business.edit_pin_hash is null then
    raise exception 'PIN_NAO_CONFIGURADO';
  end if;
  if current_business.edit_pin_hash <> extensions.crypt(p_edit_pin, current_business.edit_pin_hash) then
    raise exception 'PIN_INVALIDO';
  end if;
  if p_name is null or char_length(trim(p_name)) < 2
     or p_segment is null or char_length(trim(p_segment)) < 2 then
    raise exception 'DADOS_OBRIGATORIOS_AUSENTES';
  end if;
  if jsonb_typeof(p_new_assets) <> 'array'
     or jsonb_array_length(current_business.assets) + jsonb_array_length(p_new_assets) > 10 then
    raise exception 'LIMITE_IMAGENS';
  end if;

  update public.businesses
  set
    name = trim(p_name),
    whatsapp = nullif(trim(p_whatsapp), ''),
    address = nullif(trim(p_address), ''),
    segment = trim(p_segment),
    description = nullif(trim(p_description), ''),
    assets = current_business.assets || p_new_assets,
    updated_at = now()
  where id = p_business_id;
end;
$$;

create or replace function public.set_business_pin_admin(
  p_business_id uuid,
  p_edit_pin text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.uid() is null then
    raise exception 'NAO_AUTORIZADO';
  end if;
  if p_edit_pin !~ '^[0-9]{4}$' then
    raise exception 'PIN_INVALIDO';
  end if;

  update public.businesses
  set edit_pin_hash = extensions.crypt(p_edit_pin, extensions.gen_salt('bf', 10)), updated_at = now()
  where id = p_business_id;

  if not found then
    raise exception 'NEGOCIO_NAO_ENCONTRADO';
  end if;
end;
$$;

revoke insert on public.video_requests from anon, authenticated;
drop policy if exists "public_can_create_video_requests" on public.video_requests;

create or replace function public.create_video_request_secure(
  p_id uuid,
  p_protocol text,
  p_business_id uuid,
  p_campaign_objective text,
  p_objective_other text,
  p_video_idea text,
  p_uploaded_assets jsonb,
  p_consent boolean,
  p_edit_pin text
)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.verify_business_pin(p_business_id, p_edit_pin) then
    raise exception 'PIN_INVALIDO';
  end if;
  if not p_consent then
    raise exception 'CONSENTIMENTO_OBRIGATORIO';
  end if;
  if p_campaign_objective is null or char_length(trim(p_campaign_objective)) < 2 then
    raise exception 'OBJETIVO_OBRIGATORIO';
  end if;
  if jsonb_typeof(p_uploaded_assets) <> 'array' or jsonb_array_length(p_uploaded_assets) > 5 then
    raise exception 'IMAGENS_INVALIDAS';
  end if;

  insert into public.video_requests (
    id, protocol, business_id, campaign_objective, objective_other,
    video_idea, uploaded_assets, video_format, duration_seconds, consent
  ) values (
    p_id, p_protocol, p_business_id, trim(p_campaign_objective),
    nullif(trim(p_objective_other), ''), coalesce(trim(p_video_idea), ''),
    p_uploaded_assets, 'vertical_9_16', 20, true
  );

  return p_id;
end;
$$;

revoke all on function public.list_businesses_public() from public;
revoke all on function public.create_business_secure(uuid, text, text, text, text, text, jsonb, boolean, text) from public;
revoke all on function public.verify_business_pin(uuid, text) from public;
revoke all on function public.update_business_secure(uuid, text, text, text, text, text, text, jsonb) from public;
revoke all on function public.set_business_pin_admin(uuid, text) from public;
revoke all on function public.create_video_request_secure(uuid, text, uuid, text, text, text, jsonb, boolean, text) from public;

grant execute on function public.list_businesses_public() to anon, authenticated;
grant execute on function public.create_business_secure(uuid, text, text, text, text, text, jsonb, boolean, text) to anon, authenticated;
grant execute on function public.verify_business_pin(uuid, text) to anon, authenticated;
grant execute on function public.update_business_secure(uuid, text, text, text, text, text, text, jsonb) to anon, authenticated;
grant execute on function public.set_business_pin_admin(uuid, text) to authenticated;
grant execute on function public.create_video_request_secure(uuid, text, uuid, text, text, text, jsonb, boolean, text) to anon, authenticated;

drop policy if exists "public_can_upload_business_assets" on storage.objects;
create policy "public_can_upload_business_assets"
  on storage.objects for insert to anon, authenticated
  with check (
    bucket_id = 'business-assets'
    and (storage.foldername(name))[1] in ('comercios', 'negocios')
    and array_length(storage.foldername(name), 1) >= 2
  );

comment on column public.businesses.edit_pin_hash is
  'Hash bcrypt do PIN usado para autorizar alterações pelo cliente. Nunca é exposto pela API pública.';
