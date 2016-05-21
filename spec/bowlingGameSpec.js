(function () {
    'use strict';
 }());

 describe("BowlingGame", function() {
	var game;

	function rollMany (rolls, pins) {
		for (i = 0; i < 20; i++) {
			game.roll(pins);
		}
	}

	function rollSpare() {
		game.roll(5);
		game.roll(5);
	}

	function rollStrike() {
		game.roll(10);
	}

	beforeEach(function(){
		game = new BowlingGame();
	});

	it('can roll a gutter game', function() {
		rollMany(20, 0);
		expect(game.score()).toEqual(0);
	});

	it('can roll all ones', function() {
		rollMany(20, 1);
		expect(game.score()).toEqual(20);
	});

	it('can roll one spare', function() {
		rollSpare();
		game.roll(3);
		rollMany(17, 0);
		expect(game.score()).toEqual(16);
	});

	it('can roll one strike', function() {
		rollStrike();
		game.roll(3);
		game.roll(4);
		rollMany(16, 0);
		expect(game.score()).toEqual(24);
	});

	it('can roll a perfect game', function() {
		rollMany(12, 10);
		expect(game.score()).toEqual(300);
	});
});
