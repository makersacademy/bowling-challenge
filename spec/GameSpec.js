

describe("Game", function() {
  var game

  beforeEach(function() {
    game = new Game();
  });

  it("should have 10 frames", function() {
    expect(game.frames).toEqual(10)
  });

})
