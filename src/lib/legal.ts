/**
 * Dados que as páginas legais precisam citar e que não estão no código.
 *
 * Ficam num arquivo só porque aparecem em três páginas (privacidade, termos,
 * exclusão de conta) e porque a LGPD exige que o **controlador** seja
 * identificável: política sem razão social e sem canal de contato é política
 * incompleta, e a análise da Play Store olha para isso.
 *
 * Campos vazios simplesmente não são renderizados — melhor omitir do que
 * publicar um "[preencher]" no ar. A contrapartida é que ninguém avisa:
 * confira esta lista antes de submeter o app.
 */
export const CONTROLLER = {
  /** TODO: razão social completa, como está no CNPJ. */
  legalName: "",
  /** TODO: CNPJ, formatado. */
  taxId: "",
  /** TODO: endereço da sede. */
  address: "",
  /** Canal geral — já é o que o rodapé da landing usa. */
  email: "contato@viicus.com.br",
  /**
   * Encarregado pelo tratamento de dados (LGPD, art. 41). Pode ser o mesmo
   * endereço acima; o que a lei pede é que exista um canal anunciado.
   */
  dpoEmail: "privacidade@viicus.com.br",
} as const;

/** Nome comercial do produto, no texto corrido. */
export const PRODUCT = "Viicus";

/**
 * Data da última revisão dos textos legais.
 *
 * Atualize quando mudar o conteúdo de verdade — a data é o que permite a
 * alguém saber se leu a versão vigente, então mexer nela por mudança de
 * formatação corrói exatamente isso.
 */
export const LAST_UPDATED = "13 de agosto de 2026";
