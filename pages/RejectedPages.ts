import { Page, Locator } from "@playwright/test";

export class RejectedPages {
  readonly page: Page;
  readonly hrMenu: Locator;
  readonly rejectedTab: Locator;
  readonly employeeTable: Locator;
  readonly editButton: Locator;
  readonly empName: Locator;
  readonly empDesg;
  readonly empDOB;
  readonly empPersonalEmail;
  readonly empMethodOfPayment;
  readonly empType;
  readonly store;
  readonly cancel;
  readonly save;

  constructor(page: Page) {
    this.page = page;
    this.hrMenu = page.getByRole("link", { name: "HR" });
    this.rejectedTab = page.getByRole("tab", { name: "Rejected  " });
    this.employeeTable = page.locator("table.table.table-borderless").nth(1);
    this.editButton = page.getByRole("button", { name: "Edit" });
    this.empName = page.locator('[formcontrolname="empName"]');
    this.empDesg = page.locator('[formcontrolname="empDesignation"]');
    this.empDOB = page.locator('[formcontrolname="empDOB"]');
    this.empPersonalEmail = page.locator('[formcontrolname="empEmail"]');
    this.empMethodOfPayment = page.locator(
      '[formcontrolname="method_of_payment"]',
    );
    this.empType = page.locator('[formcontrolname="empType"]');
    this.store = page.locator('[formcontrolname="storeId"]');
    this.cancel = page.getByRole("button", { name: "Cancel" });
    this.save = page.getByRole("button", { name: "Save" });
  }

  async hrmenu() {
    await this.hrMenu.click();
  }
  async reject() {
    await this.rejectedTab.click();
  }
  async getEmployeeRow(employeeName: string) {
    return this.employeeTable
      .locator("tbody tr")
      .filter({
        has: this.page.locator("h6.full_name", {
          hasText: employeeName,
        }),
      })
      .click();
  }

  async edit() {
    this.editButton.click();
  }

  async empnm(nm: string) {
    await this.empName.fill(nm);
  }

  async selectdesignation() {
    await this.empDesg.click();
    await this.page.getByRole("option", { name: "Loan Auditor" }).click();
  }

  async selectDob(year: string, month: string, day: string) {
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

  async enterEmail(email: string) {
    await this.empPersonalEmail.fill(email);
  }

  async selectPaymentMethod() {
    await this.empMethodOfPayment.click();
    await this.page.getByRole("option", { name: "Check + Cash" }).click();
  }

  async selectEmpType() {
    await this.empType.click();
    await this.page
      .getByRole("radio", { name: "Back / Stocker Employee" })
      .click();
  }

  async selectStore() {
    await this.store.click();
    await this.page.getByRole("option", { name: "Lewisville" }).click();
  }

  async cancelChanges() {
    await this.cancel.click();
    // await this.page.getByRole("button", { name: "No" }).click();
    await this.page.getByRole("button", { name: "Yes" }).click();
  }
  async saveChanges() {
    // await this.save.click();
    // await this.page.getByRole("button", { name: "No" }).click();
    // await this.page.getByRole("button", { name: "Save & Exit" }).click();
  }
}
