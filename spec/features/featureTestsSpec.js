describe("Feature tests", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("the game ends after 10 rounds", function() {
    for(var i = 0; i < 20; i++) {
      game.enterPins(5);
    }
    expect(function() {game.enterPins(2);}).toThrow("The game is over");
  });

  describe("getting the score", function() {
    it("returns the running totals for each round", function() {
      game.enterPins(1);
      game.enterPins(8);
      game.enterPins(2);
      game.enterPins(3);
      game.enterPins(5);
      game.enterPins(3);
    expect(game.getScore()).toEqual([9, 14, 22]);
    });
  });
});
