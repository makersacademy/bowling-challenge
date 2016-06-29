'use strict';

describe('Bowling Game', function(){


	it('starts a new game', function(){
		expect(game).toEqual(new Game());
	});

	it('can roll a gutter game', function() {
		rollMany(0,20);
		expect(game.score()).toEqual(0);
	});

	it('can roll all ones', function() {
		rollMany(1,20);
		expect(game.score()).toEqual(20);
	})

	var rollMany = function(pins, rolls) {
		for (var i = 0; i < rolls; i++) {
			game.roll(pins);
		}
	};

});
