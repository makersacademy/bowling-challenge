'use strict'

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('there are frames', function() {
    it('there is no frame by default', function () {
      expect(game.frames).toEqual([]);
    });
  });
  
});
