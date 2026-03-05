import { describe, expect, it } from 'vitest';
import { validatePassword } from '@/lib/security/password-policy';

describe('password policy', () => {
  it('accepts strong password', () => {
    expect(validatePassword('Abcd#12345678').valid).toBe(true);
  });
});
