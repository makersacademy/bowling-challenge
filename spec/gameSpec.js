'use strict';

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('can return a score', function() {
    it('has a default score of 0', function() {
      expect(game.score).toEqual(0);
    });

    it('returns a score of 0 before any bowling starts', function() {
      expect(game.getScore()).toEqual(0);
    });

  });

});
