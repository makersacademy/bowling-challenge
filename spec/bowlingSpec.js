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
    it('increases score when points are entered', function() {
      game.scoreUpdate(7)
      expect(game.getCurrentScore()).toEqual(7);
    });

    it('only allows a maximum of 10 pins to be counted per frame', function() {
      game.scoreUpdate(7);
      expect(function(){ game.scoreUpdate(7); }).toThrowError('Cannot knock down more than 10 pins per frame');
      expect(game.getCurrentScore()).toEqual(7);
    });

    it('only increases score when a valid number of points are entered', function() {
      game.scoreUpdate(-12);
      expect(game.getCurrentScore()).toEqual(0);
    });

    it('stores the pins values scored each turn, inside an array', function() {
        game.scoreUpdate(4);
        game.scoreUpdate(3);
        expect(game.getScoreHistory()).toEqual([4, 3]);
    });

    it('increases the frame number after two goes that are not a strike', function () {
      game.scoreUpdate(7);
      game.scoreUpdate(2);
      expect(game.getCurrentScore()).toEqual(9);
      expect(game.getCurrentFrame()).toEqual(2);
    });

    it('allows a third attempt on the 10th frame', function() {
      for(var i = 0; i < 9; i++) {
        game.scoreUpdate(7);
        game.scoreUpdate(2);
      }
      game.scoreUpdate(4);
      game.scoreUpdate(3);
      game.scoreUpdate(2);
      expect(game.getCurrentScore()).toEqual(90);
      expect(game.getCurrentFrame()).toEqual(11);
    });
  });

  describe('bonus calculations', function() {
    it('allows more than 10 pins to be counted for the 10th frame', function() {

    });
  });
});
