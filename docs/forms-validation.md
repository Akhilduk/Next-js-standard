# Forms and Validation

## Overview
This boilerplate includes client-side and server-side validation patterns for secure forms.

## Password Policy Rules
- Minimum length: 12
- Uppercase required
- Lowercase required
- Number required
- Symbol required

## Password Policy Component
- Component: `PasswordPolicyChecklist`
- Location: `src/components/auth/password-policy-checklist.tsx`
- Behavior: live checklist with `[OK]` ticks while user types.

## Where It Is Used
- `/sign-up`: full validation + password checklist + confirm-password match check
- `/reset-password`: password checklist + confirm-password match check
- `/components`: validation showcase card with live password checks

## Validation Patterns Used
- `react-hook-form` for field registration and error states
- Inline field errors under each input
- `validatePassword` utility shared with backend logic for consistency
- Shared validator helpers in `src/lib/validation/rules.ts`
- Shared error presenter component `src/components/forms/field-error.tsx`

## Reusable Toast Notifications
- Global toast provider: `src/components/ui/toast-provider.tsx`
- Hook: `useToast()`
- Toasts are available on all pages through root providers.
- Used in sign-in, sign-up, forgot-password, reset-password and components demo page.

## Change Once, Apply Everywhere
- Update validator logic in `src/lib/validation/rules.ts` and all form pages reflect the new rules.
- Update password rules in `src/lib/security/password-policy.ts` and checklist + validation update together.

## Demo Credentials
- Email: `demo@enterprise.local`
- Password: `Demo@12345`
