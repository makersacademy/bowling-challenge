describe('Game', function() {
  var game;
  beforeEach(function() {
    game = new Game('Alice');
  });

  it("is initialised with a score 0", function() {
    expect(game.score).toEqual(0);
  });

  it("is intialised with nextFrame 1", function() {
    expect(game.frameNumber).toEqual(1);
  });

  it("is initialised with the player's name", function() {
    expect(game.player).toEqual("Alice");
  });

  it("is initialised with an empty array of multipliers", function() {
    expect(game.multipliers).toEqual([]);
  });
});
