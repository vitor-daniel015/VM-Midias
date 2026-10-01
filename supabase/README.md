# Solicitações de vídeos — Supabase

## Instalação

1. Abra o projeto da VM no Supabase.
2. Entre em **SQL Editor**.
3. Execute `migrations/202609280001_create_video_requests_and_storage.sql`.
4. Em instalações existentes, execute `migrations/202609300002_limit_video_request_assets.sql` para limitar novos pedidos a cinco arquivos.
5. Execute `migrations/202610010001_business_portal.sql` para criar os comércios, os vínculos dos pedidos e o bucket de imagens comerciais.
6. Execute `migrations/202610010002_cleanup_video_requests.sql` para migrar pedidos antigos e remover as colunas que não pertencem mais ao novo formulário.
7. Execute `migrations/202610010003_secure_business_access.sql` para ativar PIN, funções seguras e remover a atualização pública direta.
8. Teste `/solicitar-video`, `/solicitar-video/novo-negocio` e a página de um negócio.
9. Confira os registros em **Table Editor → businesses** e **Table Editor → video_requests**.
10. Confira os arquivos em **Storage → business-assets** e **Storage → video-request-assets**.

## Variáveis de ambiente

Copie `.env.example` para `.env` e preencha:

```text
VITE_SUPABASE_URL=https://SEU-PROJETO.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_SUA_CHAVE_PUBLICAVEL
```

O arquivo `.env` está ignorado pelo Git. A chave `publishable` pode ser usada no
navegador, mas sua segurança depende das políticas RLS e das funções do banco.
Nunca coloque a chave `service_role` em uma variável iniciada por `VITE_`.

## Painel administrativo

O painel está disponível em:

```text
/admin/solicitacoes
```

Para ativá-lo:

1. Execute também `migrations/202609300001_admin_read_access.sql` no SQL Editor.
2. Em **Authentication → Users**, crie o usuário administrador com e-mail e senha.
3. Em **Authentication → Providers → Email**, mantenha desativado o cadastro público de novos usuários.
4. Entre no painel usando esse usuário.

O navegador usa apenas a chave publicável. O login gera uma sessão de usuário
autenticado e a leitura continua protegida pelas políticas RLS. A `service_role`
não deve ser colocada no site.

Os arquivos são mostrados no painel por links assinados temporários. Ao copiar
o JSON, o painel cria uma URL assinada com validade de sete dias para que uma
ferramenta de IA consiga baixar e interpretar o material. O caminho permanente
do bucket também é preservado, por exemplo:

```json
{
  "nome": "01-logo.png",
  "caminho_bucket": "video-request-assets/novos-clientes/<uuid>/01-logo.png",
  "url_assinada": "https://.../storage/v1/object/sign/...",
  "url_valida_por": "7 dias"
}
```

O bucket `video-request-assets` continua privado. A URL assinada deve ser entregue somente ao serviço
que processará o arquivo e deixa de funcionar após o prazo informado.

O bucket de solicitações é privado. Os visitantes podem apenas criar arquivos e não podem
listar, abrir, alterar ou apagar materiais. A organização interna é:

```text
video-request-assets/solicitacoes/<uuid-do-comercio>/<uuid-da-solicitacao>/
```

O bucket `business-assets` é público porque seus arquivos são logos e imagens
comerciais exibidos nos cards e enviados à IA. Ele usa a estrutura:

```text
business-assets/negocios/<uuid-do-negocio>/
```

Cada arquivo aceita no máximo 25 MB. O cadastro e cada alteração permitem até
cinco imagens PNG, JPG, WEBP ou SVG. Um negócio pode manter até dez imagens.

## Segurança das alterações

Cada novo negócio cria um PIN numérico de quatro dígitos. O Supabase armazena
somente o hash bcrypt desse PIN. A página pública não recebe o hash e não possui
permissão para atualizar diretamente a tabela. As alterações passam pela função
`update_business_secure`, que valida o PIN dentro do banco. Novas solicitações
também passam por `create_video_request_secure` e exigem o mesmo PIN.

Negócios cadastrados antes da migração de segurança não possuem PIN. O
administrador deve abrir o negócio no painel e usar **Salvar PIN** uma vez.

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
