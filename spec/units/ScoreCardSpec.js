describe ('ScoreCard', function () {
  var scorecard;

  beforeEach (function () {
    scorecard = new ScoreCard;
  });

  it('starts incomplete', function () {
    expect(scorecard.isComplete()).toBeFalse();
  });
});
