describe('Game', function() {

	var game;

	beforeEach(function() {
		game = new Game();
	});

	it('returns a score of 0 for a gutter game', function() {
		generateFrames([0,0]);
		expect(game.score()).toEqual(0);
	});
	it('returns a score for normal game', function() {
		generateFrames([1,2]);
		expect(game.score()).toEqual(30);
	});
	it('returns a score of 300 for the perfect game', function() {
		generateFrames([10,0], [10,10,10]);
		expect(game.score()).toEqual(300);
	});
	it('returns a score for game of half strikes', function() {
		generateFrames([5,5], [5,5,5]);
		expect(game.score()).toEqual(150);
	});

	var generateFrames = function(frame, final_frame) {
		for(i = 0; i < 9; i++) {
			game.roll(frame)
		}
		game.roll(final_frame || frame);
	};


});