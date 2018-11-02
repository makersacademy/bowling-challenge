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
      expect(game.allFrames()[0]["rolls"]).toEqual([8, 1]);
    });

    it('raises error if number of pins is greater than 10', function() {
      expect(function(){game.recordRoll(12)}).toThrow("Maximum of 10 pins per roll");
    });

    it('raises error if total pins knocked down is more than 10', function() {
      game.recordRoll(9);
      expect(function(){game.recordRoll(2)}).toThrow("Maximum of 10 pins per frame");
    });

    it('checks frame after a roll', function() {
      game.recordRoll(7);
      game.recordRoll(2);
      expect(game.whichFrame()).toEqual(2);
    });

    it('adds roll to total score', function() {
      game.recordRoll(5);
      game.recordRoll(4);
      game.recordRoll(3);
      expect(game.score()).toEqual(12);
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

    it('adds current frame to all frames', function() {
      game.recordRoll(2);
      game.recordRoll(4);
      game.checkFrame();
      expect(game.allFrames()).toEqual([{rolls: [2, 4], score: 6}]);
    });

    it('increments frame if roll was a strike', function() {
      game.recordRoll(10);
      game.checkFrame();
      expect(game.whichFrame()).toEqual(2);
    });

    it('adds strike as an X', function() {
      game.recordRoll(10);
      expect(game.allFrames()[0]["rolls"]).toEqual(["X"]);
    });

    it('adds spare as a /', function() {
      game.recordRoll(9);
      game.recordRoll(1);
      expect(game.allFrames()[0]["rolls"]).toEqual([9, "/"]);
    });
  });

  describe('checkSpares', function() {
    it('adds spare bonus', function() {
      game.recordRoll(9);
      game.recordRoll(1);
      game.recordRoll(4);
      game.recordRoll(2);
      expect(game.allFrames()[0]["score"]).toEqual(14);
      expect(game.score()).toEqual(20);
    });
  });

  describe('checkStrikes', function() {
    it('adds strike bonus after one strike', function() {
      game.recordRoll(10);
      game.recordRoll(3);
      game.recordRoll(4);
      expect(game.allFrames()[0]["score"]).toEqual(17);
      expect(game.score()).toEqual(24);
    });

    it('adds strike bonus after two strikes', function() {
      game.recordRoll(10);
      game.recordRoll(10);
      game.recordRoll(3);
      game.recordRoll(4);
      expect(game.allFrames()[0]["score"]).toEqual(23);
      expect(game.allFrames()[1]["score"]).toEqual(17);
      expect(game.score()).toEqual(47);
    });
  });
});
