# Security Guidelines

## Baseline Controls
- Strict input validation with `zod` on all mutating routes.
- Rate-limit sensitive endpoints (`signin`, password reset, OTP).
- Enforce auth and permission checks at API boundary.

## Transport and Browser Security
- Use HTTPS in all environments except local development.
- Security headers from middleware:
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - CSP baseline policy

## Credential Hygiene
- Never log plaintext passwords, OTPs, reset tokens.
- Never place secrets in query params.
- Keep auth and reset responses non-cacheable (`no-store`).

## Data and Access Security
- Store password hashes only.
- Store session token hashes only.
- Apply least privilege with role-permission mapping.
- Keep audit logs immutable and queryable.

## Operational Security
- Run dependency audit in CI.
- Rotate secrets regularly.
- Add SAST + secret scanning.
- Create incident response runbook with escalation matrix.
