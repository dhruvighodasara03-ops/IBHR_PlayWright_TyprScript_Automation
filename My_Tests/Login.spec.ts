import { test, expect, Browser, Page, Locator } from "@playwright/test";
import { webkit, chromium, firefox } from "@playwright/test";

// QA: Verify login functionality with valid credentials

/* login test using the envirement variable */

test("Login test...", async ({ page }) => {
  // Read dynamic input passed via terminal command line / environment variables
  // Example terminal command (PowerShell):
  //   $env:EMAIL="your_email@example.com"; $env:PASSWORD="your_password"; npx playwright test My_Tests/Login.spec.ts --headed
  const email = process.env.EMAIL || "developer@techroversolutions.com";
  const password = process.env.PASSWORD || "Ibhr@2024";

  console.log(`Logging in with email: ${email}`);

  await page.goto("https://qa-ibhr.retailbudget.us/login");

  const emailid: Locator = page.locator("#mat-input-0");
  const passwordField: Locator = page.locator("#mat-input-1");
  const loginbutton: Locator = page.locator("#login");

  await emailid.fill(email);
  await passwordField.fill(password);
  await loginbutton.click();

  const title = await page.title();
  console.log("Dashboard Title :-", title);

  expect(title).toEqual("IBHR");

  await page.waitForTimeout(5000);
});

/* login test using the static data */

test("Login test using static data ", async ({ page }) => {
  await page.goto("https://qa-ibhr.retailbudget.us/login");

  const emailid: Locator = page.locator("#mat-input-0");
  const password: Locator = page.locator("#mat-input-1");
  const loginbutton: Locator = page.locator("#login");

  await emailid.fill("developer@techroversolutions.com");
  await password.fill("Ibhr@2024");
  await loginbutton.click();

  const title = await page.title();
  console.log("Dashboard Title :-", title);
  expect(title).toEqual("IBHR");
  await page.waitForTimeout(10000);

  await page.waitForTimeout(10000);
  // await browser.close();
});

/*  login using the POM */

import { LoginPage } from "../pages/LoginPage";

test("login test", async ({ page }) => {
  const loginpage = new LoginPage(page);

  await loginpage.gotoLoginPage();
  await loginpage.login("developer@techroversolutions.com", "Ibhr@2024");

  await page.waitForTimeout(5000);
});
