import { ingestNews } from "./news.js";

ingestNews()
  .then(({ imported, added, updated, deletedRejected, failedSources }) => {
    console.log(`${imported} notícia(s) lida(s); ${added} nova(s); ${updated} corrigida(s); ${deletedRejected} recusada(s) vencida(s) excluída(s); ${failedSources} fonte(s) indisponível(is).`);
  })
  .catch((error) => {
    console.error(`Coleta encerrada: ${error.message}`);
    process.exitCode = 1;
  });
