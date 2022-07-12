import BasePage from "./basePage";

class progressBar extends BasePage {
  static get url() {
    return "/progress-bar";
  }

  static get startBar() {
    return cy.get("#startStopButton");
  }
}

export default progressBar;