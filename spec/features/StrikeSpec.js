describe ('Strikes', function () {
  var scorecard;

  beforeEach (function () {
    scorecard = new ScoreCard();
  });

  it('If a user rolls 10 in first roll of frame, end of frame, next frame num added to score', function () {
    scorecard.roll(10);
    scorecard.roll(8);
    scorecard.roll(1);

    expect(scorecard.total).toEqual(28)
    expect(scorecard.frameCount).toEqual(3)
    expect(scorecard.rollCount).toEqual(1)
  });

  it('If a user rolls a strike and then another strike, the next roll also counts', function () {
    scorecard.roll(10);
    scorecard.roll(10);
    scorecard.roll(3);
    scorecard.roll(4);

    expect(scorecard.total).toEqual(47)
  });
});
