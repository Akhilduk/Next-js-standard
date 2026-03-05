export const PASSWORD_POLICY = {
  minLength: 12,
  requireUpper: true,
  requireLower: true,
  requireNumber: true,
  requireSymbol: true,
  maxFailedAttempts: 5,
  lockoutMinutes: 15
};

export const validatePassword = (password: string) => {
  const errors: string[] = [];
  if (password.length < PASSWORD_POLICY.minLength) errors.push('Password too short');
  if (PASSWORD_POLICY.requireUpper && !/[A-Z]/.test(password)) errors.push('Need uppercase');
  if (PASSWORD_POLICY.requireLower && !/[a-z]/.test(password)) errors.push('Need lowercase');
  if (PASSWORD_POLICY.requireNumber && !/[0-9]/.test(password)) errors.push('Need number');
  if (PASSWORD_POLICY.requireSymbol && !/[^A-Za-z0-9]/.test(password)) errors.push('Need symbol');
  return { valid: errors.length === 0, errors };
};
