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

		it("is not game over", function() {
			expect(game.gameOver).toEqual(false);
		});

		it("Visual frame for scorecard is 0", function() {
			expect(game.visualFrame).toEqual(0);
		});
	});

	describe("Basic Scoring Tests", function() {
		it("Game scoring variables are correct with two rolls in 1 frame", function() {
			game.roll(4);
			expect(game.currentFrame).toEqual(1);
			expect(game.currentScore).toEqual(4);
			expect(game.frameHistory).toEqual([4]);
			expect(game.visualFrame).toEqual(1);
			game.roll(5);
			expect(game.currentFrame).toEqual(2);
			expect(game.currentScore).toEqual(9);
			expect(game.frameHistory).toEqual([]);
			expect(game.visualFrame).toEqual(1);
			game.roll(5);
			expect(game.visualFrame).toEqual(2);
		});
	});

	describe("tenth frame", function() {
		
		beforeEach(function() {
			game.currentFrame = 10;
		});

		it("only has two rounds if no strike or spare", function() {
			game.roll(4);
			game.roll(3);
			expect(game.gameOver).toEqual(true);
			expect(game.currentScore).toEqual(7);
			game.roll(4);
			expect(game.currentScore).toEqual(4);
		});

		it("works correctly with a spare", function() {
			game.roll(5);
			game.roll(5);
			expect(game.gameOver).toEqual(false);
			game.roll(7);
			expect(game.currentScore).toEqual(17);
			expect(game.gameOver).toEqual(true);
		});

		it("works correctly with three strikes", function() {
			game.roll(10);
			game.roll(10);
			expect(game.gameOver).toEqual(false);
			game.roll(10);
			expect(game.currentScore).toEqual(30);
			expect(game.gameOver).toEqual(true);
		});

		it("starts new game when finished", function() {
			game.roll(4);
			expect(game.gameOver).toEqual(false);
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

		function strikeAndTwoFrames() {
			game.roll(10);
			for(var i = 0; i < 4; i ++) {
				game.roll(4);
			}
		}
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

			it("works when 2 strikes then 4 normal rolls", function() {
				strikeAndTwoFrames();
				expect(game.currentScore).toEqual(58);
			});

			it("works for 3 strikes then 4 normal rolls", function() {
				game.roll(10);
				strikeAndTwoFrames();
				expect(game.currentScore).toEqual(88);
			});

			it("works for 3 strikes, 4 normal rolls and 2 strikes, 2 normal rolls", function() {
				game.roll(10);
				strikeAndTwoFrames();
				game.roll(10);
				strikeAndTwoFrames();
				expect(game.currentScore).toEqual(150); // not passing as no add last bonus
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
			
			it("works for perfect game", function() {
				for(var i = 2; i < 13; i ++) {
					game.roll(10);
				}
				expect(game.currentScore).toEqual(300);
			});
		});
	});
});

