var Frame = require("../lib/Frame.js");
var assert = require("chai").assert;
var expect = require("chai").expect;

describe("Frame", function() {
	describe(".pins", function() {
		it("it should initiate with 10 pins", function() {
			frame = new Frame();

			expect(frame.pins).to.equal(10);
		});
	});

	describe(".rolls", function() {
		it("should initiate with an empty array", function() {
			frame = new Frame();

			expect(frame.rolls).to.be.an("array");
		});
	});

	describe(".logrolls", function() {
		it("should record the pins that have been knocked down", function() {
			frame = new Frame();

			frame.logRoll(8);
			expect(frame.rolls).to.include(8);
		});
	});

	describe(".total", function() {
		it(" should return total of logged rolls for one frame", function() {
			frame = new Frame();

			frame.logRoll(5);
			frame.logRoll(3);
			expect(frame.total()).to.be.at.most(8);
		});
	});
});
