'use strict'

describe('Player', function() {
	var player;

	beforeEach(function() {
		player = new Player();	
	});

	it('should start with a score of 0', function() {
		expect(player.score).toEqual(0);
	});

});