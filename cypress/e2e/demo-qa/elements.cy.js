import Buttons from "../../pageObjects/Buttons";
import checkBoxPage from "../../pageObjects/checkBoxPage";
import RadioPage from "../../pageObjects/RadioButtons";
import TextBoxPage from "../../pageObjects/textBoxPage";
import WebPage from "../../pageObjects/WebTables";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    // Create texbox scenario
    // fill in textboxes with necessary information
    // validate the paragraphs
    it("Filling in Text Boxes", () => {
        TextBoxPage.fillName
          .should("be.visible")
          .click()
          .type("Test Test");
        TextBoxPage.fillEmail
          .should("be.visible")
          .click()
          .type("test@gmail.com");
        TextBoxPage.fillAddress
          .should("be.visible")
          .click()
          .type("Test street 1");
        TextBoxPage.fillAddress2
          .should("be.visible")
          .click()
          .type("Test street 2");
        TextBoxPage.pressSubmit
          .should("be.visible")
          .click();
        TextBoxPage.checkInfo
          .should("be.visible")
          .should("include.text", "Name:Test Test")
          .should("include.text", "Email:test@gmail.com")
          .should("include.text", "Current Address :Test street 1")
          .should("include.text", "Permananet Address :Test street 2");
    });
  });

  context("Check box scenarios", () => {
    beforeEach(() => {
      checkBoxPage.visit();
    });
    // Create CheckBoxPage page object
    // Create checkbox scenario 1:
    // Click the "+"/expand button
    // Click Notes, React, Angular, General, Excel File.doc
    // Validate the clicked checkboxes

    it("Filling in Check Boxes", () => {
        checkBoxPage.clickPlus
          .should("be.visible")
          .click();
        checkBoxPage.selectOptionNotes
          .should("be.visible")
          .click();
        checkBoxPage.validateCheckNotes.should("be.checked");
        checkBoxPage.selectOptionReact
          .should("be.visible")
          .click();
        checkBoxPage.validateCheckReact.should("be.checked");
        checkBoxPage.selectOptionAngular
          .should("be.visible")
          .click();
        checkBoxPage.validateCheckAngular.should("be.checked");
        checkBoxPage.selectOptionGeneral
          .should("be.visible")
          .click();
        checkBoxPage.validateCheckGeneral.should("be.checked");
        checkBoxPage.selectOptionExcel
          .should("be.visible")
          .click();
        checkBoxPage.validateCheckExcel.should("be.checked");
    });


    // Create checkbox scenario 2:
    // Click expand button
    // Click Office
    // Validate the checked checkboxes

    it("Filling Office category", () => {
      checkBoxPage.clickPlus
        .should("be.visible")
        .click();
      checkBoxPage.selectOptionOffice
        .should("be.visible")
        .click();
      checkBoxPage.validateCheckPublic.should("be.checked");
      checkBoxPage.validateCheckPrivate.should("be.checked");
      checkBoxPage.validateCheckClassified.should("be.checked");
      checkBoxPage.validateCheckGeneral.should("be.checked");
    });
  });

  context("Radio button scenarios", () => {
    beforeEach(() => {
      RadioPage.visit();
    });
    // Create RadioButtons page object
    // Scenario 1:
    // Click yesButton
    // validate the message
    // click impressiveButton
    // validate the message
    // noButton - validate that the button exists but is disabled

    it("Radio first scenario", () => {
      RadioPage.clickYes
        .click();
      RadioPage.textSuccess
        .should("be.visible")
        .should("include.text", "Yes");
      RadioPage.clickImpressive
        .click();
      RadioPage.textSuccess
        .should("be.visible")
        .should("include.text", "Impressive");  
      RadioPage.disabledNo
        .should("be.visible");
  });
});

  context("Web tables scenarios", () => {
    beforeEach(() => {
      WebPage.visit();
    });
    // Create WebTables page object
    // Create scenario 1:
    // Click add record button
    // fill in the necessary information
    // click submit button
    // search for the user based on previously added information
    // validate tha the user is visible

    it("WebTables first scenario", () => {
      WebPage.clickAdd
        .click();
      WebPage.firstName
        .click()
        .type("Test");
      WebPage.lastName
        .click()
        .type("aaa");
      WebPage.userEmail
        .click()
        .type("test@gmail.com");
      WebPage.userAge
        .click()
        .type("20");
      WebPage.userSalary
        .click()
        .type("1");
      WebPage.userDepartment
        .type("yes");
      WebPage.btnSubmit
        .click();
      WebPage.checkUser
        .should("include.text", "test@gmail.com");
    });
    // Create Scenario 2:
    // Delete all table rows
    // Validate that we see text - No rows found

    it("WebTables second scenario", () => {
      WebPage.deleteFirstRow
        .click();
      WebPage.deleteSecondRow
        .click();  
      WebPage.deleteThirdRow
        .click();   
      WebPage.noData
        .should("be.visible")
        .should("have.text", "No rows found");
  });
});

  context("Buttons scenarios", () => {
    beforeEach(() => {
      Buttons.visit();
    });
    // Create buttons clicking scenario
    // Create Buttons page
    // Check documentation https://docs.cypress.io/api/commands/and for how to perform different types of clicking
    // Click Double click button
    // Validate the double click message
    // Click rightclick button
    // Validate the right click message
    // Do dynamic click
    // Validate dynamic click message

    it("Buttons clicking scenario", () => {
      Buttons.clickDouble
        .dblclick();
      Buttons.doubleMessage
        .should("be.visible")
        .and("have.text", "You have done a double click");
      Buttons.clickRight
        .rightclick();
      Buttons.rightMessage
        .should("be.visible")
        .and("have.text", "You have done a right click");
      Buttons.clickDynamic
        .dblclick();
      Buttons.dynamicMessage
        .should("be.visible")
        .and("have.text", "You have done a dynamic click");
    });
  });
});
