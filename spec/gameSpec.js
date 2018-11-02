describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('initializes', function() {
    it('with 10 frames', function() {
      expect(game.FRAMES).toEqual(10);
    });

    it('with a frames array', function() {
      expect(game.frames_array).toEqual(Array());
    });
  });
});
