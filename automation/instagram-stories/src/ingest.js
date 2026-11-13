import { ingestNews } from "./news.js";

ingestNews()
  .then(({ imported, added, updated, deletedExpired, failedSources, manualRefresh }) => {
    const mode = manualRefresh ? " Busca manual complementar concluída." : "";
    console.log(`${imported} notícia(s) lida(s); ${added} nova(s); ${updated} corrigida(s); ${deletedExpired} notícia(s) de dias anteriores excluída(s); ${failedSources} fonte(s) indisponível(is).${mode}`);
  })
  .catch((error) => {
    console.error(`Coleta encerrada: ${error.message}`);
    process.exitCode = 1;
  });
