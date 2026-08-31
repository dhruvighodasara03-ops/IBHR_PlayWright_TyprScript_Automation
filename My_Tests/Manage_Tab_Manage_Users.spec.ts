import { test, expect, Browser, Page, Locator } from "@playwright/test";
import { webkit, chromium, firefox } from "@playwright/test";

test("Manage > Add Users Testing...", async () => {
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
  await page.getByRole("link", { name: " Manage Users " }).click();

  /*  search */
  //   await page
  //     .getByPlaceholder("Search...")
  //     .pressSequentially("Monica", { delay: 300 });

  //   await page.waitForTimeout(3000);

  // Add
  await page.getByRole("button", { name: "Add" }).click();

  // select role
  await page.locator('[formcontrolname="roleId"]').click();
  await page.getByRole("option", { name: "Store Manager" }).click();

  // select user
  await page.locator('[formcontrolname="empId"]').click();
  await page.getByRole("option", { name: "Sai Rohith Kadiam" }).click();

  // select store access
  await page.locator('[formcontrolname="storeAccess"]').click();
  await page.getByRole("option", { name: "Carrollton" }).click();

  // close store access dropdown
  await page.locator('[formcontrolname="storeAccess"]').press("Escape");

  // cancel button
  await page.getByRole("button", { name: "Cancel" }).click();
  await page.getByRole("button", { name: "No" }).click();
  //   await page.getByRole("button", { name: "Yes" }).click();

  // save button
  await page.getByRole("button", { name: "Save" }).click();
  await page.getByRole("button", { name: "No" }).click();
  //   await page.getByRole("button", { name: "Yes" }).click();

  await page.waitForTimeout(10000);
});

test("Manage > Update Users Testing...", async () => {
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
  await page.getByRole("link", { name: " Manage Users " }).click();

  const employeeRow = page.locator("tr").filter({
    hasText: "RI0086",
  });

  await employeeRow.locator("img[src*='edit_botton.png']").click();

  // select role
  await page.locator('[formcontrolname="roleId"]').click();
  await page.getByRole("option", { name: "HR Team Member" }).click(); // store manager

  // select user
  // await page.locator('[formcontrolname="empId"]').click();
  // await page.getByRole("option", { name: "AARTHI KOTHARI" }).click();

  // select store access
  await page.locator('[formcontrolname="storeAccess"]').click();
  await page.getByRole("option", { name: "Green Valley Supermarket" }).click(); // richardson

  // close select store access dropdwon
  await page.locator('[formcontrolname="storeAccess"]').press("Escape");

  // cancel button
  // await page.getByRole("button", { name: "Cancel" }).click();
  // await page.getByRole("button", { name: "No" }).click();
  // await page.getByRole("button", { name: "Yes" }).click();

  // save button
  await page.getByRole("button", { name: "Save" }).click();
  // await page.getByRole("button", { name: "No" }).click();
  await page.getByRole("button", { name: "Yes" }).click();

  await page.waitForTimeout(10000);
});

test("Manage > Delete Users Testing...", async () => {
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
  await page.getByRole("link", { name: " Manage Users " }).click();

  const employeeRow = page.locator("tr").filter({
    hasText: "IBS0018",
  });

  await employeeRow.locator("img[src*='cancel.svg']").click();

  // await page.getByRole("button", { name: "No" }).click();
  await page.getByRole("button", { name: "Yes" }).click();

  await page.waitForTimeout(10000);
});

test("Manage > Inline Sorting & Filters Testing...", async () => {
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
  await page.getByRole("link", { name: " Manage Users " }).click();

  // name sorting
  await page
    .locator("th", { hasText: "NAME " })
    .locator("img.sortArrow")
    .click();

  // select role filter
  await page.getByRole("columnheader", { name: " Role " }).click();
  await page.getByRole("option", { name: "Super Admin" }).click();
  await page.getByRole("option", { name: "General Manager" }).click();
  await page.getByRole("option", { name: "Debt Auditor" }).click();

  // close select role dropdown
  await page.keyboard.press("Escape");

  // contact no sorting
  // await page.getByRole("columnheader", { name: "Contact " }).click();
  await page
    .locator("th", { hasText: "Contact " })
    .locator("img.sortArrow")
    .click();

  await page.waitForTimeout(5000);
});

test("Manage > Manage Users > Pagination Testing...", async ({ page }) => {
  test.setTimeout(180000);

  // Login
  await page.goto("https://qa-ibhr.retailbudget.us/login");

  await page.locator("#mat-input-0").fill("developer@techroversolutions.com");

  await page.locator("#mat-input-1").fill("Ibhr@2024");

  await page.locator("#login").click();

  const title = await page.title();

  console.log("Dashboard Title :-", title);

  expect(title).toEqual("IBHR");

  // Navigate Manage > Manage Users

  await page.getByRole("link", { name: " Manage " }).click();

  await page.locator(".side-btn").click();

  await page.getByRole("link", { name: " Manage Users " }).click();

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
