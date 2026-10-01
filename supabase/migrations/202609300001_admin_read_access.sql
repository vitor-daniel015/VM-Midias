-- Leitura administrativa protegida pelo login do Supabase Auth.
-- Mantenha o cadastro público de usuários desativado no projeto.

grant select on table public.video_requests to authenticated;

drop policy if exists "authenticated_can_read_video_requests" on public.video_requests;
create policy "authenticated_can_read_video_requests"
  on public.video_requests for select to authenticated
  using (true);

drop policy if exists "authenticated_can_read_video_request_assets" on storage.objects;
create policy "authenticated_can_read_video_request_assets"
  on storage.objects for select to authenticated
  using (bucket_id = 'video-request-assets');

comment on policy "authenticated_can_read_video_requests" on public.video_requests is
  'Permite que administradores autenticados consultem os briefings no painel interno.';

comment on policy "authenticated_can_read_video_request_assets" on storage.objects is
  'Permite links assinados temporários para materiais no painel interno.';
