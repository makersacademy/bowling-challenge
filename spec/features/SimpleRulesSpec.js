describe ('Simple Rules', function () {
  var scorecard;

  beforeEach(function () {
    scorecard = new ScoreCard();
  });

  it('Scoring increments', function () {
    for (i=0; i<10; i++) {
      scorecard.roll(1, 1);
    };
    expect(scorecard.total).toEqual(20)
  });
});
