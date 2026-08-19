/**
 * Configuração de idiomas do site.
 *
 * O pt-BR fica SEM prefixo na URL (`/`, `/termos`, ...) porque essas URLs já
 * estão publicadas fora do site — as respostas do Play Console em
 * `docs/play-console.md` apontam para `viicus.com/privacidade`,
 * `/termos` e `/excluir-conta`. Mudar essas URLs quebraria a submissão.
 * Os demais idiomas entram com prefixo (`/es`, `/en`), com os mesmos slugs.
 *
 * Este arquivo não importa nada do Next de propósito: ele é usado tanto pelo
 * `proxy.ts` quanto por layouts e páginas.
 */
export const locales = ["pt-BR", "es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt-BR";

/** Nomes dos idiomas no próprio idioma — é assim que um seletor deve exibi-los. */
export const localeNames: Record<Locale, string> = {
  "pt-BR": "Português (Brasil)",
  es: "Español",
  en: "English",
};

export function hasLocale(locale: string): locale is Locale {
  return (locales as readonly string[]).includes(locale);
}

/**
 * Caminho público de uma página em um idioma: o padrão (pt-BR) fica sem
 * prefixo, os demais ganham `/{locale}`. `path` sempre começa com `/`.
 */
export function localePath(locale: Locale, path: string = "/"): string {
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/**
 * `alternates` (canonical + hreflang) de uma página, ligando as três versões
 * de idioma entre si. Os caminhos são relativos e compostos com o
 * `metadataBase` definido no layout raiz.
 */
export function pageAlternates(locale: Locale, path: string) {
  return {
    canonical: localePath(locale, path),
    languages: {
      "pt-BR": localePath("pt-BR", path),
      es: localePath("es", path),
      en: localePath("en", path),
      "x-default": localePath(defaultLocale, path),
    },
  };
}

/**
 * Formata uma data ISO (`aaaa-mm-dd`) por extenso no idioma pedido.
 * `timeZone: "UTC"` porque a data é só uma data — sem ele, o fuso do servidor
 * poderia deslocá-la um dia para trás.
 */
export function formatDate(locale: Locale, isoDate: string): string {
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`));
}
