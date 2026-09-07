import {
  test,
  expect,
  Browser,
  Page,
  Locator,
  BrowserContext,
} from "@playwright/test";
import { webkit, chromium, firefox } from "@playwright/test";

test("HR > Policy  Testing...", async () => {
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

  await page.getByRole("link", { name: "HR" }).click();

  await page.locator(".side-btn").click();

  await page.getByRole("link", { name: " Policy " }).click();

  /* search */

  //   await page
  //     .getByPlaceholder("Search...")
  //     .pressSequentially("mickney store emp", { delay: 100 });

  // select store
  await page.getByRole("combobox", { name: "All Store" }).click();
  await page.getByRole("option", { name: " Little Elm " }).click();

  // select year
  await page.getByRole("combobox", { name: " 2026 " }).click();
  await page.getByRole("option", { name: " 2023 " }).click();

  // upload policy
  await page.getByRole("button", { name: "Upload" }).click();

  // select store
  await page.locator('[formcontrolname="storeIds"]').click();
  await page.getByRole("option", { name: "Little Elm" }).click();

  // close select store dropdown
  await page.mouse.click(10, 10);

  // enter policy name
  await page.locator('[formcontrolname="policyName"]').fill("test policy...");

  // select policy year
  await page.locator('[formcontrolname="year"]').click();
  await page.getByRole("option", { name: " 2024 " }).click();

  // select role
  await page.getByLabel("Store Manager").check();
  await page.getByLabel("Employee").check();

  // upload policy
  // const filepath = "C:/Users/LENOVO/Downloads/policy.pdf";
  const filepath = "C:/Users/LENOVO/Downloads/file-sample_150kB.pdf";
  await page.locator('input[type="file"]').setInputFiles(filepath);

  await page.waitForTimeout(5000);

  // remove uploaded policy
  //   await page.locator(".uploaded-box").locator("img[src*='delete.svg']").click();

  // no button
  //   await page.getByRole("button", { name: "No" }).click();

  // save & exit button
  await page.getByRole("button", { name: "Save & Exit" }).click();

  await page.waitForTimeout(10000);
  //   await browser.close();
});
