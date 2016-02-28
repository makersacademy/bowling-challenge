'use strict';

describe('Playing a full game', function () {
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
});
