# UI Guide

## Design Intent
This boilerplate uses a practical enterprise visual system: clear hierarchy, strong contrast, and modular layout regions.

## Core Patterns
- Top bar: breadcrumbs, back action, trace ID, theme toggle.
- App shell: sidebar navigation + content workspace.
- Cards: KPI and grouped content.
- Tables: operational records and admin data.
- Modal: lightweight approvals/confirmations.
- Password policy checklist with live tick states.

## Theming
- Theme control via header segmented toggle (`light`, `dark`).
- Tokenized colors in CSS variables.
- Tailwind configured with `darkMode: 'class'`.

## UX Rules
- Make states explicit (loading, empty, error, success).
- Prefer dense but readable enterprise spacing.
- Use semantic labels and clear CTA wording.

## Boilerplate Showcase
Visit `/components` to preview:
- Buttons
- Inputs
- Cards
- Modal
- Table
- Validation components
- Badges and alerts
- Toast notifications
- Chart + data display samples

See `components-catalog.md` for the modular architecture and extension pattern.
