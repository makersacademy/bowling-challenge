describe("Index", function() {

	function enterRoll(value) {
		cy.get(".rollInputBox").as("range")
			.invoke("val", value)
			.trigger("change");
		cy.get(".rollSub").click();
	}
	describe("startup tests", function() {

		beforeEach(function() {
			cy.visit("/views/index.html");
		});

		it("Has Correct Heading Title", function() {
			cy.get(".title").contains("Bowlerama");
		});
		it("Index has Blank scorecard on startup", function(){
			cy.get(".scoreTableClass").contains("Frame");
			cy.get(".scoreTableClass").contains("Score");
			cy.get(".scoreTableClass").contains("Notes");
		});

		it("Has input for score", function() {
			cy.get(".rollEntry").contains("Enter Roll");
		});

		it("Has submit for score", function() {
			cy.get(".rollSub").contains("Submit");
		});

		it("Can enter a single roll", function() {
			enterRoll(3);
			cy.get("#F1Score").contains("3");
			enterRoll(5);
			cy.get("#F1Score").contains("8");
			cy.get("#F1Frame").contains("3,5");
		});

		it("can enter a spare", function() {
			enterRoll(7);
			enterRoll(3);
			cy.get("#F1Score").contains("10");
			enterRoll(5);
			cy.get("#F2Score").contains("20");
			cy.get("#F2note").contains("5 bonus points added");
		});

		it("can enter a strike", function() {
			enterRoll(10);
			cy.get("#F1Score").contains("10");
			enterRoll(10);
			cy.get("#F2Score").contains("30");
			cy.get("#F2note").contains("10 bonus points added");
		});
	});
});
