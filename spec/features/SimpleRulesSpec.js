describe ('Simple Rules', function () {
  var scorecard;

  beforeEach(function () {
    scorecard = new ScoreCard();
  });

  it('Scoring increments', function () {
    for (i=0; i<20; i++) {
      scorecard.roll(5);
    };
    expect(scorecard.score).toEqual(100)
  });
});
