describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("has a gutter game", function() {
    game.registerRoll(0);
    expect(game.remainingPins()).toEqual(10);
  });
});