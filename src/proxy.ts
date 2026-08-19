import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, locales } from "@/lib/i18n";

/**
 * Roteamento de idioma (Proxy — o antigo Middleware, renomeado no Next 16).
 *
 * Todas as páginas vivem em `app/[lang]`, mas o pt-BR é servido SEM prefixo:
 * as URLs `/`, `/termos`, `/privacidade` e `/excluir-conta` estão publicadas
 * no Play Console (`docs/play-console.md`) e precisam continuar respondendo
 * com o conteúdo em português. Por isso:
 *
 * - `/es/...` e `/en/...` passam direto e caem no segmento `[lang]`;
 * - `/pt-BR/...` redireciona (308) para a versão sem prefixo — uma URL
 *   canônica por idioma, sem conteúdo duplicado;
 * - todo o resto é REESCRITO (não redirecionado) para `/pt-BR/...`: o
 *   visitante continua vendo a URL sem prefixo.
 *
 * Não há redirecionamento por `Accept-Language` de propósito: a raiz precisa
 * responder pt-BR de forma estável para os revisores e crawlers; os `hreflang`
 * nas páginas apontam os outros idiomas.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /pt-BR/* → /* : o prefixo do idioma padrão nunca é uma URL pública.
  if (
    pathname === `/${defaultLocale}` ||
    pathname.startsWith(`/${defaultLocale}/`)
  ) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(defaultLocale.length + 1) || "/";
    return NextResponse.redirect(url, 308);
  }

  // /es/*, /en/* : já têm o idioma no caminho.
  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocalePrefix) return;

  // Sem prefixo → pt-BR, por reescrita interna (a URL não muda).
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Fora do proxy: internals do Next, rotas de API e arquivos com extensão
  // (favicon.ico, imagens de public/ etc.).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
