var Scorecard = require("../lib/Scorecard.js");

var assert = require("chai").assert;
var expect = require("chai").expect;

describe("Scorecard", function() {
	it("it should be a class that includes a frame object", function() {
		game = new Scorecard();

		expect(game).to.be.a("object");
		expect(game.frame).to.be.a("object");
	});

	describe(".frame.rolls", function() {
		it("can reference the current frame rolls within Scorecard function", function() {
			game = new Scorecard();

			game.frame.logRoll(5);
			game.frame.logRoll(3);

			expect(game.frame.rolls).to.be.a("array");
			expect(game.frame.rolls).to.include(5, 3);
		});
	});

	describe(".addToScorecard()", function() {
		it("counts score after 2 rolls when not a spare or strike", function() {
			game = new Scorecard();

			game.frame.logRoll(5);
			game.frame.logRoll(3);
			game.addToScorecard();
			expect(game.score).to.include(8);
		});
	});

	describe(".addToScorecard()", function() {
		it("counts score after 3 rolls when a spare", function() {
			game = new Scorecard();

			game.frame.logRoll(8);
			game.frame.logRoll(2);
			game.frame.logRoll(7);
			game.addToScorecard();

			expect(game.score).to.include(17);
		});
	});

	describe("", function() {
		it("", function() {});
	});
});
