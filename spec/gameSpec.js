describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('initialize', function() {
    it('has 10 frames', function() {
      expect(game.frames).toEqual(10);
    });
  });

  describe('addScore', function() {
    it('adds a score to the array', function() {
      game.addScore(7)
      expect(game.scores[0]).toEqual(7);
    });
  });
});
