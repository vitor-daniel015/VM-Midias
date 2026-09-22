import { PlanItem, NetworkCategory, RealPoint, ClientCase, MetricItem } from '../types';

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
    whatsappRaw: '551531650153', // Altere aqui para o número com DDD (ex: 5515998887777)
    whatsappFormatted: '(15) 3165-0153',
    email: 'contato@vmmidias.com.br',
    instagramUrl: 'https://www.instagram.com/vmmidiasindoor',
    instagramHandle: '@vmmidias',

    // Webhook opcional para automações (n8n, Make, Zapier, Supabase)
    // Se vazio, os envios simulam salvamento local seguro e direcionam para o WhatsApp comercial
    webhookUrl: '', 
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

  networkCategories: [
    {
      id: 'supermercados',
      name: 'Supermercados',
      locationScope: 'Regiões centrais e bairros',
      description: 'Seu anúncio no dia a dia das famílias em momentos de compra recorrente.',
      highlight: 'Audiência diversificada e constante',
      iconName: 'ShoppingCart',
      imageMockup: 'supermercado',
    },
    {
      id: 'restaurantes',
      name: 'Restaurantes & Gastronomia',
      locationScope: 'Centro e áreas comerciais',
      description: 'Alcance um público qualificado e relaxado enquanto eles aproveitam momentos de refeição.',
      highlight: 'Alto tempo de permanência diante da tela',
      iconName: 'Utensils',
      imageMockup: 'restaurante',
    },
    {
      id: 'loterica',
      name: 'Lotéricas & Serviços',
      locationScope: 'Regiões de grande fluxo',
      description: 'Visibilidade constante para sua marca no ponto onde toda a cidade circula.',
      highlight: 'Fila de espera com atenção 100% voltada à tela',
      iconName: 'Landmark',
      imageMockup: 'loterica',
    },
    {
      id: 'academias',
      name: 'Academias & Fitness',
      locationScope: 'Pontos estratégicos da cidade',
      description: 'Conecte-se com um público ativo, preocupado com saúde, estética e bem-estar.',
      highlight: 'Público com alto poder decisório e rotina fixa',
      iconName: 'Dumbbell',
      imageMockup: 'academia',
    },
    {
      id: 'comercios',
      name: 'Comércios & Varejo',
      locationScope: 'Polos e vias movimentadas',
      description: 'Presença no corredor comercial com pessoas em atitude ativa de consumo.',
      highlight: 'Proximidade imediata com o ponto de venda',
      iconName: 'Store',
      imageMockup: 'comercio',
    },
    {
      id: 'clinicas',
      name: 'Clínicas & Consultórios',
      locationScope: 'Áreas médicas e especialidades',
      description: 'Tempo de espera receptivo em ambientes tranquilos e de alta credibilidade.',
      highlight: 'Visualização atenta em salas de espera',
      iconName: 'HeartPulse',
      imageMockup: 'clinica',
    },
  ] as NetworkCategory[],

  // Pontos reais cadastrados:
  // Conforme o briefing: "Não criar pontos fictícios. Se nenhum endereço real estiver cadastrado, exibir apenas: 'Nossa rede está crescendo em Capela do Alto.'"
  // Adicione estabelecimentos confirmados neste array abaixo para exibi-los no mapa e na lista:
  realPoints: [] as RealPoint[],

  // Cases reais:
  // Conforme o briefing: "NÃO INVENTAR CLIENTES. NÃO INVENTAR LOGOS... Se ainda não existirem cases cadastrados, não mostrar depoimentos falsos. Pode exibir: 'Em breve, novos cases da nossa rede.'"
  realCases: [] as ClientCase[],

  // Métricas oficiais:
  // Conforme o briefing: "NUNCA inventar os números. Todas as métricas deverão vir de um arquivo/configuração ou CMS. Se o valor não existir, esconder a métrica."
  // Defina os números reais aqui quando disponíveis. Strings vazias são automaticamente ocultadas no layout.
  metrics: [
    {
      id: 'pontos',
      label: 'Pontos Ativos',
      value: '', // ex: '+20' (oculto se vazio)
      sublabel: 'Em Capela do Alto e região',
      iconName: 'MapPin',
    },
    {
      id: 'impactos',
      label: 'Impactos Mensais',
      value: '', // ex: '+2 Milhões' (oculto se vazio)
      sublabel: 'Nas telas da nossa rede',
      iconName: 'TrendingUp',
    },
    {
      id: 'marcas',
      label: 'Marcas Parceiras',
      value: '', // ex: '+150' (oculto se vazio)
      sublabel: 'De diversos segmentos locais',
      iconName: 'Users',
    },
    {
      id: 'satisfacao',
      label: 'De Satisfação',
      value: '', // ex: '95%' (oculto se vazio)
      sublabel: 'Entre nossos anunciantes',
      iconName: 'Star',
    },
  ] as MetricItem[],

  solutions: [
    {
      id: 'midia-indoor',
      title: 'MÍDIA INDOOR',
      subtitle: 'VISIBILIDADE ONDE SEU PÚBLICO ESTÁ',
      description: 'Sua marca exibida em telas digitais instaladas em locais estratégicos de circulação de Capela do Alto.',
      badge: 'Solução Principal',
      iconName: 'Tv',
      highlights: [
        'Telas Full HD estrategicamente posicionadas',
        'Ambientes com alto tempo de permanência',
        'Exibição diária constante durante o horário comercial',
        'Impacto visual direto sem depender de algoritmos online',
      ],
    },
    {
      id: 'paineis-led',
      title: 'PAINÉIS DE LED',
      subtitle: 'GRANDE IMPACTO NA SUA MARCA',
      description: 'Comunicação visual moderna, impactante e em movimento para campanhas que precisam de máximo destaque.',
      badge: 'Alto Impacto',
      iconName: 'Grid',
      highlights: [
        'Brilho e contraste superiores para visibilidade nítida',
        'Destaque no tráfego e corredores comerciais',
        'Formato dinâmico que atrai o olhar involuntário',
        'Associação imediata da sua marca com tecnologia e porte',
      ],
    },
    {
      id: 'criacao-campanhas',
      title: 'CRIAÇÃO DE CAMPANHAS',
      subtitle: 'IDEIAS QUE GERAM RESULTADOS',
      description: 'A VM MÍDIAS transforma as informações da sua empresa em peças preparadas e otimizadas para nossas telas.',
      badge: 'Suporte Completo',
      iconName: 'Sparkles',
      highlights: [
        'Adaptação de logo, fotos e textos comerciais',
        'Design profissional formatado para a proporção das telas',
        'Opção de animação dinâmica para captar mais atenção',
        'Agilidade para colocar sua campanha no ar',
      ],
    },
  ],

  howItWorksSteps: [
    {
      step: '01',
      title: 'ESCOLHA SEU PLANO',
      description: 'Selecione entre START (05 locais) ou DESTAQUE (09 locais + 01 bônus) e a duração contratual.',
      detail: 'O plano ideal para o tamanho e momento do seu negócio.',
    },
    {
      step: '02',
      title: 'ENVIE SUAS INFORMAÇÕES',
      description: 'Compartilhe pelo WhatsApp seu logo, fotos do seu produto/serviço e sua mensagem principal.',
      detail: 'Rápido, prático e sem formulários complicados.',
    },
    {
      step: '03',
      title: 'CRIAMOS SUA CAMPANHA',
      description: 'Nossa equipe cria a arte publicitária especialmente ajustada para impacto visual nas telas.',
      detail: 'Desenvolvimento de arte já incluso no seu plano.',
    },
    {
      step: '04',
      title: 'SUA MARCA ENTRA NO AR',
      description: 'Sua empresa começa a ser transmitida nos pontos comerciais mais movimentados de Capela do Alto.',
      detail: 'Pronto! Sua marca em destaque para milhares de pessoas.',
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
