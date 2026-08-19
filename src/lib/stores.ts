/**
 * Endereços do app nas lojas.
 *
 * Ficam num arquivo só porque a landing precisa deles em dois lugares (o
 * botão do topo e o bloco de download) e porque eles não existem ainda: o app
 * não foi publicado. Vazio, o site não renderiza botão nenhum e mostra a
 * linha de "em breve" — botão que não leva a lugar algum é pior que a
 * ausência dele, e um `href="#"` numa página pública é exatamente o tipo de
 * coisa que ninguém percebe até um visitante clicar.
 *
 * É o mesmo trato do `legal.ts` ao lado: campo vazio some em vez de virar
 * "[preencher]" no ar. A contrapartida também é a mesma — ninguém avisa;
 * confira esta lista no dia da publicação.
 */
export const STORES = {
  /** TODO: `https://apps.apple.com/br/app/viicus/id...` depois da publicação. */
  appStore: "",
  /** TODO: `https://play.google.com/store/apps/details?id=com.viicus.app`. */
  playStore: "",
} as const;

/** Há pelo menos uma loja para onde mandar o visitante? */
export const hasStoreLinks = Boolean(STORES.appStore || STORES.playStore);
