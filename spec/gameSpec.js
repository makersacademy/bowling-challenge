'use strict';

describe('Game', function () {
  var game;

  beforeEach(function () {
    game = new Game();
  });

  describe('player rolls a gutter game', function () {
    it('has a score of zero', function () {
      this.rollMany(game, 20, 0);
      expect(game.calculateScore()).toEqual(0);
    });
  });

  describe('player rolls all ones', function () {
    it('has a score of twenty', function () {
      this.rollMany(game, 20, 1);
      expect(game.calculateScore()).toEqual(20);
    });
  });

  // describe('player rolls a spare', function () {
  //   it('adds the next roll points as bonus', function () {
  //     rollMany(2, 5);
  //     game.roll(7);
  //     expect(game.getScore()).toEqual(24);
  //   });
  // });

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
  });
});
