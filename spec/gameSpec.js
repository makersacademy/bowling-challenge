'use strict';

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('starts at frame 0', function() {
    expect(game.getCurrentFrameNumber()).toEqual(0);
  });

  it('Starting a game puts a frame in the array', function() {
    game.newFrame()
    expect(game.frames[0] instanceof Frame).toBeTruthy()
    expect(game.frames.length).toEqual(1)
  });

  describe('frames < 10', function() {

    it('after 3 bowls current frame should be 2', function() {
      for (var i = 0; i < 3; i++) {
        game.bowl(2)
      }
      expect(game.getCurrentFrameNumber()).toEqual(2);
    });

    it('after 9 bowls current frame should be 5', function() {
      for (var i = 0; i < 9; i++) {
        game.bowl(2)
      }
      expect(game.getCurrentFrameNumber()).toEqual(5);
    });
  });
});
