/**
 * Dicionário pt-BR — o idioma de referência.
 *
 * A estrutura daqui define o tipo `Dictionary`; `es.ts` e `en.ts` são
 * obrigados pelo TypeScript a ter exatamente as mesmas chaves. Textos com
 * marcação no meio (o destaque do título do herói, o link da nota de
 * privacidade) ficam quebrados em pedaços para o JSX montar.
 */
export const dictionary = {
  meta: {
    title: "Viicus — Sua região. Sua comunidade.",
    description:
      "O Viicus conecta você a tudo o que acontece na sua região: avisos, eventos, comércio local e vizinhos de verdade.",
  },
  home: {
    nav: {
      features: "Recursos",
      howItWorks: "Como funciona",
      cta: "Baixar o app",
    },
    hero: {
      badge: "Lançamento em breve",
      titleStart: "Seu bairro está acontecendo",
      titleHighlight: "sem você",
      description:
        "Feiras, avisos, eventos, vizinhos, comércio local. O Viicus reúne tudo o que acontece na sua região em um único app — para você nunca mais ficar de fora.",
      ctaPrimary: "Baixar o app",
      ctaSecondary: "Ver o que ele faz",
      privacyNote: "Grátis, sem anúncios e sem venda de dados.",
      privacyLinkLabel: "Como tratamos suas informações",
    },
    ticker: {
      label: "O que você encontra no Viicus",
      items: [
        "Feiras de bairro",
        "Avisos da vizinhança",
        "Eventos locais",
        "Comércio da região",
        "Achados e perdidos",
        "Caronas",
        "Grupos e clubes",
        "Doações",
        "Indicação de serviços",
      ],
    },
    phone: {
      regionLabel: "Sua região",
      regionName: "Jardim Primavera",
      noticeTag: "Aviso do bairro",
      noticeText: "Feira de sábado confirmada na praça central, das 9h às 14h 🍉",
      postAuthor: "Rafa Martins",
      postDistance: "a 400 m de você",
      postText: "Alguém indica eletricista de confiança aqui na região?",
      postReplies: "12 respostas",
      eventDay: "sáb",
      eventTitle: "Cinema na praça",
      eventMeta: "19h · Praça das Acácias · 43 confirmados",
      joinedCount: "+18 vizinhos",
      joinedToday: "entraram hoje",
      commerceTitle: "Comércio local",
      commerceSubtitle: "27 lojas na sua região",
    },
    pains: {
      eyebrow: "A vida real está a 500 metros",
      title: "Quanta coisa já passou batido por você este mês?",
      items: [
        {
          title: "O aviso que você não viu",
          description:
            "A rua vai fechar, a água vai faltar, a vacinação chegou no posto — e você só descobre quando já era.",
        },
        {
          title: "O evento que você perdeu",
          description:
            "A feira, o festival, a reunião de moradores. Aconteceu a duas quadras de você e ninguém te contou.",
        },
        {
          title: "Os vizinhos que você não conhece",
          description:
            "Gente boa, com os mesmos interesses que você, morando na mesma rua — e vocês nunca se cruzaram.",
        },
      ],
      closingText:
        "Não é culpa sua. A informação do seu bairro está espalhada em mil grupos, murais e conversas.",
      closingStrong: "O Viicus junta tudo em um lugar só.",
    },
    features: {
      eyebrow: "Recursos",
      title: "Um app. O bairro inteiro.",
      feed: {
        title: "Feed da sua região",
        description:
          "Tudo o que acontece num raio de poucos quilômetros, em ordem do que importa: avisos urgentes primeiro, novidades depois. Zero conteúdo de gente do outro lado da cidade.",
        tags: ["Avisos", "Eventos", "Vizinhos", "Comércio", "Grupos"],
      },
      alerts: {
        title: "Avisos que chegam antes",
        description:
          "Obra na rua, falta de água, campanha no posto de saúde. Você fica sabendo com antecedência, não com o problema na porta.",
      },
      conversations: {
        title: "Conversas de verdade",
        description:
          "Pergunte, indique, combine. Como o grupo do bairro deveria ser: organizado por assunto e sem corrente de bom dia.",
      },
      commerce: {
        title: "O comércio da esquina, na palma da mão",
        description:
          "Descubra a padaria nova, o mercado com promoção e a costureira que todo mundo indica. Quem vende perto de você ganha um canal direto com o bairro.",
        searchExample: "pizzaria aberta agora perto de mim",
      },
    },
    how: {
      eyebrow: "Como funciona",
      title: "Três passos e o bairro é seu",
      steps: [
        {
          title: "Escolha sua região",
          description:
            "Diga onde você mora e o Viicus monta o seu feed com o que importa num raio de poucos quilômetros.",
        },
        {
          title: "Siga o que faz sentido",
          description:
            "Avisos, eventos, grupos, comércio local. Você escolhe o que quer acompanhar — sem ruído.",
        },
        {
          title: "Viva o seu bairro",
          description:
            "Chegue nos eventos, conheça vizinhos, apoie o comércio da esquina. Sua região, de verdade.",
        },
      ],
    },
    download: {
      title: "Leve o seu bairro no bolso",
      description:
        "Grátis, para Android e iPhone. Sem anúncios, sem venda de dados e sem feed de gente do outro lado da cidade.",
      /** Sai no lugar dos botões enquanto `lib/stores.ts` estiver vazio. */
      comingSoon: "Em breve na App Store e no Google Play.",
      appStore: "Baixar na App Store",
      playStore: "Baixar no Google Play",
    },
    footer: {
      tagline:
        "Sua região. Sua comunidade. O jeito mais tranquilo de viver o seu bairro.",
      product: "Produto",
      community: "Comunidade",
      contact: "Fale com a gente",
      legal: "Legal",
      privacy: "Privacidade",
      terms: "Termos de uso",
      deleteAccount: "Excluir conta",
      download: "Baixar o app",
      rights: "Todos os direitos reservados.",
      languagesLabel: "Idiomas",
    },
  },
  legalShell: {
    back: "Voltar",
    lastUpdatedLabel: "Última atualização",
    privacy: "Privacidade",
    terms: "Termos de uso",
    deleteAccount: "Excluir conta",
    contact: "Fale com a gente",
    controller: {
      label: "Controlador:",
      taxIdPrefix: ", inscrita no CNPJ sob o nº ",
      addressPrefix: ", com sede em ",
      contactLabel: "Contato:",
      dpoLabel: "Encarregado pelo tratamento de dados:",
      /** Entre o nome do encarregado e o e-mail. Sem nome, some junto. */
      dpoNameSeparator: " — ",
    },
  },
};

export type Dictionary = typeof dictionary;
