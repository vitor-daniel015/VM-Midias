import assert from "node:assert/strict";
import test from "node:test";
import { decodeFeedBytes, extractPageMetadata, parseFeed } from "../src/news.js";

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
      <pubDate>Ter, 20 Out 2026 14:57:06 -0300</pubDate>
    </item></channel></rss>
  `, { name: "UOL Notícias", category: "Brasil" });

  assert.equal(articles[0].published_at, "2026-10-20T17:57:06.000Z");
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
