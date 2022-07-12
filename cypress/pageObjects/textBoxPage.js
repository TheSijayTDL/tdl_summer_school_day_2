import BasePage from "./basePage";

class TextBoxPage extends BasePage {
  static get url() {
    return "/text-box";
  }

  static get fillName() {
    return cy.get("#userName");
  }

  static get fillEmail() {
    return cy.get("#userEmail");
  }

  static get fillAddress() {
    return cy.get("#currentAddress");
  }

  static get fillAddress2() {
    return cy.get("#permanentAddress");
  }

  static get pressSubmit() {
    return cy.get("#submit");
  }

  static get checkInfo() {
    return cy.get("#output");
  }
}

export default TextBoxPage;
