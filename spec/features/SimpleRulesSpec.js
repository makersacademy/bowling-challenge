describe ('Simple Rules', function () {
  var scorecard;

  beforeEach(function () {
    scorecard = new ScoreCard();
  });

  it('Scoring increments', function () {
    for (i=0; i<20; i++) {
      scorecard.roll(1);
    };
    expect(scorecard.isComplete()).toBe(true)
    expect(scorecard.total).toEqual(20)
  });
});
