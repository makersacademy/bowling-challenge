describe("Scorecard", function() {
  var scorecard

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it("should start the game with a score of 0", function() {
    expect(scorecard.showScore()).toEqual(0)
  });
});
