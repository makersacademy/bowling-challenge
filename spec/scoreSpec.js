describe('Score', function() {
  beforeEach(function() {
    game = new Game();
  });

  describe('calculateFrameScores', function() {
    it('sets the score for an open frame', function() {
      game.addScore(3);
      game.addScore(3);
      game.calculateFrameScore();
      expect(game.scores.array[0].score).toEqual(6);
    });

    it('does not duplicate the score for an open frame', function() {
      game.addScore(5);
      game.addScore(5);
      game.scores.calculateFrameScore();
      game.scores.calculateFrameScore();
      expect(game.scores.array[0].score).toEqual(10);
    });

    it('sets the score for a spare frame', function() {
      game.addScore(5);
      game.addScore(5);
      game.scores.calculateFrameScore();
      expect(game.scores.array[0].score).toEqual(10);
      expect(game.scores.array[0].isSpare).toEqual(true);
    });

    it('sets the score for a strike frame', function() {
      game.addScore(10);
      game.scores.calculateFrameScore();
      expect(game.scores.array[0].score).toEqual(10);
      expect(game.scores.array[0].isStrike).toEqual(true);
    });
  });

  describe('calculateBonus', function() {
    it('calculates the bonus score for a spare frame', function() {
      game.addScore(5);
      game.addScore(5);
      game.addScore(5);
      game.addScore(1);
      game.scores.calculateBonus();
      expect(game.scores.array[0].bonus).toEqual(5);
    });

    it('calculates the bonus score for a strike frame', function() {
      game.addScore(10);
      game.addScore(5);
      game.addScore(1);
      game.scores.calculateBonus();
      expect(game.scores.array[0].bonus).toEqual(6);
    });

    it('calculates the bonus score for 2 strike frames in a row', function() {
      game.addScore(10);
      game.addScore(10);
      game.addScore(1);
      game.addScore(1);
      game.scores.calculateBonus();
      expect(game.scores.array[0].bonus).toEqual(11);
      expect(game.scores.array[1].bonus).toEqual(2);
    });

    it('calculates the bonus score for 3 strike frames in a row', function() {
      game.addScore(10);
      game.addScore(10);
      game.addScore(10);
      game.addScore(1);
      game.addScore(1);
      game.scores.calculateBonus();
      expect(game.scores.array[0].bonus).toEqual(20);
      expect(game.scores.array[1].bonus).toEqual(11)
      expect(game.scores.array[2].bonus).toEqual(2);
    });
  });

  describe('isGutterGame', function() {
    beforeEach(function() {
      for (var i = 0; i < 19; i++) {
        game.addScore(0);
      }
    })

    it('returns true if 0 pins are knocked down across all frames', function() {
      game.addScore(0);
      expect(game.scores.isGutterGame()).toEqual(true);
    });

    it('returns false if at least 1 pin is knocked down', function() {
      game.addScore(1);
      expect(game.scores.isGutterGame()).toEqual(false);
    });
  });

  describe('isPerfectGame', function() {
    beforeEach(function() {
      for (var i = 0; i < 10; i++) {
        game.addScore(10);
      }
    });

    it('returns true if all frames are strikes', function() {
      game.addScore(10);
      game.addScore(10);
      expect(game.scores.isPerfectGame()).toEqual(true);
    });

    it('returns false if at least 1 frame is not a strike', function() {
      game.addScore(1);
      game.addScore(1);
      expect(game.scores.isPerfectGame()).toEqual(false);
    });
  });
});
