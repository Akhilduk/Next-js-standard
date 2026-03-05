import { validatePassword } from '@/lib/security/password-policy';

export const validators = {
  required: (label: string) => ({ value: true, message: `${label} is required` }),
  email: () => ({
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Enter a valid email address'
  }),
  minLength: (min: number, label: string) => ({
    value: min,
    message: `${label} must be at least ${min} characters`
  }),
  passwordPolicy: (value: string) => validatePassword(value).valid || 'Password does not satisfy policy',
  confirmPassword: (value: string, password: string) => value === password || 'Passwords do not match'
};
