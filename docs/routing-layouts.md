# Routing Layouts

## Route Groups
- `(public)`: landing and docs.
- `(auth)`: sign-in, sign-up, password flows.
- `(app)`: authenticated application pages and admin modules.

## Layout Responsibilities
- Root layout: providers and global top bar.
- Public/Auth layouts: focused containers for visitor flows.
- App layout: shell with side navigation and content panel.

## Navigation Standards
- Keep top-level nav predictable and shallow.
- Include breadcrumb and back action in global header.
- Show trace ID and theme switch globally.

## Error and Loading
- Use route-segment `loading.tsx` for async boundaries.
- Use segment `error.tsx` for user-friendly recovery.
- Keep global `not-found.tsx` with next-step guidance.

## Adding New Routes
1. Place route in correct group.
2. Add nav item in `AppShell` if needed.
3. Add docs page section and tests.
4. Add permission mapping if route is protected.
