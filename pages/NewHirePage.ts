import { Page, Locator } from "@playwright/test";

export class NewHirePage {
  readonly page: Page;
  readonly hrMenu: Locator;
  readonly addButton: Locator;
  readonly newHireButton: Locator;
  readonly empName: Locator;
  readonly empDesignation: Locator;
  readonly empDOB: Locator;
  readonly empPersonalEmail: Locator;
  readonly empMethodOfPayment: Locator;
  readonly empType: Locator;
  readonly storeLocation: Locator;
  readonly cancel: Locator;
  readonly save: Locator;

  constructor(page: Page) {
    this.page = page;
    this.hrMenu = page.getByRole("link", { name: "HR" });
    this.addButton = page.getByRole("button", { name: "Add" });
    this.newHireButton = page.getByRole("menuitem", { name: "New Hire" });
    this.empName = page.locator('[formcontrolname="empName"]');
    this.empDesignation = page.locator('[formcontrolname="empDesignation"]');
    this.empDOB = page.locator('[formcontrolname="empDOB"]');
    this.empPersonalEmail = page.locator('[formcontrolname="empEmail"]');
    this.empMethodOfPayment = page.locator(
      '[formcontrolname="method_of_payment"]',
    );
    this.empType = page.locator('[formcontrolname="empType"]');
    this.storeLocation = page.locator('[formcontrolname="storeId"]');
    this.cancel = page.getByRole("button", { name: "Cancel" });
    this.save = page.getByRole("button", { name: "Save" });
  }

  async hrmenu() {
    await this.hrMenu.click();
  }

  async addbutton() {
    await this.addButton.click();
  }

  async newhire() {
    await this.newHireButton.click();
  }

  async empnm(nm: string) {
    await this.empName.fill(nm);
  }

  async empdesg() {
    await this.empDesignation.click();
    await this.page.getByRole("option", { name: "stocker" }).click();
  }

  async selectdob(year: string, month: string, day: string) {
    console.log("Open calendar");
    await this.empDOB.click();

    console.log("Click period button");
    await this.page.locator(".mat-calendar-period-button").click();

    console.log("Select year");
    await this.page
      .locator(".mat-calendar-body-cell-content")
      .filter({ hasText: year })
      .click();

    console.log("Select month");
    await this.page
      .locator(".mat-calendar-body-cell-content")
      .filter({ hasText: month })
      .click();

    console.log("Select day");
    await this.page
      .locator(".mat-calendar-body-cell-content")
      .filter({ hasText: day })
      .click();

    console.log("Done");
  }

  async empPerEmail(email: string) {
    await this.empPersonalEmail.fill(email);
  }

  async paymentMethod() {
    await this.empMethodOfPayment.click();
    await this.page.getByRole("option", { name: "Check + Cash" }).click();
  }

  async type() {
    await this.empType.click();
    await this.page
      .getByRole("radio", { name: "Back / Stocker Employee" })
      .click();
  }

  async store() {
    await this.storeLocation.click();
    await this.page.getByRole("option", { name: "Cedar Park" }).click();
  }

  async cancelSaveEmp() {
    await this.cancel.click();
    await this.page.getByRole("button", { name: "No" }).click();
    // await this.page.getByRole("button", { name: "Yes" }).click();
  }

  async saveemp() {
    await this.save.click();
    await this.page.getByRole("button", { name: "No" }).click();
    // await this.page.getByRole("button", { name: "Save & Exit" }).click();
  }
}
