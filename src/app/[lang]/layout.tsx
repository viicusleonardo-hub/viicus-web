import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Bricolage_Grotesque, Figtree } from "next/font/google";

import { hasLocale, locales } from "@/lib/i18n";
import { getDictionaryFor } from "./dictionaries";

import "../globals.css";

const figtree = Figtree({
  variable: "--font-sans",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionaryFor(lang);

  return {
    /**
     * Domínio público do site — é o que compõe canonical e hreflang relativos.
     *
     * É o `.com`: o `.com.br` está registrado mas não publica registro `A`
     * (e declara MX nulo, ver `lib/legal.ts`). Apontar canonical para um
     * domínio que não resolve manda buscador e prévia de link para o vazio.
     */
    metadataBase: new URL("https://viicus.com"),
    title: {
      default: dict.meta.title,
      template: "%s | Viicus",
    },
    description: dict.meta.description,
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${figtree.variable} ${bricolage.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
