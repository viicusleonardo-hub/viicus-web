import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { hasLocale, pageAlternates, type Locale } from "@/lib/i18n";
import ContentEn, { meta as metaEn } from "./content/en";
import ContentEs, { meta as metaEs } from "./content/es";
import ContentPtBR, { meta as metaPtBR } from "./content/pt-BR";

/**
 * Termos de uso — a rota. O texto (longo, com marcação no meio) vive em um
 * módulo por idioma em `./content`; aqui só se escolhe a versão e se montam
 * os metadados com o `alternates` que liga as três línguas.
 */
const content: Record<
  Locale,
  { meta: { title: string; description: string }; Content: () => React.JSX.Element }
> = {
  "pt-BR": { meta: metaPtBR, Content: ContentPtBR },
  es: { meta: metaEs, Content: ContentEs },
  en: { meta: metaEn, Content: ContentEn },
};

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/termos">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return {
    ...content[lang].meta,
    alternates: pageAlternates(lang, "/termos"),
  };
}

export default async function TermosPage({
  params,
}: PageProps<"/[lang]/termos">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { Content } = content[lang];
  return <Content />;
}
