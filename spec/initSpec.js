'use strict';

describe('Init Unit Tests', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('Score', function() {
    it('score starts at 0', function() {
      expect(game.getCurrentTotalScore()).toEqual(0);
    });
  });

  describe('Frames', function() {
    it('frames start empty', function() {
      expect(game.getCurrentFrames()).toEqual([]);
    });
  });


});
