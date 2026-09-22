import { PlanItem, Supporter } from '../types';

export const siteConfig = {
  company: {
    name: 'VM MÍDIAS',
    legalName: 'VM MÍDIAS Publicidade e Painéis Digitais',
    tagline: 'SUA MARCA EM DESTAQUE.',
    subtagline: 'MÍDIA QUE CONECTA PESSOAS',
    description: 'A VM MÍDIAS ajuda empresas, comércios e profissionais de Capela do Alto a serem vistos e lembrados através de telas digitais e painéis de LED em locais de alta circulação.',
    city: 'Capela do Alto',
    state: 'SP',
    country: 'Brasil',
    locationShort: 'Capela do Alto — SP',
    domain: 'www.vmmidias.com.br',
    url: 'https://www.vmmidias.com.br',
    
    // Contatos oficiais (configuráveis)
    whatsappRaw: '551531650153',
    whatsappFormatted: '(15) 3165-0153',
    email: 'contato@vmmidias.com.br',
    instagramUrl: 'https://www.instagram.com/vmmidiasindoor',
    instagramHandle: '@vmmidias',
    heroVideoUrl: '/videos/Apresentacao-VMmidias.mp4',
  },

  plans: [
    {
      id: 'start',
      name: 'START',
      type: 'MÍDIA INDOOR',
      coverage: 'Divulgação em 05 locais',
      badge: null,
      prices: {
        mensal: {
          price: '179,00',
          period: '/ mês',
          note: 'Sem fidelidade',
          badge: null,
        },
        semestral: {
          price: '159,00',
          period: '/ mês',
          note: 'Contrato de 06 meses',
          badge: null,
        },
        anual: {
          price: '139,00',
          period: '/ mês',
          note: 'Contrato de 12 meses',
          badge: 'MELHOR CUSTO-BENEFÍCIO',
        },
      },
      optionalVideo: {
        mensal: 'R$ 100',
        semestral: 'R$ 75',
        anual: 'R$ 50',
      },
      features: [
        'Divulgação em 05 pontos estratégicos',
        'Exibição contínua durante todo o horário comercial',
        'Alta frequência de repetições diárias',
        'Criação de arte estática inclusa sem custo adicional',
        'Suporte e atendimento direto em Capela do Alto',
      ],
    },
    {
      id: 'destaque',
      name: 'DESTAQUE',
      type: 'MÍDIA INDOOR',
      coverage: 'Divulgação em 09 locais + 01 adicional',
      badge: 'MAIS ESCOLHIDO',
      prices: {
        mensal: {
          price: '259,00',
          period: '/ mês',
          note: 'Sem fidelidade',
          badge: null,
        },
        semestral: {
          price: '237,00',
          period: '/ mês',
          note: 'Contrato de 06 meses',
          badge: null,
        },
        anual: {
          price: '217,00',
          period: '/ mês',
          note: 'Contrato de 12 meses',
          badge: 'MELHOR CUSTO-BENEFÍCIO',
        },
      },
      optionalVideo: {
        mensal: 'R$ 100',
        semestral: 'R$ 75',
        anual: 'R$ 50',
      },
      features: [
        'Divulgação em 09 locais + 01 ponto adicional grátis',
        'Maior presença e frequência em toda a rede',
        'Prioridade em pontos de altíssimo fluxo',
        'Criação de arte inclusa sem custo adicional',
        'Relatórios de inserções e atendimento prioritário',
      ],
    },
  ] as PlanItem[],

  supporters: [
    {
      id: 'esquina-do-salgado',
      name: 'Esquina do Salgado',
      logoUrl: '/images/apoiadores/esquina-do-salgado.png',
    },
    {
      id: 'espetinho-do-vg',
      name: 'Espetinho do VG',
      logoUrl: '/images/apoiadores/espetinho-do-vg.png',
    },
    {
      id: 'boteco-do-gordao',
      name: 'Boteco do Gordão',
      logoUrl: '/images/apoiadores/boteco-do-gordao.png',
    },
    {
      id: 'mg-sampaio-iperozinho',
      name: 'MG Sampaio Iperózinho',
      logoUrl: '/images/apoiadores/mg-sampaio.jpg',
    },
    {
      id: 'mg-sampaio-culaus',
      name: 'MG Sampaio Culaus',
      logoUrl: '/images/apoiadores/mg-sampaio.jpg',
    },
  ] as Supporter[],

  howItWorksSteps: [
    {
      step: '01',
      title: 'ESCOLHA SEU PLANO',
      description: 'Selecione entre START (05 locais) ou DESTAQUE (09 locais + 01 bônus) e a duração contratual.'
    },
    {
      step: '02',
      title: 'ENVIE SUAS INFORMAÇÕES',
      description: 'Compartilhe pelo WhatsApp seu logo, fotos do seu produto/serviço e sua mensagem principal.'
    },
    {
      step: '03',
      title: 'CRIAMOS SUA CAMPANHA',
      description: 'Nossa equipe cria a arte publicitária especialmente ajustada para impacto visual nas telas.'
    },
    {
      step: '04',
      title: 'SUA MARCA ENTRA NO AR',
      description: 'Sua empresa começa a ser transmitida nos pontos comerciais mais movimentados de Capela do Alto.'
    },
  ],

  whyAdvertise: [
    {
      id: 'presenca-diaria',
      title: 'PRESENÇA DIÁRIA',
      description: 'Sua marca presente constantemente durante todo o expediente dos melhores estabelecimentos da cidade.',
      iconName: 'CalendarCheck',
    },
    {
      id: 'pontos-estrategicos',
      title: 'PONTOS ESTRATÉGICOS',
      description: 'Publicidade instalada exatamente onde as pessoas de Capela do Alto realmente compram e circulam.',
      iconName: 'MapPin',
    },
    {
      id: 'alta-frequencia',
      title: 'ALTA FREQUÊNCIA',
      description: 'A repetição diária gera familiaridade. Quem vê todos os dias lembra na hora de comprar.',
      iconName: 'Repeat',
    },
    {
      id: 'preco-acessivel',
      title: 'PREÇO ACESSÍVEL',
      description: 'Planos a partir de R$ 139/mês, pensados sob medida para o orçamento do comércio e serviços locais.',
      iconName: 'Coins',
    },
    {
      id: 'criacao-facilitada',
      title: 'CRIAÇÃO FACILITADA',
      description: 'Você não precisa ser designer. Nós ajudamos sua empresa a colocar sua campanha no ar com padrão profissional.',
      iconName: 'Palette',
    },
    {
      id: 'atendimento-local',
      title: 'ATENDIMENTO LOCAL',
      description: 'Suporte próximo, ágil e humanizado em Capela do Alto, com quem conhece o mercado da nossa região.',
      iconName: 'Headphones',
    },
  ],

  faqs: [
    {
      question: 'O que é mídia indoor?',
      answer: 'Mídia Indoor (também conhecida como DOOH - Digital Out of Home) é a veiculação de anúncios em telas digitais de alta resolução instaladas dentro de estabelecimentos comerciais estratégicos onde há fluxo contínuo de pessoas e tempo de permanência.',
    },
    {
      question: 'Onde meu anúncio será exibido?',
      answer: 'Sua marca será exibida em telas digitais instaladas nos principais pontos de circulação de Capela do Alto — como supermercados, restaurantes, padarias, lotéricas, academias e comércios parceiros da nossa rede.',
    },
    {
      question: 'Como envio minha arte?',
      answer: 'Basta nos enviar pelo WhatsApp ou e-mail o seu logotipo (em alta resolução), imagens dos seus produtos/serviços e as informações de contato que deseja destacar. É simples e rápido.',
    },
    {
      question: 'A VM MÍDIAS cria o anúncio?',
      answer: 'Sim! A criação da arte estática para veiculação nas telas já está inclusa no seu plano, sem cobrança adicional. Caso você queira um vídeo animado em movimento para chamar ainda mais atenção, oferecemos o serviço opcional de animação.',
    },
    {
      question: 'Quanto tempo demora para minha campanha entrar no ar?',
      answer: 'Após a aprovação da sua arte ou recebimento do seu material finalizado, a campanha entra no ar na nossa rede de telas em até 48 horas úteis.',
    },
    {
      question: 'Posso alterar minha campanha durante o contrato?',
      answer: 'Sim! Você pode atualizar sua arte ou oferta para divulgar datas comemorativas, promoções especiais ou lançamentos de produtos conforme as condições do seu plano contratado.',
    },
    {
      question: 'Qual é a diferença entre START e DESTAQUE?',
      answer: 'O Plano START veicula sua marca em 05 locais estratégicos da rede. O Plano DESTAQUE é o mais escolhido: oferece divulgação em 09 locais mais 01 ponto adicional bonificado (total de 10 locais), proporcionando o dobro de cobertura na cidade.',
    },
    {
      question: 'Como funciona o plano mensal?',
      answer: 'No plano mensal você tem total flexibilidade: renova mês a mês sem fidelidade. Já nos planos semestral (6 meses) e anual (12 meses), você garante descontos progressivos expressivos e a melhor relação custo-benefício por mês.',
    },
    {
      question: 'Posso contratar mais pontos?',
      answer: 'Com certeza! Conforme a rede de telas da VM MÍDIAS expande em novos bairros e estabelecimentos de Capela do Alto, você pode ampliar sua presença para novos pontos estratégicos adicionais.',
    },
    {
      question: 'Como faço para anunciar?',
      answer: 'Basta clicar em qualquer botão de contato ou no botão flutuante de WhatsApp do site, escolher seu plano e falar diretamente com nossa equipe. Nós cuidamos de todo o processo para colocar sua marca em destaque rapidamente!',
    },
  ],
};
