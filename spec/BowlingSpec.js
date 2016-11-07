'use strict'

describe('Bowling', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });
  
  describe('play', function() {
    it('adds a score to the frame array', function() {
      game.slider = 3;
      game.play();
      expect(game.firstGo).toEqual(3);
    });
  });
});