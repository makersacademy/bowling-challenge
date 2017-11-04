describe("Game", function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();

  });

  it("should have ten frames", function() {
    expect(game.frames.length).toEqual(10);
  });

});
