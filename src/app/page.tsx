import Link from "next/link";
import {
  ArrowRight,
  Bell,
  CalendarDays,
  Heart,
  Leaf,
  MapPin,
  Megaphone,
  MessageCircle,
  MessageSquare,
  Search,
  ShoppingBag,
  Sparkles,
  Store,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/* ---------------------------------- data --------------------------------- */

const tickerItems = [
  "Feiras de bairro",
  "Avisos da vizinhança",
  "Eventos locais",
  "Comércio da região",
  "Achados e perdidos",
  "Caronas",
  "Grupos e clubes",
  "Doações",
  "Indicação de serviços",
];

const pains = [
  {
    icon: Megaphone,
    title: "O aviso que você não viu",
    description:
      "A rua vai fechar, a água vai faltar, a vacinação chegou no posto — e você só descobre quando já era.",
  },
  {
    icon: CalendarDays,
    title: "O evento que você perdeu",
    description:
      "A feira, o festival, a reunião de moradores. Aconteceu a duas quadras de você e ninguém te contou.",
  },
  {
    icon: Users,
    title: "Os vizinhos que você não conhece",
    description:
      "Gente boa, com os mesmos interesses que você, morando na mesma rua — e vocês nunca se cruzaram.",
  },
];

const steps = [
  {
    number: "1",
    title: "Escolha sua região",
    description:
      "Diga onde você mora e o Viicus monta o seu feed com o que importa num raio de poucos quilômetros.",
  },
  {
    number: "2",
    title: "Siga o que faz sentido",
    description:
      "Avisos, eventos, grupos, comércio local. Você escolhe o que quer acompanhar — sem ruído.",
  },
  {
    number: "3",
    title: "Viva o seu bairro",
    description:
      "Chegue nos eventos, conheça vizinhos, apoie o comércio da esquina. Sua região, de verdade.",
  },
];

const avatarColors = [
  "bg-chart-1",
  "bg-chart-2",
  "bg-chart-3",
  "bg-chart-4",
  "bg-chart-5",
];

/* -------------------------------- helpers -------------------------------- */

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-chart-2 font-heading text-lg font-bold text-primary-foreground shadow-sm">
        V
      </span>
      <span className="font-heading text-xl font-bold tracking-tight">
        Viicus
      </span>
    </Link>
  );
}

function AvatarStack({ initials }: { initials: string[] }) {
  return (
    <div className="flex -space-x-2.5">
      {initials.map((letters, i) => (
        <span
          key={letters}
          className={`flex size-9 items-center justify-center rounded-full border-2 border-background text-[11px] font-semibold text-primary-foreground ${avatarColors[i % avatarColors.length]}`}
        >
          {letters}
        </span>
      ))}
    </div>
  );
}

