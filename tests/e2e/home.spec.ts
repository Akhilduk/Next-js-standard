import { test, expect } from '@playwright/test';

test('home page', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Enterprise Next.js Boilerplate')).toBeVisible();
});
