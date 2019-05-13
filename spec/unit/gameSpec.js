describe('Game', function() {
  var Game = require('../../src/game');
  var game,
    frameMock;

  beforeEach(function() {
      frameMock = jasmine.createSpyObj('frame', ['pinsHit', 'isComplete', 'number']);
      game = new Game();
      spyOn(game, '_newFrame').and.returnValue(frameMock);
  });

  describe('::new', function() {
    it('starts with frame number at zero', function() {
      expect(game._frameNumber).toEqual(0);
    });
  });

  describe('#addRoll', function() {
    it('will add a roll to the frame', function() {
      var value = 3;
      game.addRoll(3);
      expect(game.frames()[0].pinsHit).toHaveBeenCalledWith(value);
    });
  });

  describe('#frames', function() {
    it('returns frames array', function() {
      game.addRoll(3);
      expect(game.frames()).toEqual([frameMock]);
    });
  });

  describe('#_addFrame', function() {
    it('adds a new frame to the frames array', function() {
      game._addFrame(1);
      expect(game.frames()[0]).toBe(frameMock);
    });
  });

  describe('#_currentFrame', function() {
    it('returns undefined in a new game', function() {
      expect(game._currentFrame()).toBe(undefined);
    });

    it('returns the current frame', function() {
      game.addRoll(1);
      expect(game._currentFrame()).toEqual(frameMock);
    });
  });

  describe('#isComplete', function() {
    it('returns true if tenth frame is complete', function() {
      game.addRoll(1);
      game._currentFrame().number.and.returnValue(10);
      game._currentFrame().isComplete.and.returnValue(true);
      expect(game.isComplete()).toBe(true);
    });

    it('returns false if tenth frame is not complete', function() {
      game.addRoll(1);
      game._currentFrame().number.and.returnValue(10);
      game._currentFrame().isComplete.and.returnValue(false);
      expect(game.isComplete()).toBe(false);
    });
  });
});
