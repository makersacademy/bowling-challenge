describe("Scorecard", function() {
  var scorecard;

  beforeEach(function() {
    scoreCard = new Scorecard();
  });

  it("should be able to update the score", function() {
    scoreCard.updateScore(2);
    expect(scoreCard.getRunningTotal()).toEqual(2);
  });
});
