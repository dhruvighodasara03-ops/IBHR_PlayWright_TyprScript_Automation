import {
  test,
  expect,
  Browser,
  Page,
  Locator,
  BrowserContext,
} from "@playwright/test";
import { webkit, chromium, firefox } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/login");
  const emailid: Locator = page.locator("#mat-input-0");
  const password: Locator = page.locator("#mat-input-1");
  const loginbutton: Locator = page.locator("#login");

  await emailid.fill("developer@techroversolutions.com");
  await password.fill("Ibhr@2024");
  await loginbutton.click();
});

test("Add Store Testing", async ({ page }) => {
  // const browser: Browser = await chromium.launch({ headless: false });
  // const page: Page = await browser.newPage();
  // await page.goto("https://qa-ibhr.retailbudget.us/login");

  // const emailid: Locator = page.locator("#mat-input-0");
  // const password: Locator = page.locator("#mat-input-1");
  // const loginbutton: Locator = page.locator("#login");

  // await emailid.fill("developer@techroversolutions.com");
  // await password.fill("Ibhr@2024");
  // await loginbutton.click();

  const title = await page.title();
  console.log("Dashboard Title :-", title);
  expect(title).toEqual("IBHR");

  await page.getByRole("link", { name: " Store " }).click();

  // Add Store
  await page.getByRole("button", { name: "Add" }).click();

  // fill store name
  await page.locator('[formcontrolname="storeName"]').fill("Sunrise Mart");

  // fill store id
  await page.locator('[formcontrolname="storesId"]').fill("STR-10022");

  // store email id
  await page
    .locator('[formcontrolname="store_email"]')
    .fill("sunrisemart@yopmail.com");

  // store phone number
  await page
    .locator('[formcontrolname="store_phone"]')
    .fill("+1 (713) 555-0164");

  // store nickname
  await page.locator('[formcontrolname="hotelNickName"]').fill("SM");

  // store address
  await page
    .locator('[formcontrolname="store_address"]')
    .fill("789 Oak Street, Building B,Houston, Texas, 77002");

  // store status
  await page.locator('[formcontrolname="state"]').fill("Texas");

  // store anniversary

  const actYear = "2025";
  const actMonth = "OCT";
  const actDay = "8";

  await page.locator('[formcontrolname="anniversary"]').click();

  // Open year selection
  await page.locator(".mat-calendar-period-button").click();

  // Select year
  await page
    .locator(".mat-calendar-body-cell-content")
    .filter({ hasText: actYear })
    .click();

  // Select month
  await page
    .locator(".mat-calendar-body-cell-content")
    .filter({ hasText: actMonth })
    .click();

  // Select day
  await page
    .getByRole("button", {
      name: `October ${actDay}, ${actYear}`,
    })
    .click();

  // select store category
  await page.locator('[formcontrolname="scId"]').click();
  await page.getByRole("option", { name: "Management" }).click();

  // fill payroll email address
  await page
    .locator('[formcontrolname="payrollEmail"]')
    .fill("payroll.sunrise@yopmail.com");

  // fill accountant email id For Pay Type: Salary
  await page
    .locator('input[placeholder="Accountant Email ID"]')
    .nth(0)
    .fill("accountant.sunrise@yopmail.com");

  // fill accountant email id For Other Pay Type
  await page
    .locator('input[placeholder="Accountant Email ID"]')
    .nth(1)
    .fill("finance.sunrise@yopmail.com");

  // select store manager name
  await page.locator('[formcontrolname="store_manager_userId"]').click();
  await page
    .getByRole("option", {
      name: "Rajeswari majeti (eldoradomanager@yopmail.com)",
    })
    .click();

  // close store manager dropdown
  await page
    .locator('[formcontrolname="store_manager_userId"]')
    .press("Escape");

  // fill store manager number
  await page
    .getByPlaceholder("Store Manager Phone Number")
    .fill("+1 (713) 555-0142");

  // select store hr
  await page.locator('[formcontrolname="store_hr_userId"]').click();
  await page.getByRole("option", { name: "anusha s()" }).click();

  // close store hr dropdown
  await page.locator('[formcontrolname="store_hr_userId"]').press("Escape");

  // upload store image
  // const filepath = "C:/Users/LENOVO/Downloads/store.jpg";
  // await page.locator('input[type="file"]').setInputFiles(filepath);

  // cancel button
  await page.getByRole("button", { name: "Cancel" }).click();
  await page.getByRole("button", { name: "No" }).click();
  // await page.getByRole("button", { name: "Yes" }).click();

  // save button
  await page.getByRole("button", { name: "Save" }).click();
  await page.getByRole("button", { name: "No" }).click();
  // await page.getByRole("button", { name: "Yes" }).click();

  await page.waitForTimeout(5000);
});

