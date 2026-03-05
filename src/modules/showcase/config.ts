export const showcaseStats = [
  { label: 'Reusable UI Components', value: '12+' },
  { label: 'Validated Auth Forms', value: '4' },
  { label: 'Global Toast + Modal', value: '2 systems' },
  { label: 'Docs Pages', value: '12+' },
  { label: 'Interactive Samples', value: 'All major primitives' }
] as const;

export const componentTable = [
  ['Button', 'Primary action with gradients and disabled states'],
  ['Input', 'Reusable text/password input with dark mode support'],
  ['Card', 'Surface container for grouped content'],
  ['Badge', 'Status indicator with semantic tones'],
  ['Alert', 'Feedback block for warning/success/info/error'],
  ['Modal', 'Overlay dialog with close behaviors'],
  ['Toast', 'Global notification system with hook API'],
  ['Table', 'Reusable table for operational data']
] as const;

export const defaultProfile = {
  name: 'Akhil',
  email: 'akhil@example.com',
  password: 'Demo@12345Secure'
} as const;

export const statusBadges = [
  { label: 'Active', tone: 'success' },
  { label: 'Pending', tone: 'warning' },
  { label: 'Failed', tone: 'danger' },
  { label: 'Draft', tone: 'info' }
] as const;

export const selectOptions = [
  { value: 'developer', label: 'Developer' },
  { value: 'manager', label: 'Manager' },
  { value: 'designer', label: 'Designer' },
  { value: 'qa', label: 'QA Engineer' }
] as const;

export const radioOptions = [
  { value: 'monthly', label: 'Monthly plan', helper: '$49/month billed monthly' },
  { value: 'yearly', label: 'Yearly plan', helper: '$39/month billed yearly' },
  { value: 'enterprise', label: 'Enterprise plan', helper: 'Custom contract and SLA' }
] as const;

export const multiSelectOptions = [
  { value: 'rbac', label: 'RBAC' },
  { value: 'audit', label: 'Audit Logs' },
  { value: 'payments', label: 'Payments' },
  { value: 'transactions', label: 'Transactions' },
  { value: 'docs', label: 'Docs Center' }
] as const;

export const timelineItems = [
  { id: 't1', title: 'Request Created', description: 'Employee submitted onboarding request.', timestamp: '2026-03-05 09:18', completed: true },
  { id: 't2', title: 'Manager Review', description: 'Line manager validated request details.', timestamp: '2026-03-05 10:22', completed: true },
  { id: 't3', title: 'Security Validation', description: 'Pending identity and access checks.', timestamp: '2026-03-05 11:04', completed: false },
  { id: 't4', title: 'Provisioning', description: 'Automated setup tasks queued.', timestamp: 'Waiting', completed: false }
] as const;
