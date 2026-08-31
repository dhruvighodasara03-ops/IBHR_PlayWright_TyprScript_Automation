import { test, expect, Browser, Page, Locator } from "@playwright/test";
import { webkit, chromium, firefox } from "@playwright/test";

test("Manage > Block Dates/Add Block Dates Testing...", async () => {
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

  await page.getByRole("link", { name: " Manage Dates " }).click();

  const dateCell = page.locator("td").filter({
    has: page.locator("h4", { hasText: "26" }),
  });
  await dateCell.hover();
  await expect(dateCell.locator(".addBlock")).toBeVisible();
  await dateCell.locator(".addBlock").click();

  // select store
  //   await page.getByRole("combobox", { name: "Selected" }).click();
  //   await page.getByRole("option", { name: "Valley Ranch " }).click();
  //   await page.getByRole("option", { name: "NFRK " }).click();

  // close store dropdown
  //   await page.getByRole("combobox", { name: "Selected" }).press("Escape");

  // select store
  await page.locator('[formcontrolname="storeId"]').click();
  //   await page.getByRole("option", { name: "Select All " }).click();
  await page.getByRole("checkbox", { name: "Select All " }).check();

  // close select store dropdown
  // await page.locator('[formcontrolname="storeId"]').press("Escape"); => // using this it closes entire modal
  await page.mouse.click(10, 10);

  // select from date
  await page.locator('[formcontrolname="fromDate"]').click();
  await page.locator('button[aria-label="July 26, 2026"]').click();

  // select to date
  await page.locator('[formcontrolname="toDate"]').click();
  await page.locator('button[aria-label="July 26, 2026"]').click();

  // reason
  await page
    .locator('[formcontrolname="title"]')
    .fill("Attendance Verification");

  // ok button
  await page.getByRole("button", { name: "Ok" }).click();

  // cancel button
  //   await page.getByRole("button", { name: "Cancel" }).click();

  await page.waitForTimeout(10000);
});

test("Manage > Update/Delete Block Dates Testing...", async () => {
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

  await page.getByRole("link", { name: " Manage Dates " }).click();

  const festivalCard = page.locator(".festival").filter({
    hasText: "Attendance Verification...",
  });
  await festivalCard.locator(".editBtn").click();

  // select store
  await page.locator('[formcontrolname="storeId"]').click();
  await page.getByRole("option", { name: "NFRK" }).click();
  await page.getByRole("option", { name: "Rajula's East" }).click();
  await page.getByRole("option", { name: "IB Stores" }).click();

  // close store dropdown
  await page.mouse.click(10, 10);

  // select from date
  //   await page.locator('[formcontrolname="fromDate"]').click();
  //   await page.locator('button[aria-label="July 25, 2026"]').click();

  // select to date
  await page.locator('[formcontrolname="toDate"]').click();
  await page.locator('button[aria-label="July 26, 2026"]').click();

  // reason
  await page
    .locator('[formcontrolname="title"]')
    .fill("Attendance Verification...");

  // Save button
  //   await page.getByRole("button", { name: "Save" }).click();

  // cancel button
  //   await page.getByRole("button", { name: "Cancel" }).first().click();

  // delete button
  await page.getByRole("button", { name: "Delete" }).first().click();
  //   await page.getByRole("button", { name: "Cancel" }).nth(1).click();
  await page.getByRole("button", { name: "Delete" }).nth(1).click();

  await page.waitForTimeout(5000);
});

test("Manage > Calendar Event/Add Calendar Events Testing...", async () => {
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

  await page.getByRole("link", { name: " Manage Dates " }).click();

  await page.getByRole("tab", { name: "Calendar Event" }).click();

  // select store
  //   await page.getByRole("combobox", { name: "Selected" }).click();
  //   await page.getByRole("option", { name: "Valley Ranch " }).click();
  //   await page.getByRole("option", { name: "NFRK " }).click();

  // close store dropdown
  //   await page.getByRole("combobox", { name: "Selected" }).press("Escape");

  const dateCell = page.locator("td").filter({
    has: page.locator("h4", { hasText: "26" }),
  });
  await dateCell.hover();
  await expect(dateCell.locator(".addBlock")).toBeVisible();
  await dateCell.locator(".addBlock").click();

  // select date
  await page.locator('[formcontrolname="eventDate"]').click();
  await page.locator('button[aria-label="July 29, 2026"]').click();

  // event name
  await page
    .locator('[formcontrolname="eventName"]')
    .fill("Employee Orientation Program");

  // add department
  await page.locator('[formcontrolname="department"]').fill("Human Resources");

  // select store
  await page.getByRole("combobox", { name: "Select Store" }).click();
  await page.getByRole("checkbox", { name: "Select All " }).check();
  // await page.getByRole("option", { name: "Frisco" }).click();
  // await page.getByRole("option", { name: "Rajula's East" }).click();

  // close store dropdown
  await page.mouse.click(10, 10);

  // select employee
  await page.getByRole("combobox", { name: "Select Employee" }).click();
  await page.getByRole("checkbox", { name: "Select All " }).click();
  // await page.getByRole("option", { name: "TEENA SHAHU" }).click();
  // await page.getByRole("option", { name: "SHREYA SAPKOTA" }).click();
  // await page.getByRole("option", { name: "TTTQ" }).click();
  // await page.getByRole("option", { name: "jenny" }).click();
  // await page.getByRole("option", { name: "TESTING MCKenny " }).click();

  // close store dropdown
  await page.mouse.click(10, 10);

  // note
  await page
    .locator('[formcontrolname="note"]')
    .fill(
      "Orientation session for newly joined employees, including company policies, HR procedures, and workplace guidelines.",
    );

  // cancel button
  // await page.getByRole("button", { name: "Cancel" }).click();

  // ok button
  await page.getByRole("button", { name: "Ok" }).click();

  await page.waitForTimeout(10000);
});

