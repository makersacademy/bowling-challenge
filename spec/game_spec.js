describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("returns an empty array of turns", function() {
    expect(game.turns).toEqual([]);
  });

  it("returns an array of objects", function() {
    game.play(3, 4);
    expect(game.turns[0].firstBowl).toEqual(3)
    expect(game.turns[0].secondBowl).toEqual(4)
  });

});
