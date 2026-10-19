import { ingestNews } from "./news.js";

ingestNews()
  .then(({ imported, failedSources }) => {
    console.log(`${imported} notícia(s) sincronizada(s); ${failedSources} fonte(s) indisponível(is).`);
  })
  .catch((error) => {
    console.error(`Coleta encerrada: ${error.message}`);
    process.exitCode = 1;
  });
