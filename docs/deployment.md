# Deployment

## Environments
- `local`: developer machine
- `staging`: pre-production verification
- `production`: live system

## Build Steps
1. `npm ci`
2. `npm run db:generate`
3. `npm run build`
4. `npm test`
5. Deploy artifact/container

## Runtime Requirements
- Valid `DATABASE_URL`
- Secret keys for auth/token workflows
- Node.js runtime compatible with Next.js 15

## Deployment Checklist
- Run migrations before app rollout.
- Verify health endpoints and sign-in flow.
- Confirm static assets and `/docs` route rendering.
- Monitor logs with correlation IDs after release.
