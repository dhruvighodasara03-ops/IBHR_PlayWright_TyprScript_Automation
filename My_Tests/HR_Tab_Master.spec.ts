import { test, expect, Browser, Page, Locator } from "@playwright/test";
import { webkit, chromium, firefox } from "@playwright/test";

test("HR Master/Edit Employee Testing...", async () => {
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

  await page.getByRole("tab", { name: "Master " }).click();

  /* search */

  //   await page
  //     .getByPlaceholder("Search...")
  //     .pressSequentially("mickney store emp", { delay: 500 });

  /* edit Master employees */

  // await page.locator('li[mattooltip="Edit"]').nth(8).click();
  const employeeRow = page.locator("tr").filter({
    has: page.getByText("abc testttt"),
  });

  await employeeRow.locator('img[src*="edit_botton"]').click();

  // fill emp name
  await page.locator('[formcontrolname="empName"]').fill("abc testttt");

  // select emp designation
  await page.locator('[formcontrolname="empDesignation"]').click();
  await page.getByRole("option", { name: "store manager" }).click();

  // Date Of Birth

  const year = "2000";
  const month = "SEP";
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
      name: `September ${day}, ${year}`,
    })
    .click();

  // Actual Date Of Birth

  const actYear = "2004";
  const actMonth = "OCT";
  const actDay = "8";

  await page.locator('[formcontrolname="empActualDOB"]').click();

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

  // fill emp contact no.
  await page.locator('[formcontrolname="empPhone"]').fill("1478523690");

  // fill Personal Email Address
  await page
    .locator('[formcontrolname="empEmail"]')
    .fill("xyztestttt1@yopmail.com");

  // fill official email address
  await page
    .locator('[formcontrolname="officeEmail"]')
    .fill("xyztestttt1@gmail.com");

  // emp work authorization
  await page.locator('[formcontrolname="empResidency"]').click();
  await page.getByRole("option", { name: "N/A" }).click();

  // emp maritual status
  await page.locator('[formcontrolname="empMarital"]').click();
  await page.getByRole("radio", { name: "Married" }).click();

  // emp gender
  await page.locator('[formcontrolname="empGender"]').click();
  //   await page.locator("#mat-radio-42-input").click();
  await page.getByRole("radio", { name: "Female" }).click();

  // emp type
  await page.locator('[formcontrolname="empType"]').click();
  await page.getByRole("radio", { name: "Back / Stocker Employee" }).click();
  //   await page.locator("#mat-radio-46").click();

  // weekly hours
  await page.locator('[formcontrolname="hour"]').fill("70");

  // select training store
  await page.locator('[formcontrolname="storeId"]').click();
  await page.getByRole("option", { name: "Green Valley Supermarket" }).click();

  // Date Of Joining
  await page.locator('[formcontrolname="DOJ"]').click();
  await page.locator('button[aria-label="July 1, 2026"]').click();

  // select required documents
  await page.locator('[formcontrolname="empRequiredDocuments"]').click();
  //   await page.getByRole("option", { name: " Driver's License " }).click();
  await page.getByRole("option", { name: " Passport photo ID " }).click();
  await page.getByRole("option", { name: " School Student ID " }).click();
  //   await page.getByRole("option", { name: "  Other " }).click();

  // close required documents dropdown
  await page
    .locator('[formcontrolname="empRequiredDocuments"]')
    .press("Escape");

  // select send documents
  //   await page.locator('[formcontrolname="empSendDocuments"]').click();
  //   await page
  //     .getByRole("option", { name: " NON-DISCLOSURE AGREEMENT " })
  //     .click();

  //   // close send documents dropdown
  //   await page.locator('[formcontrolname="empSendDocuments"]').press("Escape");

  // Cancel button
  // await page.getByRole("button", { name: "Cancel" }).click();

  // next button
  await page.getByRole("button", { name: "Next" }).click();

  // fill ssn number
  await page.locator('[formcontrolname="ssnNumber"]').fill("951478362");

  // select federal
  await page.locator('[formcontrolname="federal"]').click();
  await page.getByRole("radio", { name: "Yes" }).click();

  // select tax filling
  await page.locator('[formcontrolname="tax_filling"]').click();
  await page.getByRole("radio", { name: "single" }).click();

  // select dependants
  await page.locator('[formcontrolname="dependants"]').click();
  await page.getByRole("option", { name: "3" }).click();

  // fill emergancy name
  await page.locator('[formcontrolname="emgName"]').fill("gopi");

  // fill emergancy number
  await page.locator('[formcontrolname="emgContact"]').fill("1598746320");

  // fill address
  await page.locator('[formcontrolname="address"]').fill("980 Cedar Lane");

  // fill city
  await page.locator('[formcontrolname="city"]').fill("Irving");

  // fill state
  await page.locator('[formcontrolname="state"]').fill("Texas (TX)");

  // fill zipcode
  await page.locator('[formcontrolname="zipcode"]').fill("75038");

  // next button
  await page.getByRole("button", { name: "Next" }).click();

  // Select Leave Approved by
  await page.locator('[formcontrolname="leaveApproverId"]').click();
  await page.getByRole("option", { name: "hraarti@yopmail.com" }).click();

  // select paid leave
  await page.locator('[formcontrolname="paidLeave"]').click();
  await page.getByRole("option", { name: "5" }).click();

  // select no of day
  await page.locator('[formcontrolname="daysOffInWeek"]').click();
  await page.getByRole("option", { name: "6" }).nth(1).click();

  // select health benefits
  await page.locator('[formcontrolname="helthBenefits"]').click();
  await page.getByRole("option", { name: "Not Eligible" }).click();

  // next button
  await page.getByRole("button", { name: "Next" }).click();

  // submit button
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByRole("button", { name: "No" }).click();
  //   await page.getByRole("button", { name: "Save & Exit" }).click();
  //   await page.getByRole("button", { name: "Save & Next" }).click();

  await page.waitForTimeout(5000);
  // await browser.close();
});

