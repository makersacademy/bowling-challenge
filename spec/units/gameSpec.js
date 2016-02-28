'use strict';

describe('Game', function () {
  var game;

  beforeEach(function () {
    game = new Game();
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
  });
});
