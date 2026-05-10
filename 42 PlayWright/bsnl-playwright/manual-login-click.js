const { chromium } = require('playwright');

(async () => {

  const browser = await chromium.launch({
    headless: false
  });

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto('https://wsc.cdr.bsnl.co.in/portal/');

  console.log('Manually login karo...');
  console.log('60 seconds wait start...');

  // wait 60 sec
  await page.waitForTimeout(60000);

  console.log('Trying to click Pending Fault Orders');

  // wait until element visible
  await page.waitForSelector('[typemenu="FaultOrders"]', {
    timeout: 30000
  });

  // click
  await page.locator('[typemenu="FaultOrders"]').click();

  console.log('Clicked successfully');

})();