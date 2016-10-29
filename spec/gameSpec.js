'use strict';

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('start of game', function(){

    it('starts a game with 10 pins', function() {
      expect(game.pins).toEqual(10);
    });

    it('starts a game with 10 frames', function() {
      expect(game.frames).toEqual(10);
    });
  });
});