test("HR > Master > Store Transfer Testing...", async () => {
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

  await page.getByRole("tab", { name: "Master " }).click();

  /* store transfer */

  // await page.locator('li[mattooltip="Transfer"]').nth(8).click();

  const employeeRow = page.locator("tr").filter({
    has: page.getByText("abc testttt"),
  });

  await employeeRow.locator('img[src*="transfer.svg"]').click();

  // // select new store
  await page.locator('[formcontrolname="storeId"]').click();
  await page.getByRole("option", { name: "Eldorado" }).click();

  // // select designation
  await page.locator('[formcontrolname="designation"]').click();
  await page.getByRole("option", { name: "product engineere" }).click();

  // // select method of payment
  await page.locator('[formcontrolname="method_of_payment"]').click();
  await page.getByRole("option", { name: "check + cash" }).click();

  // // select pay type
  await page.locator('[formcontrolname="typeOfPay"]').click();
  await page.getByRole("option", { name: "hourly no ot" }).click();

  // // select pay period
  await page.locator('[formcontrolname="payPeriod"]').click();
  await page.getByRole("option", { name: "semi-monthly" }).click();

  // // feel weekly hours
  await page.locator('[formcontrolname="hourRange"]').fill("65");

  // // feel pay rate
  await page.locator('[formcontrolname="payRate"]').fill("1000.00");

  // // select effective date
  // await page.locator('[formcontrolname="raiseDate"]').click();
  // await page.locator('button[aria-label="July 1, 2026"]').click();

  const year = "2026";
  const month = "SEP";
  const day = "8";

  await page.locator('[formcontrolname="raiseDate"]').click();

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

  // // select change reason
  await page.locator('[formcontrolname="reasonId"]').click();
  await page.getByRole("option", { name: "other entity requirement" }).click();

  // // enter note
  await page.locator('[formcontrolname="raiseNote"]').fill("test note...");

  // cancel button
  await page.getByRole("button", { name: "Cancel " }).click();
  await page.getByRole("button", { name: "No" }).click();
  // await page.getByRole("button", { name: "Yes" }).click();

  // save button
  await page.getByRole("button", { name: "Save" }).click();
  // await page.getByRole("button", { name: "No" }).click();
  // await page.getByRole("button", { name: "Yes" }).click();
  await page.getByRole("button", { name: "Cancel" }).nth(1).click();

  await page.waitForTimeout(10000);
});

