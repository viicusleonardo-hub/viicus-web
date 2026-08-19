import type { Dictionary } from "./pt-BR";

/** Tradução (es) de `pt-BR.ts` — mantenha as duas em sincronia. */
export const dictionary: Dictionary = {
  meta: {
    title: "Viicus — Tu zona. Tu comunidad.",
    description:
      "Viicus te conecta con todo lo que pasa en tu zona: avisos, eventos, comercio local y vecinos de verdad. Únete a la lista de espera.",
  },
  home: {
    nav: {
      features: "Funciones",
      howItWorks: "Cómo funciona",
      cta: "Unirme a la lista",
    },
    hero: {
      badge: "Muy pronto — entra antes que todos",
      titleStart: "Tu barrio está pasando",
      titleHighlight: "sin ti",
      description:
        "Ferias, avisos, eventos, vecinos, comercio local. Viicus reúne todo lo que pasa en tu zona en una sola app — para que nunca más te quedes fuera.",
      ctaPrimary: "Quiero entrar primero",
      ctaSecondary: "Ver qué hace",
      privacyNote: "Gratis, sin anuncios y sin venta de datos.",
      privacyLinkLabel: "Cómo tratamos tu información",
    },
    ticker: {
      label: "Lo que encuentras en Viicus",
      items: [
        "Ferias de barrio",
        "Avisos del vecindario",
        "Eventos locales",
        "Comercio de la zona",
        "Objetos perdidos",
        "Viajes compartidos",
        "Grupos y clubes",
        "Donaciones",
        "Recomendación de servicios",
      ],
    },
    phone: {
      regionLabel: "Tu zona",
      regionName: "Jardim Primavera",
      noticeTag: "Aviso del barrio",
      noticeText:
        "Feria del sábado confirmada en la plaza central, de 9 a 14 h 🍉",
      postAuthor: "Rafa Martins",
      postDistance: "a 400 m de ti",
      postText: "¿Alguien recomienda un electricista de confianza por la zona?",
      postReplies: "12 respuestas",
      eventDay: "sáb",
      eventTitle: "Cine en la plaza",
      eventMeta: "19 h · Praça das Acácias · 43 confirmados",
      joinedCount: "+18 vecinos",
      joinedToday: "se unieron hoy",
      commerceTitle: "Comercio local",
      commerceSubtitle: "27 tiendas en tu zona",
    },
    pains: {
      eyebrow: "La vida real está a 500 metros",
      title: "¿Cuántas cosas se te pasaron este mes?",
      items: [
        {
          title: "El aviso que no viste",
          description:
            "La calle va a cerrar, se va a cortar el agua, llegó la vacunación al centro de salud — y te enteras cuando ya es tarde.",
        },
        {
          title: "El evento que te perdiste",
          description:
            "La feria, el festival, la reunión de vecinos. Pasó a dos cuadras de tu casa y nadie te lo contó.",
        },
        {
          title: "Los vecinos que no conoces",
          description:
            "Gente buena, con tus mismos intereses, viviendo en tu misma calle — y nunca se han cruzado.",
        },
      ],
      closingText:
        "No es tu culpa. La información de tu barrio está repartida en mil grupos, carteleras y conversaciones.",
      closingStrong: "Viicus lo junta todo en un solo lugar.",
    },
    features: {
      eyebrow: "Funciones",
      title: "Una app. El barrio entero.",
      feed: {
        title: "El feed de tu zona",
        description:
          "Todo lo que pasa en un radio de pocos kilómetros, en orden de lo que importa: avisos urgentes primero, novedades después. Cero contenido de gente del otro lado de la ciudad.",
        tags: ["Avisos", "Eventos", "Vecinos", "Comercio", "Grupos"],
      },
      alerts: {
        title: "Avisos que llegan antes",
        description:
          "Obras en la calle, corte de agua, campañas en el centro de salud. Te enteras con anticipación, no con el problema en la puerta.",
      },
      conversations: {
        title: "Conversaciones de verdad",
        description:
          "Pregunta, recomienda, organiza. Como debería ser el grupo del barrio: ordenado por tema y sin cadenas de buenos días.",
      },
      commerce: {
        title: "El comercio de la esquina, en la palma de tu mano",
        description:
          "Descubre la panadería nueva, el mercado con ofertas y la costurera que todos recomiendan. Quien vende cerca de ti gana un canal directo con el barrio.",
        searchExample: "pizzería abierta ahora cerca de mí",
      },
    },
    how: {
      eyebrow: "Cómo funciona",
      title: "Tres pasos y el barrio es tuyo",
      steps: [
        {
          title: "Elige tu zona",
          description:
            "Dinos dónde vives y Viicus arma tu feed con lo que importa en un radio de pocos kilómetros.",
        },
        {
          title: "Sigue lo que tiene sentido",
          description:
            "Avisos, eventos, grupos, comercio local. Tú eliges qué seguir — sin ruido.",
        },
        {
          title: "Vive tu barrio",
          description:
            "Llega a los eventos, conoce vecinos, apoya el comercio de la esquina. Tu zona, de verdad.",
        },
      ],
    },
    waitlist: {
      title: "Sé el primero de tu barrio en Viicus",
      description:
        "Abriremos el acceso por zonas, empezando por las listas con más gente. Asegura tu lugar — toma 10 segundos.",
      emailPlaceholder: "tu@email.com",
      emailLabel: "Tu correo electrónico",
      submit: "Unirme a la lista",
      note: "Sin spam. Solo te avisamos cuando Viicus llegue a tu zona.",
      successTitle: "Listo, ya estás en la lista.",
      successNote:
        "Te escribimos cuando Viicus abra en tu zona — y solo para eso.",
      errorInvalid: "Ese correo no parece válido. ¿Lo revisas?",
      errorUnavailable:
        "No pudimos registrarte ahora. Inténtalo de nuevo en un momento.",
    },
    footer: {
      tagline:
        "Tu zona. Tu comunidad. La forma más tranquila de vivir tu barrio.",
      product: "Producto",
      community: "Comunidad",
      contact: "Habla con nosotros",
      legal: "Legal",
      privacy: "Privacidad",
      terms: "Términos de uso",
      deleteAccount: "Eliminar cuenta",
      waitlist: "Lista de espera",
      rights: "Todos los derechos reservados.",
      languagesLabel: "Idiomas",
    },
  },
  legalShell: {
    back: "Volver",
    lastUpdatedLabel: "Última actualización",
    privacy: "Privacidad",
    terms: "Términos de uso",
    deleteAccount: "Eliminar cuenta",
    contact: "Habla con nosotros",
    controller: {
      label: "Responsable del tratamiento:",
      taxIdPrefix: ", inscrita en el CNPJ (registro de empresas de Brasil) con el n.º ",
      addressPrefix: ", con sede en ",
      contactLabel: "Contacto:",
      dpoLabel: "Encargado del tratamiento de datos:",
      dpoNameSeparator: " — ",
    },
  },
};
