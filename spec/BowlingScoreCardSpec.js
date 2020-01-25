describe("BowlingScoreCard", function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new ScoreCard();
  });

  describe("#frames", function() {
    it("should have ten frames", function() {
      expect(scorecard.frames).toEqual(10);
    });
  });
});