test("Update Store Testing...", async () => {
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

  await page.getByRole("link", { name: " Store " }).click();

  const storeTable = page.locator("table.table.table-borderless");

  const storeRow = storeTable.locator("tbody tr").filter({
    has: page.locator("td", {
      hasText: "Green Valley Supermarket",
    }),
  });

  await storeRow.locator("td").first().click();

  // edit store
  await page.getByRole("button", { name: "Edit" }).click();

  // fill store name
  await page
    .locator('[formcontrolname="storeName"]')
    .fill("Green Valley Supermarket");

  // fill store email id
  await page
    .locator('[formcontrolname="store_email"]')
    .fill("Greenvalley@yopmail.com");

  // fill store phone no
  await page.locator('[formcontrolname="store_phone"]').fill("3574126980");

  // fill store nick name
  await page.locator('[formcontrolname="hotelNickName"]').fill("Green Bi");

  // fill store address
  await page
    .locator('[formcontrolname="store_address"]')
    .fill("456 Maple Avenue, Suite 101");

  // fill state
  await page.locator('[formcontrolname="state"]').fill("Dallas");

  // store anniversary

  const actYear = "2021";
  const actMonth = "FEB";
  const actDay = "8";

  await page.locator('[formcontrolname="anniversary"]').click();

  // Open year selection
  await page.locator(".mat-calendar-period-button").click();

  // Select year
  await page
    .locator(".mat-calendar-body-cell-content")
    .filter({ hasText: actYear })
    .click();

  // Select month
  await page
    .locator(".mat-calendar-body-cell-content")
    .filter({ hasText: actMonth })
    .click();

  // Select day
  await page
    .getByRole("button", {
      name: `February ${actDay}, ${actYear}`,
    })
    .click();

  // select store category
  await page.locator('[formcontrolname="scId"]').click();
  await page.getByRole("option", { name: "Restaurant" }).click();

  // fill payroll email address
  await page
    .locator('[formcontrolname="payrollEmail"]')
    .fill("payrollgreenvalley@yopmail.com");

  // fill accountant email id for the salary pay type
  await page
    .getByPlaceholder("Accountant Email ID")
    .nth(0)
    .fill("salary.greenvalley@yopmail.com");

  // fill accountant email id for the salary pay type
  await page
    .getByPlaceholder("Accountant Email ID")
    .nth(1)
    .fill("payments.greenvalley@yopmail.com");

  // select store manager name
  await page.locator('[formcontrolname="store_manager_userId"]').click();
  await page
    .getByRole("option", { name: "abc testttt (xyztestttt@gmail.com)" })
    .click();

  // close store manager dropdown
  await page
    .locator('[formcontrolname="store_manager_userId"]')
    .press("Escape");

  // enter store manager number
  await page.getByPlaceholder("Store Manager Phone Number").fill("8780524170");

  // select store hr
  await page.locator('[formcontrolname="store_hr_userId"]').click();
  await page
    .getByRole("option", { name: "aarti(ahana.hr@yopmail.com)" })
    .click();

  // close select hr dropdown
  await page.locator('[formcontrolname="store_hr_userId"]').press("Escape");

  // upload store image
  // const filepath = "";
  // await page.locator('input[type="file"]').setInputFiles(filepath);

  // cancel button 1
  // await page.getByRole("button", { name: "Cancel" }).nth(0).click();
  // await page.getByRole("button", { name: "No" }).click();
  // await page.getByRole("button", { name: "Yes" }).click();

  // cancel button 2
  await page.getByRole("button", { name: "Cancel" }).nth(1).click();
  await page.getByRole("button", { name: "No" }).click();
  // await page.getByRole("button", { name: "Yes" }).click();

  // save button
  await page.getByRole("button", { name: "Save" }).click();
  await page.getByRole("button", { name: "No" }).click();
  // await page.getByRole("button", { name: "Yes" }).click();

  await page.waitForTimeout(10000);
});