test("HR > Master > Payment Changes Testing...", async () => {
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

  await page.getByRole("tab", { name: "Master " }).click();

  /* store transfer */

  // await page.locator('li[mattooltip="Transfer"]').nth(8).click();

  const employeeRow = page.locator("tr").filter({
    has: page.getByText("abc testttt"),
  });

  await employeeRow.locator('img[src*="transfer.svg"]').click();

  /* payment changes */
  await page.locator('[formcontrolname="type"]').click();
  await page.getByRole("radio", { name: " Payment Changes " }).click();

  // designation
  await page.locator('[formcontrolname="designation"]').click();
  await page.getByRole("option", { name: "product engineere" }).click();

  // select method of payment
  await page.locator('[formcontrolname="method_of_payment"]').click();
  await page.getByRole("option", { name: "check + cash" }).click();

  // select pay type
  await page.locator('[formcontrolname="typeOfPay"]').click();
  await page.getByRole("option", { name: "salary" }).click();

  // select pay period
  await page.locator('[formcontrolname="payPeriod"]').click();
  await page.getByRole("option", { name: "semi-monthly" }).click();

  // fill weekly hours
  await page.locator('[formcontrolname="hourRange"]').fill("56");

  // fill pay rate
  await page.locator('[formcontrolname="payRate"]').fill("1000.00");

  // select effective date
  // await page.locator('[formcontrolname="raiseDate"]').click();
  // await page.locator('button[aria-label="July 1, 2026"]').click();

  const year = "2026";
  const month = "SEP";
  const day = "8";

  await page.locator('[formcontrolname="raiseDate"]').click();

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

  // fill note
  await page
    .locator('[formcontrolname="raiseNote"]')
    .fill("payment changes....");

  // cancel button
  await page.getByRole("button", { name: "Cancel " }).click();
  await page.getByRole("button", { name: "No" }).click();
  // await page.getByRole("button", { name: "Yes" }).click();

  // save button
  await page.getByRole("button", { name: "Save" }).click();
  await page.getByRole("button", { name: "No" }).click();
  // await page.getByRole("button", { name: "Yes" }).click();

  await page.waitForTimeout(10000);
});

test("HR > Master > Resign Testing...", async () => {
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
  await page.getByRole("tab", { name: "Master " }).click();

  await page.getByRole("heading", { name: "aayushma Paudel " }).click();

  // resign button
  await page.getByRole("button", { name: "Resign" }).click();

  // send mail checkbox
  await page.getByLabel(" Send Mail").uncheck();

  // no button
  await page.getByRole("button", { name: "No" }).click();

  // yes button
  // await page.getByRole("button", { name: "Yes" }).click();

  await page.waitForTimeout(5000);
});

test("HR > Master > Add Debt Testing...", async () => {
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
  await page.getByRole("tab", { name: "Master " }).click();

  await page.getByRole("heading", { name: "abc testttt" }).click();

  await page.getByRole("tab", { name: "Debt" }).click();

  // add debt button
  await page.locator(".addDebt").click();

  // fill amount given
  const amount = page.locator('[formcontrolname="totalAmount"]');

  await amount.click();
  await amount.press("Control+A");
  await amount.press("Backspace");

  await amount.pressSequentially("20", { delay: 100 });

  await amount.press("Tab");

  // fill total recovery amount
  const totalAmount = page.locator('[formcontrolname="totalRecoveryAmount"]');

  await totalAmount.click();
  await totalAmount.press("Control+A");
  await totalAmount.press("Backspace");

  await totalAmount.pressSequentially("25", { delay: 100 });

  await totalAmount.press("Tab");

  // =================== Department Date ===================

  const deptYear = "2026";
  const deptMonth = "OCT";
  const deptDay = "8";

  await page.locator('[formcontrolname="deptDate"]').click();

  // Open year selection
  await page.locator(".mat-calendar-period-button").click();

  // Select year
  await page
    .locator(".mat-calendar-body-cell-content")
    .filter({ hasText: deptYear })
    .click();

  // Select month
  await page
    .locator(".mat-calendar-body-cell-content")
    .filter({ hasText: deptMonth })
    .click();

  // Select day
  await page
    .getByRole("button", {
      name: `October ${deptDay}, ${deptYear}`,
    })
    .click();

  // =================== Return Date ===================

  const returnYear = "2026";
  const returnMonth = "DEC";
  const returnDay = "15";

  await page.locator('[formcontrolname="returnAmountDate"]').click();

  // Open year selection
  await page.locator(".mat-calendar-period-button").click();

  // Select year
  await page
    .locator(".mat-calendar-body-cell-content")
    .filter({ hasText: returnYear })
    .click();

  // Select month
  await page
    .locator(".mat-calendar-body-cell-content")
    .filter({ hasText: returnMonth })
    .click();

  // Select day
  await page
    .getByRole("button", {
      name: `December ${returnDay}, ${returnYear}`,
    })
    .click();

  // select given from
  await page.locator('[formcontrolname="givenFrom"]').click();
  await page.getByRole("option", { name: "Payroll" }).click();

  // enter gaurantor
  await page.locator('[formcontrolname="gaurantor"]').fill("john");

  // select approved by
  await page.locator('[formcontrolname="approveByUserId"]').click();
  await page.getByRole("option", { name: "Techrover developer" }).click();

  // cancel button
  // await page.getByRole("button", { name: "Cancel" }).click();
  // await page.getByRole("button", { name: "No" }).click();
  // await page.getByRole("button", { name: "Yes" }).click();

  // save button
  await page.getByRole("button", { name: "Save" }).click();
  await page.getByRole("button", { name: "No" }).click();
  // await page.getByRole("button", { name: "Yes" }).click();

  await page.waitForTimeout(5000);
});

