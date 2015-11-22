describe("Bowling Game", function() {
	var game;

	beforeEach(function() {
		game = new Game();
	});

	it("starts with no score", function() {
		expect(game.currentScore()).toEqual(0);
	});

  it("bowling adds to score", function() {
    game.bowl(2);
    expect(game.currentScore()).toEqual(2);
  });
});
