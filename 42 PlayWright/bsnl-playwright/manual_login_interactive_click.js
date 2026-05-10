const { chromium } = require('playwright');
const readline = require('readline');

(async () => {

  const browser = await chromium.launch({
    headless: false
  });

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto('https://wsc.cdr.bsnl.co.in/portal/');

  console.log('Manual login karo...');
  console.log('Login hone ke baad ENTER press karo');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('', async () => {

    try {

      await page.waitForSelector('[typemenu="FaultOrders"]');

      await page.locator('[typemenu="FaultOrders"]').click();

      console.log('Clicked Pending Fault Orders');

    } catch (err) {

      console.log('Error:', err);

    }

    rl.close();

  });

})();