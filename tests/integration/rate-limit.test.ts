import { describe, it, expect } from 'vitest';
import { checkRateLimit } from '@/lib/security/rate-limit';

describe('rate limit', () => {
  it('blocks over limit', () => {
    const key = 'k';
    for (let i = 0; i < 10; i++) checkRateLimit(key, 10, 1000);
    expect(checkRateLimit(key, 10, 1000).allowed).toBe(false);
  });
});
