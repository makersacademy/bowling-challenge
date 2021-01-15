describe ('game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('gameover', function() {
    it('returns the total score', function() {
      game.roll(1);
      game.roll(2);
      expect(game.gameover()).toEqual(game.scorer.total())
    });
  });

  describe('roll', function() {
    it('throws error for incorrect input', function() {
      expect( function() { game.roll(11) } ).toThrow('Please enter number between 0 and 10');
    });

    it('adds roll to frame', function() {
      game.roll(5);
      expect(game.currentFrame.pins).toEqual([5])
    });

    it('sends full frame to scorer for calculation', function() {
      game.roll(5);
      game.roll(3);
      expect(game.scorer.scores).toEqual([8])
    });

    it('resets frame', function() {
      game.roll(5);
      game.roll(3);
      expect(game.currentFrame.pins).toEqual([])
    })
  });

  describe('endAndResetFrame', function() {
    it('sends frame to scorer', function() {
      game.roll(5);
      game.roll(3);
      expect(game.scorer.scores).toEqual([8])
    });
  });

});
