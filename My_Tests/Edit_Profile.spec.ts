import { test, expect, Locator, Browser, Page } from "@playwright/test";
import { webkit, chromium, firefox } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/login");
  await page.locator("#mat-input-0").fill("developer@techroversolutions.com");
  await page.locator("#mat-input-1").fill("Ibhr@2024");
  await page.locator("#login").click();

  const title = await page.title();
  console.log("Dashboard Title :-", title);
  expect(title).toEqual("IBHR");
});

test("Edit Profile Testing...", async ({ page }) => {
  // navigate to the edit profile
  await page.locator(".profile-img").click();
  await page.getByRole("menuitem", { name: " Edit Profile" }).click();

  // name field
  await page.locator('[formcontrolname="empName"]').fill("Techrover developer");

  // select dob

  const year = "2006";
  const month = "OCT";
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
      name: `October ${day}, ${year}`,
    })
    .click();

  // select actual dob

  const actYear = "2006";
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

  // select gendder
  await page.getByRole("radio", { name: "Female" }).check();

  // enter personal email address
  await page
    .locator('[formcontrolname="empEmail"]')
    .fill("developer@yopmail.co");

  // select work authorization
  await page.locator('[formcontrolname="empResidency"]').click();
  await page.getByRole("option", { name: "Resident" }).click();

  // enter contact no.
  await page.locator('[formcontrolname="empPhone"]').fill("");

  // enter emergancy contact name
  await page.locator('[formcontrolname="emgName"]').fill("Sanskritiii");

  // enter emergancy contact number
  await page.locator('[formcontrolname="emgContact"]').fill("");

  // select maritual status
  await page.getByText("Married", { exact: true }).click();

  // enter ssn number
  await page.locator('[formcontrolname="ssnNumber"]').fill("777-77-7778");

  // select federal
  await page.getByRole("radio", { name: "yes" }).check();

  // select tax filling options
  await page.getByText("jointly", { exact: true }).click();

  // select dependents
  await page.locator('[formcontrolname="dependants"]').click();
  await page.getByRole("option", { name: "4" }).click();

  // address
  await page.locator('[formcontrolname="address"]').fill("Navratan co.");

  // city
  await page.locator('[formcontrolname="city"]').fill("Ahmedabad");

  // state
  await page.locator('[formcontrolname="state"]').fill("Gujarat");

  // zipcode
  await page.locator('[formcontrolname="zipcode"]').fill("98495");

  // cancel button
  await page.getByRole("button", { name: "Cancel" }).click();
  //   await page.getByRole("button", { name: "No" }).click();
  await page.getByRole("button", { name: "Yes" }).click();

  // save button
  //   await page.getByRole("button", { name: "Save" }).click();
  //   await page.getByRole("button", { name: "No" }).click();
  //   await page.getByRole("button", { name: "Yes" }).click();

  await page.waitForTimeout(10000);
});
