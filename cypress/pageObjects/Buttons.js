import BasePage from "./basePage";

class Buttons extends BasePage {
  static get url() {
    return "/buttons";
  }

  static get clickDouble() {
    return cy.get("#doubleClickBtn");
  }

  static get doubleMessage() {
    return cy.get("#doubleClickMessage");
  }

  static get clickRight() {
    return cy.get("#rightClickBtn");
  }

  static get rightMessage() {
    return cy.get("#rightClickMessage");
  }

  static get clickDynamic() {
    return cy.get("[class*='btn btn-primary']");
  }

  static get dynamicMessage() {
    return cy.get("#dynamicClickMessage");
  }
}

export default Buttons;