import { test, expect } from '@playwright/test';

test('homepage loads and shows title', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  // ✅ check title
  await expect(page).toHaveTitle(/spanish-word-flip-flash/i);

  const counter = page.getByTestId('counter');
  const nextBtn = page.getByTestId('next-btn');

  await expect(counter).toBeVisible();
  await expect(nextBtn).toBeVisible();
});