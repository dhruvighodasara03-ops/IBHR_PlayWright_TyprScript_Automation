import { test, expect, Browser, Page, Locator } from "@playwright/test";
import { webkit, chromium, firefox } from "@playwright/test";

test("Manage > Birthday Emails Testing...", async () => {
  const browser: Browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();
  await page.goto("https://qa-ibhr.retailbudget.us/login");

  const emailid: Locator = page.locator("#mat-input-0");
  const password: Locator = page.locator("#mat-input-1");
  const loginbutton: Locator = page.locator("#login");

  await emailid.fill("developer@techroversolutions.com");
  await password.fill("IBHR@qa2026");
  await loginbutton.click();

  const title = await page.title();
  console.log("Dashboard Title :-", title);
  expect(title).toEqual("IBHR");

  await page.getByRole("link", { name: " Manage " }).click();

  await page.locator(".side-btn").click();
  await page.getByRole("link", { name: " Birthday Email " }).click();

  // Manage Emails button
  await page.getByRole("button", { name: "Manage Emails" }).click();

  // search
  await page
    .getByPlaceholder("Search...")
    .pressSequentially("gopi", { delay: 200 });

  // enter emails
  await page.locator('[formcontrolname="email"]').fill("abc1@yopmail.com");

  // select category
  await page.locator("select[name='category']").selectOption({
    label: "IB STORES",
  });

  // add button
  await page.getByRole("button", { name: "Add" }).click();

  await page.waitForTimeout(10000);
});

test("Update Email Testing...", async () => {
  const browser: Browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();
  await page.goto("https://qa-ibhr.retailbudget.us/login");

  const emailid: Locator = page.locator("#mat-input-0");
  const password: Locator = page.locator("#mat-input-1");
  const loginbutton: Locator = page.locator("#login");

  await emailid.fill("developer@techroversolutions.com");
  await password.fill("IBHR@qa2026");
  await loginbutton.click();

  const title = await page.title();
  console.log("Dashboard Title :-", title);
  expect(title).toEqual("IBHR");

  await page.getByRole("link", { name: " Manage " }).click();

  await page.locator(".side-btn").click();
  await page.getByRole("link", { name: " Birthday Email " }).click();

  // Manage Emails button
  await page.getByRole("button", { name: "Manage Emails" }).click();

  //  edit email
  const row = page.locator("tr").filter({
    hasText: "abc1@yopmail.com",
  });
  await row.locator(".editCustomEmail").click();

  // enter email
  await page.locator('[formcontrolname="email"]').fill("ABC2@YOPMAIL.COM");

  // select category
  await page.locator("select[name='category']").selectOption({
    label: "STORES + RK",
  });

  // update button
  await page.getByRole("button", { name: "Update" }).click();

  // cancel button
  // await page.getByRole("button", { name: "Cancel" }).click();

  // close modal
  const modal = page.locator(".modal.show");
  await modal.locator(".btn-close").click();

  await page.waitForTimeout(10000);
});

test("Delete Email Testing...", async () => {
  const browser: Browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();
  await page.goto("https://qa-ibhr.retailbudget.us/login");

  const emailid: Locator = page.locator("#mat-input-0");
  const password: Locator = page.locator("#mat-input-1");
  const loginbutton: Locator = page.locator("#login");

  await emailid.fill("developer@techroversolutions.com");
  await password.fill("IBHR@qa2026");
  await loginbutton.click();

  const title = await page.title();
  console.log("Dashboard Title :-", title);
  expect(title).toEqual("IBHR");

  await page.getByRole("link", { name: " Manage " }).click();

  await page.locator(".side-btn").click();
  await page.getByRole("link", { name: " Birthday Email " }).click();

  // Manage Emails button
  await page.getByRole("button", { name: "Manage Emails" }).click();

  // delete email
  const row = page.locator("tr").filter({
    hasText: "abc2@yopmail.com",
  });
  await row.locator(".deleteCustomEmail ").click();

  // close modal
  const modal = page.locator(".modal.show");
  await modal.locator(".btn-close").click();

  await page.waitForTimeout(10000);
});
