describe("Game", function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });

  it("has a frame", function() {
    game.frame(0);
    expect(game.score).toEqual(0);
  });
});
