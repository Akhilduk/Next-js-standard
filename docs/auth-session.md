# Auth Session

## Authentication Model
- Email/password sign-in via `POST /api/auth/signin`.
- Password verification with `bcryptjs`.
- Rate-limiting applied to sign-in endpoint.

## Session Strategy
- Session cookie name: `session`.
- Cookie stores random token (not DB hash).
- DB stores SHA-256 token hash (`tokenHash`) to reduce token exposure risk.
- Session expiration: 8 hours.

## Cookie Security
- `httpOnly: true`
- `sameSite: lax`
- `secure: true` in production
- `maxAge` set for predictable expiry behavior

## Sign-in Security Rules
- Credentials must be in request body, never URL query.
- Middleware strips sensitive query keys (`email`, `password`, `token`, `otp`, etc.).
- Auth responses set `Cache-Control: no-store`.

## Future Enhancements
- Add refresh-token rotation.
- Add device/session inventory page.
- Add forced logout on privilege changes.
- Add account lockout + recovery playbook.
