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
});
