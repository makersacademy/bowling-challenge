var Roll = require("../lib/Roll.js");

var assert = require("chai").assert;
var expect = require("chai").expect;

describe("", function() {
	describe(".pins", function() {
		it("it should initiate with 10 pins", function() {
			roll = new Roll();

			expect(roll.pins).to.equal(10);
		});
	});
});
