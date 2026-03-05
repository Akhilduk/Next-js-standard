# Testing Strategy

## Test Types
- Unit tests: pure logic (`password-policy`, helpers).
- Integration tests: endpoint/security utilities (`rate-limit`, auth helpers).
- E2E tests: user flow with Playwright.

## Commands
- `npm test` for unit + integration (Vitest).
- `npm run test:e2e` for browser flows.
- `npm run build` as final type/build gate.

## CI Recommendations
- Run lint + tests + build on every pull request.
- Add coverage thresholds for critical modules.
- Upload test artifacts and Playwright traces.

## Priority Scenarios
- Sign-in success/failure and lockout path.
- Permission denied on protected actions.
- Session creation/expiry behavior.
- Docs route and key navigation smoke tests.
