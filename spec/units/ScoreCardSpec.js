describe ('ScoreCard', function () {
  var scorecard;

  beforeEach (function () {
    scorecard = new ScoreCard();
  });

  it('starts incomplete', function () {
    expect(scorecard.isComplete).toBe(false);
  });

  it('starts with a score of 0', function () {
    expect(scorecard.score).toEqual(0)
  });

});
