var Frame = require("../lib/Scorecard.js");

describe("Frame", function() {
	frame = new Frame();

	it("it should initiate with 10 pins", function() {
		expect(frame.pins).toBe(10);
	});

	it("it should initiate with an empty array", function() {
		expect(frame.rolls).toEqual(jasmine.arrayContaining([]));
	});

	it("should record the pins that have been knocked down", function() {
		frame.logRoll(7);
		expect(frame.rolls).toEqual(jasmine.arrayContaining([7]));
	});

	it("the total should return 9", function() {
		frame.logRoll(5);
		frame.logRoll(4);
		expect(frame.total).toBe(9);
	});
});
