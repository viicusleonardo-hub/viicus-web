import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

/**
 * O wrapper do Sentry existe para uma coisa que o SDK sozinho não faz: **subir
 * os source maps** no build e apagá-los do que vai para o cliente. Sem ele o
 * painel recebe stack trace minificado, que é o mesmo que não receber nada.
 *
 * Sem `SENTRY_AUTH_TOKEN` no ambiente, o build **não falha** — ele só não
 * envia o mapa. É silêncio da família que este projeto costuma anotar, e por
 * isso está escrito aqui: se os erros da web chegarem ilegíveis ao painel, o
 * token é o primeiro lugar a olhar (variável de ambiente do projeto na
 * Vercel).
 *
 * `tunnelRoute` fica DESLIGADO. Ele faz os eventos passarem por uma rota do
 * próprio domínio para escapar de bloqueador de anúncio, ao custo de
 * transformar uma página estática em algo com rota dinâmica. Numa landing que
 * é toda SSG, a troca não compensa — e o erro que um bloqueador engole aqui é
 * de visitante, não de usuário logado.
 */
export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  // Silencioso no local, falante no CI — onde alguém de fato lê a saída.
  silent: !process.env.CI,
});
