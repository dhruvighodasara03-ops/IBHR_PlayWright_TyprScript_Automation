import { test, expect, Browser, Page, Locator } from "@playwright/test";
import { webkit, chromium, firefox } from "@playwright/test";

test("Manage > Login Logs Testing...", async () => {
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

  await page.getByRole("link", { name: " Login Logs " }).click();

  // search
  await page
    .getByPlaceholder("Search...")
    .pressSequentially("Techrover developer  ", { delay: 300 });

  await page.waitForTimeout(10000);
});

test("Manage > Email Logs > Pagination Testing...", async ({ page }) => {
  test.setTimeout(180000);

  // Login
  await page.goto("https://qa-ibhr.retailbudget.us/login");

  await page.locator("#mat-input-0").fill("developer@techroversolutions.com");

  await page.locator("#mat-input-1").fill("Ibhr@2024");

  await page.locator("#login").click();

  const title = await page.title();

  console.log("Dashboard Title :-", title);

  expect(title).toEqual("IBHR");

  // Navigate Manage > Login Logs

  await page.getByRole("link", { name: " Manage " }).click();

  await page.locator(".side-btn").click();

  await page.getByRole("link", { name: " Login Logs " }).click();

  await page.waitForTimeout(3000);

  // Pagination section

  const paginationPart = page.locator(".footer-pagination");

  // Left dropdown (available options)

  const pageSize = paginationPart.locator("select.footer-pagination__select");

  // Wait until dropdown is visible

  await expect(pageSize).toBeVisible();

  // Get available page size options dynamically

  const pageSizeOptions = await pageSize
    .locator("option")
    .evaluateAll((options) =>
      options.map((option) => ({
        text: option.textContent?.trim(),
        value: option.getAttribute("value"),
      })),
    );

  console.log("Available Page Size Options:", pageSizeOptions);

  // Loop through available page sizes

  for (const option of pageSizeOptions) {
    if (option.value) {
      // Select page size
      await pageSize.selectOption(option.value);

      await page.waitForTimeout(3000);

      console.log(`Selected page size: ${option.text}`);

      // Right side pagination

      const pagination = paginationPart.locator(
        ".footer-pagination__pagination",
      );

      // Get available page numbers

      const pages = await pagination
        .locator("span")
        .evaluateAll((elements) =>
          elements
            .map((el) => el.textContent?.trim())
            .filter((text) => text && /^\d+$/.test(text)),
        );

      console.log(`Available pages for ${option.text}:`, pages);

      // Check active page

      const currentActivePage = await pagination
        .locator(".active")
        .textContent();

      console.log("Current Active Page:", currentActivePage);

      // Click available page numbers

      const pageNumbers = pagination.locator("span").filter({
        hasText: /^\d+$/,
      });

      const pageCount = await pageNumbers.count();

      console.log("Visible Page Count:", pageCount);

      for (let i = 0; i < pageCount; i++) {
        const pageText = await pageNumbers.nth(i).textContent();

        await pageNumbers.nth(i).click();

        await page.waitForTimeout(2000);

        console.log(`Clicked Page Number: ${pageText}`);

        // Verify active page after click

        const activePage = await pagination.locator(".active").textContent();

        console.log("Active Page After Click:", activePage);

        expect(activePage).toEqual(pageText);
      }
    }
  }

  await page.waitForTimeout(10000);
});
