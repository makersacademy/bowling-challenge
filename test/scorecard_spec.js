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

	describe(".addToScorecard()", function() {
		it("counts score after a strike", function() {
			game = new Scorecard();

			game.frame.logRoll(10);
			game.addToScorecard();

			expect(game.score).to.include(10);
		});
	});

	describe(".isFrameOver()", function() {
		it("returns true if it is time to calculate the Score", function() {
			game = new Scorecard();
			game.logRoll(2);
			game.logRoll(7);
			expect(game.isFrameOver()).to.be.true;
		});

		it("returns false after a strike and a roll", function() {
			game = new Scorecard();
			game.logRoll(10);
			game.logRoll(7);
			expect(game.isFrameOver()).to.be.false;
		});
	});
});
