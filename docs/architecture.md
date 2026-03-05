# Architecture

## Purpose
This boilerplate is organized for enterprise delivery with secure defaults, module boundaries, and fast feature onboarding.

## Project Structure
- `app/`: Next.js App Router pages and route handlers.
- `src/components/`: shared UI, layouts, charts, and providers.
- `src/lib/`: auth, DB, security, utilities, observability.
- `src/modules/`: domain-oriented modules (users, requests, payments, transactions, dashboard).
- `prisma/`: schema, migrations, and seed scripts.
- `docs/`: internal engineering documentation rendered at `/docs`.

## Layering Rules
- UI components do not access DB directly.
- Route handlers call `src/lib` and module services.
- Auth checks and permission checks must happen at API/route boundary.
- Shared utilities stay in `src/lib`, module-specific logic stays in `src/modules/*`.

## Data Flow
1. User action from page/form.
2. API route validates payload (`zod`) and authorizes.
3. Service/repository reads/writes Prisma models.
4. Response includes request correlation metadata where possible.

## Traceability
- Middleware adds `x-correlation-id`.
- The same ID is shown in global top-bar for support/debugging.
- Audit records are designed for actor + action + entity mapping.

## Extension Checklist
- Add feature folder in `src/modules/<feature>`.
- Define permissions first.
- Add API route, validation, and tests.
- Add docs update in `/docs` with operation runbook.
