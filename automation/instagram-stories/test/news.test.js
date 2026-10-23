import assert from "node:assert/strict";
import test from "node:test";
import {
  decodeFeedBytes,
  deleteExpiredNews,
  extractPageMetadata,
  isLowValueNews,
  isUsableNewsImage,
  parseFeed,
  startOfSaoPauloDay,
} from "../src/news.js";

const source = {
  name: "Fonte teste",
  category: "Regional",
};

test("converte RSS em notícia pronta para a fila", () => {
  const articles = parseFeed(`
    <rss><channel><item>
      <title><![CDATA[Uma notícia importante para a região]]></title>
      <link>https://example.com/noticia</link>
      <guid>noticia-1</guid>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <description><![CDATA[<p>Resumo da notícia.</p><img src="https://example.com/foto.jpg"></img>]]></description>
    </item></channel></rss>
  `, source);

  assert.equal(articles.length, 1);
  assert.equal(articles[0].title, "Uma notícia importante para a região");
  assert.equal(articles[0].summary, "Resumo da notícia.");
  assert.equal(articles[0].image_url, "https://example.com/foto.jpg");
  assert.equal(articles[0].source_name, "Fonte teste");
});

test("remove resíduos de CDATA do começo do corpo da notícia", () => {
  const articles = parseFeed(`
    <rss><channel><item>
      <title><![CDATA[Notícia internacional importante]]></title>
      <link>https://example.com/internacional</link>
      <guid>noticia-cdata-quebrado</guid>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <description><![CDATA[]]> Os presidentes anunciaram uma reunião.</description>
    </item></channel></rss>
  `, source);

  assert.equal(articles[0].summary, "Os presidentes anunciaram uma reunião.");
  assert.doesNotMatch(articles[0].summary, /\]\]>/);
});

test("remove chamadas promocionais de telejornal", () => {
  const articles = parseFeed(`
    <rss><channel><item>
      <title>Assista ao Jornal Nacional que está no ar</title>
      <link>https://example.com/ao-vivo</link>
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item></channel></rss>
  `, source);

  assert.equal(articles.length, 0);
});

test("remove compilações de vídeos e edições datadas de telejornal", () => {
  assert.equal(
    isLowValueNews("VÍDEOS: Jornal Anhanguera 1ª Edição-TO de terça-feira, 20 de outubro de 2026"),
    true,
  );
  assert.equal(
    isLowValueNews("VÍDEOS: Jornal do Almoço Florianópolis de terça-feira, 20 de outubro de 2026"),
    true,
  );
  assert.equal(
    isLowValueNews("Motorista sofre mal súbito e carro invade quartel em Sorocaba"),
    false,
  );
});

test("decodifica o RSS ISO-8859-1 da UOL e usa a imagem maior", () => {
  const sourceXml = `
    <rss><channel><item>
      <title><![CDATA[Entidades do serviço público defendem ação]]></title>
      <link><![CDATA[https://noticias.uol.com.br/noticia.htm]]></link>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <description><![CDATA[<img src='https://conteudo.imguol.com.br/c/noticias/foto_v2_142x100.jpg' /> Associações defendem o serviço público.]]></description>
    </item></channel></rss>
  `;
  const decoded = decodeFeedBytes(
    Buffer.from(sourceXml, "latin1"),
    "text/xml;charset=ISO-8859-1",
  );
  const articles = parseFeed(decoded, { name: "UOL Notícias", category: "Brasil" });

  assert.equal(articles[0].title, "Entidades do serviço público defendem ação");
  assert.equal(articles[0].summary, "Associações defendem o serviço público.");
  assert.equal(
    articles[0].image_url,
    "https://conteudo.imguol.com.br/c/noticias/foto_v2_615x300.jpg",
  );
});

test("interpreta a data em português publicada pela UOL", () => {
  const articles = parseFeed(`
    <rss><channel><item>
      <title>Notícia com data em português</title>
      <link>https://example.com/data</link>
      <pubDate>Ter, 20 Out 2099 14:57:06 -0300</pubDate>
    </item></channel></rss>
  `, { name: "UOL Notícias", category: "Brasil" });

  assert.equal(articles[0].published_at, "2099-10-20T17:57:06.000Z");
});

