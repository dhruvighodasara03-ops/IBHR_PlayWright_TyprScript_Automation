import { test, expect, Browser, Page, Locator } from "@playwright/test";
import { chromium } from "@playwright/test";

test("HR Tab Add Employee Testing...", async () => {
  const browser: Browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();

  // ============================================
  // Change only this variable
  // cancel | save | finish
  // ============================================

  const action = "cancel";

  // ============================================

  await page.goto("https://qa-ibhr.retailbudget.us/login");

  const emailid: Locator = page.locator("#mat-input-0");
  const password: Locator = page.locator("#mat-input-1");
  const loginbutton: Locator = page.locator("#login");

  await emailid.fill("developer@techroversolutions.com");
  await password.fill("Ibhr@2024");
  await loginbutton.click();

  await expect(page).toHaveTitle("IBHR");

  await page.getByRole("link", { name: "HR" }).click();

  /* search */

  // await page
  //   .getByPlaceholder("Search...")
  //   .pressSequentially("mickney store emp", { delay: 500 });

  // -----------------------------
  // Add New Hire
  // -----------------------------

  await page.getByRole("button", { name: "Add" }).click();
  await page.getByRole("menuitem", { name: "New Hire" }).click();

  await page.locator('[formcontrolname="empName"]').fill("test abcd");

  await page.locator("#mat-select-value-75").click();
  await page.getByRole("option", { name: "inventory" }).click();

  // await page.locator('[formcontrolname="empDOB"]').click();
  // await page.locator('button[aria-label="July 7, 2012"]').click();

  const dobyear = "1999";
  const dobmonth = "SEP";
  const dobday = "20";

  await page.locator('[formcontrolname="empDOB"]').click();

  // Open year selection
  await page.locator(".mat-calendar-period-button").click();

  // Select year
  await page
    .locator(".mat-calendar-body-cell-content")
    .filter({ hasText: dobyear })
    .click();

  // Select month
  await page
    .locator(".mat-calendar-body-cell-content")
    .filter({ hasText: dobmonth })
    .click();

  // Select day
  await page
    .getByRole("button", {
      name: `September ${dobday}, ${dobyear}`,
    })
    .click();

  await page.locator('[formcontrolname="empPhone"]').fill("1234567869");

  await page.locator('[formcontrolname="empEmail"]').fill("emp@yopmail.com");

  await page
    .locator('[formcontrolname="officeEmail"]')
    .fill("emp1@yopmail.com");

  await page.locator("#mat-select-76").click();
  await page.getByRole("option", { name: "N/A" }).click();

  await page.locator("#mat-select-value-79").click();
  await page.getByRole("option", { name: "Vendor Check" }).click();

  await page.locator("#mat-select-value-81").click();
  await page.getByRole("option", { name: "salary" }).click();

  await page.locator("#mat-select-value-83").click();
  await page.getByRole("option", { name: "semi-monthly" }).click();

  await page.locator("#mat-radio-16-input").check();
  await page.locator("#mat-radio-20-input").check();
  await page.locator("#mat-radio-22-input").check();

  await page.locator("#mat-select-value-85").click();
  await page.getByRole("option", { name: "2" }).click();

  await page.locator('[formcontrolname="hour"]').fill("70");

  await page.locator("#mat-select-value-87").click();
  await page.getByRole("option", { name: "Green Valley Supermarket" }).click();

  const year = "2026";
  const month = "SEP";
  const day = "20";

  await page.locator('[formcontrolname="DOJ"]').click();

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
      name: `September ${day}, ${year}`,
    })
    .click();

  // await page.locator('[formcontrolname="DOJ"]').click();
  // await page.locator('button[aria-label="July 29, 2026"]').click();

  await page.locator('[formcontrolname="note"]').fill("testing...");

  // ============================================
  // Action
  // ============================================

  switch (action) {
    case "cancel":
      await page.getByRole("button", { name: "Cancel" }).hover();
      await page.getByRole("button", { name: "Cancel" }).click();
      await page.getByRole("button", { name: "Yes" }).click();
      break;

    case "save":
      await page.getByRole("button", { name: "Save" }).hover();
      await page.getByRole("button", { name: "Save" }).click();
      await page.getByRole("button", { name: "Save & Exit" }).click();
      break;

    case "finish":
      await page.getByRole("button", { name: "Finish" }).hover();
      await page.getByRole("button", { name: "Finish" }).click();
      await page.getByRole("button", { name: "Save & Exit" }).click();
      break;

    default:
      console.log("No action selected.");
  }

  await page.waitForTimeout(5000);

  await browser.close();
});

