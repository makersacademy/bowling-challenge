describe("Game", function() {
  var game

  beforeEach(function() {
    game = new Game;
  });

  it("initiliazes a new game with an empty array of frames", function() {
    expect(game.frames.length).toEqual(0)
  })
})
