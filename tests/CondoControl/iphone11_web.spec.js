import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 11'],
});

test('test', async ({ page }) => {
  await page.goto('https://www.condocontrol.com/');
  await page.getByRole('button', { name: 'Toggle Menu' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.locator('#Username').click();
  await page.locator('#Username').fill('dmitry@gmail.com');
  await page.locator('#Username').press('Tab');
  await page.locator('#Password').fill('1234');
  await page.locator('#SaveEmail').check();
  await page.getByRole('button', { name: 'Login' }).click();
//   await page.getByText('Invalid login, please try').click();
  
  //validation
  await expect(page.getByText('Invalid login, please try again. Check if your Caps Lock is turned on.')).toBeVisible()
});