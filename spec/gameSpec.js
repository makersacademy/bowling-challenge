'use strict';

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('can return a game score', function() {
    it('has a default game score of zero', function() {
      expect(game.score).toEqual(0);
    });

    it('returns a score of zero before any bowling starts', function() {
      expect(game.getScore()).toEqual(0);
    });
  });






  

  describe('Frames', function() {

    it('has a maximum number of frames', function() {
      expect(game.frameCounter).not.toBeGreaterThan(game.MAX_FRAMES);
    });
  });

});
