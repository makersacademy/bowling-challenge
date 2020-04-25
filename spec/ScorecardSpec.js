describe('scorecard', function() {
  let scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe('adding frames', function() {
    it('can accept a new frame', () => {
      scorecard.addFrame(2, 2);
      expect(scorecard.frames[0]).toBeInstanceOf(Frame);
    });
    it('can accept two frames', () => {
      scorecard.addFrame(2, 2);
      scorecard.addFrame(10);
      expect(scorecard.frames[1]).toBeInstanceOf(Frame);
    });
  });

  describe('one frame', function() {
    it('[0, 0] returns score 0', function() {
      scorecard.addFrame(0, 0);
      expect(scorecard.score).toEqual(0);
    });

    it('[0, 5] returns score 5', function() {
      scorecard.addFrame(0, 5);
      expect(scorecard.score).toEqual(5);
    });

    it('[3, 5] returns score 8', function() {
      scorecard.addFrame(3, 5);
      expect(scorecard.score).toEqual(8);
    });
  });

  describe('two frames', function() {
    it('[2, 6], [3, 2] scores 13', function() {
      scorecard.addFrame(2, 6);
      scorecard.addFrame(3, 2);
      expect(scorecard.score).toEqual(13);
    });

    it('[3, 7], [3, 2] scores 18', function() {
      scorecard.addFrame(3, 7);
      scorecard.addFrame(3, 2);
      expect(scorecard.score).toEqual(18);
    });
  });

  describe('three frames', function() {
    it('[2, 6], [3, 2], [1, 4] returns 18', function() {
      scorecard.addFrame(2, 6);
      scorecard.addFrame(3, 2);
      scorecard.addFrame(1, 4);
      expect(scorecard.score).toEqual(18);
    });

    it('[3, 7], [3, 2], [1, 4] returns 23', function() {
      scorecard.addFrame(3, 7);
      scorecard.addFrame(3, 2);
      scorecard.addFrame(1, 4);
      expect(scorecard.score).toEqual(23);
    });

    it('[3, 7], [3, 7], [1, 4] returns 29', function() {
      scorecard.addFrame(3, 7);
      scorecard.addFrame(3, 7);
      scorecard.addFrame(1, 4);
      expect(scorecard.score).toEqual(29);
    });

    it('[10], [3, 7], [1, 4] returns 36', function() {
      scorecard.addFrame(10);
      scorecard.addFrame(3, 7);
      scorecard.addFrame(1, 4);
      expect(scorecard.score).toEqual(36);
    });

    it('[10], [2, 7], [1, 4] returns 33', function() {
      scorecard.addFrame(10);
      scorecard.addFrame(2, 7);
      scorecard.addFrame(1, 4);
      expect(scorecard.score).toEqual(33);
    });
  });

  describe('four frames', function() {
    it('[10], [10], [3, 7], [2, 3] returns 60', function() {
      scorecard.addFrame(10);
      scorecard.addFrame(10);
      scorecard.addFrame(3, 7);
      scorecard.addFrame(2, 3);
      expect(scorecard.score).toEqual(60);
    });
  });

  describe('full games', function() {
    it('Gutter game', function() {
      for (i = 0; i < 10; i++) {
        scorecard.addFrame(0, 0);
      }
      expect(scorecard.score).toEqual(0);
    });

    it('10 scores of 0, 5 scores 50', function() {
      for (i = 0; i < 10; i++) {
        scorecard.addFrame(0, 5);
      }
      expect(scorecard.score).toEqual(50);
    });

    it('perfect game scores 300', function() {
      for (i = 0; i < 12; i++) {
        scorecard.addFrame(10);
      }
      expect(scorecard.score).toEqual(300);
    });

    it('11 strikes and one 5 scores 295', function() {
      for (i = 0; i < 11; i++) {
        scorecard.addFrame(10);
      }
      scorecard.addFrame(5);
      expect(scorecard.score).toEqual(295);
    });

    it('11 strikes and one 5 scores 295', function() {
      for (i = 0; i < 11; i++) {
        scorecard.addFrame(10);
      }
      scorecard.addFrame(5);
      expect(scorecard.score).toEqual(295);
    });

    it('10 strikes and one spare scores 285', function() {
      for (i = 0; i < 10; i++) {
        scorecard.addFrame(10);
      }
      scorecard.addFrame(5, 5);
      expect(scorecard.score).toEqual(285);
    });

    it('9 strikes, one spare, one strike scores 275', function() {
      for (i = 0; i < 9; i++) {
        scorecard.addFrame(10);
      }
      scorecard.addFrame(5, 5);
      scorecard.addFrame(10);
      expect(scorecard.score).toEqual(275);
    });

    it('9 strikes, one spare, one strike scores 275', function() {
      for (i = 0; i < 9; i++) {
        scorecard.addFrame(10);
      }
      scorecard.addFrame(5, 5);
      scorecard.addFrame(10);
      expect(scorecard.score).toEqual(275);
    });

    it('9 strikes, 2,2 scores 250', function() {
      for (i = 0; i < 9; i++) {
        scorecard.addFrame(10);
      }
      scorecard.addFrame(2, 2);
      expect(scorecard.score).toEqual(250);
    });
  });

  describe('edge cases', function() {
    it('13 strikes throws an error', function() {
      for (i = 0; i < 12; i++) {
        scorecard.addFrame(10);
      }
      expect(function() {
        scorecard.addFrame(10);
      }).toThrowError('Game complete!');
    });

    it('11 open frames throws an error', function() {
      for (i = 0; i < 10; i++) {
        scorecard.addFrame(5);
      }
      expect(function() {
        scorecard.addFrame(6);
      }).toThrowError('Game complete!');
    });

    it('12 spares throws an error', function() {
      for (i = 0; i < 11; i++) {
        scorecard.addFrame(5, 5);
      }
      expect(function() {
        scorecard.addFrame(6, 4);
      }).toThrowError('Game complete!');
    });
  });
});
