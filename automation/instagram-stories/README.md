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
supabase/migrations/202610190001_news_moderation_queue.sql
```

Antes de capturar, atualize a fila editorial diretamente a partir dos RSS:

```powershell
npm run ingest
```

As notícias novas entram como **Aguardando aprovação** em
`/admin/noticias`. Aprovar coloca a matéria na fila; a automação publica uma por
vez e registra no painel quando o Story foi confirmado.

As matérias marcadas como **Fora dos Stories** permanecem visíveis somente até
o fim do dia da publicação. Na primeira coleta depois da virada do dia em São
Paulo, elas são excluídas definitivamente da tabela `news_articles` e não são
cadastradas outra vez a partir de um RSS antigo.

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

`STORY_FIRST_RUN_MODE=all` é seguro neste fluxo porque nenhuma matéria chega à
automação antes da aprovação no painel. A ordem usada é a ordem de aprovação e
o limite por execução impede publicações em lote.

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

No GitHub Actions, use `npm run once` com `STORY_PUBLISH_ENABLED=true`. O
histórico fica no objeto privado `automation/state.json` do bucket do Supabase,
portanto continua existindo entre as execuções. Uma tentativa cujo resultado na
Meta seja incerto recebe o estado `needs-review` e não é repetida automaticamente.

## Variáveis principais

- `STORY_PAGE_URL`: URL pública da tela da VM.
- `STORY_CHECK_INTERVAL_MINUTES`: intervalo do modo contínuo.
- `STORY_MIN_PUBLISH_INTERVAL_MINUTES`: intervalo mínimo entre duas publicações reais; em produção usamos 60 minutos.
- `STORY_MAX_AGE_HOURS`: idade máxima de uma notícia nova.
- `STORY_MAX_PER_CYCLE`: proteção contra muitas publicações de uma vez.
- `NEWS_MAX_AGE_DAYS`: idade máxima aceita na coleta RSS.
- `NEWS_ITEMS_PER_SOURCE`: limite de itens novos lidos de cada fonte por coleta.
- `NEWS_REQUEST_TIMEOUT_MS`: tempo máximo de resposta de uma fonte RSS.
- `STORY_PUBLISH_ENABLED`: trava de segurança para publicar.
- `STORY_STATE_OBJECT_PATH`: objeto privado usado como histórico persistente.
- `SUPABASE_SERVICE_ROLE_KEY`: segredo apenas do processo local.
- `META_ACCESS_TOKEN`: segredo apenas do processo local.

Se a arte ou o feed falhar, nada é publicado. Fontes sem foto usam a arte de
reserva da VM, portanto continuam disponíveis para aprovação sem quebrar a fila.
