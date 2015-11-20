describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
    game.roll(3);
  })

  describe('#roll', function() {
    it('registers a roll', function() {
      expect(game.gameRolls[0]).toEqual(3);
    });

    it('adds a frame', function() {
      expect(game.frames.length).toEqual(1);
    });

    it('adds a new frame when frame finished', function() {
      game.roll(2);
      game.roll(4);
      expect(game.frames.length).toEqual(2);
    });
  });

  describe('#score', function() {
    it('shows score for a simple no bonus frames', function() {
      game.roll(2);
      game.roll(4);
      game.roll(5);
      game.roll(3);
      expect(game.score()).toEqual(17);
    });
  });
});