/* ----------------------------- phone mockup ------------------------------ */

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-fit">
      {/* glow atrás do celular */}
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-full bg-gradient-to-br from-primary/30 via-chart-2/20 to-transparent blur-3xl"
      />

      {/* frame */}
      <div className="w-[290px] rounded-[2.8rem] border-[10px] border-foreground/90 bg-background shadow-2xl shadow-primary/20 sm:w-[310px]">
        {/* notch */}
        <div className="flex justify-center pt-2.5">
          <div className="h-6 w-28 rounded-full bg-foreground/90" />
        </div>

        {/* app header */}
        <div className="flex items-center justify-between px-5 pt-4 pb-3">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Sua região
            </p>
            <p className="flex items-center gap-1 font-heading text-sm font-bold">
              <MapPin className="size-3.5 text-primary" />
              Jardim Primavera
            </p>
          </div>
          <span className="relative flex size-8 items-center justify-center rounded-full bg-secondary">
            <Bell className="size-4 text-secondary-foreground" />
            <span className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-primary-foreground">
              3
            </span>
          </span>
        </div>

        {/* feed */}
        <div className="grid gap-2.5 px-4 pb-6">
          {/* aviso */}
          <div className="rounded-2xl border border-primary/25 bg-primary/8 p-3.5">
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-lg bg-primary/15">
                <Megaphone className="size-3.5 text-primary" />
              </span>
              <p className="text-[11px] font-semibold text-primary">
                Aviso do bairro
              </p>
            </div>
            <p className="mt-2 text-xs leading-relaxed">
              Feira de sábado confirmada na praça central, das 9h às 14h 🍉
            </p>
          </div>

          {/* post */}
          <div className="rounded-2xl border bg-card p-3.5 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-full bg-chart-3 text-[10px] font-bold text-primary-foreground">
                RM
              </span>
              <div>
                <p className="text-[11px] font-semibold">Rafa Martins</p>
                <p className="text-[10px] text-muted-foreground">a 400 m de você</p>
              </div>
            </div>
            <p className="mt-2 text-xs leading-relaxed">
              Alguém indica eletricista de confiança aqui na região?
            </p>
            <div className="mt-2.5 flex items-center gap-4 text-[10px] text-muted-foreground">
              <span className="flex items-center gap-1">
                <MessageCircle className="size-3" /> 12 respostas
              </span>
              <span className="flex items-center gap-1">
                <Heart className="size-3" /> 8
              </span>
            </div>
          </div>

          {/* evento */}
          <div className="flex items-center gap-3 rounded-2xl border bg-card p-3.5 shadow-sm">
            <div className="flex size-11 shrink-0 flex-col items-center justify-center rounded-xl bg-secondary font-heading">
              <span className="text-[9px] font-semibold uppercase text-secondary-foreground">
                sáb
              </span>
              <span className="text-sm font-bold text-secondary-foreground">16</span>
            </div>
            <div>
              <p className="text-xs font-semibold">Cinema na praça</p>
              <p className="text-[10px] text-muted-foreground">
                19h · Praça das Acácias · 43 confirmados
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* cards flutuantes */}
      <div className="absolute -left-44 top-32 hidden animate-[float_6s_ease-in-out_infinite] rounded-2xl border bg-card/95 p-3.5 shadow-xl backdrop-blur lg:block">
        <div className="flex items-center gap-2.5">
          <AvatarStack initials={["JP", "Lu", "Th"]} />
          <div>
            <p className="text-xs font-bold">+18 vizinhos</p>
            <p className="text-[10px] text-muted-foreground">entraram hoje</p>
          </div>
        </div>
      </div>

      <div className="absolute -right-44 bottom-20 hidden animate-[float-delayed_7s_ease-in-out_infinite] rounded-2xl border bg-card/95 p-3.5 shadow-xl backdrop-blur lg:block">
        <div className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary/12">
            <Store className="size-4 text-primary" />
          </span>
          <div>
            <p className="text-xs font-bold">Comércio local</p>
            <p className="text-[10px] text-muted-foreground">
              27 lojas na sua região
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------- page ---------------------------------- */

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col overflow-x-clip">
      {/* ------------------------------ header ----------------------------- */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#recursos" className="transition-colors hover:text-primary">
              Recursos
            </a>
            <a href="#como-funciona" className="transition-colors hover:text-primary">
              Como funciona
            </a>
          </nav>
          <Button render={<a href="#lista" />} nativeButton={false}>
            Entrar na lista
            <ArrowRight />
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* ------------------------------ hero ------------------------------ */}
        <section className="relative">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-40 left-1/3 h-[36rem] w-[56rem] -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />
            <div className="absolute top-32 -right-32 size-96 rounded-full bg-chart-2/15 blur-3xl" />
          </div>

          <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-4 pt-16 pb-20 sm:px-6 md:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
            <div className="flex flex-col items-start gap-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Sparkles className="size-4" />
                Lançamento em breve — entre antes de todo mundo
              </span>

              <h1 className="text-balance text-[2.6rem] font-bold leading-[1.05] tracking-tight sm:text-6xl xl:text-[4.2rem]">
                Seu bairro está acontecendo{" "}
                <span className="relative whitespace-nowrap">
                  <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                    sem você
                  </span>
                  <svg
                    aria-hidden
                    viewBox="0 0 200 12"
                    className="absolute -bottom-1 left-0 w-full text-primary/50"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 9 Q 50 2 100 7 T 198 5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                .
              </h1>

              <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Feiras, avisos, eventos, vizinhos, comércio local. O Viicus
                reúne tudo o que acontece na sua região em um único app — para
                você nunca mais ficar de fora.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Button
                  size="lg"
                  className="h-13 px-7 text-base shadow-lg shadow-primary/30"
                  render={<a href="#lista" />}
                  nativeButton={false}
                >
                  Quero entrar primeiro
                  <ArrowRight />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-13 px-7 text-base"
                  render={<a href="#recursos" />}
                  nativeButton={false}
                >
                  Ver o que ele faz
                </Button>
              </div>

              <p className="mt-2 text-sm text-muted-foreground">
                Grátis, sem anúncios e sem venda de dados.{" "}
                <Link
                  href="/privacidade"
                  className="underline underline-offset-4 transition-colors hover:text-primary"
                >
                  Como tratamos suas informações
                </Link>
                .
              </p>
            </div>

            <PhoneMockup />
          </div>
        </section>

        {/* ----------------------------- ticker ----------------------------- */}
        <section
          aria-label="O que você encontra no Viicus"
          className="border-y border-border/60 bg-muted/50 py-4"
        >
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-[marquee_32s_linear_infinite] gap-3 pr-3">
              {[...tickerItems, ...tickerItems].map((item, i) => (
                <span
                  key={`${item}-${i}`}
                  className="flex items-center gap-2 whitespace-nowrap rounded-full border border-border/60 bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground"
                >
                  <Leaf className="size-3.5 text-primary" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* --------------------------- problema ----------------------------- */}
        <section className="bg-foreground text-background">
          <div className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
            <div className="mb-14 max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                A vida real está a 500 metros
              </p>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-5xl">
                Quanta coisa já passou batido por você este mês?
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {pains.map((pain) => (
                <div
                  key={pain.title}
                  className="rounded-2xl border border-background/15 bg-background/5 p-7 backdrop-blur transition-colors hover:bg-background/10"
                >
                  <span className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-primary/20 text-primary">
                    <pain.icon className="size-6" />
                  </span>
                  <h3 className="mb-2.5 text-lg font-bold">{pain.title}</h3>
                  <p className="leading-relaxed text-background/70">
                    {pain.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-12 max-w-2xl text-lg text-background/80">
              Não é culpa sua. A informação do seu bairro está espalhada em mil
              grupos, murais e conversas.{" "}
              <strong className="text-primary">
                O Viicus junta tudo em um lugar só.
              </strong>
            </p>
          </div>
        </section>

        {/* ---------------------------- recursos ----------------------------- */}
        <section id="recursos" className="scroll-mt-16">
          <div className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
            <div className="mb-14 max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                Recursos
              </p>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-5xl">
                Um app. O bairro inteiro.
              </h2>
            </div>

            {/* bento grid */}
            <div className="grid gap-5 md:grid-cols-3">
              {/* card grande: feed */}
              <div className="flex flex-col justify-between overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-secondary/60 to-card p-8 shadow-sm md:col-span-2">
                <div className="max-w-md">
                  <span className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/30">
                    <MapPin className="size-6" />
                  </span>
                  <h3 className="mb-2.5 text-2xl font-bold">
                    Feed da sua região
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Tudo o que acontece num raio de poucos quilômetros, em
                    ordem do que importa: avisos urgentes primeiro, novidades
                    depois. Zero conteúdo de gente do outro lado da cidade.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {["Avisos", "Eventos", "Vizinhos", "Comércio", "Grupos"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/10 px-3.5 py-1.5 text-sm font-medium text-primary"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* card: avisos */}
              <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-sm">
                <span className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Bell className="size-6" />
                </span>
                <h3 className="mb-2.5 text-xl font-bold">
                  Avisos que chegam antes
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  Obra na rua, falta de água, campanha no posto de saúde. Você
                  fica sabendo com antecedência, não com o problema na porta.
                </p>
              </div>

              {/* card: conversas */}
              <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-sm">
                <span className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MessageSquare className="size-6" />
                </span>
                <h3 className="mb-2.5 text-xl font-bold">
                  Conversas de verdade
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  Pergunte, indique, combine. Como o grupo do bairro deveria
                  ser: organizado por assunto e sem corrente de bom dia.
                </p>
              </div>

              {/* card grande: comércio */}
              <div className="flex flex-col justify-between overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-card to-secondary/60 p-8 shadow-sm md:col-span-2">
                <div className="max-w-md">
                  <span className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/30">
                    <ShoppingBag className="size-6" />
                  </span>
                  <h3 className="mb-2.5 text-2xl font-bold">
                    O comércio da esquina, na palma da mão
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Descubra a padaria nova, o mercado com promoção e a
                    costureira que todo mundo indica. Quem vende perto de você
                    ganha um canal direto com o bairro.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
                  <Search className="size-4 text-primary" />
                  <span className="italic">
                    &ldquo;pizzaria aberta agora perto de mim&rdquo;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------- como funciona -------------------------- */}
        <section
          id="como-funciona"
          className="scroll-mt-16 border-t border-border/60 bg-muted/50"
        >
          <div className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
            <div className="mb-14 max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                Como funciona
              </p>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-5xl">
                Três passos e o bairro é seu
              </h2>
            </div>
            <div className="relative grid gap-10 md:grid-cols-3 md:gap-8">
              <div
                aria-hidden
                className="absolute top-7 right-[16%] left-[16%] hidden h-px bg-gradient-to-r from-primary/60 via-primary/30 to-primary/60 md:block"
              />
              {steps.map((step) => (
                <div key={step.number} className="relative">
                  <span className="relative z-10 mb-5 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-chart-2 font-heading text-xl font-bold text-primary-foreground shadow-lg shadow-primary/30">
                    {step.number}
                  </span>
                  <h3 className="mb-2.5 text-xl font-bold">{step.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------ lista ------------------------------ */}
        <section id="lista" className="scroll-mt-16 px-4 pb-24 sm:px-6">
          <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-primary to-chart-2 px-6 py-20 text-primary-foreground shadow-2xl shadow-primary/25 sm:px-12 md:py-24">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -top-28 -right-20 size-96 rounded-full bg-white/15 blur-3xl" />
              <div className="absolute -bottom-28 -left-20 size-96 rounded-full bg-black/15 blur-3xl" />
            </div>
            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
              <Leaf className="size-10" />
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-5xl">
                Seja o primeiro do seu bairro no Viicus
              </h2>
              <p className="max-w-lg text-balance text-lg text-primary-foreground/85">
                Vamos liberar o acesso por região, começando pelas listas mais
                movimentadas. Garanta seu lugar — leva 10 segundos.
              </p>
              <div className="mt-2 flex w-full max-w-md flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  aria-label="Seu e-mail"
                  className="h-13 flex-1 rounded-xl border-white/30 bg-white/95 text-base text-foreground placeholder:text-muted-foreground"
                />
                <Button
                  size="lg"
                  className="h-13 rounded-xl bg-foreground px-7 text-base text-background shadow-md hover:bg-foreground/90"
                >
                  Entrar na lista
                  <ArrowRight />
                </Button>
              </div>
              <p className="text-sm text-primary-foreground/70">
                Sem spam. Só avisamos quando o Viicus chegar na sua região.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ------------------------------ footer ------------------------------ */}
      <footer className="border-t border-border/60 bg-muted/40">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            <div className="max-w-xs">
              <Logo />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Sua região. Sua comunidade. O jeito mais tranquilo de viver o
                seu bairro.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3">
              <div className="grid content-start gap-3">
                <p className="font-heading font-bold">Produto</p>
                <a href="#recursos" className="text-muted-foreground transition-colors hover:text-primary">
                  Recursos
                </a>
                <a href="#como-funciona" className="text-muted-foreground transition-colors hover:text-primary">
                  Como funciona
                </a>
                <a href="#lista" className="text-muted-foreground transition-colors hover:text-primary">
                  Lista de espera
                </a>
              </div>
              <div className="grid content-start gap-3">
                <p className="font-heading font-bold">Comunidade</p>
                <a
                  href="mailto:contato@viicus.com.br"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Fale com a gente
                </a>
              </div>
              <div className="grid content-start gap-3">
                <p className="font-heading font-bold">Legal</p>
                <Link
                  href="/privacidade"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Privacidade
                </Link>
                <Link
                  href="/termos"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Termos de uso
                </Link>
                <Link
                  href="/excluir-conta"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Excluir conta
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-border/60 pt-6 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Viicus. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