test("Store > Inline Sorting & Filter Testing...", async () => {
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

  await page.getByRole("link", { name: " Store " }).click();

  // store name filter
  await page.getByRole("columnheader", { name: "Store NAME " }).click();

  // select category
  await page.getByRole("columnheader", { name: " Category " }).click();
  await page.getByRole("option", { name: " Warehouse" }).click();
  await page.getByRole("option", { name: " Retail Grocery" }).click();

  // close select category
  await page.keyboard.press("Escape");

  // store id sorting
  await page.getByRole("columnheader", { name: "Store ID " }).click();

  // select store hr name
  await page.getByRole("columnheader", { name: "STORE HR NAME " }).click();
  await page.getByRole("option", { name: " AARTHI KOTHARI" }).click();
  await page.getByRole("option", { name: " anusha s" }).click();

  // close store hr dropdown
  await page.keyboard.press("Escape");

  // anniversary sorting
  await page.getByRole("columnheader", { name: "ANNIVERSARY " }).click();

  await page.waitForTimeout(5000);
});

test("Add Store Budget Testing", async () => {
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

  await page.getByRole("link", { name: " Store " }).click();
  await page.getByRole("tab", { name: "Budget Allocation " }).click();

  /* search */

  // await page
  //   .getByPlaceholder("Search...")
  //   .pressSequentially("Lewisville", { delay: 500 });

  // select year dropdown
  // await page.locator(".yearSelection select").selectOption("2025");
  // await page.waitForTimeout(5000);

  // add budget for store
  await page.getByRole("button", { name: "Add" }).click();

  // select store
  // await page.locator(".yearSelection select").selectOption("2024");

  // allocate budget
  // await page.locator("#mat-input-42").fill("100"); // for Frisco

  await page
    .locator("div.form-group.row", {
      has: page.locator("mat-label", { hasText: "Green Valley Supermarket" }),
    })
    .locator("input[placeholder='Please Enter Amount']")
    .fill("10");

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

test("Update Store Budget Testing...", async () => {
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

  await page.getByRole("link", { name: " Store " }).click();

  await page.getByRole("tab", { name: "Budget Allocation " }).click();

  const carrolltonCard = page.locator(".budget-data").filter({
    has: page.locator("h4", { hasText: "Carrollton" }),
  });

  await carrolltonCard.locator(".editBudget img").click();

  await page.getByPlaceholder("Enter Amount").fill("10");

  // cross icon
  // await page.locator("img[src*='cross_icon.svg']").click();
  // await page.getByRole("button", { name: "No" }).click();
  // await page.getByRole("button", { name: "Yes" }).click();

  // save icon
  await page.locator(".editBudget li").nth(1).click();
  // await page.getByRole("button", { name: "No" }).click();
  await page.getByRole("button", { name: "Yes" }).click();

  await page.waitForTimeout(10000);
});

test("Store > Pagination Testing...", async ({ page }) => {
  test.setTimeout(180000);

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

  await page.getByRole("link", { name: " Store " }).click();

  // pagination

  const paginationPart = page
    .getByRole("tabpanel", { name: "Store " })
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

      // Right Side Pagination

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
