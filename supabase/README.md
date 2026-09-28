# Solicitações de vídeos — Supabase

## Instalação

1. Abra o projeto da VM no Supabase.
2. Entre em **SQL Editor**.
3. Execute `migrations/202609280001_create_video_requests_and_storage.sql`.
4. Teste `/solicitar-video/novo-cliente` e `/solicitar-video/cliente-atual`.
5. Confira os registros em **Table Editor → video_requests**.
6. Confira os arquivos em **Storage → video-request-assets**.

O bucket é privado. Os visitantes podem apenas criar arquivos e não podem
listar, abrir, alterar ou apagar materiais. A organização interna é:

```text
video-request-assets/
├── novos-clientes/<uuid-da-solicitacao>/
└── clientes-atuais/<uuid-da-solicitacao>/
```

Cada arquivo aceita no máximo 25 MB. O formulário permite até oito arquivos nos
formatos PNG, JPG, WEBP, SVG, PDF, MP4 e MOV.

## Segurança e n8n

A chave publicável do site recebe somente permissões de `INSERT`. Para o n8n
consultar pedidos, baixar arquivos privados e atualizar o andamento, use a
`service_role key` em uma credencial privada do n8n. Nunca coloque essa chave no
site, no GitHub ou em variáveis iniciadas por `VITE_`.

Consulta sugerida para novos pedidos:

```http
GET /rest/v1/video_requests?status=eq.novo&order=created_at.asc
```

Depois que o fluxo assumir um pedido, altere o status para `em_analise` para
evitar processamento duplicado. O campo `request_kind` diferencia o fluxo de
criação do Visual Key (`new_client`) do fluxo reduzido (`existing_client`).
