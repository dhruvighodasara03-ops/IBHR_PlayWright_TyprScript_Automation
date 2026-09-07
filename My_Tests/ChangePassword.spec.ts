import { test, expect, Locator, Browser, Page } from "@playwright/test";
import { chromium, firefox, webkit } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/login");

  const emailid: Locator = page.locator("#mat-input-0");
  const password: Locator = page.locator("#mat-input-1");
  const loginbutton: Locator = page.locator("#login");

  await emailid.fill("developer@techroversolutions.com");
  await password.fill("IBHR@qa2026");
  await loginbutton.click();
});

test.afterEach(async ({ page }) => {
  await page.locator(".profile-img").click();
  await page.getByRole("menuitem", { name: " Log Out" }).click();
});

test("Change Password Testing...", async ({ page }) => {
  const title = await page.title();
  console.log("Dashboard Title :-", title);
  expect(title).toEqual("IBHR");

  // navigate to change password page
  await page.locator(".profile-img").click();
  await page.getByRole("menuitem", { name: " Change Password" }).click();

  // new password
  await page.locator('[formcontrolname="newPassword"]').fill("abc!1ABC");

  // confirm password
  await page.locator('[formcontrolname="confirmPassword"]').fill("abc!1");

  // cancel button
  await page.getByRole("button", { name: "Cancel" }).click();

  // submit button
  //   await page.getByRole("button", { name: "Submit" }).click();

  await page.waitForTimeout(10000);
});
