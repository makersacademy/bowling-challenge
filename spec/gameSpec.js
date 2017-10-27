describe("game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("shows us the score of the game", function() {
    expect(game.viewScore()).toEqual(0);
  });

  it("shows us the score of a gutter game", function() {
    game.gutterGame()
    expect(game.viewScore()).toEqual(0);
  });
});
