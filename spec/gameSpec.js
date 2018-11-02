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
  });
});
