'use strict';

describe('Game', function() {

	let game;

	beforeEach(function() {
	    game = new Game();
	  });

	it('has empty array', function() {
		expect(game.frames).toEqual([]);
	});
});
