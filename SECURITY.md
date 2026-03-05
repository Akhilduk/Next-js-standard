# Security Defaults (OWASP Aligned)

- Password policy enforced (`src/lib/security/password-policy.ts`): min length 12, complexity checks.
- Session cookie: `httpOnly`, `secure`, `sameSite=lax`.
- Route-level guard in middleware + server-side `requireAuth/requirePermission`.
- Rate limiting for auth endpoints (`checkRateLimit`).
- Input validation with Zod at environment and API boundaries.
- Security headers in middleware: CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy.
- Safe auth errors: no account enumeration.
- Audit logging schema available (`AuditLog`) for sensitive/admin actions.
- CSRF strategy: SameSite cookies + custom header recommendation for state-changing requests in production.
- Secret handling: `.env` validated by `src/config/env.ts`.
- External integrations (Redis, SSO, payment provider) are pluggable via module/service boundaries.