test("HR > Master > Edit Debt Testing...", async () => {
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
  await page.getByRole("tab", { name: "Master " }).click();

  await page.getByRole("heading", { name: "abc testttt" }).click();
  await page.getByRole("tab", { name: "Debt" }).click();

  const card = page.locator(".debt-data").filter({
    hasText: "Green Valley Supermarket",
  });

  // Click Edit
  await card.locator("a:has-text('Edit')").click();

  //  Click Installment
  // await card.locator("a:has-text('Installment')").click();

  // fill amount given
  const amount = page.locator('[formcontrolname="totalAmount"]');
  await amount.fill("");
  await amount.type("20", { delay: 100 });

  // fill total recovery amount
  const totalAmount = page.locator('[formcontrolname="totalRecoveryAmount"]');
  await totalAmount.fill("");
  await totalAmount.type("25", { delay: 100 });

  // =================== Department Date ===================

  const deptYear = "2026";
  const deptMonth = "OCT";
  const deptDay = "18";

  await page.locator('[formcontrolname="deptDate"]').click();

  // Open year selection
  await page.locator(".mat-calendar-period-button").click();

  // Select year
  await page
    .locator(".mat-calendar-body-cell-content")
    .filter({ hasText: deptYear })
    .click();

  // Select month
  await page
    .locator(".mat-calendar-body-cell-content")
    .filter({ hasText: deptMonth })
    .click();

  // Select day
  await page
    .getByRole("button", {
      name: `October ${deptDay}, ${deptYear}`,
    })
    .click();

  // =================== Return Date ===================

  const returnYear = "2026";
  const returnMonth = "DEC";
  const returnDay = "5";

  await page.locator('[formcontrolname="returnAmountDate"]').click();

  // Open year selection
  await page.locator(".mat-calendar-period-button").click();

  // Select year
  await page
    .locator(".mat-calendar-body-cell-content")
    .filter({ hasText: returnYear })
    .click();

  // Select month
  await page
    .locator(".mat-calendar-body-cell-content")
    .filter({ hasText: returnMonth })
    .click();

  // Select day
  await page
    .getByRole("button", {
      name: `December ${returnDay}, ${returnYear}`,
    })
    .click();

  // select given from
  await page.locator('[formcontrolname="givenFrom"]').click();
  await page.getByRole("option", { name: "Corporate" }).click();

  // enter gaurantor
  await page.locator('[formcontrolname="gaurantor"]').fill("john");

  // select approved by
  await page.locator('[formcontrolname="approveByUserId"]').click();
  await page.getByRole("option", { name: "Techrover developer" }).click();

  // cancel button
  // await page.getByRole("button", { name: "Cancel" }).click();
  // await page.getByRole("button", { name: "No" }).click();
  // await page.getByRole("button", { name: "Yes" }).click();

  // save button
  await page.getByRole("button", { name: "Save" }).click();
  await page.getByRole("button", { name: "No" }).click();
  // await page.getByRole("button", { name: "Yes" }).click();

  await page.waitForTimeout(5000);
});

