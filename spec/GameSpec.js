describe('Game', () => {

	var game;

	beforeEach(() => {
		game = new Game;
	});

	it('should start with 0 score', () => {
		expect(game.getCurrentScore()).toEqual(0);
	});
});