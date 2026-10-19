import assert from "node:assert/strict";
import test from "node:test";
import { parseFeed } from "../src/news.js";

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
