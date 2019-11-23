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

  describe('spares (/s)', function() {
    it('can score a spare', function() {
      game.roll(9)
      game.roll(1)
      game.roll(4)
      for (var i = 0; i < 17; i++) {
        game.roll(0)
      }
      expect(game.score()).toEqual(18)
    });
  });

  describe('strikes (Xs)', function() {
    it('can score a strike', function() {
      game.roll(10)
      game.roll(4)
      game.roll(5)
      for (var i = 0; i < 16; i++) {
        game.roll(0)
      }
      expect(game.score()).toEqual(28)
    });
  });

  describe('perfect game (all Xs)', function() {
    it('can roll a perfect game', function() {
      for (var i = 0; i < 12; i++) {
        game.roll(10)
      }
      expect(game.score()).toEqual(300)
    });
  });
});
