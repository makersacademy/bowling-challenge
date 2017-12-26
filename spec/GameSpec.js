describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("scores 0 for a gutter game", function() {
    for(var i = 0; i <= 20; i++) {
      game.bowl(0);
    };
    expect(game.score).toEqual(0)
  });
});
