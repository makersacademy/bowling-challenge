'use strict';

describe('Bowling Game', function() {
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  describe('gutter game (all 0s)', function() {
    it('can roll a gutter game', function() {
      for (var i = 0; i < 20; i++) {
        game.roll(0)
      }
      expect(game.score()).toEqual(0);
    });
  });

});
