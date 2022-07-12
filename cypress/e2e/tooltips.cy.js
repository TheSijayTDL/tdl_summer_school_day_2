import toolTips from "../pageObjects/toolTips";

context("Interactions", () => {
    beforeEach(() => {
      toolTips.visit();
    });

    it("Tooltips scenario", () => {
      toolTips.mouseOverButton
        .trigger("mouseover")
        .wait(1000)
        .get("#buttonToolTip").should("be.visible")
        .and("have.text", "You hovered over the Button");
    toolTips.mouseOverField
        .trigger("mouseover")
        .wait(1000)
        .get("#textFieldToolTip").should("be.visible")
        .and("have.text", "You hovered over the text field");
    toolTips.mouseOverText
        .contains("Contrary")
        .trigger("mouseover")
        .wait(1000)
        .get("#contraryTexToolTip").should("be.visible")
        .and("have.text", "You hovered over the Contrary");
    toolTips.mouseOverText
        .contains("1.10.32")
        .trigger("mouseover")
        .wait(1000)
        .get("#sectionToolTip").should("be.visible")
        .and("have.text", "You hovered over the 1.10.32");
    });
});
