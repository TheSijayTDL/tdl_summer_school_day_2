import BasePage from "./basePage";

class checkBoxPage extends BasePage {
  static get url() {
    return "/checkbox";
  }

  static get clickPlus() {
    return cy.get("[class*='rct-icon rct-icon-expand-all']");
  }

  static get selectOptionNotes() {
    return cy.get("[for*='tree-node-notes']");
  }

  static get selectOptionReact() {
    return cy.get("[for*='tree-node-react']");
  }

  static get selectOptionAngular() {
    return cy.get("[for*='tree-node-angular']");
  }

  static get selectOptionGeneral() {
    return cy.get("[for*='tree-node-general']");
  }

  static get selectOptionExcel() {
    return cy.get("[for*='tree-node-excelFile']");
  }

  static get selectOptionOffice() {
    return cy.get("[for*='tree-node-office']");
  }
}

export default checkBoxPage;