test("HR > Master > Receive Installment Testing...", async () => {
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
  await page.getByRole("tab", { name: "Master " }).click();

  await page.getByRole("heading", { name: "abc testttt" }).click();
  await page.getByRole("tab", { name: "Debt" }).click();

  const card = page.locator(".debt-data").filter({
    hasText: "Green Valley Supermarket",
  });

  //  Click Installment
  await card.locator("a:has-text('Installment')").click();

  // fill amount
  const amount = page.locator('[formcontrolname="amount"]');

  await amount.click();
  await amount.press("Control+A");
  await amount.press("Backspace");

  await amount.pressSequentially("20", { delay: 100 });

  await amount.press("Tab");

  // select installment date
  // formcontrolname="date"
  const instYear = "2026";
  const instMonth = "JUL";
  const instDay = "27";

  await page.locator('[formcontrolname="date"]').click();

  // Open year selection
  await page.locator(".mat-calendar-period-button").click();

  // Select year
  await page
    .locator(".mat-calendar-body-cell-content")
    .filter({ hasText: instYear })
    .click();

  // Select month
  await page
    .locator(".mat-calendar-body-cell-content")
    .filter({ hasText: instMonth })
    .click();

  // Select day
  await page
    .getByRole("button", {
      name: `July ${instDay}, ${instYear}`,
    })
    .click();

  // select payment mode
  await page.locator('[formcontrolname="paymentMode"]').click();
  await page.getByRole("option", { name: "Cash" }).click();

  // enter receiver name
  await page.locator('[formcontrolname="receivedBy"]').fill("janvi");

  // cancel button
  await page.getByRole("button", { name: "Cancel" }).click();
  await page.getByRole("button", { name: "No" }).click();
  // await page.getByRole("button", { name: "Yes" }).click();

  // save button
  await page.getByRole("button", { name: "Save" }).click();
  // await page.getByRole("button", { name: "No" }).click();
  await page.getByRole("button", { name: "Yes" }).click();

  await page.waitForTimeout(5000);
});

test("HR > Master > Apply Leave Testing...", async () => {
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
  await page.getByRole("tab", { name: "Master " }).click();

  await page.getByRole("heading", { name: "abc testttt" }).click();
  await page.getByRole("tab", { name: " Leave Tracker" }).click();

  // apply leave
  // await page.getByRole("link", { name: " Apply Leave " }).click();
  await page.locator(".addLeave").locator("a:has-text('Apply Leave')").click();

  // select type of leave
  await page.locator('[formcontrolname="leaveType"]').click();
  await page.getByRole("option", { name: "Unpaid Leave" }).click();

  // select from date

  const fromYear = "2026";
  const fromMonth = "SEP";
  const fromDay = "3";

  await page.locator('[formcontrolname="fromDate"]').click();

  // Open year selection
  await page.locator(".mat-calendar-period-button").click();

  // Select year
  await page
    .locator(".mat-calendar-body-cell-content")
    .filter({ hasText: fromYear })
    .click();

  // Select month
  await page
    .locator(".mat-calendar-body-cell-content")
    .filter({ hasText: fromMonth })
    .click();

  // Select day
  await page
    .getByRole("button", {
      name: `September ${fromDay}, ${fromYear}`,
    })
    .click();

  // =================== To Date ===================

  const toYear = "2026";
  const toMonth = "SEP";
  const toDay = "3";

  await page.locator('[formcontrolname="toDate"]').click();

  // Open year selection
  await page.locator(".mat-calendar-period-button").click();

  // Select year
  await page
    .locator(".mat-calendar-body-cell-content")
    .filter({ hasText: toYear })
    .click();

  // Select month
  await page
    .locator(".mat-calendar-body-cell-content")
    .filter({ hasText: toMonth })
    .click();

  // Select day
  await page
    .getByRole("button", {
      name: `September ${toDay}, ${toYear}`,
    })
    .click();

  // enter note
  await page
    .locator('[formcontrolname="note"]')
    .fill("For The Personal Reason...");

  //cancel button
  await page.getByRole("button", { name: "Cancel" }).click();
  await page.getByRole("button", { name: "No" }).click();
  // await page.getByRole("button", { name: "Yes" }).click();

  // apply button
  await page.getByRole("button", { name: "Apply" }).click();
  // await page.getByRole("button", { name: "No" }).click();
  await page.getByRole("button", { name: "Yes" }).click();

  await page.waitForTimeout(5000);
});

