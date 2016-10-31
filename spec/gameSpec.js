// solution from https://www.youtube.com/watch?v=-qA_MjNmpVU

describe('game', function() {

	var game;

	beforeEach(function (){
		game = new Game;
	})

	it('can score 0 games', function() {
		for(var i=0; i < 20; i = i + 1) {
			game.roll(0);
		}
		expect(game.score()).toEqual(0);
	});

	it('can roll all ones', function() {
		for(var i=0; i < 20; i = i + 1) {
			game.roll(1);
		}
		expect(game.score()).toEqual(20);
	});

	it('can roll a spare', function() {
		game.roll(6);
		game.roll(4);
		game.roll(5);
		for(var i=0; i < 17; i = i + 1) {
			game.roll(0);
		}
		expect(game.score()).toEqual(20);
	});


});
