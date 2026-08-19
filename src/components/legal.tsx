import Link from "next/link";
import { ArrowLeft, Leaf } from "lucide-react";

import { CONTROLLER, LAST_UPDATED } from "@/lib/legal";
import { formatDate, localePath } from "@/lib/i18n";
import { getDictionary, getLocale } from "@/app/[lang]/dictionaries";

/**
 * Casca das páginas legais.
 *
 * O projeto não tem o plugin `@tailwindcss/typography`, então a tipografia de
 * texto corrido é feita à mão pelos componentes abaixo. Eles existem para que
 * as três páginas não repitam as mesmas classes — e para que mudar o ritmo do
 * texto seja uma edição, não três.
 *
 * Os textos da casca (Voltar, Última atualização, rodapé) vêm do dicionário do
 * idioma atual — o locale é lido de `next/root-params`, então o conteúdo das
 * páginas não precisa repassá-lo por props.
 */

type LegalPageProps = {
  title: string;
  intro: string;
  children: React.ReactNode;
};

export async function LegalPage({ title, intro, children }: LegalPageProps) {
  const locale = await getLocale();
  const { legalShell: t } = await getDictionary();

  return (
    <div className="flex min-h-full flex-col">
      <header className="border-b border-border/60">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-4 py-5 sm:px-6">
          <Link
            href={localePath(locale)}
            className="inline-flex items-center gap-2 font-heading text-lg font-bold tracking-tight"
          >
            <Leaf className="size-5 text-primary" />
            Viicus
          </Link>
          <Link
            href={localePath(locale)}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            {t.back}
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {intro}
        </p>
        <p className="mt-6 text-sm text-muted-foreground">
          {t.lastUpdatedLabel}: {formatDate(locale, LAST_UPDATED)}
        </p>

        <div className="mt-12">{children}</div>
      </main>

      <footer className="border-t border-border/60 bg-muted/40">
        <div className="mx-auto w-full max-w-3xl px-4 py-8 text-sm text-muted-foreground sm:px-6">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              href={localePath(locale, "/privacidade")}
              className="transition-colors hover:text-primary"
            >
              {t.privacy}
            </Link>
            <Link
              href={localePath(locale, "/termos")}
              className="transition-colors hover:text-primary"
            >
              {t.terms}
            </Link>
            <Link
              href={localePath(locale, "/excluir-conta")}
              className="transition-colors hover:text-primary"
            >
              {t.deleteAccount}
            </Link>
            <a
              href={`mailto:${CONTROLLER.email}`}
              className="transition-colors hover:text-primary"
            >
              {t.contact}
            </a>
          </div>
          <p className="mt-6">© {new Date().getFullYear()} Viicus.</p>
        </div>
      </footer>
    </div>
  );
}

/** Seção com âncora — o `id` é o que permite linkar um trecho específico. */
export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-8 border-t border-border/60 py-10 first:border-t-0 first:pt-0">
      <h2 className="font-heading text-xl font-bold tracking-tight sm:text-2xl">
        {title}
      </h2>
      <div className="mt-5 grid gap-5">{children}</div>
    </section>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="leading-relaxed text-foreground/90">{children}</p>;
}

export function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="grid gap-3 border-l-2 border-border pl-5">{children}</ul>
  );
}

export function LI({ children }: { children: React.ReactNode }) {
  return <li className="leading-relaxed text-foreground/90">{children}</li>;
}

/** Termo em destaque no início de um item de lista. */
export function Term({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-foreground">{children}</strong>;
}

/**
 * Bloco de destaque. Reservado ao que muda a decisão de quem lê — o aviso de
 * emergência nos termos, o que é irreversível na exclusão de conta. Usar para
 * ênfase genérica gasta o recurso.
 */
export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-primary/20 bg-accent/40 p-5 leading-relaxed text-accent-foreground">
      {children}
    </div>
  );
}

/** Tabela responsiva — rola sozinha no telefone em vez de estourar a página. */
export function Table({
  head,
  rows,
}: {
  head: string[];
  rows: React.ReactNode[][];
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full min-w-lg border-collapse text-left text-sm">
        <thead>
          <tr className="bg-muted/60">
            {head.map((cell) => (
              <th key={cell} className="px-4 py-3 font-semibold">
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-t border-border align-top">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-3 leading-relaxed text-foreground/90">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Identificação do controlador. Só imprime o que estiver preenchido em
 * `CONTROLLER` — ver o comentário de lá sobre os campos pendentes. Os rótulos
 * vêm do dicionário do idioma atual.
 */
export async function ControllerIdentity() {
  const { legalName, taxId, address, email, dpoEmail, dpoName } = CONTROLLER;
  const { legalShell } = await getDictionary();
  const t = legalShell.controller;

  return (
    <UL>
      {legalName ? (
        <LI>
          <Term>{t.label}</Term> {legalName}
          {taxId ? `${t.taxIdPrefix}${taxId}` : null}
          {address ? `${t.addressPrefix}${address}` : null}.
        </LI>
      ) : null}
      <LI>
        <Term>{t.contactLabel}</Term>{" "}
        <a className="text-primary underline underline-offset-4" href={`mailto:${email}`}>
          {email}
        </a>
      </LI>
      <LI>
        <Term>{t.dpoLabel}</Term>{" "}
        {dpoName ? `${dpoName}${t.dpoNameSeparator}` : null}
        <a className="text-primary underline underline-offset-4" href={`mailto:${dpoEmail}`}>
          {dpoEmail}
        </a>
      </LI>
    </UL>
  );
}
