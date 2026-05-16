require('dotenv').config();

const { chromium } = require('playwright');

(async () => {

  // Launch browser
  const browser = await chromium.launch({
    headless: false
  });

  // Create browser context
  const context = await browser.newContext();

  // Create new page
  const page = await context.newPage();

  // Open URL from .env
  await page.goto(process.env.PORTAL_URL);

  console.log('Manually login karo...');
  console.log('60 seconds wait start...');

  // Wait for manual login
  await page.waitForTimeout(60000);

  console.log('Trying to click Pending Fault Orders');

  // Wait for dashboard card
  await page.waitForSelector('[typemenu="FaultOrders"]', {
    timeout: 30000
  });

  // Click Pending Fault Orders
  await page.locator('[typemenu="FaultOrders"]').click();

  console.log('Clicked successfully');

})();