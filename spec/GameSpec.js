describe("Game", function() {
	var game;

	beforeEach(function(){
		game = new Game();
	});

	it("has a default score of zero", function(){
		expect(game.score()).toEqual(0);
	});
});
