# Enterprise Next.js Boilerplate

Production-grade Next.js App Router starter with enterprise auth/session, RBAC, modular domains, Prisma, security defaults, testing, observability, and reusable UI primitives.

## Setup
1. `cp .env.example .env`
2. `npm install`
3. `npx prisma migrate dev --name init`
4. `npm run db:seed`
5. `npm run dev`

## Scripts
- `npm run dev`, `build`, `start`
- `npm run lint`, `typecheck`
- `npm run test`, `test:e2e`
- `npm run db:migrate`, `db:seed`

## Architecture Overview
- `app/` route groups `(public)`, `(auth)`, `(app)`.
- `app/api/*` route handlers for auth/admin/masters/payments/transactions/requests.
- `src/modules/*` for domain separation.
- `src/components/ui/*` reusable org-owned components.
- `src/lib/*` cross-cutting concerns (auth, db, security, logger).

## How-to Guides
- Add module/feature: create `src/modules/<domain>/{services,repositories,schemas,types,components}` and matching `app/(app)` routes + `app/api` handlers.
- RBAC: permissions in `src/lib/rbac/permissions.ts`; enforce via `requirePermission` in server code.
- Add role/permission: insert in `roles`, `permissions`, `role_permissions` via seed/admin API.
- Add layout: create route-group `layout.tsx` and compose shared shell components.
- Add reusable component: place in `src/components/ui`, then consume in module components only.
- New master page quickly: duplicate `masters/departments` page + API dynamic `[entity]` handler and schema/repository.

## Docs
See `/docs` for extended guides:
- architecture.md
- routing-layouts.md
- auth-session.md
- rbac.md
- master-crud.md
- ui-guide.md
- data-fetching-caching.md
- security-guidelines.md
- testing-strategy.md
- deployment.md
- env-reference.md

## UI Pattern Notes
Screens recommended for design-system documentation:
- Landing + CTA pattern
- Auth form pattern
- Admin table pattern
- Master CRUD list/details pattern
- Dashboard KPI + charts
