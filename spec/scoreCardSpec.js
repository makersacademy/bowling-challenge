describe("ScoreCard", function() {
  var scoreCard;

  beforeEach(function() {
    scoreCard = new ScoreCard();
  });

  it("create a scorecard object", function() {
    expect(scoreCard.score).toBe(0);
  });
});
