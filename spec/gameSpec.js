describe ('game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('gameover', function() {
    it('returns the total score', function() {
      expect(game.gameover()).toEqual(game.total)
    });
  });

  describe('roll', function() {
    it('adds roll to frame', function() {
      game.roll(5);
      expect(game.currentFrame).toEqual([5])
    });

    it('sends full frame to scorer for calculation', function() {
      game.roll(5);
      game.roll(3);
      expect(game.scorer.scores).toEqual([8])
    });

    it('sets frame status as complete after 2 rolls', function() {
      game.roll(5);
      game.roll(3);
      expect(game.frameComplete).toBe(true);
    });

    // it('sends values to score as appropriate', function() {
    //
    // });
  });

});
