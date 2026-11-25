alter table public.verao_premiado_submissions
  alter column business_phone drop not null,
  alter column responsible_phone drop not null,
  alter column radio_briefing drop not null,
  alter column motion_briefing drop not null,
  alter column contribution_type drop not null,
  alter column contribution_description drop not null;

drop policy if exists "public_uploads_verao_assets" on storage.objects;
create policy "public_uploads_verao_assets" on storage.objects for insert to anon, authenticated
  with check (
    bucket_id = 'verao-premiado-assets'
    and (storage.foldername(name))[1] = 'inscricoes'
    and array_length(storage.foldername(name), 1) >= 3
  );

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
  if jsonb_typeof(v_assets) <> 'array' or jsonb_array_length(v_assets) <> 1 then
    raise exception 'ARQUIVOS_INVALIDOS';
  end if;
  if jsonb_typeof(v_declarations) <> 'array' or jsonb_array_length(v_declarations) <> 5
     or exists (select 1 from jsonb_array_elements(v_declarations) d where d <> 'true'::jsonb) then
    raise exception 'ACEITES_INCOMPLETOS';
  end if;
  if p_payload->>'termsVersion' <> 'verao-premiado-2027-v2' then raise exception 'TERMOS_INVALIDOS'; end if;
  if char_length(trim(coalesce(p_payload->>'businessName',''))) < 2
     or char_length(trim(coalesce(p_payload->>'segment',''))) < 2
     or char_length(trim(coalesce(p_payload->>'responsibleName',''))) < 4 then
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
    trim(p_payload->>'segment'), null, nullif(trim(p_payload->>'businessInstagram'),''), null,
    p_payload->>'cep', trim(p_payload->>'street'), trim(p_payload->>'number'), nullif(trim(p_payload->>'complement'),''), trim(p_payload->>'neighborhood'), trim(p_payload->>'city'), trim(p_payload->>'state'),
    trim(p_payload->>'responsibleName'), v_cpf, encode(extensions.digest(v_cpf, 'sha256'),'hex'), null, null, null,
    nullif(trim(p_payload->>'radioBriefing'),''), nullif(trim(p_payload->>'motionBriefing'),''), null, p_payload->>'paymentOption',
    nullif(p_payload->>'contributionType',''), nullif(trim(p_payload->>'contributionDescription'),''), null, null,
    v_assets, p_payload->>'termsVersion', v_declarations, p_payload->'commercialSnapshot', v_accepted
  );

  return query select p_id, v_protocol, v_accepted, 'recebida'::text;
exception when unique_violation then
  raise exception 'INSCRICAO_DUPLICADA';
end;
$$;

revoke all on function public.create_verao_premiado_submission(uuid, jsonb, timestamptz, text) from public;
grant execute on function public.create_verao_premiado_submission(uuid, jsonb, timestamptz, text) to anon, authenticated;

notify pgrst, 'reload schema';