test("Manage > Update/Delete Calendar Events Testing...", async () => {
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

  await page.getByRole("link", { name: " Manage Dates " }).click();
  await page.getByRole("tab", { name: "Calendar Event" }).click();

  const festivalCard = page.locator(".festival").filter({
    hasText: "Employee Orientation Program",
  });
  await festivalCard.locator(".editBtn").click();

  // select date
  await page.locator('[formcontrolname="eventDate"]').click();
  await page.locator('button[aria-label="July 28, 2026"]').click();

  // event name
  await page
    .locator('[formcontrolname="eventName"]')
    .fill("Employee Orientation Program....");

  // add department
  await page.locator('[formcontrolname="department"]').fill("Human Resources");

  // select store
  await page.getByRole("combobox", { name: "Selected" }).nth(1).click();
  // await page.getByRole("checkbox", { name: "Select All " }).check();
  await page.getByRole("option", { name: "Frisco" }).click();
  await page.getByRole("option", { name: "Rajula's East" }).click();
  // await page.locator(".mat-mdc-select-trigger").nth(1).click();

  // close store dropdown
  await page.mouse.click(10, 10);

  // select employee
  await page.getByRole("combobox", { name: "Selected" }).nth(2).click();
  // await page.getByRole("checkbox", { name: "Select All " }).click();
  await page.getByRole("option", { name: "TEENA SHAHU" }).click();
  await page.getByRole("option", { name: "SHREYA SAPKOTA" }).click();
  await page.getByRole("option", { name: "TTTQ" }).click();
  // await page.getByRole("option", { name: "jenny" }).click();
  await page.getByRole("option", { name: "TESTING MCKenny " }).click();

  // close store dropdown
  await page.mouse.click(10, 10);

  // note
  // await page
  //   .locator('[formcontrolname="note"]')
  //   .fill(
  //     "Orientation session for newly joined employees, including company policies, HR procedures, and workplace guidelines.",
  //   );

  // cancel button
  // await page.getByRole("button", { name: "Cancel" }).first().click();

  // submit button
  // await page.getByRole("button", { name: "Submit" }).click();

  // delete button
  await page.getByRole("button", { name: "Delete" }).first().click();
  await page.getByRole("button", { name: "Cancel" }).nth(1).click();
  // await page.getByRole("button", { name: "Delete" }).nth(1).click();

  await page.waitForTimeout(10000);
});

// test("Manage > Festival Calendar/Add Festival Calendar Testing...", async () => {
//   const browser: Browser = await chromium.launch({ headless: false });
//   const page: Page = await browser.newPage();
//   await page.goto("https://qa-ibhr.retailbudget.us/login");

//   const emailid: Locator = page.locator("#mat-input-0");
//   const password: Locator = page.locator("#mat-input-1");
//   const loginbutton: Locator = page.locator("#login");

//   await emailid.fill("developer@techroversolutions.com");
//   await password.fill("Ibhr@2024");
//   await loginbutton.click();

//   const title = await page.title();
//   console.log("Dashboard Title :-", title);
//   expect(title).toEqual("IBHR");

//   await page.getByRole("link", { name: " Manage " }).click();
//   await page.locator(".side-btn").click();

//   await page.getByRole("link", { name: " Manage Dates " }).click();
//   await page.getByRole("tab", { name: "Festival Calendar" }).click();

//   // select store
//   //   await page.getByRole("combobox", { name: "Selected" }).click();
//   //   await page.getByRole("option", { name: "Valley Ranch " }).click();
//   //   await page.getByRole("option", { name: "NFRK " }).click();

//   // close store dropdown
//   //   await page.getByRole("combobox", { name: "Selected" }).press("Escape");

//   // console.log(await page.locator(".calendar-table").count());
//   // console.log(await page.getByText("25", { exact: true }).count());

//   // const calendars = page.locator(".calendar-table");

//   // for (let i = 0; i < (await calendars.count()); i++) {
//   //   console.log(i, await calendars.nth(i).isVisible());
//   // }

//   // const calendars = page.locator(".calendar-table");

//   // console.log(await calendars.nth(0).locator(".addBlock").count());
//   // console.log(await calendars.nth(1).locator(".addBlock").count());

//   // console.log(await calendars.nth(0).textContent());
//   // console.log(await calendars.nth(1).textContent());

//   const festivalSection = page.locator("text=Festival Calendar");

//   await festivalSection
//     .locator("..") // parent
//     .locator(".calendar-table")
//     .locator("td")
//     .filter({
//       has: page.locator("h4", { hasText: /^25$/ }),
//     })
//     .locator(".addBlock")
//     .click();

//   await page.waitForTimeout(10000);
// });
