'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

	describe('at start', function() {
		it('current frame is 1', function() {
			expect(game.currentFrame).toEqual(1);
      console.log(game)
		});
	});

	describe('#roll', function() {
		it('saves the score of a roll', function() {
			game.roll(7);
			expect(game.currentFrameScore).toEqual(7);
		});

		it('adds scores together', function() {
			game.roll(4);
			game.roll(5);
			expect(game.totalScore).toEqual(9);
		});
	});

	describe('after 2 rolls that are not a spare:', function() {
		beforeEach(function() {
			game.roll(4);
			game.roll(5);
		});

		it('continues to next frame', function() {
			expect(game.currentFrame).toEqual(2);
		});

		it('resets score of current frame to 0', function() {
			expect(game.currentFrameScore).toEqual(0);
		});
	});

	// describe('on second roll', function () {
	// 	it('cannot score more than 10 including first roll', function() {
	// 		game.roll(8);
	// 		expect(function() {game.roll(3);}).toThrowError('Only 2 pins left!');
	// 	});
	// });

	describe('on strike', function() {
		beforeEach(function() {
			game.roll(10);
		});
		it('goes straight to next frame', function() {
			expect(game.currentFrame).toEqual(2);
		});
	});

	describe('scenarios:', function() {
		it('can roll gutter game', function() {
			rollMany(20, 0);
			expect(game.score()).toEqual(0);
		});

		it('can roll all ones', function() {
			rollMany(20,1);
			expect(game.score()).toEqual(20);
		});

		it('can roll a strike', function() {
			game.roll(10);
			game.roll(5);
			game.roll(3);
			rollMany(16,0);
			expect(game.score()).toEqual(26);
		});

		it('can roll perfect game', function() {
			rollMany(12,10);
			expect(game.score()).toEqual(300);
		});
	});

	var rollMany = function(rolls, pins) {
		for(var i = 0; i < rolls; i++) {
			game.roll(pins);
		}
	};
});
