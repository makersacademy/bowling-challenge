describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('#roll',function() {
    it('creates a new frame if a frame is not open and add it to an array',function() {
      game.roll(1);

      expect(game.frames.length).toEqual(1)
    });

  });

});
