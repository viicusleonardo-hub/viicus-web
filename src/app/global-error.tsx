"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

/**
 * A última barreira do App Router: erro que derruba o layout raiz.
 *
 * Só ela pode capturar o que estoura acima de qualquer `error.tsx` de
 * segmento — e por isso ela precisa renderizar `<html>` e `<body>` próprios: o
 * layout que normalmente os fornece é justamente o que falhou.
 *
 * O texto é fixo em português e não passa pelo dicionário de propósito. Nesta
 * altura o que quebrou pode ter sido o próprio carregamento do dicionário, e
 * uma tela de erro que depende do que falhou é uma tela em branco.
 */
export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="pt-BR">
      <body className="flex min-h-svh flex-col items-center justify-center gap-3 p-6 text-center">
        <h1 className="text-2xl font-bold">Algo deu errado</h1>
        <p className="text-muted-foreground">
          Recarregue a página. Se continuar, escreva para contato@viicus.com.
        </p>
        {/*
          O `digest` é o identificador que o Next gera para o erro e o mesmo
          que aparece no log do servidor — é o que liga o que a pessoa viu ao
          que foi registrado, como o código de suporte faz no aplicativo.
        */}
        {error.digest ? (
          <code className="text-xs text-muted-foreground">{error.digest}</code>
        ) : null}
      </body>
    </html>
  );
}
