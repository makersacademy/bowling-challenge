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

  describe('spare and incomplete game', function() {
    it('spare on 1st frame - adds bonus to score', function() {
      scorecard.roll(1);
      scorecard.roll(9);
      scorecard.roll(4);
      scorecard.roll(5);
      expect(scorecard.total()).toEqual(23)
    })

    it('spare on 7th frame - adds bonus to score', function() {
      for (i = 1; i <= 12; i++) {
        scorecard.roll(2);
      }
      scorecard.roll(7);
      scorecard.roll(3);
      for (i = 1; i <= 6; i++) {
        scorecard.roll(3);
      }
      expect(scorecard.total()).toEqual(55);
    });
  });

  describe('spare and complete game', function() {
    it('spare on 1st frame - adds bonus to score', function() {
      scorecard.roll(9);
      scorecard.roll(1);
      for (i = 1; i <= 18; i++) {
        scorecard.roll(4);
      }
      expect(scorecard.total()).toEqual(86);
    });

    it('spare on 6th frame - adds bonus to score', function() {
      for (i = 1; i <= 10; i++) {
        scorecard.roll(4);
      }
      scorecard.roll(8);
      scorecard.roll(2);
      for (i = 1; i <= 8; i++) {
        scorecard.roll(3);
      }
      expect(scorecard.total()).toEqual(77);
    })

  });

});
