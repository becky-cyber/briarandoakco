# Briar & Oak Co.

**Briar & Oak Co.** is an event planning studio website built with React, TypeScript, and Express. It features a full landing page, a contact/inquiry form backed by a PostgreSQL database, and is structured as a pnpm monorepo.

## Tech Stack

- **Frontend:** React + Vite, TypeScript, Framer Motion, React Hook Form, Zod
- **Backend:** Express 5, TypeScript
- **Database:** PostgreSQL + Drizzle ORM
- **API:** OpenAPI 3.1 spec with Orval codegen (React Query hooks + Zod schemas)
- **Package Manager:** pnpm workspaces (monorepo)
- **Build:** esbuild (API server), Vite (frontend)

## Project Structure

```
briarandoakco/
├── artifacts/
│   ├── briar-oak/        # React + Vite frontend (main website)
│   ├── api-server/       # Express 5 API server
│   └── mockup-sandbox/   # Design mockups / sandbox
├── lib/
│   ├── api-spec/         # OpenAPI spec + Orval codegen config
│   ├── api-client-react/ # Generated React Query hooks
│   ├── api-zod/          # Generated Zod schemas
│   └── db/               # Drizzle ORM schema + DB connection
├── scripts/              # Utility scripts
├── pnpm-workspace.yaml
├── tsconfig.base.json
└── tsconfig.json
```

## Features

- Full landing page with hero, about, services/packages, meet Becky bio, contact form, and footer
- Contact form that submits to `POST /api/inquiries` and stores data in PostgreSQL
- Brand fonts: Cormorant Garamond (serif) + Jost (sans-serif)
- Animated with Framer Motion
- Form managed by React Hook Form + Zod validation

## Getting Started

This project runs on [Replit](https://replit.com) and uses **pnpm** as the package manager.

### Install dependencies

```bash
pnpm install
```

### Run the development servers

```bash
# Run the API server
pnpm --filter @workspace/api-server run dev

# Run the frontend
pnpm --filter @workspace/briar-oak run dev
```

### Typecheck

```bash
pnpm run typecheck
```

### Build

```bash
pnpm run build
```

### Database

Push schema changes to the database:

```bash
pnpm --filter @workspace/db run push
```

> **Note:** A `DATABASE_URL` environment variable is required and is automatically provided by Replit.

## API

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/inquiries` | Submit an event inquiry |

## License

© 2026 Briar & Oak Co. LLC. All rights reserved.
