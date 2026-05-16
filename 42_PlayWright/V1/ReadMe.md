# BSNL Portal Automation using Playwright

This project automates the **Pending Fault Orders** click action on the BSNL portal using Playwright.

The login process remains manual because the portal uses CAPTCHA authentication.

After manual login, the script waits for 60 seconds and then automatically clicks the **Pending Fault Orders** card.

---

# Project Goal

Automation Flow:

1. Open BSNL portal
2. Manually login
3. Solve CAPTCHA manually
4. Wait for 60 seconds
5. Automatically click:
   - Pending Fault Orders

---

# Technologies Used

- Node.js
- Playwright
- Chromium Browser Automation

---

# Why Manual Login?

The BSNL portal uses CAPTCHA and session validation.

Because of this:
- Full login automation is not reliable
- CAPTCHA cannot be stably automated

So the best practical approach is:
- manual login
- automation continues after login

---

# Project Setup

---

## Step 1 — Create Project Folder

Open terminal or command prompt.

```bash
mkdir bsnl-playwright
cd bsnl-playwright
```

---

## Step 2 — Initialize Node.js Project

```bash
npm init -y
```

This creates:

```txt
package.json
```

---

## Step 3 — Install Playwright

```bash
npm install playwright
```

This installs:

* Playwright package
* Browser automation APIs

---

## Step 4 — Install Browsers

```bash
npx playwright install
```

This downloads:

* Chromium
* Firefox
* WebKit

---

# Create Automation Script

Create a new file:

```txt
manual-login-click.js
```

---

# Complete Code

```js
const { chromium } = require('playwright');

(async () => {

  // Launch browser
  const browser = await chromium.launch({
    headless: false
  });

  // Create browser context
  const context = await browser.newContext();

  // Create new page/tab
  const page = await context.newPage();

  // Open BSNL portal
  await page.goto('Paste Your BSNL URL Here');

  console.log('Manually login karo...');
  console.log('60 seconds wait start...');

  // Wait for manual login
  await page.waitForTimeout(60000);

  console.log('Trying to click Pending Fault Orders');

  // Wait until dashboard card becomes visible
  await page.waitForSelector('[typemenu="FaultOrders"]', {
    timeout: 30000
  });

  // Click Pending Fault Orders
  await page.locator('[typemenu="FaultOrders"]').click();

  console.log('Clicked successfully');

})();
```

---

# Running the Project

Run:

```bash
node manual-login-click.js
```

---

# Expected Flow

After running:

1. Browser opens
2. BSNL login page loads
3. User manually enters:

   * username
   * password
   * captcha
4. User clicks Login
5. Script waits 60 seconds
6. Script automatically clicks:

   * Pending Fault Orders

---

# Complete Code Explanation

---

# 1. Import Playwright

```js
const { chromium } = require('playwright');
```

Explanation:

* Imports Chromium browser automation from Playwright
* Chromium is the browser engine used by Chrome

---

# 2. Async Wrapper Function

```js
(async () => {

})();
```

Explanation:

* Creates an async function
* Needed because Playwright functions use `await`

---

# 3. Launch Browser

```js
const browser = await chromium.launch({
  headless: false
});
```

Explanation:

### `chromium.launch()`

Starts a browser instance.

### `headless: false`

Means:

* browser will be visible on screen

If:

```js
headless: true
```

then browser runs in background.

---

# 4. Create Browser Context

```js
const context = await browser.newContext();
```

Explanation:

A browser context acts like:

* a fresh browser session
* separate cookies/storage

Similar to:

* incognito mode

---

# 5. Open New Tab

```js
const page = await context.newPage();
```

Explanation:

Creates:

* a new browser tab/page

---

# 6. Open Website

```js
await page.goto('BSNL URL');
```

Explanation:

Navigates browser to:

* BSNL portal URL

---

# 7. Console Messages

```js
console.log('Manually login karo...');
```

Explanation:

Prints logs in terminal.

Useful for:

* debugging
* status tracking

---

# 8. Wait for Manual Login

```js
await page.waitForTimeout(60000);
```

Explanation:

Waits:

* 60000 milliseconds
* = 60 seconds

During this time:

* user manually logs in
* solves CAPTCHA

---

# 9. Wait for Dashboard Element

```js
await page.waitForSelector('[typemenu="FaultOrders"]');
```

Explanation:

Script waits until:

* Pending Fault Orders card appears

This ensures:

* dashboard fully loaded
* element available for clicking

---

# 10. Click Element

```js
await page.locator('[typemenu="FaultOrders"]').click();
```

Explanation:

Finds HTML element using:

```css
[typemenu="FaultOrders"]
```

and clicks it.

---

# Why This Selector Was Used

Portal HTML contains:

```html
<div class="cardItem" typemenu="FaultOrders">
```

So:

* `typemenu="FaultOrders"`

is a stable custom attribute.

Better than:

* dynamic classes
* visible text

---

# Important Playwright Concepts

---

# Browser

Controls entire browser instance.

```js
const browser = await chromium.launch();
```

---

# Context

Represents isolated browser session.

```js
const context = await browser.newContext();
```

---

# Page

Represents browser tab.

```js
const page = await context.newPage();
```

---

# Locator

Used to find elements.

```js
page.locator()
```

---

# Await

Waits until async operation completes.

```js
await page.goto()
```

---

# Common Issues

---

# Issue 1 — Browser Closes Immediately

Cause:

* missing `await`
* script error

Fix:

* check terminal errors

---

# Issue 2 — Element Not Found

Cause:

* login not completed
* dashboard not loaded

Fix:

* increase timeout

Example:

```js
await page.waitForTimeout(120000);
```

---

# Issue 3 — Click Not Working

Cause:

* wrong selector
* page still loading

Fix:

* inspect HTML again
* verify selector

---

# Useful Debugging

---

# Pause Execution

```js
await page.pause();
```

Opens Playwright Inspector.

---

# Take Screenshot

```js
await page.screenshot({
  path: 'debug.png'
});
```

---

# Print Current URL

```js
console.log(page.url());
```

---

# Future Improvements

Possible future automation:

* Auto ticket extraction
* Fault data scraping
* Excel export
* Auto refresh
* Telegram alerts
* WhatsApp notifications
* Database storage
* Dashboard automation

---

# Recommended Folder Structure

```txt
bsnl-playwright/
│
├── manual-login-click.js
├── package.json
├── package-lock.json
└── README.md
```

---

# Create README.md

Save this entire document as:

```txt
README.md
```

---

# Git Commands

Initialize Git:

```bash
git init
```

Add files:

```bash
git add .
```

Commit:

```bash
git commit -m "Initial BSNL Playwright automation setup"
```

Create GitHub repository and push:

```bash
git remote add origin YOUR_GITHUB_REPO_URL
git branch -M main
git push -u origin main
```

---

# Final Result

This project provides a simple and reliable approach for automating actions after manual CAPTCHA-based login using Playwright.