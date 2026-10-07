-- Adiciona o Instagram aos dados permanentes do negócio.

alter table public.businesses
  add column if not exists instagram text;

alter table public.businesses
  drop constraint if exists businesses_instagram_length_check;

alter table public.businesses
  add constraint businesses_instagram_length_check
  check (instagram is null or char_length(instagram) <= 120) not valid;

drop function if exists public.list_businesses_public();
drop function if exists public.create_business_secure(
  uuid, text, text, text, text, text, jsonb, boolean
);
drop function if exists public.update_business_secure(
  uuid, text, text, text, text, text, jsonb
);

create function public.list_businesses_public()
returns table (
  id uuid,
  name text,
  whatsapp text,
  instagram text,
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
    business.instagram,
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

create function public.create_business_secure(
  p_id uuid,
  p_name text,
  p_whatsapp text,
  p_instagram text,
  p_address text,
  p_segment text,
  p_description text,
  p_assets jsonb,
  p_consent boolean
)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_consent is distinct from true then
    raise exception 'CONSENTIMENTO_OBRIGATORIO';
  end if;
  if p_name is null or char_length(trim(p_name)) < 2
     or p_segment is null or char_length(trim(p_segment)) < 2 then
    raise exception 'DADOS_OBRIGATORIOS_AUSENTES';
  end if;
  if jsonb_typeof(p_assets) <> 'array'
     or jsonb_array_length(p_assets) not between 1 and 5 then
    raise exception 'IMAGENS_INVALIDAS';
  end if;

  insert into public.businesses (
    id, name, whatsapp, instagram, address, segment, description, assets, consent
  ) values (
    p_id,
    trim(p_name),
    nullif(trim(p_whatsapp), ''),
    nullif(trim(p_instagram), ''),
    nullif(trim(p_address), ''),
    trim(p_segment),
    nullif(trim(p_description), ''),
    p_assets,
    true
  );

  return p_id;
end;
$$;

create function public.update_business_secure(
  p_business_id uuid,
  p_name text,
  p_whatsapp text,
  p_instagram text,
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
  current_assets jsonb;
begin
  select assets into current_assets
  from public.businesses
  where id = p_business_id
  for update;

  if not found then
    raise exception 'NEGOCIO_NAO_ENCONTRADO';
  end if;
  if p_name is null or char_length(trim(p_name)) < 2
     or p_segment is null or char_length(trim(p_segment)) < 2 then
    raise exception 'DADOS_OBRIGATORIOS_AUSENTES';
  end if;
  if jsonb_typeof(p_new_assets) <> 'array'
     or jsonb_array_length(current_assets) + jsonb_array_length(p_new_assets) > 10 then
    raise exception 'LIMITE_IMAGENS';
  end if;

  update public.businesses
  set
    name = trim(p_name),
    whatsapp = nullif(trim(p_whatsapp), ''),
    instagram = nullif(trim(p_instagram), ''),
    address = nullif(trim(p_address), ''),
    segment = trim(p_segment),
    description = nullif(trim(p_description), ''),
    assets = current_assets || p_new_assets,
    updated_at = now()
  where id = p_business_id;
end;
$$;

revoke all on function public.list_businesses_public() from public;
revoke all on function public.create_business_secure(
  uuid, text, text, text, text, text, text, jsonb, boolean
) from public;
revoke all on function public.update_business_secure(
  uuid, text, text, text, text, text, text, jsonb
) from public;

grant execute on function public.list_businesses_public() to anon, authenticated;
grant execute on function public.create_business_secure(
  uuid, text, text, text, text, text, text, jsonb, boolean
) to anon, authenticated;
grant execute on function public.update_business_secure(
  uuid, text, text, text, text, text, text, jsonb
) to anon, authenticated;

comment on column public.businesses.instagram is
  'Perfil do Instagram informado pelo negócio.';

notify pgrst, 'reload schema';

