describe('Scorecard', function() {

  var scorecard = new Scorecard;

  describe('Gutter Game', function() {

    it('returns 0 for the roll', function() {
      expect(scorecard.roll(0)).toEqual(0);
    });

    it('returns 0 for the total', function() {
      for (i = 1; i <= 20; i++) {
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

  describe('no strikes or spares complete game', function() {

    it('returns 4 for the roll', function() {
      expect(scorecard.roll(4)).toEqual(4);
    });

    it('returns 80 for the total', function() {
      for (i = 1; i <= 20; i++) {
        scorecard.roll(4);
      }
      expect(scorecard.total()).toEqual(80);
    });

  })
})
