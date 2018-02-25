describe("Game", function() {
  var game;
  beforeEach(function() {
    game = new Game("Alice");
  });

  it("is initialised with a score 0", function() {
    expect(game.score).toEqual(0);
  });

  it("is intialised with an empty array of frames", function() {
    expect(game.frames).toEqual([]);
  });

  it("is initialised with the player's name", function() {
    expect(game.player).toEqual("Alice");
  });

  it("is initialised with this.multipliers = [1, 1]", function() {
    expect(game.multipliers).toEqual([1, 1]);
  });
});
