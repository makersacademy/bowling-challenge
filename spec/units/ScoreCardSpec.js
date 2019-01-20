describe ('ScoreCard', function () {
  var scorecard;

  beforeEach (function () {
    scorecard = new ScoreCard();
  });

  it('starts incomplete', function () {
    expect(scorecard.isComplete()).toBe(false);
  });

  it('starts with a score of 0', function () {
    expect(scorecard.score).toEqual(0)
  });

  describe ('#roll', function () {
    it('20 rolls completes scorecard', function () {
      for (let i=0; i<20; i++) {
        scorecard.roll(0);
      };
      expect(scorecard.count).toEqual(20);
      expect(scorecard.isComplete()).toBe(true);
    });
  });
});
