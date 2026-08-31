import { Page } from "@playwright/test";

export class MasterPage {
  constructor(private page: Page) {}

  async openMaster() {
    await this.page.getByRole("link", { name: " HR  " }).click();
    await this.page.getByRole("tab", { name: "Master " }).click();
  }

  async openStoreTransfer(employeeName: string) {
    const employeeRow = this.page.locator("tr").filter({
      has: this.page.getByText(employeeName),
    });

    await employeeRow.locator('img[src*="transfer.svg"]').click();
  }
  async openEmployee(employeeName: string) {
    await this.page
      .getByRole("heading", {
        name: employeeName,
      })
      .click();
  }

  async clickResign() {
    await this.page
      .getByRole("button", {
        name: "Resign",
      })
      .click();
  }

  async uncheckSendMail() {
    await this.page.getByLabel(" Send Mail").uncheck();
  }

  async clickYes() {
    await this.page
      .getByRole("button", {
        name: "Yes",
      })
      .click();
  }

  async clickNo() {
    await this.page
      .getByRole("button", {
        name: "No",
      })
      .click();
  }
}
