import * as Sentry from "@sentry/nextjs";

import { sentryEnabled, sharedSentryOptions } from "@/lib/sentry-options";

/**
 * Sentry no SERVIDOR (Node e Edge).
 *
 * `register()` é o gancho que o Next chama uma vez, na partida de cada
 * runtime — é o equivalente daqui ao `--import ./src/instrument.ts` que a API
 * e os workers usam, e existe pela mesma razão: o SDK precisa entrar antes do
 * que ele instrumenta.
 *
 * A inicialização é feita direto aqui, sem os arquivos `sentry.server.config`
 * e `sentry.edge.config` que o assistente do Sentry cria. Eles existiriam só
 * para carregar duas linhas cada um, e as opções já moram em
 * `lib/sentry-options.ts` — três arquivos para uma decisão só é como as
 * cópias divergem.
 */
export async function register() {
  if (!sentryEnabled) return;
  Sentry.init(sharedSentryOptions);
}

/**
 * Erro de renderização no servidor — inclusive o que acontece dentro de um
 * Server Component, que não passa por barreira nenhuma do lado do cliente.
 *
 * É o gancho do próprio Next (ver o `instrumentation.md` dos docs
 * versionados); `captureRequestError` do SDK é feito para encaixar nele.
 */
export const onRequestError = Sentry.captureRequestError;
