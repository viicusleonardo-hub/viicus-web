# Viicus

**Sua região. Sua comunidade.**

Aplicação web do Viicus: landing page pública e portal do sistema.

## Stack

- [Next.js 16](https://nextjs.org) (App Router + Turbopack)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) (Base UI)
- [Lucide](https://lucide.dev) (ícones)
- Fontes: [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) (títulos) + [Figtree](https://fonts.google.com/specimen/Figtree) (texto)

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Rotas

| Rota | Descrição |
| --- | --- |
| `/` | Landing page pública |

O portal do sistema (login, dashboard etc.) será adicionado em uma fase futura.

## Estrutura

```
src/
  app/               # rotas (App Router)
    page.tsx         # landing
    globals.css      # tema (paleta verde em oklch)
  components/
    ui/              # componentes shadcn/ui
  lib/               # utilitários
```

## Scripts

- `npm run dev` — servidor de desenvolvimento
- `npm run build` — build de produção
- `npm run start` — serve o build
- `npm run lint` — ESLint
