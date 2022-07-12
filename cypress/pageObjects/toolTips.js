import BasePage from "./basePage";

class toolTips extends BasePage {
  static get url() {
    return "/tool-tips";
  }

  static get mouseOverButton() {
    return cy.get("#toolTipButton");
  }

  static get mouseOverField() {
    return cy.get("#toolTipTextField");
  }

  static get mouseOverText() {
    return cy.get("#texToolTopContainer");
  }
}

export default toolTips;