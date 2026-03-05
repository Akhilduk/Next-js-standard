# Components Catalog

## Purpose
`/components` is a live catalog for all reusable UI and validation building blocks.

## Modular Design
- Catalog data source: `src/modules/showcase/config.ts`
- Reusable primitives:
  - `src/components/ui/button.tsx`
  - `src/components/ui/input.tsx`
  - `src/components/ui/card.tsx`
  - `src/components/ui/table.tsx`
  - `src/components/ui/modal.tsx`
  - `src/components/ui/alert.tsx`
  - `src/components/ui/badge.tsx`
  - `src/components/ui/toast-provider.tsx`
- Reusable form blocks:
  - `src/components/forms/form-field.tsx`
  - `src/components/forms/field-error.tsx`
  - `src/components/auth/password-policy-checklist.tsx`

## One-Change Pattern
- Change shared validation rules in `src/lib/validation/rules.ts` to update all auth forms.
- Change password policy in `src/lib/security/password-policy.ts` to update backend and UI checklist together.
- Change showcase cards/rows in `src/modules/showcase/config.ts` to update the display page.

## Functional Samples Included
- Buttons with states and toast trigger.
- Inputs with reusable field wrappers.
- Select, radio group, and multiselect.
- Toggle switch and loader variants.
- Live password checklist ticks.
- Status badges and alerts.
- Modal open/close behavior.
- File upload and file preview.
- Breadcrumb and layout cards.
- Tabs and timeline.
- Reusable icon set.
- Table and chart data visualization.
