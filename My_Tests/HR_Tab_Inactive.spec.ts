import {
  test,
  expect,
  Browser,
  Page,
  Locator,
  BrowserContext,
} from "@playwright/test";
import { webkit, chromium, firefox } from "@playwright/test";

test("HR > Inactive > Inline Filter & Sorting Testing...", async () => {
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

  await page.getByRole("link", { name: " HR  " }).click();
  await page.getByRole("tab", { name: "Inactive " }).click();

  // name sorting
  await page.getByRole("columnheader", { name: "NAME" }).first().click();

  // employee id sorting
  await page.getByRole("columnheader", { name: "Employee Id " }).click();

  // select designation
  await page.getByRole("columnheader", { name: " Designation " }).click();
  await page.getByRole("option", { name: " accounting " }).click();
  await page.getByRole("option", { name: " general manager " }).click();
  await page.getByRole("option", { name: " store manager " }).click();
  await page.getByRole("option", { name: " warehouse associate " }).click();

  // close designation dropdown
  await page.keyboard.press("Escape");

  // date of joining sorting
  await page.getByRole("columnheader", { name: "Date of Joining " }).click();

  // contact no. sorting
  await page.getByRole("columnheader", { name: "CONTACT No " }).click();

  // personal email sorting
  await page.getByRole("columnheader", { name: "Personal Email " }).click();

  // official email sorting
  await page.getByRole("columnheader", { name: "Official EMAIL " }).click();

  // reason field sorting
  await page.getByRole("columnheader", { name: " Reason " }).click();

  // select method of payment
  await page.getByRole("columnheader", { name: " Method of Payment " }).click();
  await page.getByRole("option", { name: "vendor check" }).click();

  // close method of payment dropdown
  await page.keyboard.press("Escape");

  // select store
  await page.getByRole("columnheader", { name: " Store " }).click();
  await page.getByRole("option", { name: "Rajula's East" }).click();
  await page.getByRole("option", { name: "Plano East" }).click();
  await page.getByRole("option", { name: "Valley Ranch" }).click();

  // close store dropdown
  await page.keyboard.press("Escape");

  await page.waitForTimeout(10000);
});

test("HR > TimeSheet > Pagination Testing...", async ({ page }) => {
  test.setTimeout(180000);

  // Login
  await page.goto("https://qa-ibhr.retailbudget.us/login");

  await page.locator("#mat-input-0").fill("developer@techroversolutions.com");

  await page.locator("#mat-input-1").fill("Ibhr@2024");

  await page.locator("#login").click();

  const title = await page.title();

  console.log("Dashboard Title :-", title);

  expect(title).toEqual("IBHR");

  // Navigate HR > TimeSheet

  await page.getByRole("link", { name: "HR" }).click();
  // await page.getByRole("link", { name: " TimeSheet " }).click();
  await page.getByRole("tab", { name: "Inactive " }).click();

  await page.waitForTimeout(3000);

  // Pagination section

  const paginationPart = page
    .getByRole("tabpanel", { name: "Inactive " })
    .locator(".pagination-part");

  const pageSize = paginationPart.locator("select.footer-pagination__select");

  const pageSizeOptions = await pageSize
    .locator("option")
    .evaluateAll((options) =>
      options.map((option) => ({
        text: option.textContent?.trim(),
        value: option.getAttribute("value"),
      })),
    );

  console.log(pageSizeOptions);

  for (const option of pageSizeOptions) {
    if (option.value) {
      await pageSize.selectOption(option.value);

      await page.waitForTimeout(2000);

      console.log(`Selected page size: ${option.text}`);

      const pagination = paginationPart.locator(
        ".footer-pagination__pagination",
      );

      const pages = await pagination
        .locator("span")
        .evaluateAll((elements) =>
          elements
            .map((el) => el.textContent?.trim())
            .filter((text) => text && /^\d+$/.test(text)),
        );

      console.log(`Available pages for ${option.text}:`, pages);

      console.log(
        "Active page:",
        await pagination.locator(".active").textContent(),
      );

      // Click visible page numbers (1,2,3,...)
      const pageNumbers = pagination.locator("span").filter({
        hasText: /^\d+$/,
      });

      const pageCount = await pageNumbers.count();

      console.log("Visible page count:", pageCount);

      for (let i = 0; i < pageCount; i++) {
        const pageText = await pageNumbers.nth(i).textContent();

        await pageNumbers.nth(i).click();

        await page.waitForTimeout(2000);

        console.log(`Clicked page number: ${pageText}`);

        // Verify selected page is active
        const activePage = await pagination.locator(".active").textContent();

        console.log("Active page after click:", activePage);
      }
    }
  }

  await page.waitForTimeout(10000);
});
