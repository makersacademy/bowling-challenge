describe('Game', function() {
  var game;
  beforeEach(function() {
    frameClass = function() {}
    rollClass = function() {}
    frameClass.prototype.nextRoll = function() {}
    frameClass.prototype.finished = function() {}
    frameFactory = {
      instance: function() {
        return new frameClass()
      }
    }
    game = new Game(frameFactory);
  });

  describe('#frames', function() {
    it('has an initial list of frames', function() {
      expect(game.frames.length).toEqual(10);
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

  describe('#getCurrentRoll', function(){
    it('returns the current roll', function() {
      frameClass.prototype.getCurrentRoll = function() {
        return new rollClass();
      }
      expect(game.getCurrentRoll()).toBeInstanceOf(rollClass);
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
    it('progresses currentFrameIndex to the next frame if current frame is finished', function() {
      spyOn(frameClass.prototype, 'finished').and.returnValue(true);
      game.update();
      expect(game.currentFrameIndex).toEqual(1);
    });
  });
});