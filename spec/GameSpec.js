'use strict';

describe('Game', function() {
  var game;
  beforeEach(function() {
		game = new Game();
	});

	it("has beginnig score of 0", function() {
		expect(game.currentScore).toEqual(0);
	});

	it("has 10 frames per game", function() {
		expect(game.FRAMES).toEqual(10);
	});

	it("stores frame score", function() {
		game.frame(1, 1, 1);
		expect(game.frameScore(1)).toEqual(2);
	});

	it("sums results of frames", function() {
		game.frame(5, 3, 1);
		game.frame(2, 2, 2);
		game.frame(3, 3, 3);
		expect(game.totalScore(3)).toEqual(18);
	});

	describe('#strikes', function() {
		it('add bonus sum of next two rolls to frames with strikes', function() {
			game.frame(10, 0, 1);
			game.frame(1, 1, 2);
			expect(game.frameStrike(1)).toEqual(12);
		});

		it('ends frame with strike', function() {
			game.frame(10, 1, 1);
			expect(game.frameScore(1)).toEqual(10);
		});
	});

	describe('#spares', function() {
		it("add bonus of next frame first roll to spare frame", function() {
			game.frame(1, 9, 1);
			game.frame(2, 2, 2);
			expect(game.frameSpare(1)).toEqual(12);
		});
	});

	describe('#perfect game', function() {
		it('score is 300', function() {
			game.frame(10, 0, 1);
			game.frame(10, 0, 2);
			game.frame(10, 0, 3);
			game.frame(10, 0, 4);
			game.frame(10, 0, 5);
			game.frame(10, 0, 6);
			game.frame(10, 0, 7);
			game.frame(10, 0, 8);
			game.frame(10, 0, 9);
			game.frame(10, 0, 10);
			game.frame(10, 0, 11);
			game.frame(10, 0, 12);
			expect(game.totalScore(12)).toEqual(300);
		});
	});

	describe('#gutter game', function() {
		it('score is 0', function() {
			game.frame(0, 0, 1);
			game.frame(0, 0, 2);
			game.frame(0, 0, 3);
			game.frame(0, 0, 4);
			game.frame(0, 0, 5);
			game.frame(0, 0, 6);
			game.frame(0, 0, 7);
			game.frame(0, 0, 8);
			game.frame(0, 0, 9);
			game.frame(0, 0, 10);
			expect(game.totalScore(10)).toEqual(0);
		});
	});

});
