-- Impede novos registros com mais de cinco materiais anexados.
-- NOT VALID mantém compatibilidade caso já exista um pedido antigo com mais arquivos.

alter table public.video_requests
  drop constraint if exists video_requests_max_five_uploaded_assets;

alter table public.video_requests
  add constraint video_requests_max_five_uploaded_assets
  check (jsonb_array_length(uploaded_assets) <= 5) not valid;

comment on constraint video_requests_max_five_uploaded_assets
  on public.video_requests is
  'Cada solicitação pode registrar no máximo cinco arquivos no Storage.';
