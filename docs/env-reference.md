# Environment Reference

## Required
- `DATABASE_URL`: PostgreSQL connection string.

## Recommended
- `NODE_ENV`: `development`, `test`, or `production`.
- `NEXT_PUBLIC_APP_NAME`: UI app label.
- `NEXT_PUBLIC_SUPPORT_EMAIL`: support contact in UI.

## Security Notes
- Never commit real `.env` values.
- Rotate secrets on team changes.
- Keep production credentials in a secret manager.
