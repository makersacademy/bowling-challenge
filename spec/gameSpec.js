describe('Game', function() {
  var game;
  beforeEach(function() {
    frameClass = function() {}
    frameClass.prototype.nextRoll = function() {}
    frameClass.prototype.finished = function() {}
    rollClass = function() {}
    game = new Game(frameClass, rollClass);
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
      expect(game.getCurrentFrame()).toBeInstanceOf(frameClass);
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
      spyOn(frameClass.prototype, 'finished').and.returnValue(false);
      spyOn(frameClass.prototype, 'nextRoll');
      game.update();
      expect(game.getCurrentFrame().nextRoll).toHaveBeenCalled();
    });
  });
});