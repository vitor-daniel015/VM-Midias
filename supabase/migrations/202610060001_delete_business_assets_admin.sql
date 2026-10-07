-- Permite que somente usuários autenticados do painel removam imagens antigas.

create or replace function public.remove_business_asset_admin(
  p_business_id uuid,
  p_asset_path text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  current_assets jsonb;
begin
  if auth.uid() is null then
    raise exception 'NAO_AUTORIZADO';
  end if;

  if p_asset_path is null or trim(p_asset_path) = '' then
    raise exception 'CAMINHO_INVALIDO';
  end if;

  select assets into current_assets
  from public.businesses
  where id = p_business_id
  for update;

  if not found then
    raise exception 'NEGOCIO_NAO_ENCONTRADO';
  end if;

  if not exists (
    select 1
    from jsonb_array_elements(current_assets) as asset
    where asset ->> 'path' = p_asset_path
  ) then
    raise exception 'IMAGEM_NAO_ENCONTRADA';
  end if;

  update public.businesses
  set
    assets = coalesce(
      (
        select jsonb_agg(asset)
        from jsonb_array_elements(current_assets) as asset
        where asset ->> 'path' <> p_asset_path
      ),
      '[]'::jsonb
    ),
    updated_at = now()
  where id = p_business_id;
end;
$$;

revoke all on function public.remove_business_asset_admin(uuid, text) from public;
grant execute on function public.remove_business_asset_admin(uuid, text) to authenticated;

drop policy if exists "authenticated_can_delete_business_assets" on storage.objects;
create policy "authenticated_can_delete_business_assets"
  on storage.objects for delete to authenticated
  using (bucket_id = 'business-assets');

comment on function public.remove_business_asset_admin(uuid, text) is
  'Remove do cadastro a referência de uma imagem antiga, somente pelo painel autenticado.';

-- Atualiza imediatamente o catálogo de funções exposto pela API REST.
notify pgrst, 'reload schema';
