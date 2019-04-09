describe('Feature Test', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard;
  });

  describe('Gutter Game', function() {

    it('does not hit any pins and scores 0', function() {
      for (i = 1; i <= 20; i++) {
        scorecard.roll(0);
      }
      expect(scorecard.total()).toEqual(0);
      expect(scorecard.isComplete()).toEqual(true);
    });
  });

  describe('no strikes or spares complete game', function() {
    it('hits fewer than 5 pins on every roll and returns score', function() {
      for (i = 1; i <= 20; i++) {
        scorecard.roll(4);
      }
      expect(scorecard.total()).toEqual(80);
      expect(scorecard.isComplete()).toEqual(true);
    });
  });

  describe('partially complete no strikes or spares game', function() {
    it('hits fewer than 5 pins on each roll in frame 1', function() {
      scorecard.roll(4);
      scorecard.roll(4);
      expect(scorecard.total()).toEqual(8);
    });

    it('hits fewer than 5 pins on each roll for 6 frames', function() {
      for (i = 1; i <= 12; i++) {
        scorecard.roll(4);
      }
      expect(scorecard.total()).toEqual(48);
      expect(scorecard.isComplete()).toEqual(false);
    })
  });

  describe('partially complete game with a spare', function() {
    it('hits 10 pins on first frame and 7 pins on second frame', function() {
      scorecard.roll(9);
      scorecard.roll(1);
      scorecard.roll(5);
      scorecard.roll(2);
      expect(scorecard.total()).toEqual(22)
      expect(scorecard.isComplete()).toEqual(false);
    });
  });

  describe('complete game with a spare', function() {
    it('hits 10 pins on first frame and less than 10 pins on all subsequent frames', function() {
      scorecard.roll(9);
      scorecard.roll(1);
      for (i = 1; i <= 18; i++) {
        scorecard.roll(4);
      }
      expect(scorecard.total()).toEqual(86);
      expect(scorecard.isComplete()).toEqual(true);
    })
  })

  describe('partially complete game with a strike', function() {
    it('hits 10 pins on first roll and less than 10 pins on all subsequent frames', function() {
      scorecard.roll(10);
      scorecard.roll(4);
      scorecard.roll(4);
      expect(scorecard.total()).toEqual(26);
      expect(scorecard.isComplete()).toEqual(false);
    })
  })

  describe('complete game with a strike', function() {
    it('hits 10 pins on first roll and less than 10 pins on all subsequent frames', function() {
      scorecard.roll(10);
      for (i = 1; i <= 18; i++) {
        scorecard.roll(3);
      }
      expect(scorecard.total()).toEqual(70)
      expect(scorecard.isComplete()).toEqual(true)
    })
  })

  describe('complete game with a strike and spare', function() {
    it('hits 10 pins on 5th frame and spare on 8th frame', function() {
      for (i = 1; i <= 8; i++) {
        scorecard.roll(3);
      }
      scorecard.roll(10)
      for (i = 1; i <= 4; i++) {
        scorecard.roll(3);
      }
      scorecard.roll(6)
      scorecard.roll(4)
      for (i = 1; i <= 4; i++) {
        scorecard.roll(3);
      }
      expect(scorecard.total()).toEqual(77)
      expect(scorecard.isComplete()).toEqual(true)
    })
  })

  describe('incomplete game with a strike and spare', function() {
    it('hits 10 pins on 5th frame and spare on 8th frame', function() {
      for (i = 1; i <= 8; i++) {
        scorecard.roll(3);
      }
      scorecard.roll(10)
      for (i = 1; i <= 4; i++) {
        scorecard.roll(4);
      }
      scorecard.roll(6)
      scorecard.roll(4)
      scorecard.roll(3)
      scorecard.roll(3)
      expect(scorecard.total()).toEqual(77)
      expect(scorecard.isComplete()).toEqual(false)
    })
  })

  describe('incomplete game with two spares in a row', function() {
    it('hits spares on first and second frame', function() {
      scorecard.roll(9)
      scorecard.roll(1)
      scorecard.roll(8)
      scorecard.roll(2)
      for (i = 1; i <= 4; i++) {
        scorecard.roll(4);
      }
      expect(scorecard.total()).toEqual(48)
      expect(scorecard.isComplete()).toEqual(false)
    })
  })

  describe('complete game with two spares in a row', function() {
    it('hits spares on first and second frame', function() {
      scorecard.roll(9)
      scorecard.roll(1)
      scorecard.roll(8)
      scorecard.roll(2)
      for (i = 1; i <= 16; i++) {
        scorecard.roll(4);
      }
      expect(scorecard.total()).toEqual(96)
      expect(scorecard.isComplete()).toEqual(true)
    })
  })

  describe('incomplete game with two strikes in a row', function() {
    it('hits strikes on first and second frame', function() {
      scorecard.roll(10)
      scorecard.roll(10)
      scorecard.roll(4)
      scorecard.roll(4)
      expect(scorecard.total()).toEqual(50)
      expect(scorecard.isComplete()).toEqual(false)
    })
  })

});
