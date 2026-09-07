import { test, expect, Browser, Page, Locator } from "@playwright/test";
import { webkit, chromium, firefox } from "@playwright/test";

test("HR Update Rejected Employee Testing...", async () => {
  test.setTimeout(1800000);

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

  await page.getByRole("link", { name: " HR  " }).click();

  await page.getByRole("tab", { name: "Rejected  " }).click();

  // search
  // await page
  //   .getByPlaceholder("Search...")
  //   .pressSequentially("SRADDHA", { delay: 300 });

  // clicking particular rejected employee by name
  const employeeTable = page.locator("table.table.table-borderless").nth(1);

  const employeeRow = employeeTable.locator("tbody tr").filter({
    has: page.locator("h6.full_name", {
      hasText: "SRADDHA",
    }),
  });

  await employeeRow.click();

  // edit rejected employee

  await page.getByRole("button", { name: "Edit" }).click();

  //emp name
  await page.locator('[formcontrolname="empName"]').fill("SRADDHA");

  // select emp designation
  await page.locator('[formcontrolname="empDesignation"]').click();
  await page.getByRole("option", { name: "kitchen staff" }).click();

  // select date of birth
  const year = "2007";
  const month = "JUN";
  const day = "8";

  await page.locator('[formcontrolname="empDOB"]').click();

  // Open year selection
  await page.locator(".mat-calendar-period-button").click();

  // Select year
  await page
    .locator(".mat-calendar-body-cell-content")
    .filter({ hasText: year })
    .click();

  // Select month
  await page
    .locator(".mat-calendar-body-cell-content")
    .filter({ hasText: month })
    .click();

  // Select day
  await page
    .getByRole("button", {
      name: `June ${day}, ${year}`,
    })
    .click();

  // fill emp contact number
  await page.locator('[formcontrolname="empPhone"]').fill("0123456987");

  // fill emp personal email
  await page
    .locator('[formcontrolname="empEmail"]')
    .fill("SRADDHA@yopmail.com");

  // fill emp official email
  await page
    .locator('[formcontrolname="officeEmail"]')
    .fill("SRADDHA1@yopmail.com");

  // select emp work authorization
  await page.locator('[formcontrolname="empResidency"]').click();
  await page.getByRole("option", { name: "N/A" }).click();

  // select method of payment
  await page.locator('[formcontrolname="method_of_payment"]').click();
  await page.getByRole("option", { name: "Check + Cash" }).click();
  //   await page.locator("#mat-option-3718").click();

  // select pay type
  await page.locator('[formcontrolname="typeOfPay"]').click();
  await page.getByRole("option", { name: "salary" }).click();

  // select pay period
  await page.locator('[formcontrolname="payPeriod"]').click();
  await page.getByRole("option", { name: "monthly" }).nth(1).click();

  // select maritual status
  await page.locator('[formcontrolname="empMarital"]').click();
  await page.getByRole("radio", { name: "Married" }).click();

  // select gender
  await page.locator('[formcontrolname="empGender"]').click();
  await page.getByRole("radio", { name: "Female" }).click();

  // select employee type
  await page.locator('[formcontrolname="empType"]').click();
  await page.getByRole("radio", { name: "Back / Stocker Employee" }).click();

  // select federal
  await page.locator('[formcontrolname="federal"]').click();
  await page.getByRole("radio", { name: "no" }).click();

  // select dependents
  await page.locator('[formcontrolname="dependants"]').click();
  await page.getByRole("option", { name: "3" }).click();

  // fill weekly hours
  await page.locator('[formcontrolname="hour"]').fill("65");

  // select store location
  await page.locator('[formcontrolname="storeId"]').click();
  await page.getByRole("option", { name: "Grain Market" }).click();

  // select date of joining
  // await page.locator('[formcontrolname="DOJ"]').click();
  // await page.locator('button[aria-label="July 1, 2026"]').click();

  const dojYear = "2025";
  const dojMonth = "JUN";
  const dojDay = "15";

  await page.locator('[formcontrolname="DOJ"]').click();

  // Open year selection
  await page.locator(".mat-calendar-period-button").click();

  // Select year
  await page
    .locator(".mat-calendar-body-cell-content")
    .filter({ hasText: dojYear })
    .click();

  // Select month
  await page
    .locator(".mat-calendar-body-cell-content")
    .filter({ hasText: dojMonth })
    .click();

  // Select day
  await page
    .getByRole("button", {
      name: `June ${dojDay}, ${dojYear}`,
    })
    .click();

  // fill note
  await page.locator('[formcontrolname="note"]').fill("");

  // select required documents
  await page.locator('[formcontrolname="empRequiredDocuments"]').click();
  await page.getByRole("option", { name: " Driver's License " }).click();
  await page.getByRole("option", { name: "  Passport photo ID  " }).click();

  // close required documents dropdown
  await page
    .locator('[formcontrolname="empRequiredDocuments"]')
    .press("Escape");

  // select send documents
  await page.locator('[formcontrolname="empSendDocuments"]').click();
  await page.getByRole("option", { name: " ACCOUNT PAPER " }).click();

  // close send documents dropdown
  await page.locator('[formcontrolname="empSendDocuments"]').press("Escape");

  // cancel button
  await page.getByRole("button", { name: "Cancel" }).click();
  await page.getByRole("button", { name: "No" }).click();
  //   await page.getByRole("button", { name: "Yes" }).click();

  // save button
  await page.getByRole("button", { name: "Save" }).click();
  await page.getByRole("button", { name: "No" }).click();
  // await page.getByRole("button", { name: "Save & Exit" }).click();

  await page.waitForTimeout(5000);
});

