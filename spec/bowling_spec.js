describe('Bowling, when starting a new game:', function() {
  var theDude;
  var game;
  var score;
  beforeEach(function() {
    game = new Game;
    game.newGame();
    score = new Score();
    theDude = new Bowling(game, score);
  });

  describe('it knows which frame it is,', function() {
    it('returns 1 for first game.', function() {
      expect(theDude.game.currentFrame).toEqual(1);
    });
  });

  describe('it knows which throw it is,', function() {
    it('returns \'first\' at the start of game.', function() {
      expect(theDude.game.currentThrow).toEqual('first');
    });
  });
  describe('it knows how many pins there are,', function() {
    it('returns 10 at the beggining of game', function() {
      expect(theDude._pins).toEqual(10);
    });
  });

  describe('it knows the current frames\' points,', function() {
    it('returns null.', function() {
      expect(theDude.score.framePoints).toEqual(0);
    });
  });

  describe('it knows the current throws\' points,', function() {
    it('returns null.', function() {
      expect(theDude._firstThrow).toEqual(null);
    });
  });

  describe('it knows if the current round is a Strike round', function() {
    it('returns false', function() {
      expect(theDude._strikeRound).toEqual(false);
    })
  })
  describe('it knows if the current round is a Spare round', function() {
    it('returns false', function() {
      expect(theDude._spareRound).toEqual(false)
    });
    });
});
