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
});

test.afterEach(async ({ page }) => {
  await page.locator(".profile-img").click();
  await page.getByRole("menuitem", { name: " Log Out" }).click();
});

test("HR > Leave Tracker > All Leave Testing...", async ({ page }) => {
  const title = await page.title();
  console.log("Dashboard Title :-", title);
  expect(title).toEqual("IBHR");

  await page.getByRole("link", { name: "HR" }).click();

  await page.locator(".side-btn").click();

  await page.getByRole("link", { name: " Leave Tracker " }).click();

  await page
    .getByPlaceholder("Search...")
    .pressSequentially("mickney store emp", { delay: 500 });

  // select year
  await page.locator(".yearSelect").selectOption("2025");

  //select month
  await page.locator(".monthSelect").selectOption("Jul ");

  // export
  await page.getByRole("button", { name: " Export " }).click();
  await page.getByRole("button", { name: "No" }).click();
  // await page.getByRole("button", { name: "Yes" }).click();

  await page.waitForTimeout(5000);
});

test("HR > Leave Tracker > Pending Leave Testing...", async ({ page }) => {
  const title = await page.title();
  console.log("Dashboard Title :-", title);
  expect(title).toEqual("IBHR");

  await page.getByRole("link", { name: "HR" }).click();

  await page.locator(".side-btn").click();

  await page.getByRole("link", { name: " Leave Tracker " }).click();
  await page.getByRole("tab", { name: "Pending " }).click();

  await page
    .getByPlaceholder("Search...")
    .pressSequentially("mickney store emp", { delay: 100 });

  // select year
  await page.locator(".yearSelect").selectOption("2024");

  //select month
  await page.locator(".monthSelect").selectOption("Dec ");

  // export
  await page.getByRole("button", { name: " Export " }).click();
  await page.getByRole("button", { name: "No" }).click();
  //   await page.getByRole("button", { name: "Yes" }).click();

  await page.waitForTimeout(5000);
});

test("HR > Leave Tracker > Approved Leave Testing...", async ({ page }) => {
  const title = await page.title();
  console.log("Dashboard Title :-", title);
  expect(title).toEqual("IBHR");

  await page.getByRole("link", { name: "HR" }).click();

  await page.locator(".side-btn").click();

  await page.getByRole("link", { name: " Leave Tracker " }).click();

  await page.getByRole("tab", { name: "Approved " }).click();

  await page
    .getByPlaceholder("Search...")
    .pressSequentially("mickney store emp", { delay: 100 });

  // select year
  await page.locator(".yearSelect").selectOption("2024");

  //select month
  await page.locator(".monthSelect").selectOption("Jan ");

  // export
  await page.getByRole("button", { name: " Export " }).click();
  await page.getByRole("button", { name: "No" }).click();
  //   await page.getByRole("button", { name: "Yes" }).click();

  await page.waitForTimeout(5000);
});

test("HR > Leave Tracker > Rejected Leave Testing...", async ({ page }) => {
  const title = await page.title();
  console.log("Dashboard Title :-", title);
  expect(title).toEqual("IBHR");

  await page.getByRole("link", { name: "HR" }).click();

  await page.locator(".side-btn").click();

  await page.getByRole("link", { name: " Leave Tracker " }).click();

  await page.getByRole("tab", { name: "Rejected " }).click();

  await page
    .getByPlaceholder("Search...")
    .pressSequentially("mickney store emp", { delay: 100 });

  // select year
  await page.locator(".yearSelect").selectOption("2024");

  //select month
  await page.locator(".monthSelect").selectOption("Jan ");

  // export
  await page.getByRole("button", { name: " Export " }).click();
  await page.getByRole("button", { name: "No" }).click();
  //   await page.getByRole("button", { name: "Yes" }).click();

  await page.waitForTimeout(5000);
});

test("HR > Leave Tracker > Canceled Leave Testing...", async ({ page }) => {
  const title = await page.title();
  console.log("Dashboard Title :-", title);
  expect(title).toEqual("IBHR");

  await page.getByRole("link", { name: "HR" }).click();

  await page.locator(".side-btn").click();

  await page.getByRole("link", { name: " Leave Tracker " }).click();

  await page.getByRole("tab", { name: "Canceled " }).click();

  await page
    .getByPlaceholder("Search...")
    .pressSequentially("mickney store emp", { delay: 100 });

  // select year
  await page.locator(".yearSelect").selectOption("2025");

  //select month
  await page.locator(".monthSelect").selectOption("Feb ");

  // export
  await page.getByRole("button", { name: " Export " }).click();
  await page.getByRole("button", { name: "No" }).click();
  //   await page.getByRole("button", { name: "Yes" }).click();

  await page.waitForTimeout(5000);
});

test("HR > Leave Tracker > All Leave Inline Sorting & Filter Testing...", async ({
  page,
}) => {
  const title = await page.title();
  console.log("Dashboard Title :-", title);
  expect(title).toEqual("IBHR");

  await page.getByRole("link", { name: "HR" }).click();

  await page.locator(".side-btn").click();

  await page.getByRole("link", { name: " Leave Tracker " }).click();

  // name sorting
  await page.getByRole("columnheader", { name: "NAME " }).click();

  // select hr
  await page.getByRole("columnheader", { name: " HR Category " }).click();
  await page.getByRole("option", { name: "AARTHI KOTHARI" }).click();
  await page.getByRole("option", { name: "dhanashree nair" }).click();

  // close hr dropdown
  await page.keyboard.press("Escape");

  // select store
  await page.getByRole("columnheader", { name: " Store " }).click();
  await page.getByRole("option", { name: "Valley Ranch" }).click();
  await page.getByRole("option", { name: "South Irving" }).click();
  await page.getByRole("option", { name: "Carrollton" }).click();

  // close store dropdown
  await page.keyboard.press("Escape");

  await page.waitForTimeout(5000);
});

