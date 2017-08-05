'use strict';

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game(Frame);
  });

  describe('constructor', function() {
    it('has ten frames', function() {
      expect(game.getFrames().length).toEqual(10);
    });

    it('the current frame is 1', function() {
      expect(game.getCurrentFrame()).toEqual(1);
    });
  });
});