test("HR > Master > Add Entity & Pay Rate Testing...", async () => {
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
  await page.getByRole("tab", { name: "Master " }).click();

  await page.getByRole("heading", { name: "abc testttt" }).click();

  await page.getByRole("button", { name: "ADD" }).click();

  // select store
  await page.locator('[formcontrolname="storeId"]').click();
  await page.getByRole("option", { name: "Carrollton" }).click();

  // select designation
  await page.locator('[formcontrolname="designation"]').click();
  await page.getByRole("option", { name: "product engineere" }).click();

  // select method of payment
  await page.locator('[formcontrolname="method_of_payment"]').click();
  await page.getByRole("option", { name: "vendor check" }).click();

  // select pay rate
  await page.locator('[formcontrolname="typeOfPay"]').click();
  await page.getByRole("option", { name: "salary" }).click();

  // select pay period
  await page.locator('[formcontrolname="payPeriod"]').click();
  await page.getByRole("option", { name: "semi-monthly" }).click();

  // enter weekly hours
  await page.locator('[formcontrolname="hourRange"]').fill("65");

  // enter pay rate
  // await page.locator('[formcontrolname="payRate"]').fill("400");
  const amount = page.locator('[formcontrolname="payRate"]');
  await amount.fill("");
  await amount.type("200", { delay: 100 });

  // // select from date
  const fromYear = "2026";
  const fromMonth = "JUN";
  const fromDay = "24";

  await page.locator('[formcontrolname="raiseDate"]').click();

  // Open year selection
  await page.locator(".mat-calendar-period-button").click();

  // Select year
  await page
    .locator(".mat-calendar-body-cell-content")
    .filter({ hasText: fromYear })
    .click();

  // Select month
  await page
    .locator(".mat-calendar-body-cell-content")
    .filter({ hasText: fromMonth })
    .click();

  // Select day
  await page
    .getByRole("button", {
      name: `June ${fromDay}, ${fromYear}`,
    })
    .click();

  // =================== To Date ===================

  const toYear = "2026";
  const toMonth = "JUL";
  const toDay = "28";

  await page.locator('[formcontrolname="raiseEndDate"]').click();

  // Open year selection
  await page.locator(".mat-calendar-period-button").click();

  // Select year
  await page
    .locator(".mat-calendar-body-cell-content")
    .filter({ hasText: toYear })
    .click();

  // Select month
  await page
    .locator(".mat-calendar-body-cell-content")
    .filter({ hasText: toMonth })
    .click();

  // Select day
  await page
    .getByRole("button", {
      name: `July ${toDay}, ${toYear}`,
    })
    .click();

  // select transfer reason
  await page.locator('[formcontrolname="reasonId"]').click();
  await page.getByRole("option", { name: "transfer" }).click();

  // enter note
  // await page.locator('[formcontrolname="raiseNote"]').fill("");

  // cancel button
  await page.getByRole("button", { name: "Cancel" }).click();
  await page.getByRole("button", { name: "No" }).click();
  // await page.getByRole("button", { name: "Yes" }).click();

  // save button
  await page.getByRole("button", { name: "Save" }).click();
  // await page.getByRole("button", { name: "No" }).click();
  await page.getByRole("button", { name: "Yes" }).click();

  await page.waitForTimeout(5000);
});

