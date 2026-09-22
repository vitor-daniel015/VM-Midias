# VM Mídias

Site institucional e comercial da **VM Mídias**, empresa de mídia indoor e painéis digitais de Capela do Alto — SP.

O projeto apresenta as soluções da empresa, locais de exibição, planos comerciais e um contato direto pelo WhatsApp. A interface foi desenvolvida com foco em clareza, identidade visual, desempenho e boa experiência em celulares.

![Identidade visual da VM Mídias](public/images/2.png)

## Funcionalidades

- apresentação institucional e proposta de valor;
- navegação responsiva com indicação da seção ativa;
- menu móvel em tela cheia e com bloqueio da rolagem de fundo;
- categorias de estabelecimentos com conteúdo interativo;
- apresentação das soluções de mídia indoor e painéis de LED;
- planos START e DESTAQUE com períodos mensal, semestral e anual;
- seleção do plano integrada ao formulário de contato;
- formulário que prepara a mensagem e abre o WhatsApp oficial;
- botão flutuante de WhatsApp;
- FAQ em formato de acordeão;
- modal de Política de Privacidade e LGPD;
- estados seguros para pontos, métricas e cases ainda não cadastrados;
- suporte a `prefers-reduced-motion` para pessoas que reduzem animações no sistema.

## Tecnologias

- React 19
- TypeScript
- Vite 6
- Tailwind CSS 4
- Lucide React

O site funciona como uma aplicação frontend. O contato utiliza o link oficial `wa.me` e não depende de um servidor próprio para funcionar.

## Executando localmente

### Requisitos

- Node.js 18 ou superior
- npm

### Instalação

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

O Vite inicia o projeto em:

```text
http://localhost:3000
```

Não é necessário configurar uma chave do Gemini ou outra API para executar o site atual.

## Scripts disponíveis

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Inicia o servidor local na porta 3000 |
| `npm run lint` | Verifica os tipos TypeScript sem gerar arquivos |
| `npm run build` | Gera a versão de produção em `dist/` |
| `npm run preview` | Abre localmente a versão gerada para produção |

## Estrutura do projeto

```text
VM Midias/
├── public/
│   └── images/                 # Logos e imagens do site
├── src/
│   ├── components/             # Componentes compartilhados
│   ├── data/
│   │   └── siteConfig.ts       # Conteúdo e configurações comerciais
│   ├── sections/               # Seções da página institucional
│   ├── App.tsx                 # Composição e estado principal
│   ├── index.css               # Tema, tokens e estilos globais
│   ├── main.tsx                # Entrada da aplicação
│   └── types.ts                # Tipos compartilhados
├── index.html                  # Metadados, SEO e estrutura HTML
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Componentes principais

### Componentes compartilhados

- `Header.tsx`: navegação para desktop e celular.
- `BrandUI.tsx`: títulos, chamadas e botões padronizados.
- `VMLogo.tsx`: aplicação dos arquivos oficiais da marca.
- `WhatsAppIcon.tsx`: ícone vetorial do WhatsApp.
- `WhatsAppButton.tsx`: botão flutuante de atendimento.
- `Footer.tsx`: informações institucionais e links finais.
- `PrivacyModal.tsx`: conteúdo e interface da Política de Privacidade.

### Seções da página

As seções ficam em `src/sections` e são montadas na seguinte ordem:

1. Hero
2. Benefícios
3. Onde sua marca aparece
4. Soluções
5. Como funciona
6. Planos
7. Por que anunciar
8. Cases e métricas
9. FAQ
10. Chamada final
11. Contato

## Configurando o conteúdo

A maior parte das informações comerciais está centralizada em:

```text
src/data/siteConfig.ts
```

Nesse arquivo podem ser alterados:

- nome e descrição da empresa;
- número e texto de exibição do WhatsApp;
- endereço do Instagram;
- cidade e região atendida;
- planos, preços e benefícios;
- categorias de locais de exibição;
- soluções oferecidas;
- etapas de contratação;
- vantagens e perguntas frequentes;
- pontos reais, cases e métricas oficiais.

### WhatsApp

O número deve ser informado em dois formatos:

```ts
whatsappRaw: '5515997880000',
whatsappFormatted: '(15) 99788-0000',
```

- `whatsappRaw` deve conter código do país, DDD e número, somente com dígitos;
- `whatsappFormatted` é utilizado apenas para exibição na interface.

Ao enviar o formulário, o site monta a mensagem com nome, empresa, plano e texto do visitante. Em seguida, abre o WhatsApp para que a pessoa revise e confirme o envio.

> O site não envia mensagens automaticamente pela WhatsApp Business Cloud API. Essa integração exigiria um backend seguro e credenciais fornecidas pela Meta. Tokens de acesso nunca devem ser adicionados ao código do navegador.

### Planos

Cada plano possui preços separados por período:

```ts
prices: {
  mensal: { /* ... */ },
  semestral: { /* ... */ },
  anual: { /* ... */ },
}
```

O seletor de período atualiza os preços exibidos nos dois cards. Quando o visitante escolhe um plano, essa escolha é enviada para a seção de contato.

### Pontos de exibição

Cadastre somente estabelecimentos confirmados no array `realPoints`:

```ts
realPoints: [
  {
    id: 'identificador-unico',
    name: 'Nome do estabelecimento',
    category: 'Categoria',
    neighborhood: 'Bairro',
    description: 'Descrição objetiva do ponto',
  },
]
```

Enquanto o array estiver vazio, o site mostra uma mensagem de expansão da rede e não inventa endereços.

### Cases

Clientes e depoimentos devem ser cadastrados em `realCases`. Se não houver cases reais, a seção apresenta apenas um estado informativo.

Nunca adicione nomes, logos, resultados ou depoimentos sem autorização do cliente.

### Métricas

As métricas ficam no array `metrics`. Uma métrica com `value` vazio não é exibida:

```ts
{
  id: 'pontos',
  label: 'Pontos Ativos',
  value: '',
  sublabel: 'Em Capela do Alto e região',
  iconName: 'MapPin',
}
```

Isso evita a publicação acidental de números provisórios ou não confirmados.

## Identidade visual

Os principais tokens de cor, espaçamento, foco e movimento ficam em `src/index.css`.

Paleta principal:

- preto: `#030406`;
- grafite: `#0C0E12`;
- vermelho VM: `#F40B36`;
- branco: `#FFFFFF`;
- verde do WhatsApp: `#25D366`.

