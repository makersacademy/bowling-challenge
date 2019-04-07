describe('Scorecard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard;
  });

  describe('Gutter Game', function() {

    it('returns 0 for the total', function() {
      for (i = 1; i <= 20; i++) {
        scorecard.roll(0);
      }
      expect(scorecard.total()).toEqual(0);
    });

    it('returns true for the game being complete', function() {
      for (i = 1; i <= 20; i++) {
        scorecard.roll(0);
      }
      expect(scorecard.isComplete()).toEqual(true);
    });
  });

  describe('no strikes or spares complete game', function() {

    it('returns 80 for the total for 20 rolls hitting 4 pins', function() {
      for (i = 1; i <= 20; i++) {
        scorecard.roll(4);
      }
      expect(scorecard.total()).toEqual(80);
    });

  });

  describe('no strikes or spares incomplete game', function() {

    it('completes frame when two rolls have been entered and resets frame', function() {
      scorecard.roll(4);
      scorecard.roll(4);
      expect(scorecard.frame).toEqual(['a', 'b']);
    });

    it('returns 48 for the total for 12 rolls hitting 4 pins', function() {
      for (i = 1; i <= 12; i++) {
        scorecard.roll(4);
      }
      expect(scorecard.total()).toEqual(48);
    });

    it('returns false for #isComplete function', function() {
      for (i = 1; i <= 12; i++) {
        scorecard.roll(4);
      }
      expect(scorecard.isComplete()).toEqual(false);
    });
  });
});
