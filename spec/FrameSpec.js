"use strict";

describe("Frame", function() {
	var frame;
	var next_frame;

	beforeEach(function() {
		frame = new Frame();
		next_frame = new Frame();
	});

	describe("When a frame starts", function() {
		it("should start with a score of 0", function() {
			expect(frame.score).toEqual(0);
		});

		it("should start with a default strike value of false", function() {
			expect(frame.strike).toEqual(false);
		});

		it("should start with a default spare value of false", function() {
			expect(frame.spare).toEqual(false);
		});

		it("should start with zero rolls", function() {
			expect(frame.roll).toEqual(0);
		});
	});

	describe("When a roll is scored", function() {
		it("should record the score from the roll on the frame", function() {
			frame.recordRoll(5)
			expect(frame.score).toEqual(5);
		});

		it("should record if the roll is a strike", function() {
			frame.roll = 0;
			frame.recordRoll(10);
			expect(frame.strike).toEqual(true);
		});

		it("should return Congratulations if the roll is a strike", function() {
			frame.roll = 0;
			expect(frame.recordRoll(10)).toEqual("Congratulations, you have a strike!")
		});

		it("should record if a roll is a spare", function() {
			frame.recordRoll(1);
			frame.recordRoll(9);
			expect(frame.spare).toEqual(true);
		});
	});

	describe("Bonus points for a spare or a strike", function() {
		it("if applicable, it should record bonus points on the previous spare", function() {
			frame.spare = true;
			frame.roll = 0;
			frame.score = 8;
			expect(frame.recBonus(next_frame)).toEqual(8);
		});

		it("if applicable, it should record bonus points on the previous strike", function() {
			frame.strike = true;
			frame.roll = 1;
			frame.score = 9;
			expect(frame.recBonus(next_frame)).toEqual(9);
		});
	});
});
