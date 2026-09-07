import { test, expect, Browser, Page, Locator } from "@playwright/test";
import { webkit, chromium, firefox } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/login");
  const emailid: Locator = page.locator("#mat-input-0");
  const password: Locator = page.locator("#mat-input-1");
  const loginbutton: Locator = page.locator("#login");

  await emailid.fill("developer@techroversolutions.com");
  await password.fill("IBHR@qa2026");
  await loginbutton.click();

  const title = await page.title();
  console.log("Dashboard Title :-", title);
  expect(title).toEqual("IBHR");
});

test("Add Announcement", async ({ page }) => {
  await page.getByRole("link", { name: " Announcement " }).click();

  // Add new announcement
  await page.getByRole("button", { name: " New Announcement" }).click();

  // store selection
  await page.locator('[formcontrolname="store_id"]').click();
  await page.getByRole("option", { name: "Lewisville" }).click();

  // close store selection dropdown
  await page.locator('[formcontrolname="store_id"]').press("Escape");

  // add announcement message
  await page
    .locator(".angular-editor-textarea")
    .fill(" Announcement For Lewisville Store...");

  // post button
  await page.getByRole("button", { name: "Post" }).click();

  await page.waitForTimeout(15000);
});

test("Update Announcement", async ({ page }) => {
  await page.getByRole("link", { name: " Announcement " }).click();

  // Update announcement

  const card = page
    .locator(".post")
    .filter({
      hasText: "@Lewisville",
    })
    .first();

  await expect(card).toBeVisible();

  // Hover to make Edit/Delete icons visible
  await card.hover();

  const editButton = card.locator(".edit-delete a").first();

  await expect(editButton).toBeVisible();
  await editButton.click();

  // store selection
  await page.locator('[formcontrolname="store_id"]').click();
  // await page.getByRole("option", { name: "Lewisville" }).click();

  // close store selection dropdown
  await page.locator('[formcontrolname="store_id"]').press("Escape");

  // add announcement message
  await page
    .locator(".angular-editor-textarea")
    .fill("Demo Announcement For Lewisville Store...");

  // post button
  await page.getByRole("button", { name: "Post" }).click();

  await page.waitForTimeout(5000);
});

test("Delete Announcement", async ({ page }) => {
  await page.getByRole("link", { name: " Announcement " }).click();

  // delete announcement

  // Wait for announcements to load
  await page.waitForTimeout(3000);
  const card = page
    .locator(".post")
    .filter({
      hasText: "@Lewisville",
    })
    .first();

  await card.hover();

  await card.locator("img[src*='post_delete.svg']").click();

  // await page.locator(".no-btn").click();
  await page.getByRole("button", { name: "yes" }).click();

  await page.waitForTimeout(10000);
});
