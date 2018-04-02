var Scorecard = require("../lib/Scorecard.js");

var assert = require("chai").assert;
var expect = require("chai").expect;

describe("Scorecard", function() {
	it("it should be a class that includes a frame object", function() {
		game = new Scorecard();

		expect(game).to.be.a("object");
		expect(game.frame).to.be.a("object");
	});

	it("can reference frame within the function", function() {
		game = new Scorecard();

		game.frame.logRoll(5);
		expect(game.frame).to.equal(10);
	});
});
