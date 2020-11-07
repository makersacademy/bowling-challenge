describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('#roll',function() {
    it('creates a new frame if a frame is not open and adds frame to an array',function() {
      game.roll(1);

      expect(game.frames.length).toEqual(1)
    });

    it('with first roll it creates a new frame and adds to an array, with second roll it adds roll to curently open frame',function() {
      game.roll(1);
      game.roll(1);
      expect(game.frames.length).toEqual(1)
    });

    it('creates new frame every third roll and adds to an array', function() {
      game.roll(1);
      game.roll(1);
      game.roll(1);

      expect(game.frames.length).toEqual(2)
    });

    it('after a strike new roll creates a new frame', function() {
      game.roll(10)
      game.roll(1)

      expect(game.frames.length).toEqual(2)
    });

    it('stops game after 10 frames', function() {
      for (var i = 0; i < 21; i++) {
        game.roll(1);
      }

      expect(game.frames.length).toEqual(10)
    });

  });

});
