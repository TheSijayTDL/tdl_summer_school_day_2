import progressBar from "../../pageObjects/progressTask";

context("Progress Bar", () => {
    beforeEach(() => {
      progressBar.visit();
    });

    it("Progress Bar scenario", () => {
      progressBar.startBar.click();
      if(cy.get("#progressBar").should("include.text", "25%")) {
          progressBar.startBar.click();
          progressBar.startBar.wait(1500).click();
      }
      if(cy.get("#progressBar").should("include.text", "75%")) {
          progressBar.startBar.click();
          progressBar.startBar.wait(1500).click();
      }
      if(cy.get("#progressBar").should("include.text", "99%")) {
          progressBar.startBar.click();
      }
    });
});