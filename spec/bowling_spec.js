var Frame = require("../lib/Scorecard.js");

describe("Frame", function() {
	frame = new Frame();

	it("it should initiate with 10 pins", function() {
		expect(frame.pins).toBe(10);
	});

	it("it should initiate with an empty array", function() {
		expect(frame.rolls).toEqual(jasmine.arrayContaining([]));
	});
});
