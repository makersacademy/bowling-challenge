describe ('10th frame', function () {
  var scorecard;

  beforeEach (function () {
    scorecard = new ScoreCard();
  });

  it('If a user rolls a strike in their 10th frame, they get 2 more rolls which only add as BONUS points', function () {
    for (i=0; i<18; i++) {
      scorecard.roll(1);
    };
    scorecard.roll(10);
    expect(scorecard.frameCount).toEqual(10)
    scorecard.roll(3);
    expect(scorecard.frameCount).toEqual(10)
    scorecard.roll(5);
    expect(scorecard.total).toEqual(36)
  });

  it('If a user rolls a spare in their 10th frame, they get 1 more roll which only adds as BONUS points', function () {
    for (i=0; i <18; i++) {
      scorecard.roll(1);
    };
    scorecard.roll(7);
    scorecard.roll(3);
    scorecard.roll(5);
    expect(scorecard.total).toEqual(33)
  });
});
