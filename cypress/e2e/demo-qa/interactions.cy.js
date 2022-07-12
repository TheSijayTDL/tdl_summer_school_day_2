// import page objects
import SelectablePage from "../../pageObjects/SelectablePage";

context("Interactions", () => {
  context("Selectable", () => {
    beforeEach(() => {
      SelectablePage.visit();
    });
    // Create SelectablePage page object
    // Create scenario 1:
    // Click on "Cras justo odio"
    // Validate that class contains active
    // Click on "Dapibus ac facilisis in"
    // Validate that chosen buttons contains class active

    it("Selectable elements scenario (1)", () => {
      SelectablePage.clickFirst
        .should("be.visible")
        .contains("Cras justo odio")
        .click();
      SelectablePage.firstCheck
        .contains("Cras justo odio")
        .should("have.class", "active");
      SelectablePage.clickFirst
        .should("be.visible")
        .contains("Dapibus ac facilisis in")
        .click();
      SelectablePage.firstCheck
        .contains("Dapibus ac facilisis in")
        .should("have.class", "active");
    });

    // Create scenario 2:
    // Click on grid
    // Click on numbers 4, 8, 6, 2
    // Validate that chosen buttons contains class active

    it("Selectable elements scenario (2)", () => {
      SelectablePage.selectGrid
        .click();
      SelectablePage.selectValues
        .contains("Four")
        .click()
        .should("have.class", "active");
      SelectablePage.selectValues
        .contains("Eight")
        .click()
        .should("have.class", "active");
      SelectablePage.selectValues
        .contains("Six")
        .click()
        .should("have.class", "active");
      SelectablePage.selectValues
        .contains("Two")
        .click()
        .should("have.class", "active");

    });
  });
});
