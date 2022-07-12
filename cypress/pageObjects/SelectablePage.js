import BasePage from "./basePage";

class SelectablePage extends BasePage {
  static get url() {
    return "/selectable";
  }

  static get clickFirst() {
    return cy.get("#verticalListContainer");
  }

  static get firstCheck() {
    return cy.get("[class*='mt-2 list-group-item active list-group-item-action']");
  }

  static get selectGrid() {
    return cy.get("#demo-tab-grid");
  }

  static get selectValues() {
    return cy.get("#demo-tabpane-grid");
  }

  static get checkValues() {
    return cy.get("[class*='list-group-item active list-group-item-action']");
  }
}

export default SelectablePage;