test("HR > Rejected > Inline Filter & Sorting Testing...", async () => {
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

  await page.getByRole("link", { name: " HR  " }).click();
  await page.getByRole("tab", { name: "Rejected " }).click();

  // name sorting
  await page.getByRole("columnheader", { name: "NAME" }).first().click();

  // select designation
  await page.getByRole("columnheader", { name: " Designation " }).click();
  await page.getByRole("option", { name: " accounting " }).click();
  await page.getByRole("option", { name: " general manager " }).click();
  await page.getByRole("option", { name: " store manager " }).click();
  await page.getByRole("option", { name: " warehouse associate " }).click();

  // close designation dropdown
  await page.keyboard.press("Escape");

  // residency status
  await page.getByRole("columnheader", { name: " RESIDENCY STATUS " }).click();
  await page.getByRole("option", { name: "N/A" }).click();

  // close residency status dropdown
  await page.keyboard.press("Escape");

  // contact no. sorting
  await page.getByRole("columnheader", { name: "CONTACT " }).click();

  // personal email sorting
  await page.getByRole("columnheader", { name: "Personal Email " }).click();

  // official email sorting
  await page.getByRole("columnheader", { name: "Official EMAIL " }).click();

  // select marituap status
  await page.getByRole("columnheader", { name: " MARITAL STATUS " }).click();
  await page.getByRole("option", { name: "Married" }).click();

  await page.waitForTimeout(10000);
});

test("HR > Rejected > Pagination Testing...", async ({ page }) => {
  test.setTimeout(180000);

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

  await page.getByRole("link", { name: " HR  " }).click();
  await page.getByRole("tab", { name: "Rejected " }).click();

  // pagination

  const paginationPart = page
    .getByRole("tabpanel", { name: "Rejected " })
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

/*===================
tests using the pom
=====================*/

import { LoginPage } from "../pages/LoginPage";
import { RejectedPages } from "../pages/RejectedPages";
test(" rejected employee > edit usng POM", async ({ page }) => {
  test.setTimeout(120000);
  const login = new LoginPage(page);
  const rejected = new RejectedPages(page);

  await login.gotoLoginPage();
  await login.login("developer@techroversolutions.com", "IBHR@qa2026");

  await rejected.hrmenu();
  await rejected.reject();
  await rejected.getEmployeeRow("Rima");
  await rejected.edit();
  await rejected.empnm("Rima");
  await rejected.selectdesignation();
  await rejected.selectDob("2000", "AUG", "14");
  await rejected.enterEmail("rima1@yopmail.com");
  await rejected.selectPaymentMethod();
  await rejected.selectEmpType();
  await rejected.selectStore();
  await rejected.cancelChanges();
  await rejected.saveChanges();

  await page.waitForTimeout(6000);
});
