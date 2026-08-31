import {
  test,
  expect,
  Browser,
  Page,
  Locator,
  BrowserContext,
} from "@playwright/test";
import { webkit, chromium, firefox } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test(" Notification Slider Testing", async ({ page }) => {
  const loginpage = new LoginPage(page);

  await loginpage.gotoLoginPage();
  await loginpage.login("developer@techroversolutions.com", "Ibhr@2024");

  // open notification sllider
  await page.locator('img[src*="notification_icon.svg"]').click();

  // mark all as read button
  await page.getByRole("button", { name: "Mark all as read" }).click();

  // clear all button
  // await page.getByRole("button", { name: "Clear all" }).click();

  // close notification slider
  // await page
  //   .locator("modal-header", { hasText: "Notification" })
  //   .locator(".btn-close")
  //   .click();

  await page.keyboard.press("Escape");

  await page.waitForTimeout(5000);
});
