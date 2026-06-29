// @ts-check
const { test, expect } = require('@playwright/test');

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  const loopRun = 10

  for (let i = 0; i < loopRun; i++) {
    await page.goto('https://test-shop.rushtruckcenters.com/');

    // create a locator
    const getStarted = page.locator("//a[@id='app_headerMainLogo']");

    await expect(getStarted).toBeVisible();

  }

    for (let i = 0; i < loopRun; i++) {
    await page.goto('https://stage-shop.rushtruckcenters.com/');

    // create a locator
    const getStarted = page.locator("//a[@id='app_headerMainLogo']");

    await expect(getStarted).toBeVisible();

  }
});
