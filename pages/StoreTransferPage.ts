import { Page, Locator } from "@playwright/test";

export class StoreTransferPage {
  readonly page: Page;

  // Form Type
  readonly transferType: Locator;

  // Dropdowns
  readonly storeDropdown: Locator;
  readonly designationDropdown: Locator;
  readonly paymentMethodDropdown: Locator;
  readonly payTypeDropdown: Locator;
  readonly payPeriodDropdown: Locator;
  readonly reasonDropdown: Locator;

  // Text Fields
  readonly weeklyHours: Locator;
  readonly payRate: Locator;
  readonly note: Locator;

  // Date
  readonly effectiveDate: Locator;

  // Buttons
  readonly saveButton: Locator;
  readonly cancelButton: Locator;
  readonly yesButton: Locator;
  readonly noButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Form Type
    this.transferType = page.locator('[formcontrolname="type"]');

    // Dropdowns
    this.storeDropdown = page.locator('[formcontrolname="storeId"]');
    this.designationDropdown = page.locator('[formcontrolname="designation"]');
    this.paymentMethodDropdown = page.locator(
      '[formcontrolname="method_of_payment"]',
    );
    this.payTypeDropdown = page.locator('[formcontrolname="typeOfPay"]');
    this.payPeriodDropdown = page.locator('[formcontrolname="payPeriod"]');
    this.reasonDropdown = page.locator('[formcontrolname="reasonId"]');

    // Textboxes
    this.weeklyHours = page.locator('[formcontrolname="hourRange"]');
    this.payRate = page.locator('[formcontrolname="payRate"]');
    this.note = page.locator('[formcontrolname="raiseNote"]');

    // Date
    this.effectiveDate = page.locator('[formcontrolname="raiseDate"]');

    // Buttons
    this.saveButton = page.getByRole("button", {
      name: "Save",
    });

    this.cancelButton = page.getByRole("button", {
      name: "Cancel ",
    });

    this.yesButton = page.getByRole("button", {
      name: "Yes",
    });

    this.noButton = page.getByRole("button", {
      name: "No",
    });
  }

  // ============================
  // Transfer Type
  // ============================

  async selectStoreTransfer() {
    await this.transferType.click();

    await this.page
      .getByRole("radio", {
        name: " Store Transfer ",
      })
      .click();
  }

  async selectPaymentChanges() {
    await this.transferType.click();

    await this.page
      .getByRole("radio", {
        name: " Payment Changes ",
      })
      .click();
  }

  // ============================
  // Dropdowns
  // ============================

  async selectStore(store: string) {
    await this.storeDropdown.click();

    await this.page
      .getByRole("option", {
        name: store,
      })
      .click();
  }

  async selectDesignation(designation: string) {
    await this.designationDropdown.click();

    await this.page
      .getByRole("option", {
        name: designation,
      })
      .click();
  }

  async selectPaymentMethod(method: string) {
    await this.paymentMethodDropdown.click();

    await this.page
      .getByRole("option", {
        name: method,
      })
      .click();
  }

  async selectPayType(payType: string) {
    await this.payTypeDropdown.click();

    await this.page
      .getByRole("option", {
        name: payType,
      })
      .click();
  }

  async selectPayPeriod(period: string) {
    await this.payPeriodDropdown.click();

    await this.page
      .getByRole("option", {
        name: period,
      })
      .click();
  }

  async selectReason(reason: string) {
    await this.reasonDropdown.click();

    await this.page
      .getByRole("option", {
        name: reason,
      })
      .click();
  }

  // ============================
  // Text Fields
  // ============================

  async enterWeeklyHours(hours: string) {
    await this.weeklyHours.fill(hours);
  }

  async enterPayRate(rate: string) {
    await this.payRate.fill(rate);
  }

  async enterNote(note: string) {
    await this.note.fill(note);
  }

  // ============================
  // Date
  // ============================

  async selectEffectiveDate(date: string) {
    await this.effectiveDate.click();

    await this.page.locator(`button[aria-label="${date}"]`).click();
  }

  // ============================
  // Buttons
  // ============================

  async clickSave() {
    await this.saveButton.click();
  }

  async clickCancel() {
    await this.cancelButton.click();
  }

  async clickYes() {
    await this.yesButton.click();
  }

  async clickNo() {
    await this.noButton.click();
  }
}
