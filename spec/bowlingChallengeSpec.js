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

  describe('normal scoring (no Xs or /s)', function() {
    it('can score a 1 on every roll', function() {
      for (var i = 0; i < 20; i++) {
        game.roll(1)
      }
      expect(game.score()).toEqual(20);
    });

    it('can score a 4 on every roll', function() {
      for (var i = 0; i < 20; i++) {
        game.roll(4)
      }
      expect(game.score()).toEqual(80);
    });
  });

});
