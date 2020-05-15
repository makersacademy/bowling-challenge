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
      expect(game.currentFrameIndex).toEqual(0);
    });
  });

  describe('#getCurrentFrame', function() {
    it('returns the current frame object', function() {
      expect(game.getCurrentFrame()).toBeInstanceOf(Frame);
    });
  });

  describe('#nextFrame', function() {
    it('progresses the game to the next frame', function() {
      game.nextFrame();
      expect(game.currentFrameIndex).toEqual(1);
    });
  });

  describe('#update', function() {
    it('progresses the current frames roll if the current frame is not finished', function() {
      game.frames[game.currentFrameIndex].setCurrentRollScore(9);
      game.update();
      expect(game.frames[game.currentFrameIndex].currentRoll).toEqual(1);
    });
  });
});