import BasePage from "./basePage";

class WebPage extends BasePage {
  static get url() {
    return "/webtables";
  }

  static get clickAdd() {
    return cy.get("#addNewRecordButton");
  }

  static get firstName() {
    return cy.get("#firstName");
  }

  static get lastName() {
    return cy.get("#lastName");
  }

  static get userEmail() {
    return cy.get("#userEmail");
  }

  static get userAge() {
    return cy.get("#age");
  }

  static get userSalary() {
    return cy.get("#salary");
  }

  static get userDepartment() {
    return cy.get("#department");
  }

  static get btnSubmit() {
    return cy.get("#submit");
  }

  static get checkUser() {
    return cy.get("[class*='rt-table']");
  }

  static get deleteFirstRow() {
    return cy.get("#delete-record-1");
  }

  static get deleteSecondRow() {
    return cy.get("#delete-record-2");
  }

  static get deleteThirdRow() {
    return cy.get("#delete-record-3");
  }

  static get noData() {
    return cy.get("[class*='rt-noData']");
  }
}

export default WebPage;