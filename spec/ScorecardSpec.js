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

  describe('spare on first frame and incomplete game', function() {
    it('recognises previous frame is a spare', function() {
      scorecard.roll(1);
      scorecard.roll(9);
      scorecard.roll(4);
      scorecard.roll(5);
      expect(scorecard._isPreviousFrameSpare()).toEqual(true);
    })

    it('adds bonus to score', function() {
      scorecard.roll(1);
      scorecard.roll(9);
      scorecard.roll(4);
      scorecard.roll(5);
      expect(scorecard.total()).toEqual(23)
    })
  })

});
