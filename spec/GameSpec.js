'use strict';

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game;
  });

  describe('frames', function() {

    it('Starts out as an empty array', function() {
      expect(game.frames()).toEqual([])
    });
  });

  describe('addNewFrame', function() {

    it('Adds a new frame to the array', function() {
      game.addNewFrame();
      var frames = game.frames();
      expect(frames.length).toEqual(1);
    });
  });
});
