'use strict';

describe('game', function() {

	var game;

	beforeEach(function() {
		game = new Game();
	});

	it('keeps track of the number of rolls', function() {
		game.roll(0)
		game.roll(0)
		expect(game._rollCounter).toBe(2)
	});

	it('can score a gutter game', function() {
		rollGame(20, 0)
		expect(game.score()).toBe(0);
	});

	it('can score a game of ones', function() {
		rollGame(20, 1)
		expect(game.score()).toBe(20);
	});

	it('can score a spare followed by a normal roll', function() {
		game.roll(5);
		game.roll(5);
		game.roll(1);
		rollGame(17, 0);
		expect(game.score()).toBe(12);
	});

	it ('can score a spare followed by a strike',function() {
		game.roll(5);
		game.roll(5);
		game.roll(10);
		rollGame(17, 0)
		expect(game.score()).toBe(30);
	})

	it ('does not score spares across frames', function() {
		game.roll(0);
		game.roll(5);
		game.roll(5);
		rollGame(17, 0)
		expect(game.score()).toBe(10);
	})

	it ('can score a strike followed by normal rolls', function() {
		game.roll(10);
		game.roll(1);
		game.roll(1);
		rollGame(16, 0)
		expect(game.score()).toBe(14);
	});

	it ('can score a strike followed by a spare', function() {
		game.roll(10);
		game.roll(5);
		game.roll(5);
		rollGame(16, 0)
		expect(game.score()).toBe(30);
	});

	it ('can score a series of strikes', function () {
		game.roll(10);
		game.roll(10);
		game.roll(10);
		rollGame(14, 0)
		expect(game.score()).toBe(60);
	});

	it ('can score a perfect game', function () {
		rollGame(12, 10)
		expect(game.score()).toBe(300);
	})


	var rollGame = function(rolls, pins) {
		for (var i = 0; i < rolls; i++) {
			game.roll(pins)
		};
	};
});