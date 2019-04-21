describe ('Spares', function () {
  var scorecard;

  beforeEach (function () {
    scorecard = new ScoreCard();
  });

  it('If a user rolls 10 over a frame, next frame roll 1 is added to score', function () {
    scorecard.roll(7, 3);
    scorecard.roll(2, 2);
    expect(scorecard.total).toEqual(16)
  });
});
