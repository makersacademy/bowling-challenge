"use strict";
describe("Game", function() {

	var game;

	beforeEach(function(){
		game = new Game;
	});

	describe("Game instance variables", function() {
		it("Frame variable is one on init", function() {
			expect(game.currentFrame).toEqual(1);
		});

		it("Roll variable is one on init", function() {
			expect(game.currentRoll).toEqual(1);
		});

		it("Score variable is zero on init", function() {
			expect(game.currentScore).toEqual(0);
		});

		it("Has a bonus variable that is zero", function() {
			expect(game.numBonus).toEqual(0);
		});

		it("Has an empty array for scores", function() {
			expect(game.scoreHistory).toEqual([]);
		});

		it("Has an empty array for frame", function () {
			expect(game.frameHistory).toEqual([]);
		});

		it("Has an empty string for bonusMessage", function() {
			expect(game.bonusMessage).toEqual("");
		});
	});

	describe("Bowling score types", function() {

		describe("standard score type", function() {

			beforeEach(function() {
				game.roll(5);
				game.roll(3);
			});

			it("shows current frame and roll", function() {
				expect(game.currentFrame).toEqual(2);
				expect(game.currentRoll).toEqual(1);
			});

			it("should have a total of 8", function() {
				expect(game.currentScore).toEqual(8);
			});

			it("should have a bonus of zero", function() {
				expect(game.numBonus).toEqual(0);
				
			});

			it("should add scores to score history", function() {
				expect(game.scoreHistory).toEqual([[5, 3]]);
			});

			it("works correctly on next roll", function() {
				game.roll(5);
				expect(game.currentFrame).toEqual(2);
				expect(game.currentScore).toEqual(13);
				expect(game.frameHistory).toEqual([5]);
			});
			it("works correctly when another frame", function() {
				game.roll(5);
				game.roll(2);
				expect(game.currentScore).toEqual(15);
				expect(game.currentFrame).toEqual(3);
				expect(game.scoreHistory).toEqual([[5, 3], [5, 2]]);
			});
		});

		describe("spare score type", function(){

			beforeEach(function() {
				game.roll(3);
				game.roll(7);
			});

			it("should have a total of 10", function() {
				expect(game.currentScore).toEqual(10);
			});

			it("should have a bonus of 1", function() {
				expect(game.numBonus).toEqual(1);
			});

			it("processes bonus correctly", function() {
				game.roll(6);
				expect(game.bonusMessage).toEqual("6 bonus points added");
				game.roll(2);
				expect(game.scoreHistory).toEqual([[3, 7], [6, 2]]);
				expect(game.currentScore).toEqual(24);
				expect(game.numBonus).toEqual(0);
			});

		});

		describe("strike score type", function() {

			beforeEach(function() {
				game.roll(10);
			});

			it("should have a total of 10", function() {
				expect(game.currentScore).toEqual(10);
			});

			it("should have a bonus of 2", function() {
				expect(game.numBonus).toEqual(2);
			});

			it("should be the next frame", function() {
				expect(game.currentFrame).toEqual(2);
			});

			it("adds the bonus correctly for the next 2 rolls", function() {
				game.roll(3);
				expect(game.currentScore).toEqual(16);
				expect(game.bonusMessage).toEqual("3 bonus points added");
				game.roll(4);
				expect(game.currentScore).toEqual(24);
				expect(game.bonusMessage).toEqual("4 bonus points added");
			});

			it("Works correctly when more strikes", function() {
				game.roll(10);
				expect(game.currentScore).toEqual(30);
				expect(game.bonusMessage).toEqual("10 bonus points added");
				game.roll(10);
				expect(game.currentScore).toEqual(60);
				expect(game.bonusMessage).toEqual("30 bonus points added");
				game.roll(10);
				expect(game.currentScore).toEqual(100);
				expect(game.bonusMessage).toEqual("20 bonus points added");
				game.roll(10);
				expect(game.currentScore).toEqual(130);
				expect(game.bonusMessage).toEqual("20 bonus points added");
			});

			it("works for strike then spare then roll", function () {
				game.roll(4);
				expect(game.currentScore).toEqual(18);
				expect(game.bonusMessage).toEqual("4 bonus points added");
				game.roll(6);
				expect(game.currentScore).toEqual(30);
				expect(game.bonusMessage).toEqual("6 bonus points added");
				game.roll(5);
				expect(game.currentScore).toEqual(40);
				expect(game.bonusMessage).toEqual("5 bonus points added");
			});
		});

	});

});

