/**
 * As opções que os três pontos de inicialização do Sentry compartilham.
 *
 * O Next inicializa o SDK em lugares separados — navegador
 * (`instrumentation-client.ts`), Node e Edge (`sentry.*.config.ts`) — e sem um
 * arquivo assim as mesmas quatro decisões ficariam copiadas em três lugares,
 * para divergirem no primeiro ajuste. Divergir aqui é grave: a que protege
 * privacidade é justamente a mais fácil de esquecer numa cópia.
 *
 * **Sem DSN, nada liga.** `NEXT_PUBLIC_SENTRY_DSN` vazia é modo válido — é o
 * modo de quem está desenvolvendo, e o padrão enquanto o projeto não existir
 * no painel.
 */
export const sentryDsn = process.env.NEXT_PUBLIC_SENTRY_DSN;

export const sentryEnabled = Boolean(sentryDsn);

export const sharedSentryOptions = {
  dsn: sentryDsn,

  /**
   * A Vercel expõe o ambiente do deploy; sem ela, desenvolvimento. É o que
   * separa erro de pré-visualização de erro de quem está no site de verdade.
   */
  environment: process.env.VERCEL_ENV ?? 'development',

  /**
   * O sha do commit que a Vercel injeta. É o que transforma "quebrou" em
   * "quebrou a partir deste deploy" sem cruzar horários na mão.
   */
  release: process.env.VERCEL_GIT_COMMIT_SHA,

  /**
   * Não. Aqui o risco é menor que no app — o site é institucional e não tem
   * conta —, mas a postura é a mesma dos outros três repositórios, e postura
   * que vale só onde é barato não é postura.
   */
  sendDefaultPii: false,

  /**
   * Amostragem de traço. Uma landing recebe rajada de tráfego (uma
   * publicação, um compartilhamento) e span é cobrado por evento: 10% conta a
   * mesma história por um décimo do preço.
   */
  tracesSampleRate: process.env.VERCEL_ENV === 'production' ? 0.1 : 1,
} as const;
