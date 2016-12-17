describe("bowlingScorer", function() {
  var scorer;
});

  beforeEach(function() {
    scorer = new bowlingScorer();
  });

  it("should start with a total score of zero", function() {
    expect(scorer.totalScore).toEqual(0)
  });
