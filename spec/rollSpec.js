'use strict';

describe('Roll Unit Tests', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('.roll', function() {
    it('adjusts frames', function() {
      game.roll(5);
      expect(game.getCurrentFrames()).toEqual([5]);
    });
  });
});
