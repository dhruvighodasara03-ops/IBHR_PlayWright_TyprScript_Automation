import { test } from "@playwright/test";
import { webkit, chromium, firefox } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Today Birthday List Testing...", async ({ page }) => {
  const loginpage = new LoginPage(page);

  // login
  loginpage.gotoLoginPage();
  loginpage.login("developer@techroversolutions.com", "IBHR@qa2026");

  // navigate to the Today BirthdayList Page
  await page.locator('img[src*="birthday-cake-emoji.png"]').click();

  await page.waitForTimeout(10000);
});
