'use strict';

describe('Bowling Game', function(){

	it('starts a new game', function(){
		expect(game).toEqual(new Game());
	});

	it('can roll a gutter game', function() {
		for(var i = 1; i < 20; i++){
			game.roll(0);
		}
		expect(game.score()).toBe(0);
	});
});
