describe ('Gutter Game', function () {
  var scorecard;
  
  beforeEach (function () {
    scorecard = new ScoreCard();
  });

  it('If a user rolls only 0s, the final score should be 0', function () {
    for (i=0; i<10; i++) {
      scorecard.roll(0, 0);
    };
    expect(scorecard.total).toEqual(0)
  });
});
