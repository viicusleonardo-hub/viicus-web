import type { Dictionary } from "./pt-BR";

/** Tradução (en) de `pt-BR.ts` — mantenha as duas em sincronia. */
export const dictionary: Dictionary = {
  meta: {
    title: "Viicus — Your area. Your community.",
    description:
      "Viicus connects you to everything happening in your area: notices, events, local businesses, and real neighbors. Join the waitlist.",
  },
  home: {
    nav: {
      features: "Features",
      howItWorks: "How it works",
      cta: "Join the list",
    },
    hero: {
      badge: "Launching soon — get in before everyone else",
      titleStart: "Your neighborhood is happening",
      titleHighlight: "without you",
      description:
        "Markets, notices, events, neighbors, local businesses. Viicus brings everything happening in your area into a single app — so you never miss out again.",
      ctaPrimary: "I want in first",
      ctaSecondary: "See what it does",
      privacyNote: "Free, no ads, and we never sell your data.",
      privacyLinkLabel: "How we handle your information",
    },
    ticker: {
      label: "What you'll find on Viicus",
      items: [
        "Neighborhood markets",
        "Community notices",
        "Local events",
        "Local businesses",
        "Lost and found",
        "Ride sharing",
        "Groups and clubs",
        "Donations",
        "Service recommendations",
      ],
    },
    phone: {
      regionLabel: "Your area",
      regionName: "Jardim Primavera",
      noticeTag: "Neighborhood notice",
      noticeText:
        "Saturday market confirmed at the central square, 9 am to 2 pm 🍉",
      postAuthor: "Rafa Martins",
      postDistance: "400 m from you",
      postText: "Can anyone recommend a trustworthy electrician around here?",
      postReplies: "12 replies",
      eventDay: "Sat",
      eventTitle: "Movie night at the square",
      eventMeta: "7 pm · Praça das Acácias · 43 going",
      joinedCount: "+18 neighbors",
      joinedToday: "joined today",
      commerceTitle: "Local businesses",
      commerceSubtitle: "27 shops in your area",
    },
    pains: {
      eyebrow: "Real life is 500 meters away",
      title: "How much has passed you by this month?",
      items: [
        {
          title: "The notice you never saw",
          description:
            "The street is closing, the water is being shut off, vaccines arrived at the clinic — and you only find out when it's too late.",
        },
        {
          title: "The event you missed",
          description:
            "The market, the festival, the residents' meeting. It happened two blocks from you and nobody told you.",
        },
        {
          title: "The neighbors you've never met",
          description:
            "Good people who share your interests, living on your street — and your paths have never crossed.",
        },
      ],
      closingText:
        "It's not your fault. Your neighborhood's information is scattered across a thousand groups, bulletin boards, and conversations.",
      closingStrong: "Viicus brings it all together in one place.",
    },
    features: {
      eyebrow: "Features",
      title: "One app. The whole neighborhood.",
      feed: {
        title: "Your area's feed",
        description:
          "Everything happening within a few kilometers, ordered by what matters: urgent notices first, news later. Zero content from people across town.",
        tags: ["Notices", "Events", "Neighbors", "Businesses", "Groups"],
      },
      alerts: {
        title: "Notices that arrive early",
        description:
          "Roadwork, water outages, campaigns at the health clinic. You find out ahead of time, not with the problem at your door.",
      },
      conversations: {
        title: "Real conversations",
        description:
          "Ask, recommend, make plans. The way the neighborhood group should be: organized by topic and free of chain messages.",
      },
      commerce: {
        title: "The corner shop, in the palm of your hand",
        description:
          "Discover the new bakery, the market running a sale, and the seamstress everyone recommends. Whoever sells near you gets a direct channel to the neighborhood.",
        searchExample: "pizza place open now near me",
      },
    },
    how: {
      eyebrow: "How it works",
      title: "Three steps and the neighborhood is yours",
      steps: [
        {
          title: "Choose your area",
          description:
            "Tell us where you live and Viicus builds your feed with what matters within a few kilometers.",
        },
        {
          title: "Follow what makes sense",
          description:
            "Notices, events, groups, local businesses. You choose what to follow — no noise.",
        },
        {
          title: "Live your neighborhood",
          description:
            "Show up at events, meet neighbors, support the shop on the corner. Your area, for real.",
        },
      ],
    },
    waitlist: {
      title: "Be the first from your neighborhood on Viicus",
      description:
        "We're opening access area by area, starting with the busiest lists. Save your spot — it takes 10 seconds.",
      emailPlaceholder: "you@email.com",
      emailLabel: "Your email",
      submit: "Join the list",
      note: "No spam. We'll only reach out when Viicus arrives in your area.",
      successTitle: "You're on the list.",
      successNote:
        "We'll write when Viicus opens in your area — and for nothing else.",
      errorInvalid: "That email doesn't look right. Mind checking it?",
      errorUnavailable: "We couldn't sign you up just now. Try again shortly.",
    },
    footer: {
      tagline:
        "Your area. Your community. The calmest way to live your neighborhood.",
      product: "Product",
      community: "Community",
      contact: "Talk to us",
      legal: "Legal",
      privacy: "Privacy",
      terms: "Terms of use",
      deleteAccount: "Delete account",
      waitlist: "Waitlist",
      rights: "All rights reserved.",
      languagesLabel: "Languages",
    },
  },
  legalShell: {
    back: "Back",
    lastUpdatedLabel: "Last updated",
    privacy: "Privacy",
    terms: "Terms of use",
    deleteAccount: "Delete account",
    contact: "Talk to us",
    controller: {
      label: "Controller:",
      taxIdPrefix: ", registered under CNPJ (Brazilian company registry) No. ",
      addressPrefix: ", headquartered at ",
      contactLabel: "Contact:",
      dpoLabel: "Data Protection Officer:",
      dpoNameSeparator: " — ",
    },
  },
};
