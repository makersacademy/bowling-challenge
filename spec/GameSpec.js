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
});
