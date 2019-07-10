describe ('ScoreCard', function () {
  var scorecard;

  beforeEach (function () {
    scorecard = new ScoreCard();
  });

  describe ('#beginning', function () {
    it('starts with a score of 0', function () {
      expect(scorecard.total).toEqual(0)
    });
  });

  describe ('#roll', function () {
    it('scorecard counts roll numbers', function () {
      scorecard.roll(8);
      scorecard.roll(3);
      expect(scorecard.total).toEqual(11);
    });
    
    it('score accounts for strikes', function () {
      scorecard.roll(10);
      scorecard.roll(6);
      scorecard.roll(2);
      expect(scorecard.total).toEqual(26);
    });

    it('score accounts for spares', function () {
      scorecard.roll(5);
      scorecard.roll(5);
      scorecard.roll(4);
      scorecard.roll(3);
      expect(scorecard.total).toEqual(21);
    });
  });

  describe ('#Frames', function () {

    it('frame accounts for strikes', function () {
      scorecard.roll(10);
      scorecard.roll(3);
      scorecard.roll(4);
      expect(scorecard.frameCount).toEqual(3);
    });

    it('frame functions', function () {
      for (i=0; i<10; i++) {
        scorecard.roll(0);
      };
    expect(scorecard.frameCount).toEqual(6);
    });
  });

  describe ('#finished', function () {

    it('does not allow you to roll when game is over', function () {
      for (i=0; i<20; i++) {
        scorecard.roll(0);
      };
    expect(function() {scorecard.roll(4)}).toThrow('Game is Over')
    });
  });
});
