# RBAC

## Model
- User -> UserRole -> Role -> RolePermission -> Permission

## Permission Design
- Use resource-action format: `resource:action`.
- Keep permissions atomic (`users:read`, `users:update`).
- Compose roles from permissions, not hardcoded logic.

## Enforcement Points
- API route authorization (mandatory).
- Optional UI gating for navigation/actions.
- Critical workflows must re-check server-side permissions.

## Default Roles
- `ADMIN`: full administrative access
- `OPS_MANAGER`: request/payment operations
- `ANALYST`: read-only reporting

## Auditability
Record who granted/removed roles and when.