test("HR > Master > Inline Filter & Sorting Testing...", async () => {
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
  await page.getByRole("tab", { name: "Master " }).click();

  // name sorting
  // await page.locator("th", { hasText: "NAME" }).click();
  await page.getByRole("columnheader", { name: "NAME" }).click();

  // employee id sorting
  // await page.locator("th", { hasText: "Employee Id " }).click();
  await page.getByRole("columnheader", { name: "Employee Id " }).click();

  // select designation
  await page.getByRole("columnheader", { name: " Designation " }).click();
  await page.getByRole("option", { name: " accounting " }).click();
  await page.getByRole("option", { name: " general manager " }).click();
  await page.getByRole("option", { name: " store manager " }).click();
  await page.getByRole("option", { name: " warehouse associate " }).click();

  // close designation dropdown
  await page.keyboard.press("Escape");

  // pay rate sorting
  await page.getByRole("columnheader", { name: "Pay Rate " }).click();

  // date of joining sorting
  await page.getByRole("columnheader", { name: "Date of Joining " }).click();

  // select work authorization
  await page.getByRole("columnheader", { name: " Work Authorization" }).click();
  await page.getByRole("option", { name: "Visa" }).click();
  await page.getByRole("option", { name: "N/A" }).click();

  // close work authorization dropdown
  await page.keyboard.press("Escape");

  // contact no. sorting
  await page.getByRole("columnheader", { name: "CONTACT No. " }).click();

  // personal email sorting
  await page.getByRole("columnheader", { name: "Personal Email " }).click();

  // official email sorting
  await page.getByRole("columnheader", { name: "Official EMAIL " }).click();

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

test("HR > Master > Pagination Testing....", async () => {
  test.setTimeout(180000);

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
  await page.getByRole("tab", { name: "Master " }).click();

  //  pagination

  const paginationPart = page
    .getByRole("tabpanel", { name: "Master " })
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
=================== */

/*  Store Transfer using the POM */
import { LoginPage } from "../pages/LoginPage";
import { MasterPage } from "../pages/MasterPage";
import { StoreTransferPage } from "../pages/StoreTransferPage";

test("HR > Master > Store Transfer Testing", async ({ page }) => {
  const login = new LoginPage(page);
  const master = new MasterPage(page);
  const transfer = new StoreTransferPage(page);

  await login.gotoLoginPage();

  await login.login("developer@techroversolutions.com", "IBHR@qa2026");

  await master.openMaster();

  await master.openStoreTransfer("abc testttt");

  await transfer.selectStore("Eldorado");
  await transfer.selectDesignation("product engineere");
  await transfer.selectPaymentMethod("check + cash");
  await transfer.selectPayType("hourly no ot");
  await transfer.selectPayPeriod("semi-monthly");
  await transfer.enterWeeklyHours("65");
  await transfer.enterPayRate("1000.00");
  await transfer.selectEffectiveDate("July 1, 2026");
  await transfer.selectReason("other entity requirement");
  await transfer.enterNote("test note...");

  await transfer.clickCancel();
  await transfer.clickNo();

  await transfer.clickSave();
  // await transfer.clickYes();

  await page.waitForTimeout(1000);
});

/* Payment Changes using the POM */
// import { test, expect } from "@playwright/test";
// import { LoginPage } from "../pages/LoginPage";
// import { MasterPage } from "../pages/MasterPage";
// import { StoreTransferPage } from "../pages/StoreTransferPage";

test("HR > Master > Payment Changes Testing....", async ({ page }) => {
  test.setTimeout(180000);

  // Create Page Objects
  const login = new LoginPage(page);
  const master = new MasterPage(page);
  const transfer = new StoreTransferPage(page);

  // Login
  await login.gotoLoginPage();
  await login.login("developer@techroversolutions.com", "IBHR@qa2026");

  // Verify Dashboard
  await expect(page).toHaveTitle("IBHR");

  // Navigate to HR > Master
  await master.openMaster();

  // Open Transfer popup for employee
  await master.openStoreTransfer("abc testttt");

  // Select Payment Changes
  await transfer.selectPaymentChanges();

  // Fill Payment Changes Form
  await transfer.selectDesignation("product engineere");

  await transfer.selectPaymentMethod("check + cash");

  await transfer.selectPayType("salary");

  await transfer.selectPayPeriod("semi-monthly");

  await transfer.enterWeeklyHours("56");

  await transfer.enterPayRate("1000.00");

  await transfer.selectEffectiveDate("July 1, 2026");

  await transfer.enterNote("payment changes....");

  // Cancel
  await transfer.clickCancel();

  await transfer.clickNo();

  // Save
  await transfer.clickSave();

  await transfer.clickNo();
});

// /* Employee Resign Using The POM */
// import { test, expect } from "@playwright/test";
// import { LoginPage } from "../pages/LoginPage";
// import { MasterPage } from "../pages/MasterPage";

test("HR > Master > Resign Testing....", async ({ page }) => {
  test.setTimeout(180000);

  // Create Page Objects
  const login = new LoginPage(page);
  const master = new MasterPage(page);

  // Login
  await login.gotoLoginPage();

  await login.login("developer@techroversolutions.com", "IBHR@qa2026");

  // Verify Dashboard
  await expect(page).toHaveTitle("IBHR");

  // Navigate to HR > Master
  await master.openMaster();

  // Open Employee Details
  await master.openEmployee("aayushma Paudel ");

  // Click Resign
  await master.clickResign();

  // Uncheck Send Mail checkbox
  await master.uncheckSendMail();

  // Click No on confirmation popup
  await master.clickNo();

  // If you want to confirm resignation
  // await master.clickYes();

  await page.waitForTimeout(10000);
});
