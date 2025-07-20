# 🧱 Projeto Base com Next.js 15, ShadCN, Prisma e Autenticação

Este repositório é a base sólida para construção de aplicações modernas usando o que há de mais atual no ecossistema React. Ele já vem configurado com autenticação, ORM, arquitetura organizada e ferramentas de qualidade de código.

---

## 🚀 Tecnologias Utilizadas

- **Next.js 15** (com App Router)
- **TypeScript**
- **Turbopack**
- **Tailwind CSS v4**
- **ShadCN UI**
- **NextAuth (beta)**
- **Prisma ORM** + `@auth/prisma-adapter`
- **Husky** + **Lint-Staged**
- **git-commit-msg-linter**

---

## 📁 Estrutura do Projeto

```
src/
├── app/                      # Rotas com App Router
├── services/
│   ├── auth/                 # Serviço de autenticação NextAuth
│   ├── database/             # Configuração do Prisma Client
│   └── dal/                  # Camada de acesso a dados (DAL)
├── types/                    # Tipagens auxiliares (ex: env.ts)
```

---

## ⚙️ Configurações e Instalações

### 🧵 Estilização com Tailwind CSS v4 + ShadCN

```bash
npx shadcn@latest init
```

---

### 🔐 Autenticação com NextAuth

```bash
npm install next-auth@beta
```

- Criar `services/auth/index.ts` com a configuração do NextAuth.
- Criar rota: `app/api/auth/[...nextauth]/route.ts` com os handlers.

---

### 🗄️ Banco de Dados com Prisma

```bash
npm install @prisma/client @auth/prisma-adapter
npm install prisma --save-dev
npx prisma init
```

- Configurar `DATABASE_URL` no `.env`
- Criar models no `schema.prisma`
- Criar client em `services/database/prisma.ts`

```ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const db = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
```

---

### ✅ Variáveis de Ambiente Tipadas

Criar o arquivo:

```ts
// src/types/env.ts
export const AUTH_SECRET = process.env.AUTH_SECRET!;
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;
export const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID!;
export const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET!;
```

---

## 🧠 Padrão de Arquitetura: DAL

Utilizamos o padrão **Data Access Layer (DAL)** para separar a lógica de negócios do acesso ao banco de dados.

### Benefícios:

- Maior organização
- Código mais testável
- Isolamento das responsabilidades

---

## 🧹 Boas Práticas de Código

### Husky + Lint-Staged

```bash
npx husky init
```

Crie o arquivo `.lintstagedrc.json`:

```json
{
  "*.{ts,tsx}": ["eslint --fix", "prettier --write"]
}
```

---

### Commits convencionais com git-commit-msg-linter

```bash
npm install git-commit-msg-linter
```

Crie o hook `.husky/commit-msg`:

```bash
#!/usr/bin/env sh
. "$(dirname "$0")/h"
.git/hooks/commit-msg $1
```

### Plugin para formatação de classes do Tailwindcss + Prettier

```bash
npm install -D prettier prettier-plugin-tailwindcss
```

- Criar arquivo na pasta raiz do projeto chamado .prettierrc.json

```json
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

---

## ✅ Checklist

- [x] Next.js 15 com App Router
- [x] TypeScript e ESLint configurados
- [x] Tailwind CSS v4 + ShadCN UI + Plugin do Prettier para formatação das classes do tailwindcss
- [x] Autenticação com NextAuth
- [x] Prisma + Adapter configurados
- [x] DAL implementado
- [x] Husky + Lint-Staged funcionando
- [x] Commits padronizados com linter

---

## 🧑‍💻 Autor

Desenvolvido por [**Guilherme Willem**](https://github.com/guilhermewillem) – Software Engineer & Tech Visionary 🚀

---

## 📄 Licença

Este projeto é open-source e pode ser usado, adaptado e expandido livremente.
