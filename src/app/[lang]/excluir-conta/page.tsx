import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { hasLocale, pageAlternates, type Locale } from "@/lib/i18n";
import ContentEn, { meta as metaEn } from "./content/en";
import ContentEs, { meta as metaEs } from "./content/es";
import ContentPtBR, { meta as metaPtBR } from "./content/pt-BR";

/**
 * Exclusão de conta — a rota. A URL pt-BR (`/excluir-conta`, sem prefixo) está
 * publicada no Play Console e não pode mudar; as traduções vivem em
 * `/es/excluir-conta` e `/en/excluir-conta`. O texto de cada idioma está em
 * `./content`.
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
}: PageProps<"/[lang]/excluir-conta">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return {
    ...content[lang].meta,
    alternates: pageAlternates(lang, "/excluir-conta"),
  };
}

export default async function ExcluirContaPage({
  params,
}: PageProps<"/[lang]/excluir-conta">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { Content } = content[lang];
  return <Content />;
}
