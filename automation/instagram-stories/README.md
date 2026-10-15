# Notícias da VM → Stories da Rádio Braba

Esta automação roda no computador da VM. Ela reutiliza a arte de notícias já
existente em `/VM/index.html`, captura cada matéria inédita em **1080 × 1920**,
salva o JPEG, registra o histórico para não repetir publicações e, quando
autorizada, publica o arquivo no Story pela API oficial da Meta.

Não há n8n, Zapier ou serviço de postagem de terceiros. O Supabase já usado pela
VM funciona apenas como endereço temporário da imagem, pois a Meta precisa baixar
o arquivo por uma URL HTTPS para criar o Story.

## 1. Preparar

Na pasta `automation/instagram-stories`:

```powershell
npm install
npm run install-browser
Copy-Item .env.example .env
```

Edite `.env`. Ele é ignorado pelo Git e deve permanecer somente na máquina que
executa a automação. Não use nomes iniciados por `VITE_` para a `service_role` ou
para o token da Meta.

Execute no SQL Editor do Supabase:

```text
supabase/migrations/202610140001_instagram_story_assets.sql
```

## 2. Primeiro teste sem publicar

Mantenha:

```text
STORY_PUBLISH_ENABLED=false
```

Depois rode somente a captura:

```powershell
npm run once
```

As artes aparecerão em `runtime/captures`. O histórico fica em
`runtime/state.json`. Os dois locais estão fora do Git.

`STORY_FIRST_RUN_MODE=latest` evita despejar todo o histórico no Instagram na
primeira execução. Depois disso, toda matéria nova entra na fila. Use `recent`
para processar todas as matérias ainda dentro de `STORY_MAX_AGE_HOURS`, ou `all`
para permitir todo o conteúdo retornado pelo painel, independentemente da idade.

## 3. Autorizar a conta da Rádio Braba

A conta precisa ser profissional e, para publicação de Stories pela integração
com Facebook Login, do tipo **Business**. No painel da Meta:

1. Crie um aplicativo do tipo Business.
2. Vincule a Página do Facebook à conta profissional da Rádio Braba.
3. Autorize `instagram_basic`, `instagram_content_publish`,
   `pages_show_list` e `pages_read_engagement`.
4. Gere um token de longa duração e localize o ID da conta do Instagram.
5. Preencha `META_GRAPH_API_VERSION`, `META_INSTAGRAM_ACCOUNT_ID` e
   `META_ACCESS_TOKEN` no `.env`.

Defina também a URL e a `service_role` do Supabase no `.env`. Essa chave fica
somente no processo local e nunca é enviada ao navegador.

Preencha também o usuário esperado e teste a conexão sem postar:

```text
META_EXPECTED_USERNAME=radiobraba
STORY_PUBLISH_ENABLED=false
```

```powershell
npm run doctor
```

O diagnóstico gera uma captura e confere o ID e o usuário da conta Meta,
mas nunca publica Story. Para verificar a conexão não é necessário ativar a publicação.

## 4. Rodar continuamente

Para deixar a janela aberta:

```powershell
npm start
```

Ou instale a tarefa do Windows, que executa a verificação a cada dez minutos:

```powershell
powershell -ExecutionPolicy Bypass -File .\install-windows-task.ps1
```

O computador precisa estar ligado e conectado à internet. O bloqueio interno
impede duas execuções simultâneas. Falhas ficam no histórico e são tentadas
novamente; uma publicação confirmada nunca é repetida.

## Variáveis principais

- `STORY_PAGE_URL`: URL pública da tela da VM.
- `STORY_CHECK_INTERVAL_MINUTES`: intervalo do modo contínuo.
- `STORY_MAX_AGE_HOURS`: idade máxima de uma notícia nova.
- `STORY_MAX_PER_CYCLE`: proteção contra muitas publicações de uma vez.
- `STORY_PUBLISH_ENABLED`: trava de segurança para publicar.
- `SUPABASE_SERVICE_ROLE_KEY`: segredo apenas do processo local.
- `META_ACCESS_TOKEN`: segredo apenas do processo local.

Se a arte ou o feed falhar, nada é publicado. A automação exige uma imagem
carregada e uma matéria identificada antes de gerar o JPEG.
