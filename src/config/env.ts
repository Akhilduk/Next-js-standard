import { z } from 'zod';

const schema = z.object({
  DATABASE_URL: z.string().url(),
  APP_URL: z.string().url(),
  SESSION_SECRET: z.string().min(16),
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development')
});

export const env = schema.parse({
  DATABASE_URL: process.env.DATABASE_URL,
  APP_URL: process.env.APP_URL,
  SESSION_SECRET: process.env.SESSION_SECRET,
  NODE_ENV: process.env.NODE_ENV
});
