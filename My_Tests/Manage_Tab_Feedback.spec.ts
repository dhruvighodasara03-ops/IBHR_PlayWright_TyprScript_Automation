import { test, expect, Browser, Page, Locator } from "@playwright/test";
import { webkit, chromium, firefox } from "@playwright/test";

test("Manage > Feedback/Add Feedback Testing....", async () => {
  const browser: Browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();
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

  await page.getByRole("link", { name: " Manage " }).click();
  await page.locator(".side-btn").click();

  await page.getByRole("link", { name: " FeedBack " }).click();

  //  search
  //   await page
  //     .getByPlaceholder("Search...")
  //     .pressSequentially("dhanashree", { delay: 300 });

  // select store
  await page.getByRole("combobox", { name: "All Store" }).click();
  await page.getByRole("option", { name: "Plano East" }).click();

  // select year
  await page.locator(".yearSelect ").selectOption("2025");

  // add feedback
  await page.getByRole("button", { name: "Add Feedback" }).click();

  // select store
  await page.locator('[formcontrolname="storeId"]').click();
  await page.getByRole("option", { name: "Valley Ranch" }).click();

  // select employee
  await page.locator('[formcontrolname="empId"]').click();
  await page.getByRole("option", { name: "TEENA SHAHU" }).click();

  // enter subject
  await page.locator('[formcontrolname="subject"]').fill("test...");

  // enter details
  await page
    .locator('[formcontrolname="details"]')
    .fill("for the test purpose....");

  // cancel button
  // await page.getByRole("button", { name: "Cancel" }).click();

  // submit button
  await page.getByRole("button", { name: "Submit" }).click();

  await page.waitForTimeout(10000);
});

test("Manage > Update Feedback Testing....", async () => {
  const browser: Browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();
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

  await page.getByRole("link", { name: " Manage " }).click();
  await page.locator(".side-btn").click();

  await page.getByRole("link", { name: " FeedBack " }).click();

  // edit button
  const feedbackCard = page.locator(".list-main").filter({
    has: page.getByText("  dhanashree nair  "),
  });

  await feedbackCard.locator('img[src*="edit-green.svg"]').click();

  // select store
  await page.locator('[formcontrolname="storeId"]').click();
  await page.getByRole("option", { name: "Frisco" }).click();

  // select employee
  await page.locator('[formcontrolname="empId"]').click();
  await page.getByRole("option", { name: "rohan" }).click();

  // subject
  await page.locator('[formcontrolname="subject"]').fill("testing....");

  // details
  // await page.locator('[formcontrolname="details"]').fill("");

  // cancel button
  // await page.getByRole("button", { name: "Cancel" }).click();

  // submit button
  await page.getByRole("button", { name: "Submit" }).click();

  await page.waitForTimeout(10000);
  // await browser.close();
});

test("Manage > Delete Feedback Testing...", async () => {
  const browser: Browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();
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

  await page.getByRole("link", { name: " Manage " }).click();
  await page.locator(".side-btn").click();

  await page.getByRole("link", { name: " FeedBack " }).click();

  // delete icon
  const feedbackCard = page.locator(".list-main").filter({
    has: page.getByText("  dhanashree nair  "),
  });

  await feedbackCard.locator('img[src*="delete.svg"]').click();

  // no button
  // await page.getByRole("button", { name: "No" }).click();

  // delete button
  await page.getByRole("button", { name: "Yes" }).click();

  await page.waitForTimeout(10000);
  // await browser.close();
});
