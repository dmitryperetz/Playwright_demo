import { test, expect } from '@playwright/test';

test('Failed Login and validate error', async ({ page }) => {
    // Open Home URL
  await page.goto('https://www.condocontrol.com/');

  // Click on Login button
  await page.getByRole('link', { name: 'Login' }).click();

  // Click on Username field
  await page.locator('#Username').click();

  //fill username
  await page.locator('#Username').fill('dmitry');

  // Use tab button to switch password field
  await page.locator('#Username').press('Tab');

  //fill password 
  await page.locator('#Password').fill('qwerty');

  //tap on login button
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid login, please try again. Check if your Caps Lock is turned on.')).toBeVisible()
  
});