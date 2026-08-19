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

/**
 * `VERCEL_ENV` → o vocabulário comum aos quatro repositórios.
 *
 * Exportada para o teste: é uma tabela de tradução de três linhas, e tabela de
 * tradução errada não quebra nada — só faz um filtro devolver menos do que
 * deveria, que é o pior jeito de descobrir.
 */
export function sentryEnvironmentFor(vercelEnv: string | undefined): string {
  if (vercelEnv === 'production') return 'production';
  if (vercelEnv === 'preview') return 'staging';
  return 'development';
}

export const sharedSentryOptions = {
  dsn: sentryDsn,

  /**
   * O ambiente como o painel o enxerga — TRADUZIDO do vocabulário da Vercel.
   *
   * Ela chama de `preview` o que o resto do sistema chama de `staging`, e um
   * painel em que a mesma falha aparece como `staging` vindo do aplicativo e
   * `preview` vindo do site não se filtra: você precisaria lembrar de marcar
   * as duas caixas, e um dia não lembraria. O eixo é um só nos quatro
   * repositórios — `development`, `staging`, `production`.
   */
  environment: sentryEnvironmentFor(process.env.VERCEL_ENV),

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
  tracesSampleRate: sentryEnvironmentFor(process.env.VERCEL_ENV) === 'production' ? 0.1 : 1,
} as const;
