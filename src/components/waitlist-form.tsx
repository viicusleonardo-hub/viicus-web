"use client";

import { useActionState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  joinWaitlist,
  type WaitlistState,
} from "@/app/[lang]/waitlist-action";

/**
 * Formulário da lista de espera.
 *
 * Ilha de cliente dentro de uma página de servidor: os textos chegam por
 * props já traduzidos, porque o dicionário é carregado só no servidor
 * (`app/[lang]/dictionaries.ts`) e não deve entrar no bundle.
 *
 * O envio é um `<form action={...}>` de verdade, com `name="email"` no campo:
 * assim ele funciona antes de a hidratação terminar, e o `useActionState`
 * apenas acrescenta o estado de "enviando" e a resposta.
 */

export type WaitlistCopy = {
  emailPlaceholder: string;
  emailLabel: string;
  submit: string;
  note: string;
  successTitle: string;
  successNote: string;
  errorInvalid: string;
  errorUnavailable: string;
};

const INITIAL: WaitlistState = { status: "idle" };

export function WaitlistForm({ copy }: { copy: WaitlistCopy }) {
  const [state, action, pending] = useActionState(joinWaitlist, INITIAL);

  if (state.status === "ok") {
    return (
      <div className="mt-2 flex w-full max-w-md flex-col items-center gap-3">
        <p className="inline-flex items-center gap-2 text-lg font-semibold">
          <Check className="size-5" aria-hidden />
          {copy.successTitle}
        </p>
        <p className="text-sm text-primary-foreground/70">
          {copy.successNote}
        </p>
      </div>
    );
  }

  const error =
    state.status === "error"
      ? state.reason === "invalid"
        ? copy.errorInvalid
        : copy.errorUnavailable
      : null;

  return (
    <form
      action={action}
      className="mt-2 flex w-full max-w-md flex-col items-center gap-3"
      noValidate
    >
      <div className="flex w-full flex-col gap-3 sm:flex-row">
        <Input
          type="email"
          name="email"
          required
          autoComplete="email"
          disabled={pending}
          placeholder={copy.emailPlaceholder}
          aria-label={copy.emailLabel}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? "waitlist-error" : undefined}
          className="h-13 flex-1 rounded-xl border-white/30 bg-white/95 text-base text-foreground placeholder:text-muted-foreground"
        />
        <Button
          type="submit"
          size="lg"
          disabled={pending}
          className="h-13 rounded-xl bg-foreground px-7 text-base text-background shadow-md hover:bg-foreground/90"
        >
          {copy.submit}
          {pending ? (
            <Loader2 className="animate-spin" aria-hidden />
          ) : (
            <ArrowRight aria-hidden />
          )}
        </Button>
      </div>
      {/*
        O aviso e o erro ocupam a mesma linha, e o erro tem `role="alert"`
        para que o leitor de tela anuncie a falha sem a pessoa ter de
        procurar o que mudou na tela.
      */}
      {error ? (
        <p
          id="waitlist-error"
          role="alert"
          className="text-sm font-medium text-primary-foreground"
        >
          {error}
        </p>
      ) : (
        <p className="text-sm text-primary-foreground/70">{copy.note}</p>
      )}
    </form>
  );
}
