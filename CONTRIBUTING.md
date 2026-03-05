# Contributing Standards

- TypeScript strict mode; avoid `any`.
- Use module-first structure under `src/modules/*`.
- Server authorization checks are mandatory for every sensitive endpoint.
- UI code must use reusable org components (`src/components/ui`).
- Add tests for new services and route handlers.
- Run `npm run lint && npm run typecheck && npm run test` before committing.
- Keep docs in `/docs` updated with architecture/security changes.
