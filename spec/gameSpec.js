'use strict';

describe('Game', function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = jasmine.createSpyObj('frame', ['addFrameToGame']);
  });

  describe('can return a game score', function() {
    it('has a default game score of zero', function() {
      expect(game.getGameScore()).toEqual(0);
    });

    it('returns a score of zero before any bowling starts', function() {
      expect(game.getGameScore()).toEqual(0);
    });

    it('returns a score from the frames played if no bonuses', function() {
      game.frames = [2, 2, 2];
      expect(game.getGameScore()).toEqual(6);
    });
  });

  describe('frames in game', function() {

    it('has a maximum number of frames', function() {
      expect(game.frameCounter).not.toBeGreaterThan(game.MAX_FRAMES);
    });

    it('knows the number of frames played', function() {
      game.frames = [2, 2, 2]
      expect(game.getFrameCounter()).toEqual(3);
    });
  });


});