test("HR > Leave Tracker > Pending Leave Inline Sorting & Filter Testing...", async ({
  page,
}) => {
  const title = await page.title();
  console.log("Dashboard Title :-", title);
  expect(title).toEqual("IBHR");

  await page.getByRole("link", { name: "HR" }).click();

  await page.locator(".side-btn").click();

  await page.getByRole("link", { name: " Leave Tracker " }).click();
  await page.getByRole("tab", { name: "Pending " }).click();

  // name sorting
  await page.getByRole("columnheader", { name: "NAME " }).click();

  // select hr
  await page.getByRole("columnheader", { name: " HR Category " }).click();
  await page.getByRole("option", { name: "AARTHI KOTHARI" }).click();
  await page.getByRole("option", { name: "dhanashree nair" }).click();
  await page.getByRole("option", { name: "ajit pattepu" }).click();

  // close hr dropdown
  await page.keyboard.press("Escape");

  // select store
  await page.getByRole("columnheader", { name: " Store " }).click();
  await page.getByRole("option", { name: "Valley Ranch" }).click();
  await page.getByRole("option", { name: "South Irving" }).click();
  await page.getByRole("option", { name: "Carrollton" }).click();

  // close store dropdown
  await page.keyboard.press("Escape");

  await page.waitForTimeout(5000);
});

test("HR > Leave Tracker > Approved Leave Inline Sorting & Filter Testing...", async ({
  page,
}) => {
  const title = await page.title();
  console.log("Dashboard Title :-", title);
  expect(title).toEqual("IBHR");

  await page.getByRole("link", { name: "HR" }).click();

  await page.locator(".side-btn").click();

  await page.getByRole("link", { name: " Leave Tracker " }).click();
  await page.getByRole("tab", { name: "Approved " }).click();

  // name sorting
  await page.getByRole("columnheader", { name: "NAME " }).click();

  // select hr
  await page.getByRole("columnheader", { name: " HR Category " }).click();
  await page.getByRole("option", { name: "AARTHI KOTHARI" }).click();
  await page.getByRole("option", { name: "dhanashree nair" }).click();
  await page.getByRole("option", { name: "ajit pattepu" }).click();

  // close hr dropdown
  await page.keyboard.press("Escape");

  // select store
  await page.getByRole("columnheader", { name: " Store " }).click();
  await page.getByRole("option", { name: "Valley Ranch" }).click();
  await page.getByRole("option", { name: "South Irving" }).click();
  await page.getByRole("option", { name: "Carrollton" }).click();

  // close store dropdown
  await page.keyboard.press("Escape");

  await page.waitForTimeout(5000);
});

test("HR > Leave Tracker > Rejected Leave Inline Sorting & Filter Testing...", async ({
  page,
}) => {
  const title = await page.title();
  console.log("Dashboard Title :-", title);
  expect(title).toEqual("IBHR");

  await page.getByRole("link", { name: "HR" }).click();

  await page.locator(".side-btn").click();

  await page.getByRole("link", { name: " Leave Tracker " }).click();
  await page.getByRole("tab", { name: "Rejected " }).click();

  // name sorting
  await page.getByRole("columnheader", { name: "NAME " }).click();

  // select hr
  await page.getByRole("columnheader", { name: " HR Category " }).click();
  await page.getByRole("option", { name: "AARTHI KOTHARI" }).click();
  await page.getByRole("option", { name: "dhanashree nair" }).click();
  await page.getByRole("option", { name: "ajit pattepu" }).click();

  // close hr dropdown
  await page.keyboard.press("Escape");

  // select store
  await page.getByRole("columnheader", { name: " Store " }).click();
  await page.getByRole("option", { name: "Valley Ranch" }).click();
  await page.getByRole("option", { name: "South Irving" }).click();
  await page.getByRole("option", { name: "Carrollton" }).click();

  // close store dropdown
  await page.keyboard.press("Escape");

  await page.waitForTimeout(5000);
});

test("HR > Leave Tracker > Cancelled Leave Inline Sorting & Filter Testing...", async ({
  page,
}) => {
  const title = await page.title();
  console.log("Dashboard Title :-", title);
  expect(title).toEqual("IBHR");

  await page.getByRole("link", { name: "HR" }).click();

  await page.locator(".side-btn").click();

  await page.getByRole("link", { name: " Leave Tracker " }).click();
  await page.getByRole("tab", { name: "Canceled " }).click();

  // name sorting
  await page.getByRole("columnheader", { name: "NAME " }).click();

  // select hr
  await page.getByRole("columnheader", { name: " HR Category " }).click();
  await page.getByRole("option", { name: "AARTHI KOTHARI" }).click();
  await page.getByRole("option", { name: "dhanashree nair" }).click();
  await page.getByRole("option", { name: "ajit pattepu" }).click();

  // close hr dropdown
  await page.keyboard.press("Escape");

  // select store
  await page.getByRole("columnheader", { name: " Store " }).click();
  await page.getByRole("option", { name: "Valley Ranch" }).click();
  await page.getByRole("option", { name: "South Irving" }).click();
  await page.getByRole("option", { name: "Carrollton" }).click();

  // close store dropdown
  await page.keyboard.press("Escape");

  await page.waitForTimeout(5000);
});
