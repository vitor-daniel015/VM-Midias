-- Restringe os dados administrativos a usuários explicitamente autorizados.

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.admin_users enable row level security;
revoke all on table public.admin_users from anon, authenticated;

-- Preserva o acesso dos usuários que já existiam antes desta proteção.
-- Novos usuários não serão adicionados automaticamente.
insert into public.admin_users (user_id)
select id from auth.users
on conflict (user_id) do nothing;

create or replace function public.is_vm_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.admin_users
    where user_id = auth.uid()
  );
$$;

revoke all on function public.is_vm_admin() from public;
grant execute on function public.is_vm_admin() to authenticated;

drop policy if exists "authenticated_can_read_video_requests"
  on public.video_requests;
create policy "authenticated_can_read_video_requests"
  on public.video_requests for select to authenticated
  using (public.is_vm_admin());

drop policy if exists "authenticated_can_read_businesses"
  on public.businesses;
create policy "authenticated_can_read_businesses"
  on public.businesses for select to authenticated
  using (public.is_vm_admin());

drop policy if exists "authenticated_can_read_video_request_assets"
  on storage.objects;
create policy "authenticated_can_read_video_request_assets"
  on storage.objects for select to authenticated
  using (
    bucket_id = 'video-request-assets'
    and public.is_vm_admin()
  );

drop policy if exists "authenticated_can_delete_business_assets"
  on storage.objects;
create policy "authenticated_can_delete_business_assets"
  on storage.objects for delete to authenticated
  using (
    bucket_id = 'business-assets'
    and public.is_vm_admin()
  );

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
  if not public.is_vm_admin() then
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
grant execute on function public.remove_business_asset_admin(uuid, text)
  to authenticated;

comment on table public.admin_users is
  'Lista privada de usuários autorizados a acessar o painel administrativo.';

notify pgrst, 'reload schema';

