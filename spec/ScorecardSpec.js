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

  describe('strike and incomplete game', function() {
    it('strike on the 1st roll and 2nd frame less than 10', function() {
      scorecard.roll(10);
      scorecard.roll(3);
      scorecard.roll(4);
      expect(scorecard.total()).toEqual(24);
    });
  })

  describe('strike and complete game', function() {
    it('strike on 1st roll and all other frames less than 10', function() {
      scorecard.roll(10);
      for (i = 1; i <= 18; i++) {
        scorecard.roll(3);
      }
      expect(scorecard.total()).toEqual(70)
    })

    it('strike on 5th roll and all other frames less than 10', function() {
      for (i = 1; i <= 8; i++) {
        scorecard.roll(3);
      }
      scorecard.roll(10)
      for (i = 1; i <= 10; i++) {
        scorecard.roll(3);
      }
      expect(scorecard.total()).toEqual(70)
    })
  })

  describe('game with mix of strikes and spares', function() {
    it('calculates correct score and knows game is complete', function() {
      scorecard.roll(6)
      scorecard.roll(3)
      scorecard.roll(4)
      scorecard.roll(2)
      scorecard.roll(9)
      scorecard.roll(1)
      scorecard.roll(10)
      scorecard.roll(4)
      scorecard.roll(5)
      scorecard.roll(7)
      scorecard.roll(3)
      scorecard.roll(9)
      scorecard.roll(0)
      scorecard.roll(10)
      scorecard.roll(6)
      scorecard.roll(3)
      scorecard.roll(7)
      scorecard.roll(2)
      expect(scorecard.total()).toEqual(128)
      expect(scorecard.isComplete()).toEqual(true)
    })
  })

  describe('10th frame spare/strike rules', function() {
    it('identifies game is not complete with spare on 10th frame', function() {
      for (i = 1; i <= 18; i++) {
        scorecard.roll(3);
      }
      scorecard.roll(7)
      scorecard.roll(3)
      expect(scorecard.isComplete()).toEqual(false)
    });

    it('calculates score with strike on 10th frame', function() {
      for (i = 1; i <= 18; i++) {
        scorecard.roll(4);
      }
      scorecard.roll(10)
      scorecard.roll(8)
      scorecard.roll(1)
      expect(scorecard.total()).toEqual(91)
    })

    it('knows the game is complete after three throws in 10th frame', function() {
      for (i = 1; i <= 18; i++) {
        scorecard.roll(4);
      }
      scorecard.roll(10)
      scorecard.roll(8)
      scorecard.roll(1)
      expect(scorecard.isComplete()).toEqual(true)
    })
  })

});
