describe("BowlingScorer", function() {
  var scorer;
});

  beforeEach(function() {
    scorer = new BowlingScorer();
  });

  it("should start with a total score of zero", function() {
    expect(scorer.totalScore).toEqual(0)
  });
