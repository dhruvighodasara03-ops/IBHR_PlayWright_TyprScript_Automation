import { test, expect, Browser, Page, Locator } from "@playwright/test";
import { webkit, chromium, firefox } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/login");
  await page
    .locator('[formcontrolname="email"]')
    .fill("developer@techroversolutions.com");
  await page.locator('[formcontrolname="password"]').fill("IBHR@qa2026");
  await page.getByRole("button", { name: "LOGIN" }).click();

  const title = await page.title();
  console.log("Dashboard Title :-", title);
  expect(title).toEqual("IBHR");
});

test("FAQ/ADD FAQ Testing...", async ({ page }) => {
  await page.locator('img[src*="helpdesk.svg"]').click();

  // search
  // await page
  //   .getByPlaceholder("Search...")
  //   .pressSequentially("how add budget ?", { delay: 300 });

  // add new button
  await page.getByRole("button", { name: "Add New" }).nth(0).click();

  // add question
  await page
    .locator('[formcontrolname="question"]')
    .fill("How do I update my profile information?");

  // add answer
  await page
    .locator(".angular-editor-textarea")
    .fill(
      "1.Go to Profile. 2.Click Edit Profile. 3.Update the required details. 4.Click Save.",
    );

  // cancel button
  // await page.getByRole("button", { name: "Cancel" }).click();

  // save button
  await page.getByRole("button", { name: "Save" }).click();
  console.log("Question Added Successfully.....");

  await page.waitForTimeout(10000);
  // await page.close();
});

test("Update FAQ Testing....", async ({ page }) => {
  await page.locator('img[src*="helpdesk.svg"]').click();

  // edit icon
  const faq = page.locator("mat-expansion-panel").filter({
    has: page.getByText("How do I update my profile information?"),
  });

  // Expand the FAQ
  await faq.locator("mat-expansion-panel-header").click();

  // Wait for the edit icon to appear
  await expect(faq.locator(".svg-inline")).toBeVisible();

  // Click the edit icon
  await faq.locator(".svg-inline").click();

  // add questions
  // await page.locator('[formcontrolname="question"]').fill("");

  // add answer
  await page
    .locator(".angular-editor-textarea")
    .fill(
      "1.Login to your profile. 2.Go to Profile. 3.Click Edit Profile. 4.Update the required details. 5.Click Save.",
    );

  // cancel button
  // await page.getByRole("button", { name: "Cancel" }).click();

  // save button
  await page.getByRole("button", { name: "Save" }).click();
  console.log("Question Update Successfully....");

  await page.waitForTimeout(10000);
  // await browser.close();
});

test("Delete FAQ Testing...", async ({ page }) => {
  await page.locator('img[src*="helpdesk.svg"]').click();

  // delete icon
  const faq = page.locator("mat-expansion-panel").filter({
    has: page.getByText("How do I update my profile information?"),
  });

  // Expand the FAQ
  await faq.locator("mat-expansion-panel-header").click();

  await expect(faq.locator('img[src*="delete-helpdesk.svg"]')).toBeVisible();

  // click the delete icon
  await faq.locator('img[src*="delete-helpdesk.svg"]').click();

  // cancel button
  // await page.getByRole("button", { name: "Cancel" }).click();

  // delete button
  await page.getByRole("button", { name: "Delete" }).click();
  console.log("Question Deleted Successfully.....");

  await page.waitForTimeout(10000);
});

// video
test("FAQ > How To Use/Add How To Use Testing...", async ({ page }) => {
  await page.locator('img[src*="helpdesk.svg"]').click();

  await page.getByRole("tab", { name: "How to use" }).click();

  // search
  // await page
  //   .getByPlaceholder("Search...")
  //   .pressSequentially("How to change payment method", { delay: 300 });

  // add new
  await page.getByRole("button", { name: "Add New" }).nth(0).click();

  // video title
  await page
    .locator('[formcontrolname="title"]')
    .fill("How do I check my leave balance?");

  // upload video
  // const filepath =
  //   "C:/Users/LENOVO/Videos/Screen Recordings/Screen Recording 2026-07-27 033207.mp4";
  const filepath =
    "C:/Users/LENOVO/Videos/Screen Recordings/file_example_MP4_480_1_5MG.mp4";

  await page.locator('input[type="file"]').setInputFiles(filepath);

  // const uploadedFile = page.locator(".uploaded-box", {
  //   has: page.getByText("Screen Recording 2026-06-22 064343.mp4"),
  // });

  // Deselect file
  // await page.locator("img[src*='delete.svg']").click();

  // cancel button
  await page.getByRole("button", { name: "Cancel" }).click();

  // save button
  // await page.getByRole("button", { name: "Save" }).click();

  await page.waitForTimeout(10000);
});
