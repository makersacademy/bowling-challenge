'use strict';

describe('Bowling Calculator', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('Game without strikes or spares', function() {
    it('one on all rolls', function() {
      for (var i = 0; i < 20; i++) {
        game.roll(1)
      }
      expect(game.score()).toEqual(20);
    });
  });

  describe('Zero-pointer', function() {
    it('can roll a game with no points', function() {
      for (var i = 0; i < 20; i++) {
        game.roll(0)
      }
      expect(game.score()).toEqual(0);
    });
  });

  describe('spares', function() {
    it('can score a spare', function() {
      game.roll(8)
      game.roll(2)
      game.roll(6)
      for (var i = 0; i < 17; i++) {
        game.roll(0)
      }
      expect(game.score()).toEqual(22)
    });
  });

  describe('Strikes', function() {
    it('One strike', function() {
      game.roll(10)
      game.roll(2)
      game.roll(2)
      for (var i = 0; i < 16; i++) {
        game.roll(0)
      }
      expect(game.score()).toEqual(18)
    });

    it('user can roll all strikes', function() {
      for (var i = 0; i < 12; i++) {
        game.roll(10)
      }
      expect(game.score()).toEqual(300)
    });
  });
});
