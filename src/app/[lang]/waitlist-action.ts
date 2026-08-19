"use server";

/**
 * Inscrição na lista de espera.
 *
 * O destino é uma **audiência do Resend**, e não uma tabela nossa, por uma
 * razão de escopo: o Resend já é o remetente do sistema (o worker de
 * `../viicus-jobs` manda por ele todo e-mail transacional), então a lista
 * nasce no mesmo lugar de onde vai sair o "chegamos na sua região" — sem
 * migração, sem rota pública nova na API e sem um segundo lugar guardando
 * e-mail de gente.
 *
 * É Server Action, não Route Handler, porque isto é mutação disparada por um
 * `<form>`: o Next protege a chamada com verificação de Origin/Host e não
 * expõe endpoint próprio (ver `01-app/02-guides/server-actions.md`). Ainda
 * assim, o conselho do próprio documento vale: **trate como entrada não
 * confiável**, que é o que a validação abaixo faz.
 *
 * A chave nunca chega ao cliente: este módulo é `use server` e as duas
 * variáveis são lidas em tempo de execução, no servidor.
 */

/** O que o formulário exibe depois do envio. A UI traduz; aqui só o código. */
export type WaitlistState =
  | { status: "idle" }
  | { status: "ok" }
  | { status: "error"; reason: "invalid" | "unavailable" };

/**
 * Validação de e-mail deliberadamente frouxa: exige uma arroba com algo dos
 * dois lados e um ponto no domínio, e nada além disso. Regex ambiciosa de
 * e-mail erra recusando endereço válido (é o caso clássico do `+` e dos TLDs
 * novos), e aqui o custo de aceitar um endereço inexistente é uma linha morta
 * numa lista — enquanto o custo de recusar um válido é uma pessoa a menos no
 * lançamento. Quem valida de verdade é a entrega.
 */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ENDPOINT = "https://api.resend.com";

export async function joinWaitlist(
  _previous: WaitlistState,
  formData: FormData
): Promise<WaitlistState> {
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();

  if (!EMAIL.test(email) || email.length > 254) {
    return { status: "error", reason: "invalid" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  /**
   * Sem configuração o formulário RECUSA em vez de fingir sucesso. A
   * tentação aqui é responder "ok" para não estragar a tela — e o resultado
   * seria uma lista de espera vazia com todo mundo achando que se inscreveu,
   * que é a pior falha possível: silenciosa dos dois lados.
   */
  if (!apiKey || !audienceId) {
    console.error("[waitlist] RESEND_API_KEY ou RESEND_AUDIENCE_ID ausente");
    return { status: "error", reason: "unavailable" };
  }

  try {
    const response = await fetch(
      `${ENDPOINT}/audiences/${audienceId}/contacts`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, unsubscribed: false }),
        // O visitante está olhando um botão girando: não vale pendurar.
        signal: AbortSignal.timeout(10_000),
      }
    );

    /**
     * Reinscrever quem já está na lista é sucesso, não erro — a pessoa não
     * tem como saber que já se inscreveu, e mostrar falha para isso seria
     * mentir. O Resend responde 200/201 para contato repetido; qualquer 4xx
     * que sobre daqui é problema nosso de configuração, e vira `unavailable`
     * junto com os 5xx.
     */
    if (!response.ok) {
      console.error(
        `[waitlist] resend respondeu ${response.status}: ${await response.text()}`
      );
      return { status: "error", reason: "unavailable" };
    }

    return { status: "ok" };
  } catch (error) {
    // Rede, DNS ou o timeout acima. O e-mail em si nunca entra no log.
    console.error("[waitlist] falha ao chamar o resend", error);
    return { status: "error", reason: "unavailable" };
  }
}
