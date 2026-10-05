-- Remove o PIN do portal de negócios e mantém as validações de dados no banco.

drop function if exists public.create_video_request_secure(
  uuid, text, uuid, text, text, text, jsonb, boolean, text
);
drop function if exists public.update_business_secure(
  uuid, text, text, text, text, text, text, jsonb
);
drop function if exists public.create_business_secure(
  uuid, text, text, text, text, text, jsonb, boolean, text
);
drop function if exists public.set_business_pin_admin(uuid, text);
drop function if exists public.verify_business_pin(uuid, text);

alter table public.businesses
  drop column if exists edit_pin_hash;

create or replace function public.create_business_secure(
  p_id uuid,
  p_name text,
  p_whatsapp text,
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
    id, name, whatsapp, address, segment, description, assets, consent
  ) values (
    p_id, trim(p_name), nullif(trim(p_whatsapp), ''),
    nullif(trim(p_address), ''), trim(p_segment),
    nullif(trim(p_description), ''), p_assets, true
  );

  return p_id;
end;
$$;

create or replace function public.update_business_secure(
  p_business_id uuid,
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
    address = nullif(trim(p_address), ''),
    segment = trim(p_segment),
    description = nullif(trim(p_description), ''),
    assets = current_assets || p_new_assets,
    updated_at = now()
  where id = p_business_id;
end;
$$;

create or replace function public.create_video_request_secure(
  p_id uuid,
  p_protocol text,
  p_business_id uuid,
  p_campaign_objective text,
  p_objective_other text,
  p_video_idea text,
  p_uploaded_assets jsonb,
  p_consent boolean
)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
begin
  if not exists (
    select 1 from public.businesses where id = p_business_id
  ) then
    raise exception 'NEGOCIO_NAO_ENCONTRADO';
  end if;
  if p_consent is distinct from true then
    raise exception 'CONSENTIMENTO_OBRIGATORIO';
  end if;
  if p_campaign_objective is null
     or char_length(trim(p_campaign_objective)) < 2 then
    raise exception 'OBJETIVO_OBRIGATORIO';
  end if;
  if jsonb_typeof(p_uploaded_assets) <> 'array'
     or jsonb_array_length(p_uploaded_assets) > 5 then
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

revoke all on function public.create_business_secure(
  uuid, text, text, text, text, text, jsonb, boolean
) from public;
revoke all on function public.update_business_secure(
  uuid, text, text, text, text, text, jsonb
) from public;
revoke all on function public.create_video_request_secure(
  uuid, text, uuid, text, text, text, jsonb, boolean
) from public;

grant execute on function public.create_business_secure(
  uuid, text, text, text, text, text, jsonb, boolean
) to anon, authenticated;
grant execute on function public.update_business_secure(
  uuid, text, text, text, text, text, jsonb
) to anon, authenticated;
grant execute on function public.create_video_request_secure(
  uuid, text, uuid, text, text, text, jsonb, boolean
) to anon, authenticated;
