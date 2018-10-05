describe("BowlingScorer", function() {
  it("should return a score of 0 for all gutter balls", function() {
    var newGame = new BowlingScorer();
    for(var n = 0; n < 20; n++) {
      newGame.roll(0);
    }
    expect(newGame.finalScore()).toEqual(0)
  })
});