Para preservar a consistência:

- reutilize os componentes de `BrandUI.tsx`;
- mantenha o vermelho como cor de destaque, não como fundo dominante;
- use o verde apenas em ações diretamente ligadas ao WhatsApp;
- prefira divisórias, contraste e hierarquia tipográfica a excesso de sombras;
- verifique sempre o resultado em celular antes de finalizar uma alteração.

## Imagens e logos

Os arquivos oficiais ficam em `public/images`.

- `2.png`: logo principal para fundos escuros;
- `LOGO VM MÍDIAS.png`: variação transparente da marca;
- `generated/vm-hero-city.webp`: imagem principal do hero;
- `generated/vm-indoor-space.webp`: ambiente interno usado nas seções.

Imagens referenciadas a partir de `public` devem usar caminhos iniciados por `/images/`.

## Responsividade e acessibilidade

O layout foi preparado para celulares, tablets e desktops. Os principais pontos de revisão são:

- 375 px e 430 px para celulares;
- 768 px para tablets;
- 1024 px para notebooks;
- 1440 px e 1920 px para desktops.

Ao criar ou alterar um componente:

- mantenha alvos de toque confortáveis;
- preserve estados de foco visíveis;
- associe labels aos campos de formulário;
- não dependa apenas da cor para indicar seleção;
- evite rolagem horizontal;
- respeite a preferência de movimento reduzido do dispositivo.

## SEO

Título, descrição, Open Graph e dados estruturados estão em `index.html`.

Antes da publicação definitiva, revise:

- domínio oficial;
- URL pública do logo;
- descrição comercial;
- redes sociais;
- dados estruturados da empresa.

## Publicação

Para uma publicação tradicional, gere os arquivos estáticos e envie o conteúdo de `dist/` ao serviço de hospedagem escolhido.

Como o site utiliza navegação por âncoras em uma única página, não precisa de regras especiais para múltiplas rotas.

### Publicação automática na HostGator

O workflow `.github/workflows/deploy-hostgator.yml` publica automaticamente o site quando um commit chega à branch `main`.

O processo executado pelo GitHub é:

1. baixar o código da branch `main`;
2. instalar as dependências com `npm ci`;
3. verificar o TypeScript;
4. gerar a versão de produção;
5. sincronizar o conteúdo de `dist/` com a hospedagem por FTPS.

Cadastre estes segredos em **GitHub → Settings → Secrets and variables → Actions**:

| Secret | Conteúdo |
| --- | --- |
| `HOSTGATOR_FTP_SERVER` | Servidor FTP, sem `ftp://` |
| `HOSTGATOR_FTP_USERNAME` | Nome completo da conta FTP |
| `HOSTGATOR_FTP_PASSWORD` | Senha exclusiva da conta FTP |
| `HOSTGATOR_FTP_DIRECTORY` | Diretório remoto terminado em `/` |

Se a conta FTP foi limitada diretamente ao `public_html`, use `/` como diretório remoto. Se ela acessa a raiz da conta cPanel, use `/public_html/`.

Na configuração atual da HostGator, o workflow utiliza FTPS explícito pela porta 21.

As credenciais nunca devem ser adicionadas ao workflow, ao README ou a qualquer outro arquivo versionado.

## Cuidados de manutenção

- Não publique dados fictícios para preencher espaços vazios.
- Não armazene tokens ou senhas no frontend.
- Não altere o logo oficial por versões desenhadas em código.
- Centralize alterações comerciais em `siteConfig.ts`.
- Reutilize componentes antes de criar novas variações visuais.
- Verifique TypeScript com `npm run lint` antes de publicar.

## Licença e uso

Projeto proprietário da **VM Mídias**. Imagens, marca, conteúdo comercial e código não devem ser reutilizados sem autorização.
