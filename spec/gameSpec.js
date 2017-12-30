describe("Game", function() {
  var game

  beforeEach(function() {
    game = new Game;
  });

  it("initiliazes a new game with an empty array of frames", function() {
    expect(game.frames.length).toEqual(0)
  });

  it("starts a new game with a score of 0", function() {
    expect(game.calculateGameScore()).toEqual(0)
  });
})
