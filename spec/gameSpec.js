'use strict';

describe('Game', function () {
  var game;

  beforeEach(function () {
    game = new Game();
  });

  describe('player rolls a gutter game', function () {
    it('has a score of zero', function () {
      for (var i = 0; i < 20; i++) {
        game.roll(0);
      }
      expect(game.getScore()).toEqual(0);
    });
  });

  describe('player rolls all ones', function () {
    it('has a score of twenty', function () {
      for (var i = 0; i < 20; i++) {
        game.roll(1);
      }
      expect(game.getScore()).toEqual(20);
    });
  });

  describe('#roll', function () {
    describe('if passed an non-number value', function () {
      it('throws an exception', function () {
        var invalidRoll = function () {
          game.roll('invalid');
        };
        expect(invalidRoll).toThrowError('Invalid roll');
      });
    });

    describe('if passed a negative value', function () {
      it('throws an exception', function () {
        var invalidRoll = function () {
          game.roll(-4);
        };
        expect(invalidRoll).toThrowError('Invalid roll');
      });
    });

    describe('if passed a value greater than 10', function () {
      it('throws an exception', function () {
        var invalidRoll = function () {
          game.roll(11);
        };
        expect(invalidRoll).toThrowError('Invalid roll');
      });
    });
  });
});
