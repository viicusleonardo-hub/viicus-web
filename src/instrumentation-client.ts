import * as Sentry from "@sentry/nextjs";

import { sentryEnabled, sharedSentryOptions } from "@/lib/sentry-options";

/**
 * Sentry no NAVEGADOR.
 *
 * `instrumentation-client.ts` é a convenção do Next 16 para código que roda
 * antes de a aplicação ficar interativa (ver
 * `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/instrumentation-client.md`).
 * Ao contrário do lado servidor, ele não exporta função nenhuma: o efeito
 * colateral do módulo é a instrumentação.
 *
 * **Session Replay não entra.** O assistente do Sentry o liga por padrão, e
 * aqui ele seria a única peça do sistema que grava tela — as outras três casas
 * decidiram o contrário, e uma landing estática não tem o que depurar por
 * vídeo que o stack trace não conte. Ligar é uma linha, no dia em que fizer
 * falta.
 */
if (sentryEnabled) {
  Sentry.init(sharedSentryOptions);
}

/**
 * Transição de rota no App Router. Sem isto, o traço de navegação do lado do
 * cliente simplesmente não existe — o SDK vê o primeiro carregamento e mais
 * nada.
 */
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
