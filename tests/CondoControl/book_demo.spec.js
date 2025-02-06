import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 1080,
    width: 1920
  }
});

test('Book Demo', async ({ page }) => {
  await page.goto('https://www.condocontrol.com/');
  await page.getByRole('link', { name: 'Book a demo' }).click();
  await page.locator('#myIframe').contentFrame().getByRole('textbox', { name: 'First Name:' }).click();
  await page.locator('#myIframe').contentFrame().getByRole('textbox', { name: 'First Name:' }).fill('dmitry');
  await page.locator('#myIframe').contentFrame().getByRole('textbox', { name: 'First Name:' }).press('Tab');
  await page.locator('#myIframe').contentFrame().getByRole('textbox', { name: 'Last Name:' }).fill('peretz');
  await page.locator('#myIframe').contentFrame().getByRole('textbox', { name: 'Last Name:' }).press('Tab');
  await page.locator('#myIframe').contentFrame().getByRole('textbox', { name: 'Company or Community:' }).fill('home');
  await page.locator('#myIframe').contentFrame().getByRole('textbox', { name: 'Company or Community:' }).press('CapsLock');
  await page.locator('#myIframe').contentFrame().getByRole('textbox', { name: 'Company or Community:' }).press('CapsLock');
  await page.locator('#myIframe').contentFrame().getByRole('textbox', { name: 'Company or Community:' }).press('Tab');
  await page.locator('#myIframe').contentFrame().getByRole('textbox', { name: 'Email:' }).fill('dmitry.p@gmail.com');
  await page.locator('#myIframe').contentFrame().getByRole('textbox', { name: 'Email:' }).press('Tab');
  await page.locator('#myIframe').contentFrame().getByRole('textbox', { name: 'Phone:' }).fill('66666666666');
  await page.locator('#myIframe').contentFrame().getByRole('textbox', { name: 'Phone:' }).press('Tab');
  await page.locator('#myIframe').contentFrame().getByRole('textbox', { name: 'Number of units' }).fill('120');
  await page.locator('#myIframe').contentFrame().getByRole('textbox', { name: 'Number of units' }).press('Tab');
  await page.locator('#myIframe').contentFrame().getByRole('textbox', { name: 'Additional questions or' }).press('Tab');
  await page.locator('#myIframe').contentFrame().getByRole('button', { name: 'Request Demo' }).click();

  //validation
  await expect(page.getByText('We’ve received your demo request!')).toBeVisible()
});