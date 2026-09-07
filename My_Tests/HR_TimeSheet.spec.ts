import { test, expect, Browser, Page, Locator } from "@playwright/test";
import { webkit, chromium, firefox } from "@playwright/test";

test("HR > TimeSheet Testing...", async () => {
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

  await page.getByRole("link", { name: " TimeSheet " }).click();

  // break types checkbox
  const breakTypes = [
    "NORMAL",
    "Short lunch",
    "LONG Lunch",
    "7+ Hour Continue",
    "NO Lunch",
    "SHORT SHIFT",
  ];

  for (const type of breakTypes) {
    await page
      .locator(".status-item", {
        has: page.locator("span", { hasText: type }),
      })
      .locator('input[type="checkbox"]')
      .check();

    await page.waitForTimeout(1000);
  }

  // select department
  await page.locator('[formcontrolname="dept"]').click();
  await page.getByRole("option", { name: " CASHIER CASH " }).click();
  await page.getByRole("option", { name: " CASHIER CHECK " }).click();
  //   await page.getByRole("option", { name: " STOCKER " }).click();
  //   await page.getByRole("option", { name: " VENDOR CHECK " }).click();

  // close select department dropdown
  await page.keyboard.press("Escape");

  // select store
  await page.locator('[formcontrolname="storeId"]').click();
  await page.getByRole("option", { name: "Valley Ranch" }).click();
  //   await page.getByRole("option", { name: "Carrollton" }).click();

  // close select store dropdown
  await page.keyboard.press("Escape");

  // select employees
  await page.locator('[formcontrolname="empId"]').click();
  await page.getByRole("option", { name: "Davinder Singh" }).click();
  await page.getByRole("option", { name: " KODALI VIVEK " }).click();
  await page.getByRole("option", { name: " NISHITHA BONDILI BAI " }).click();
  await page.getByRole("option", { name: " Samps Basnet " }).click();
  //   await page.getByRole("option", { name: "" }).click();

  // close select employees dropdown
  await page.keyboard.press("Escape");

  // select punch types
  await page.locator('[formcontrolname="punchType"]').click();
  await page.getByRole("option", { name: " Missing Punch " }).click();
  await page.getByRole("option", { name: " uAttend Punch " }).click();

  // close select punch type dropdown
  await page.keyboard.press("Escape");

  // select week
  await page.locator('[formcontrolname="weekSelect"]').click();
  await page.getByRole("option", { name: "Custom" }).click();

  // Select custom range
  await page.locator(".calendar.left td.available", { hasText: "12" }).click();
  await page.locator(".calendar.left td.available", { hasText: "25" }).click();

  // Apply selection
  await page.getByRole("button", { name: "Apply" }).click();

  // reset button
  await page.getByRole("button", { name: "Reset" }).click();

  // export button
  await page.getByRole("button", { name: "Export" }).click();

  // Sync button
  //   await page.getByRole("button", { name: "Sync" }).click();

  await page.waitForTimeout(5000);
});

test("HR > TimeSheet Inline Sorting & Filter Testing...", async () => {
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

  await page.getByRole("link", { name: " TimeSheet " }).click();

  // employee name sorting
  await page
    .locator("th", { hasText: "EMPLOYEE" })
    .locator("img.sortArrow")
    .click();

  // date sorting
  await page
    .locator("th", { hasText: "DATE" })
    .locator("img.sortArrow")
    .click();

  await page.waitForTimeout(5000);
});

test("HR > TimeSheet > Week Select Testing...", async () => {
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

  await page.getByRole("link", { name: " TimeSheet " }).click();

  // select week
  await page.locator('[formcontrolname="weekSelect"]').click();
  await page.getByRole("option", { name: "Custom" }).click();

  // Select custom range
  await page.locator(".calendar.left td.available", { hasText: "12" }).click();
  await page.locator(".calendar.left td.available", { hasText: "25" }).click();

  // Apply selection
  await page.getByRole("button", { name: "Apply" }).click();

  await page.waitForTimeout(10000);
});

test("HR > Timesheet > Pagination Testing...", async ({ page }) => {
  test.setTimeout(180000);

  // Login
  await page.goto("https://qa-ibhr.retailbudget.us/login");

  await page.locator("#mat-input-0").fill("developer@techroversolutions.com");

  await page.locator("#mat-input-1").fill("IBHR@qa2026");

  await page.locator("#login").click();

  const title = await page.title();

  console.log("Dashboard Title :-", title);

  expect(title).toEqual("IBHR");

  // Navigate HR > TimeSheet

  await page.getByRole("link", { name: " HR " }).click();

  await page.locator(".side-btn").click();

  await page.getByRole("link", { name: " TimeSheet " }).click();

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
