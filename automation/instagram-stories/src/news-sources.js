export const NEWS_SOURCES = [
  {
    name: "G1 Sorocaba",
    category: "Regional",
    url: "https://g1.globo.com/dynamo/sp/sorocaba-jundiai/rss2.xml",
  },
  {
    name: "G1 Itapetininga",
    category: "Regional",
    url: "https://g1.globo.com/rss/g1/sp/itapetininga-regiao/",
  },
  {
    name: "G1 São Paulo",
    category: "São Paulo",
    url: "https://g1.globo.com/dynamo/sp/sao-paulo/rss2.xml",
  },
  {
    name: "G1 Brasil",
    category: "Brasil",
    url: "https://g1.globo.com/dynamo/rss2.xml",
  },
  {
    name: "G1 Economia",
    category: "Economia",
    url: "https://g1.globo.com/dynamo/economia/rss2.xml",
  },
  {
    name: "Futebol brasileiro",
    category: "Futebol",
    url: "https://news.google.com/rss/search?q=%22Brasileir%C3%A3o%20S%C3%A9rie%20A%22%20OR%20%22Copa%20Libertadores%22%20OR%20%22Copa%20Sul-Americana%22&hl=pt-BR&gl=BR&ceid=BR:pt-419",
  },
  {
    name: "UOL Notícias",
    category: "Brasil",
    url: "https://rss.uol.com.br/feed/noticias.xml",
  },
  {
    name: "G1 Mundo",
    category: "Mundo",
    url: "https://g1.globo.com/rss/g1/mundo/",
  },
  {
    name: "Notícias Capela do Alto",
    category: "Cidade",
    url: "https://news.google.com/rss/search?q=%22Capela%20do%20Alto%22&hl=pt-BR&gl=BR&ceid=BR:pt-419",
  },
  {
    name: "Notícias Americana",
    category: "Regional",
    url: "https://news.google.com/rss/search?q=%22Americana%22%20SP&hl=pt-BR&gl=BR&ceid=BR:pt-419",
  },
];

const googleNewsSearch = (query) =>
  `https://news.google.com/rss/search?q=${encodeURIComponent(`${query} when:1d`)}&hl=pt-BR&gl=BR&ceid=BR:pt-419`;

export const MANUAL_NEWS_SOURCES = [
  {
    name: "G1 Campinas",
    category: "Regional",
    url: "https://g1.globo.com/dynamo/sp/campinas-regiao/rss2.xml",
  },
  {
    name: "G1 Piracicaba",
    category: "Regional",
    url: "https://g1.globo.com/dynamo/sp/piracicaba-regiao/rss2.xml",
  },
  {
    name: "Agência Brasil",
    category: "Brasil",
    url: "https://agenciabrasil.ebc.com.br/rss/ultimasnoticias/feed.xml",
  },
  {
    name: "CNN Brasil",
    category: "Brasil",
    url: "https://www.cnnbrasil.com.br/feed/",
  },
  {
    name: "Notícias Sorocaba",
    category: "Regional",
    url: googleNewsSearch("Sorocaba"),
  },
  {
    name: "Notícias da região",
    category: "Regional",
    url: googleNewsSearch('(Iperó OR "Araçoiaba da Serra" OR Tatuí OR Boituva)'),
  },
  {
    name: "São Paulo agora",
    category: "São Paulo",
    url: googleNewsSearch("São Paulo notícias"),
  },
  {
    name: "Brasil agora",
    category: "Brasil",
    url: googleNewsSearch("Brasil notícias"),
  },
  {
    name: "Economia agora",
    category: "Economia",
    url: googleNewsSearch("economia Brasil"),
  },
  {
    name: "Futebol agora",
    category: "Futebol",
    url: googleNewsSearch("futebol brasileiro"),
  },
];
