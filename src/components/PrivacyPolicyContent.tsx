import React from "react";
import { siteConfig } from "../data/siteConfig";

const headingClass = "pt-3 text-base font-black text-white";
const listClass = "list-disc space-y-1.5 pl-5 text-white/58";

export const PrivacyPolicyContent: React.FC = () => (
  <div className="space-y-4 text-sm leading-7 text-white/68">
    <p>
      Esta Política explica como a <strong className="text-white">{siteConfig.company.legalName}</strong>{" "}
      (“VM MÍDIAS”), na qualidade de controladora, trata dados pessoais de
      visitantes, interessados, clientes e representantes de empresas que usam
      o site {siteConfig.company.domain} e seus canais de atendimento.
    </p>
    <p>
      O tratamento observa a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados
      Pessoais — LGPD) e os princípios de finalidade, necessidade, transparência,
      segurança e prevenção.
    </p>

    <h4 className={headingClass}>1. Dados que podemos coletar</h4>
    <p>Dependendo do canal utilizado, podemos receber:</p>
    <ul className={listClass}>
      <li>nome, empresa, telefone/WhatsApp e e-mail;</li>
      <li>plano, produto ou serviço de interesse e mensagens comerciais;</li>
      <li>
        briefing de criação, tipo de peça, objetivo, textos, estilo, prazo,
        chamada para ação e informações que deverão aparecer na campanha;
      </li>
      <li>
        links de materiais compartilhados pelo próprio cliente, como pastas do
        Drive, Canva ou Dropbox;
      </li>
      <li>
        protocolo, situação do atendimento e datas de criação e atualização do
        pedido;
      </li>
      <li>
        dados técnicos essenciais, como registros de acesso e endereço IP, que
        podem ser processados pela hospedagem e pelos serviços de infraestrutura
        para segurança e funcionamento.
      </li>
    </ul>
    <p>
      Não solicitamos senhas, dados bancários ou dados pessoais sensíveis nos
      formulários. Não inclua esse tipo de informação no briefing ou nos links
      compartilhados.
    </p>

    <h4 className={headingClass}>2. Para que usamos os dados</h4>
    <ul className={listClass}>
      <li>responder contatos, dúvidas e solicitações de orçamento;</li>
      <li>apresentar planos, propostas e condições comerciais;</li>
      <li>
        organizar, criar, revisar, aprovar e programar artes e vídeos contratados;
      </li>
      <li>acompanhar o histórico e o andamento de cada solicitação;</li>
      <li>prevenir abuso, fraude, spam e incidentes de segurança;</li>
      <li>cumprir contratos e obrigações legais ou regulatórias.</li>
    </ul>

    <h4 className={headingClass}>3. Bases legais</h4>
    <p>
      Conforme o contexto, o tratamento poderá ocorrer com base no consentimento,
      na execução de contrato ou de procedimentos preliminares solicitados pelo
      titular, no cumprimento de obrigação legal ou regulatória e no legítimo
      interesse da VM MÍDIAS, sempre respeitando os direitos e as expectativas do
      titular.
    </p>

    <h4 className={headingClass}>4. Armazenamento e compartilhamento</h4>
    <p>
      Os dados podem ser tratados pela equipe da VM MÍDIAS e por fornecedores
      necessários à operação, estritamente para as finalidades desta Política,
      incluindo:
    </p>
    <ul className={listClass}>
      <li>HostGator, responsável pela hospedagem do site;</li>
      <li>Supabase, utilizado para registrar e organizar solicitações;</li>
      <li>n8n, quando utilizado para automatizar o fluxo interno de atendimento;</li>
      <li>
        WhatsApp/Meta, quando o visitante decide iniciar atendimento por esse
        canal;
      </li>
      <li>
        serviços escolhidos pelo cliente para compartilhar arquivos por link,
        sujeitos às próprias políticas de privacidade.
      </li>
    </ul>
    <p>
      A VM MÍDIAS não vende nem aluga dados pessoais. Alguns fornecedores podem
      utilizar infraestrutura localizada fora do Brasil; nesses casos, buscamos
      utilizar serviços reconhecidos e medidas compatíveis com a legislação
      aplicável.
    </p>

    <h4 className={headingClass}>5. Prazo de conservação</h4>
    <p>
      Mantemos os dados somente pelo tempo necessário para atender a solicitação,
      executar a relação comercial, preservar o histórico de criação e cumprir
      obrigações legais. Depois desse período, eles poderão ser eliminados ou
      anonimizados, salvo quando a conservação for permitida ou exigida por lei.
    </p>

    <h4 className={headingClass}>6. Cookies, recursos técnicos e links externos</h4>
    <p>
      O site utiliza recursos técnicos necessários para navegação, segurança e
      envio dos formulários. Não utilizamos os dados dos formulários para vender
      perfis de publicidade. Links externos, como Instagram, WhatsApp, Drive,
      Canva ou Dropbox, passam a seguir as políticas dos respectivos serviços
      quando acessados.
    </p>

    <h4 className={headingClass}>7. Segurança</h4>
    <p>
      Adotamos controles compatíveis com o porte e a natureza da operação para
      reduzir riscos de acesso não autorizado, alteração, perda ou divulgação
      indevida. Nenhum sistema é completamente imune a incidentes, mas revisamos
      acessos e integrações para limitar o tratamento ao necessário.
    </p>

    <h4 className={headingClass}>8. Direitos do titular</h4>
    <p>
      Nos termos da LGPD, o titular pode solicitar confirmação e acesso,
      correção, informação sobre compartilhamentos, anonimização, bloqueio ou
      eliminação quando aplicável, portabilidade conforme regulamentação,
      oposição, revogação do consentimento e revisão de decisões exclusivamente
      automatizadas que afetem seus interesses.
    </p>

    <h4 className={headingClass}>9. Como falar sobre seus dados</h4>
    <p>
      Para exercer direitos ou esclarecer dúvidas sobre privacidade, entre em
      contato pelo e-mail <strong className="text-white">{siteConfig.company.email}</strong>{" "}
      ou pelo WhatsApp oficial {siteConfig.company.whatsappFormatted}. Podemos
      solicitar informações adicionais para confirmar a identidade do
      solicitante e proteger os dados envolvidos.
    </p>

    <h4 className={headingClass}>10. Atualizações desta Política</h4>
    <p>
      Esta Política poderá ser atualizada para refletir mudanças no site, nos
      serviços ou na legislação. A versão vigente e sua data de atualização
      permanecerão disponíveis nesta página.
    </p>
  </div>
);
