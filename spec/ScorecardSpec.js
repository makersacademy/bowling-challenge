describe('Scorecard', function() {

  var scorecard = new Scorecard;

  describe('Gutter Game', function() {

    it('returns 0 for the roll', function() {
      expect(scorecard.roll(0)).toEqual(0);
    });

    it('returns 0 for the total', function() {
      for (i = 1; i <= 10; i++) {
        scorecard.roll(0);
      }
      expect(scorecard.total()).toEqual(0);
    });

    it('returns true for the game being complete', function() {
      for (i = 1; i <= 10; i++) {
        scorecard.roll(0);
      }
      expect(scorecard.isComplete()).toEqual(true);
    });
  });
})
