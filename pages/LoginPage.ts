// import { Page, Locator } from "@playwright/test";
// import { loginData } from "../data/TestData";

// export class LoginPage {
//   page: Page;
//   email: Locator;
//   password: Locator;
//   loginButton: Locator;

//   constructor(page: Page) {
//     this.page = page;

//     this.email = page.locator("#mat-input-0");
//     this.password = page.locator("#mat-input-1");
//     this.loginButton = page.locator("#login");
//   }

//   async openWebsite() {
//     await this.page.goto("https://qa-ibhr.retailbudget.us/login");
//   }

//   async login() {
//     await this.email.fill(loginData.email);
//     await this.password.fill(loginData.password);
//     await this.loginButton.click();
//   }
// }

// import { Page, Locator } from "@playwright/test";

// export class LoginPage {
//   readonly page: Page;
//   readonly emailid: Locator;
//   readonly password: Locator;
//   readonly loginbutton: Locator;

//   constructor(page: Page) {
//     this.page = page;

//     this.emailid = page.locator("#mat-input-0");
//     this.password = page.locator("#mat-input-1");
//     this.loginbutton = page.locator("#login");
//   }

//   async goto() {
//     await this.page.goto("https://qa-ibhr.retailbudget.us/login");
//   }

//   async login(email: string, password: string) {
//     await this.emailid.fill(email);
//     await this.password.fill(password);
//     await this.loginbutton.click();
//   }
// }

import { Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginbutton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator("#mat-input-0");
    this.password = page.locator("#mat-input-1");
    this.loginbutton = page.locator("#login");
  }

  async gotoLoginPage() {
    await this.page.goto("https://qa-ibhr.retailbudget.us/login");
  }

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginbutton.click();
  }

  async verifySuccessfullLogin() {
    await this.page.waitForURL("");
  }
}
