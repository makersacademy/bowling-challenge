'use strict';

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('starts at frame 0', function() {
    // game.newFrame()
    expect(game.getCurrentFrameNumber()).toEqual(0);
  });

  it('Starting a game puts a frame in the array', function() {
    game.newFrame()
    expect(game.frames[0] instanceof Frame).toBeTruthy()
    expect(game.frames.length).toEqual(1)
  });

  describe('frames < 10', function() {

    it('After 2 bowls frames array has 2 frames in it', function() {
      game.newFrame()
      game.bowl(2)
      game.bowl(3)
      game.bowl(5)
      expect(game.frames.length).toEqual(2)
      // expect(game.getCurrentFrameNumber()).toEqual(2);
    });

    it('after 2 bowls current frame should be 2', function() {
      console.log(game.frames.length)
      game.newFrame()
      console.log(game.frames.length)
      game.bowl(2)
      game.bowl(3)
      game.bowl(3)
      console.log(game.frames.length)
      expect(game.getCurrentFrameNumber()).toEqual(2);
    });
  });
});
