# Data Fetching and Caching

## Fetching Strategy
- Use server components for initial page data whenever possible.
- Route handlers expose JSON for client mutations and integrations.
- Keep data access centralized in module services/repositories.

## Caching Guidance
- Auth and sensitive APIs: `Cache-Control: no-store`.
- Reference/master data: cacheable with revalidation where safe.
- Expensive analytics queries: precompute or cache at service layer.

## Revalidation Patterns
- Use route segment revalidation for dashboards with periodic refresh.
- Invalidate cached views after write operations.
- Consider tag-based revalidation for high-write domains.

## Failure Handling
- Add safe fallback sample data for demos when DB is unavailable.
- Render clear source labels (`database` vs `sample`) for transparency.
