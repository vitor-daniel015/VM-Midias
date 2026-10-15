-- Bucket privado usado pela automação local para entregar temporariamente
-- as artes de Stories à API oficial da Meta.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'instagram-story-assets',
  'instagram-story-assets',
  false,
  10485760,
  array['image/jpeg']
)
on conflict (id) do update
set public = excluded.public,
    file_size_limit = excluded.file_size_limit,
    allowed_mime_types = excluded.allowed_mime_types;

-- Não são criadas policies públicas. A automação usa a service_role somente
-- no computador autorizado; visitantes e a chave publicável não acessam o bucket.
