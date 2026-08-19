import { lang } from "next/root-params";
import { notFound } from "next/navigation";

import { hasLocale, type Locale } from "@/lib/i18n";
import type { Dictionary } from "./dictionaries/pt-BR";

/**
 * Carregamento dos dicionários de tradução, no padrão do guia de
 * internacionalização do Next (`node_modules/next/dist/docs/01-app/02-guides/
 * internationalization.md`): um módulo por idioma, importado dinamicamente e
 * só no servidor — nada disso entra no bundle do cliente.
 *
 * O idioma vem de `next/root-params` (o segmento `[lang]` é parâmetro raiz),
 * então componentes de servidor chamam `getDictionary()` sem receber o locale
 * por props. Exceção: `generateMetadata`, que recebe `params` — para ele
 * existe `getDictionaryFor(locale)`.
 */
const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  "pt-BR": () => import("./dictionaries/pt-BR").then((m) => m.dictionary),
  es: () => import("./dictionaries/es").then((m) => m.dictionary),
  en: () => import("./dictionaries/en").then((m) => m.dictionary),
};

/** Locale da requisição atual, já validado — 404 para segmento desconhecido. */
export async function getLocale(): Promise<Locale> {
  const locale = await lang();
  if (!hasLocale(locale)) notFound();
  return locale;
}

export async function getDictionary(): Promise<Dictionary> {
  return dictionaries[await getLocale()]();
}

export function getDictionaryFor(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
