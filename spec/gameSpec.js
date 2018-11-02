describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('initialize', function() {
    it('has 10 frames', function() {
      expect(game.FRAMES).toEqual(10);
    });

    it('has 2 rolls per frame', function() {
      expect(game.rollsPerFrame).toEqual(2);
    });

    it('has 10 pins per frame', function() {
      expect(game.PINS).toEqual(10);
    });
  });

  describe('addScore', function() {
    it('adds a score to the array', function() {
      game.addScore(7)
      expect(game.scores[0]).toEqual(7);
    });

    it('limits the number of scores', function() {
      for (var i = 0; i < 20; i++) {
        game.addScore(5);
      }
      expect(function() {game.addScore(5)}).toThrow(new Error("Cannot add more scores."));
    });

    it('limits the number of pins', function() {
      game.addScore(7);
      expect(function() {game.addScore(5)}).toThrow(new Error("Number of pins in frame cannot be above 10."));
    });

    it('limits the number of pins in a frame', function() {
      game.addScore(5);
      game.addScore(3);
      expect(function() {game.addScore(8)}).not.toThrow(new Error("Number of pins in frame cannot be above 10."));
    });
  });
});