test("lê título e imagem dos metadados da página sem sobrescrever o primeiro título", () => {
  const metadata = extractPageMetadata(`
    <meta property="og:title" content="'Tudo é política': título com acentuação">
    <meta property="og:title" content="T�tulo quebrado">
    <meta property="og:image" content="https://example.com/logo.png">
    <meta property="og:image" content="https://example.com/noticia.jpg">
  `);

  assert.equal(metadata.title, "'Tudo é política': título com acentuação");
  assert.equal(metadata.image_url, "https://example.com/noticia.jpg");
});

test("descarta a imagem institucional de 30 anos da UOL", () => {
  const metadata = extractPageMetadata(`
    <meta property="og:title" content="Notícia sem foto própria">
    <meta property="og:image" content="https://conteudo.imguol.com.br/c/_layout/v3/logo-30-anos/share-30-anos.png">
  `);

  assert.equal(metadata.image_url, "");
  assert.equal(
    isUsableNewsImage("https://conteudo.imguol.com.br/c/_layout/v3/logo-30-anos/share-30-anos.png"),
    false,
  );
});

test("limpa título e descrição duplicada vindos do Google Notícias", () => {
  const articles = parseFeed(`
    <rss><channel><item>
      <title>Jogo do Vasco hoje pela Copa Sul-Americana: onde assistir - UOL</title>
      <link>https://news.google.com/rss/articles/noticia-vasco?oc=5</link>
      <guid>noticia-google-1</guid>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <description>&lt;a href="https://news.google.com/rss/articles/noticia-vasco?oc=5"&gt;Jogo do Vasco hoje pela Copa Sul-Americana: onde assistir&lt;/a&gt;&amp;nbsp;&amp;nbsp;&lt;font&gt;UOL&lt;/font&gt;</description>
      <source url="https://www.uol.com.br">UOL</source>
    </item></channel></rss>
  `, {
    name: "Futebol brasileiro",
    category: "Futebol",
    url: "https://news.google.com/rss/search?q=futebol",
  });

  assert.equal(articles[0].title, "Jogo do Vasco hoje pela Copa Sul-Americana: onde assistir");
  assert.equal(articles[0].summary, null);
});

test("descarta a imagem institucional do Google Notícias", () => {
  assert.equal(
    isUsableNewsImage("https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw"),
    false,
  );
});

test("calcula a virada do dia no horário de São Paulo", () => {
  assert.equal(
    startOfSaoPauloDay(new Date("2026-10-20T12:00:00.000Z")).toISOString(),
    "2026-10-20T03:00:00.000Z",
  );
  assert.equal(
    startOfSaoPauloDay(new Date("2026-10-20T02:30:00.000Z")).toISOString(),
    "2026-10-19T03:00:00.000Z",
  );
});

test("exclui do banco todas as notícias anteriores ao dia atual em São Paulo", async () => {
  const originalFetch = globalThis.fetch;
  let requestUrl = "";
  let requestOptions;
  globalThis.fetch = async (url, options) => {
    requestUrl = String(url);
    requestOptions = options;
    return new Response("[]", {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  };

  try {
    const deleted = await deleteExpiredNews(new Date("2026-10-23T12:00:00.000Z"));
    assert.equal(deleted, 0);
    assert.equal(requestOptions.method, "DELETE");
    assert.match(requestUrl, /published_at=lt\.2026-10-23T03%3A00%3A00\.000Z/);
    assert.doesNotMatch(requestUrl, /moderation_status/);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("usa a imagem social real da página quando o RSS não fornece foto", () => {
  const metadata = extractPageMetadata(`
    <meta property="og:image" content="https://s2-g1.glbimg.com/noticia-real.jpg">
  `);

  assert.equal(metadata.image_url, "https://s2-g1.glbimg.com/noticia-real.jpg");
});
