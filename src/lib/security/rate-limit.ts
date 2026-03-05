const bucket = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(key: string, limit = 10, windowMs = 60000) {
  const now = Date.now();
  const item = bucket.get(key);
  if (!item || item.resetAt < now) {
    bucket.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: limit - 1 };
  }
  item.count += 1;
  bucket.set(key, item);
  return { allowed: item.count <= limit, remaining: Math.max(limit - item.count, 0) };
}
