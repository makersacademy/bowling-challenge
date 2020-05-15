describe('Game', function() {
  var game;
  beforeEach(function() {
    game = new Game();
  });

  describe('#frames', function() {
    it('has an initial list of frames containing the first frame', function() {
      expect(game.frames.length).toEqual(1);
    });
  });

  describe('#currentFrame', function() {
    it('stores the current frame', function() {
      expect(game.currentFrame).toEqual(0);
    });
  });
});