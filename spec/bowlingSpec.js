'use strict';

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('initialization', function() {
    it('initializes the game score as 0', function() {
      expect(game.getCurrentScore()).toEqual(0);
    });

    it('initializes the frame count as 1', function() {
      expect(game.getCurrentFrame()).toEqual(1);
    });
  });

  describe('point scoring', function() {
    it('increases score when points are won', function() {
      game.scoreUpdate(7)
      expect(game.getCurrentScore()).toEqual(7);
    });

    it('only increases score when a valid number of points are won', function() {
      game.scoreUpdate(12);
      game.scoreUpdate(-12);
      expect(game.getCurrentScore()).toEqual(0);
    });

    it('increases the frame number after two goes', function () {
      game.scoreUpdate(7);
      game.scoreUpdate(2);
      expect(game.getCurrentScore()).toEqual(9);
      expect(game.getCurrentFrame()).toEqual(2);
    });

  });
});
