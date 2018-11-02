'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('recordRoll', function() {
    it('can record a roll', function() {
      expect(game.recordRoll(8)).toEqual(8);
    });

    it('adds roll to current frame', function() {
      game.recordRoll(8);
      expect(game.thisFrame()).toEqual([8]);
    });

    it('can add two rolls to frame', function() {
      game.recordRoll(8);
      game.recordRoll(1);
      expect(game.thisFrame()).toEqual([8, 1]);
    });

    it('raises error if rolling three times', function() {
      game.recordRoll(6);
      game.recordRoll(1);
      expect(function(){game.recordRoll(1)}).toThrow("Limit of two rolls per frame");
    });

    it('raises error if number of pins is greater than 10', function() {
      expect(function(){game.recordRoll(12)}).toThrow("Maximum of 10 pins per roll");
    });

    it('raises error if total pins knocked down is more than 10', function() {
      game.recordRoll(9);
      expect(function(){game.recordRoll(2)}).toThrow("Limit of 10 pins knocked down per frame");
    });
  });

  describe('checkFrame', function() {
    it('increments frame if there have been two rolls', function() {
      game.recordRoll(3);
      game.recordRoll(4);
      game.checkFrame();
      expect(game.whichFrame()).toEqual(2);
    });

    it('does not increment frame if there have not been two rolls', function() {
      game.recordRoll(8);
      game.checkFrame();
      expect(game.whichFrame()).toEqual(1);
    });

    it('clears rolls this frame if incrementing frame', function() {
      game.recordRoll(3);
      game.recordRoll(4);
      game.checkFrame();
      expect(game.thisFrame()).toEqual([]);
    });

    it('does not clear rolls this frame if not incrementing frame', function() {
      game.recordRoll(3);
      game.checkFrame();
      expect(game.thisFrame()).toEqual([3]);
    });
  });
});
