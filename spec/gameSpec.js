describe("Game", function() {
  var game;
  var gutterFrame;

  beforeEach(function() {
    game = new Game();
    gutterFrame = new Frame(0, 0);
  });

  it("Can create a game class", function() {
    expect(game instanceof Game).toBe(true);
  });
})