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
  /**
   * Canal geral — já é o que o rodapé da landing usa.
   *
   * O domínio é `viicus.com`, e não `.com.br`, porque só ele recebe e-mail:
   * `viicus.com.br` publica um MX nulo (`MX 0 .`, RFC 7505), que declara
   * explicitamente que o domínio NÃO aceita correio. Mensagem para lá volta
   * com erro permanente — e este endereço é o único caminho de exclusão de
   * quem já desinstalou o app, que é justamente o que a Play Store exige que
   * funcione. Se um dia o `.com.br` for configurado, confira o MX antes de
   * trocar de volta.
   */
  email: "contato@viicus.com",
  /**
   * Encarregado pelo tratamento de dados (LGPD, art. 41). Pode ser o mesmo
   * endereço acima; o que a lei pede é que exista um canal anunciado.
   */
  dpoEmail: "privacidade@viicus.com",
  /**
   * TODO: nome de quem foi indicado encarregado.
   *
   * A LGPD não exige profissional certificado nem pessoa dedicada — o próprio
   * controlador pode se indicar, e numa operação pequena é o normal. O que a
   * ANPD espera ver publicado é **identidade e contato**, não só o endereço de
   * e-mail: por isso o nome aqui e o canal logo acima.
   *
   * Existe a dispensa da Resolução CD/ANPD nº 2/2022 para agente de pequeno
   * porte (canal de comunicação basta, sem indicar encarregado), mas ela não
   * alcança tratamento de ALTO RISCO — e um dos critérios específicos é
   * decisão tomada unicamente com base em tratamento automatizado, que é
   * exatamente a triagem por LLM recusando o relato de alguém. Vazio, a
   * página imprime só o canal; é a postura mais frágil das duas.
   */
  dpoName: "",
} as const;

/**
 * Janela de retenção das cópias de segurança do banco, em dias.
 *
 * A exclusão apaga a linha na hora, mas ela sobrevive nas cópias até a mais
 * antiga expirar — e a Play Store pergunta explicitamente por "qualquer
 * período de armazenamento adicional". É o número do plano contratado no
 * provedor do banco (a janela de PITR), não uma estimativa: **confirme no
 * painel antes de publicar**.
 *
 * `null` não renderiza a linha. Melhor omitir do que publicar um prazo
 * errado — prazo errado numa página de exclusão é declaração falsa sobre
 * tratamento de dados, e vale menos que o silêncio.
 */
export const BACKUP_RETENTION_DAYS: number | null = null;

/** Nome comercial do produto, no texto corrido. */
export const PRODUCT = "Viicus";

/**
 * Data da última revisão dos textos legais, em ISO (`aaaa-mm-dd`).
 *
 * É ISO, e não texto pronto, porque a mesma data é exibida por extenso em cada
 * idioma do site (`formatDate` em `lib/i18n.ts`). Atualize quando mudar o
 * conteúdo de verdade — a data é o que permite a alguém saber se leu a versão
 * vigente, então mexer nela por mudança de formatação corrói exatamente isso.
 */
export const LAST_UPDATED = "2026-08-13";
