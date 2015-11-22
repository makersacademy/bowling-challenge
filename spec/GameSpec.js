describe("Bowling Game", function() {
	var game;

	beforeEach(function() {
		game = new Game();
	});

	it("has a default score of zero", function() {
		expect(game.currentScore()).toEqual([]);
	});

  it("bowling adds to score", function() {
    game.bowl(2);
    expect(game.currentScore).toEqual(2);
  });
});