test("HR Tab Update Employee Testing...", async () => {
  const browser: Browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();

  // ============================================
  // Change only this variable
  // cancel | save | finish
  // ============================================

  const action = "cancel";

  // ============================================

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

  await page.getByRole("link", { name: "HR" }).click();

  // -----------------------------
  // Update New Hire
  // -----------------------------

  await page.getByPlaceholder("Search...").pressSequentially("testing");

  const employeeRow = page.locator("tr").filter({
    has: page.getByText("testing"),
  });

  await employeeRow.locator('img[src*="edit_botton"]').click();

  await page.locator('[formcontrolname="empName"]').fill("test 1234");

  await page.locator("#mat-select-value-75").click();
  await page.getByRole("option", { name: "inventory" }).click();

  const year = "2004";
  const month = "JAN";
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
      name: `January ${day}, ${year}`,
    })
    .click();

  // await page.locator('[formcontrolname="empDOB"]').click();
  // await page.locator('button[aria-label="July 7, 2012"]').click();

  await page.locator('[formcontrolname="empPhone"]').fill("1234567869");

  await page.locator('[formcontrolname="empEmail"]').fill("emp@yopmail.com");

  await page
    .locator('[formcontrolname="officeEmail"]')
    .fill("emp1@yopmail.com");

  await page.locator("#mat-select-76").click();
  await page.getByRole("option", { name: "N/A" }).click();

  await page.locator("#mat-select-value-79").click();
  await page.getByRole("option", { name: "Vendor Check" }).click();

  await page.locator("#mat-select-value-81").click();
  await page.getByRole("option", { name: "salary" }).click();

  await page.locator("#mat-select-value-83").click();
  await page.getByRole("option", { name: "semi-monthly" }).click();

  await page.locator("#mat-radio-16-input").check();
  await page.locator("#mat-radio-20-input").check();
  await page.locator("#mat-radio-22-input").check();

  await page.locator("#mat-select-value-85").click();
  await page.getByRole("option", { name: "2" }).click();

  await page.locator('[formcontrolname="hour"]').fill("70");

  await page.locator("#mat-select-value-87").click();
  await page.getByRole("option", { name: "Cedar Park" }).click();

  const dojyear = "2026";
  const dojmonth = "SEP";
  const dojday = "20";

  await page.locator('[formcontrolname="DOJ"]').click();

  // Open year selection
  await page.locator(".mat-calendar-period-button").click();

  // Select year
  await page
    .locator(".mat-calendar-body-cell-content")
    .filter({ hasText: dojyear })
    .click();

  // Select month
  await page
    .locator(".mat-calendar-body-cell-content")
    .filter({ hasText: dojmonth })
    .click();

  // Select day
  await page
    .getByRole("button", {
      name: `September ${dojday}, ${dojyear}`,
    })
    .click();

  // await page.locator('[formcontrolname="DOJ"]').click();
  // await page.locator('button[aria-label="July 29, 2026"]').click();

  await page.locator('[formcontrolname="note"]').fill("test abcd...");

  // ============================================
  // Action
  // ============================================

  switch (action) {
    case "cancel":
      await page.getByRole("button", { name: "Cancel" }).hover();
      await page.getByRole("button", { name: "Cancel" }).click();
      await page.getByRole("button", { name: "Yes" }).click();
      break;

    case "save":
      await page.getByRole("button", { name: "Save" }).hover();
      await page.getByRole("button", { name: "Save" }).click();
      await page.getByRole("button", { name: "Save & Exit" }).click();
      break;

    case "finish":
      await page.getByRole("button", { name: "Finish" }).hover();
      await page.getByRole("button", { name: "Finish" }).click();
      await page.getByRole("button", { name: "Save & Exit" }).click();
      break;

    default:
      console.log("No action selected.");
  }

  await page.waitForTimeout(10000);
  // await browser.close();
});

test("HR Tab Delete Employee Testing...", async () => {
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

  await page.getByRole("link", { name: "HR" }).click();

  const employeeRow = page.locator("tr").filter({
    has: page.getByText("riya thavani"),
  });

  await employeeRow.locator('img[src*="delete_button"]').click();

  await page.getByRole("button", { name: "No" }).click();
  // await page.getByRole("button", { name: "Yes" }).click();

  await page.waitForTimeout(10000);
});

