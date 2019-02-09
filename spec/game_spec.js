describe("BowlingGame", function() {
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it("returns an empty array of turns", function() {
    expect(game.turns).toEqual([]);
  });

  it("returns an array of objects", function() {
    game.play(3, 4);
    expect(game.turns[0].firstBowl).toEqual(3)
    expect(game.turns[0].secondBowl).toEqual(4)
  });

  it("has a score 0 at game start", function() {
    expect(game.score).toEqual(0)
  });

  it("returns the score after one normal turn", function() {
    expect(game.play(3, 4)).toEqual(7)
  });

  it("updates the score after second normal turn", function() {
    game.play(9, 0)
    expect(game.play(3, 4)).toEqual(16)
  });

});
