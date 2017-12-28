describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("scores 0 for a gutter game", function() {
    game.bowl(0, 20);
    expect(game.score).toEqual(0)
  });
});