test("HR Tab Onboard New Hire Employee Testing...", async () => {
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

  await page.getByRole("link", { name: "HR" }).click();

  // search
  await page
    .getByPlaceholder("Search...")
    .pressSequentially("mickney store emp");

  // await page.locator('li[mattooltip="Onboard"]').first().click();
  const employeeRow = page.locator("tr").filter({
    has: page.getByText("mickney store emp"),
  });

  // await employeeRow.locator('img[src*="delete_button"]').click();
  await employeeRow.locator('img[src*="on_board_button"]').click();

  // emp name
  await page.locator('[formcontrolname="empName"]').fill("mickney store emp");

  // designitation
  await page.locator('[formcontrolname="empDesignation"]').click();
  await page.getByRole("option", { name: "inventory" }).click();

  // Date Of Birth

  const dobyear = "2003";
  const dobmonth = "DEC";
  const dobday = "5";

  await page.locator('[formcontrolname="empDOB"]').click();

  // Open year selection
  await page.locator(".mat-calendar-period-button").click();

  // Select year
  await page
    .locator(".mat-calendar-body-cell-content")
    .filter({ hasText: dobyear })
    .click();

  // Select month
  await page
    .locator(".mat-calendar-body-cell-content")
    .filter({ hasText: dobmonth })
    .click();

  // Select day
  await page
    .getByRole("button", {
      name: `December ${dobday}, ${dobyear}`,
    })
    .click();

  // Actual Date of Birth

  //Contact Number
  await page.locator('[formcontrolname="empPhone"]').fill("(444) 444-4444");

  //Personal Email Address
  await page
    .locator('[formcontrolname="empEmail"]')
    .fill("mickneyyy@yopmail.com");

  // Official Email Address
  await page
    .locator('[formcontrolname="officeEmail"]')
    .fill("mickney11@yopmail.com");

  // work authorization
  await page.locator('[formcontrolname="empResidency"]').click();
  await page.getByRole("option", { name: "N/A" }).click();

  // maritual status
  await page.locator('[formcontrolname="empMarital"]').click();
  await page.getByText("Married").click();

  // gender
  await page.locator('[formcontrolname="empGender"]').click();
  await page.getByRole("radio", { name: "Female" }).click();

  // Employee Type
  await page.locator('[formcontrolname="empType"]').click();
  await page.getByRole("radio", { name: "Back / Stocker Employee" }).click();

  // Weekly Hours
  await page.locator('[formcontrolname="hour"]').fill("70");

  // Training Store Location
  await page.locator('[formcontrolname="storeId"]').click();
  await page.getByRole("option", { name: "IB Stores" }).click();

  // Date of Joining
  const year = "2026";
  const month = "JUN";
  const day = "8";

  await page.locator('[formcontrolname="DOJ"]').click();

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

  // select required documents
  // await page.locator('[formcontrolname="empRequiredDocuments"]').click();
  // await page.getByRole("option", { name: " Driver's License " }).click();
  // await page.getByRole("option", { name: " Passport photo ID " }).click();

  // select send documents
  // await page.locator('[formcontrolname="empSendDocuments"]').click();
  // await page.getByRole("option", { name: " COMPANY ASSET FORM " }).click();
  // await page
  //   .getByRole("option", { name: " NON-DISCLOSURE AGREEMENT " })
  //   .click();

  // note
  await page.locator('[formcontrolname="note"]').fill("testing...");

  // next button
  await page.getByRole("button", { name: "Next" }).first().click();

  // select onboard store
  await page.locator('[formcontrolname="storeId"]').click();
  await page.getByRole("option", { name: "Rajula's Johnscreek" }).click();

  // select method of payment
  await page.locator('[formcontrolname="method_of_payment"]').click();
  await page.getByRole("option", { name: "vendor check" }).click();

  // select pay type
  await page.locator('[formcontrolname="typeOfPay"]').click();
  await page.getByRole("option", { name: "salary" }).click();

  // select pay period
  await page.locator('[formcontrolname="payPeriod"]').click();
  await page.getByRole("option", { name: "bi-weekly" }).click();

  // pay rate
  // await page.locator('[formcontrolname="payRate"]').fill("1000.00");
  await page
    .locator('[formcontrolname="payRate"]')
    .type("1000.00", { delay: 100 });

  // effective date
  // await page.locator('[formcontrolname="raiseDate"]').click();
  // await page.locator('button[aria-label="July 5, 2026"]').click();

  const efcyear = "2026";
  const efcmonth = "SEP";
  const efcday = "8";

  await page.locator('[formcontrolname="raiseDate"]').click();

  // Open year selection
  await page.locator(".mat-calendar-period-button").click();

  // Select year
  await page
    .locator(".mat-calendar-body-cell-content")
    .filter({ hasText: efcyear })
    .click();

  // Select month
  await page
    .locator(".mat-calendar-body-cell-content")
    .filter({ hasText: efcmonth })
    .click();

  // Select day
  await page
    .getByRole("button", {
      name: `September ${efcday}, ${efcyear}`,
    })
    .click();

  // next button
  await page.locator('button[mattooltip="move to next step"]').click();

  // ssn number
  await page.locator('[formcontrolname="ssnNumber"]').fill("123-45-6789");

  // federal
  await page.locator('[formcontrolname="federal"]').click();
  await page.getByRole("radio", { name: "No" }).click();

  // depentents
  await page.locator('[formcontrolname="dependants"]').click();
  await page.getByRole("option", { name: "2" }).click();

  // emergency name
  await page.locator('[formcontrolname="emgName"]').fill("gopi");

  // emergency number
  await page.locator('[formcontrolname="emgContact"]').fill("4569871235");

  // address
  await page
    .locator('[formcontrolname="address"]')
    .fill("456 Maple Avenue, Suite 101");

  // city
  await page.locator('[formcontrolname="city"]').fill("Dallas");

  // state
  await page.locator('[formcontrolname="state"]').fill("Texas (TX)");

  // zip code
  await page.locator('[formcontrolname="zipcode"]').fill("75201");

  // next button
  await page.locator('button[mattooltip="move to next step"]').click();

  // leave approved by
  await page.locator('[formcontrolname="leaveApproverId"]').click();
  await page.getByRole("option", { name: "saritha21@yopmail.com" }).click();

  // paid leave
  await page.locator('[formcontrolname="paidLeave"]').click();
  await page.getByRole("option", { name: "5" }).click();

  // No. Of Work Days
  await page.locator('[formcontrolname="daysOffInWeek"]').click();
  await page.getByRole("option", { name: "6" }).nth(1).click();

  // health benefits
  await page.locator('[formcontrolname="helthBenefits"]').click();
  await page.getByRole("option", { name: "Not Eligible" }).click();

  // next button
  await page.getByRole("button", { name: "Next" }).click();

  // submit button
  await page.getByRole("button", { name: "Submit" }).click();

  // send mail checkbox
  await page.getByRole("checkbox", { name: " Send Mail" }).check();
  await page.getByRole("checkbox", { name: " Send Mail" }).uncheck();

  // no button
  await page.getByRole("button", { name: "No" }).click();

  // save & exit button
  // await page.getByRole("button", { name: "Save & Exit" }).click();

  // save & next button
  // await page.getByRole("button", { name: "Save & Next" }).click();

  await page.waitForTimeout(5000);
});

