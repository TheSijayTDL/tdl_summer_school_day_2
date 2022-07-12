import BasePage from "./basePage";

class RadioPage extends BasePage {
  static get url() {
    return "/radio-button";
  }

  static get clickYes() {
    return cy.get("[for*='yesRadio']");
  }

  static get textSuccess() {
    return cy.get("[class*='text-success']");
  }

  static get clickImpressive() {
    return cy.get("[for*='impressiveRadio']");
  }

  static get disabledNo() {
    return cy.get("[class*='custom-control-label disabled']");
  }
}

export default RadioPage;