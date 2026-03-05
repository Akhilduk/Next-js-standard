export const PASSWORD_POLICY = {
  minLength: 12,
  requireUpper: true,
  requireLower: true,
  requireNumber: true,
  requireSymbol: true,
  maxFailedAttempts: 5,
  lockoutMinutes: 15
};

export type PasswordCheck = {
  key: 'minLength' | 'upper' | 'lower' | 'number' | 'symbol';
  label: string;
  valid: boolean;
};

export const getPasswordChecks = (password: string): PasswordCheck[] => [
  { key: 'minLength', label: `At least ${PASSWORD_POLICY.minLength} characters`, valid: password.length >= PASSWORD_POLICY.minLength },
  { key: 'upper', label: 'Contains uppercase letter', valid: /[A-Z]/.test(password) },
  { key: 'lower', label: 'Contains lowercase letter', valid: /[a-z]/.test(password) },
  { key: 'number', label: 'Contains number', valid: /[0-9]/.test(password) },
  { key: 'symbol', label: 'Contains symbol', valid: /[^A-Za-z0-9]/.test(password) }
];

export const validatePassword = (password: string) => {
  const checks = getPasswordChecks(password);
  const errors = checks.filter((c) => !c.valid).map((c) => c.label);
  return { valid: errors.length === 0, errors };
};