test("HR > New Hire > Inline Filter & Sorting Testing...", async () => {
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

  // name sorting
  // await page.locator("th", { hasText: "NAME" }).click();
  await page.getByRole("columnheader", { name: "NAME " }).first().click();

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

  // select residency status
  await page.getByRole("columnheader", { name: " RESIDENCY STATUS " }).click();
  await page.getByRole("option", { name: "N/A" }).click();

  // close residency status dropdown
  await page.keyboard.press("Escape");

  // personal email sorting
  await page.getByRole("columnheader", { name: "Personal Email " }).click();

  // official email sorting
  await page.getByRole("columnheader", { name: "Official EMAIL " }).click();

  // contact no. sorting
  await page.getByRole("columnheader", { name: "CONTACT " }).click();

  // select store
  await page.getByRole("columnheader", { name: " Store " }).click();
  await page.getByRole("option", { name: "Rajula's East" }).click();
  await page.getByRole("option", { name: "Plano East" }).click();
  await page.getByRole("option", { name: "Valley Ranch" }).click();

  // close store dropdown
  await page.keyboard.press("Escape");

  // select marital status
  await page.getByRole("columnheader", { name: " MARITAL STATUS " }).click();
  // await page.locator("[#mat-option-464]").click();
  await page.getByRole("option", { name: "Married" }).click();

  // close marital status dropdown
  await page.keyboard.press("Escape");

  await page.waitForTimeout(10000);
});

test("HR > New Hire > Pagination Testing...", async () => {
  test.setTimeout(180000);

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
  await page.getByRole("tab", { name: "New Hire " }).click();

  // pagination

  const paginationPart = page
    .getByRole("tabpanel", { name: "New Hire " })
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

/* ================
tests using the POM 
===================*/

import { LoginPage } from "../pages/LoginPage";
import { NewHirePage } from "../pages/NewHirePage";

test(" Add new hire using the POM...", async ({ page }) => {
  const login = new LoginPage(page);
  const newhire = new NewHirePage(page);

  await login.gotoLoginPage();
  await login.login("developer@techroversolutions.com", "Ibhr@2024");

  await newhire.hrmenu();
  await newhire.addbutton();
  await newhire.newhire();
  await newhire.empnm("David");
  await newhire.empdesg();
  await newhire.selectdob("2006", "SEP", "20");
  await newhire.empPerEmail("david@yopmail.com");
  await newhire.paymentMethod();
  await newhire.type();
  await newhire.store();
  await newhire.saveemp();

  await page.waitForTimeout(5000);
});
