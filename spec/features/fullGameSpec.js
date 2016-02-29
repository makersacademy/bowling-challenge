'use strict';

describe('Playing a full game', function () {
  var game;

  beforeEach(function () {
    game = new Game();
  });

  describe('player bowls a gutter game', function () {
    it('has a score of 0', function () {
      this.rollMany.call(game, 20, 0);
      expect(game.calculateScore()).toEqual(0);
    });
  });

  describe('player bowls all ones', function () {
    it('has a score of 20', function () {
      this.rollMany.call(game, 20, 1);
      expect(game.calculateScore()).toEqual(20);
    });
  });

  describe('player bowls all spares (5)', function () {
    it('has a score of 150', function () {
      this.rollMany.call(game, 21, 5);
      expect(game.calculateScore()).toEqual(150);
    });
  });

  describe('player bowls a perfect game', function () {
    it('has a score of 300', function () {
      this.rollMany.call(game, 12, 10);
      expect(game.calculateScore()).toEqual(300);
    });
  });

  describe('player bowls a mixed game', function () {
    it('has a score of 118', function () {
      this.rollMany.call(game, 2, 10);
      this.rollMany.call(game, 2, 5);
      this.rollMany.call(game, 2, 4);
      this.rollMany.call(game, 4, 5);
      this.rollMany.call(game, 4, 0);
      game.roll(10);
      this.rollMany.call(game, 2, 4);
      expect(game.calculateScore()).toEqual(118);
    });
  });

  describe('if player tries to bowl if a game is over', function () {
    it('throws an exception', function () {
      this.rollMany.call(game, 20, 4);
      var invalidRoll = function () {
        game.roll(4);
      };
      expect(invalidRoll).toThrowError('Game over');
    });
  });
});
