'use strict';

describe ('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('initialize game', function() {

    it('game starts with the score of zero', function() {
      expect(game.getScore()).toEqual(0);
    });

    it('game starts with the first frame', function() {
      expect(game.frameNumber()).toEqual(1);
    });

    it('games starts on roll zero', function() {
      expect(game.rollCount()).toEqual(0);
    });

    it('starts with zero bonus points', function() {
      expect(game.bonusPoints()).toEqual(0);
    });

  });

  describe('passing scores to the next frames', function() {

    it('frame number increases by three after six rolls', function() {
      for(var i = 0; i < 6; i++) {
        game.oneRoll(5);
      }
      expect(game.frameNumber()).toEqual(4);
    });

    it('frame number increases by one after three rolls', function() {
      for(var i = 0; i < 3; i++) {
        game.oneRoll(5);
      }
      expect(game.frameNumber()).toEqual(2);
    });

    it('stores frame score on first roll if strike', function() {
      game.oneRoll(3);
      game.oneRoll(4);
      game.oneRoll(10);
      expect(game.totalFrameScore()).toEqual([[3,4],[10]])
    });

    it("doesn't store the frame score on the first roll if not a strike", function() {
      game.oneRoll(6);
      expect(game.totalFrameScore()).toEqual([])
    });

  });

  describe('storing frame scores', function() {

    it('stores frames scores in an array of frames', function() {
      game.oneRoll(6);
      game.oneRoll(3);
      expect(game.totalFrameScore()).toEqual([[6, 3]]);
    });

  });

  describe ('awarding bonus points', function() {

    it('first roll is a strike', function() {
      expect(game.isStrike(10)).toBe(true);
    });

    it('first roll is not a strike', function() {
      expect(game.isStrike(3)).toBe(false);
    });
  
  });

  describe ('frame has a bonus', function() {
    
    it('returns true if the last frame had a strike', function() {
      game.currentFrameScore = [10];
      expect(game.bonusFrame()).toBe(true)
    });

    it('returns true if the last frame had a spare', function() {
      game.currentFrameScore = [5, 5];
      expect(game.bonusFrame()).toBe(true)
    });

    it('it returns false if the last frame did not have a bonus', function() {
      game.currentFrameScore = [3, 2];
      expect(game.bonusFrame()).toBe(false)
    });

  });

  describe ('check if last frame had a bonus', function() {

    it('returns true if there was a strike in the previous frame', function() {
      game.oneRoll(10);
      expect(game.previousFrameBonus()).toBe(true)
    });

    it('returns true if there was a spare in the previous frame', function() {
      game.oneRoll(6);
      game.oneRoll(4);
      expect(game.previousFrameBonus()).toBe(true)
    });
    
    it('returns false if the previous frame did not have a bonus', function() {
      game.oneRoll(3);
      game.oneRoll(2);
      game.oneRoll(6);
      game.oneRoll(0);
      expect(game.previousFrameBonus()).toBe(false)
    });
    
  });

  describe('last frame rolls', function() {

    it('returns true if frame is number 10', function() {
      for(var i = 0; i < 9; i++) {
        game.oneRoll(4);
        game.oneRoll(5);
      }
      expect(game.finalFrame()).toBe(true)
    });

    it('returns true if one roll has been done in frame number 10', function() {
      for(var i = 0; i < 9; i++) {
        game.oneRoll(6);
        game.oneRoll(2);
      }
      game.oneRoll(8);
      expect(game.finalFrame()).toBe(true)
    });

    it('returns false if frame is not number 10', function() {
      for(var i = 0; i < 3; i++) {
        game.oneRoll(3);
        game.oneRoll(2);
      }
      expect(game.finalFrame()).toBe(false)
    });

  });

  describe ('a strike or a spare', function() {

    it('returns a strike if it is a strike', function() {
      for (var i = 0; i < 9; i++) {
        game.oneRoll(3);
        game.oneRoll(5);
      }
      game.oneRoll(10);
      expect(game.strikeOrSpare()).toEqual('Strike')
    });

    it("returns spare if it is a spare", function() {
      for(var i = 0; i < 9; i++) {
        game.oneRoll(4);
        game.oneRoll(4);
      }
      game.oneRoll(4);
      game.oneRoll(6);
      expect(game.strikeOrSpare()).toEqual('Spare')
    });

  });


  describe ('Final frame has bonus', function() {

    it('if first roll was a strike, frame does not close after the second roll', function() {
      for (var i = 0; i < 9; i++) {
        game.oneRoll(6);
        game.oneRoll(3);
      }
      game.oneRoll(10);
      game.oneRoll(4);
      expect(game.frameNumber()).toEqual(10)
    });

    it("if it was a spare in the final frame, it doesn't close the frame after the second roll", function() {
      for (var i = 0; i < 9; i++) {
        game.oneRoll(6);
        game.oneRoll(3);
      }
      game.oneRoll(4);
      game.oneRoll(6);
      expect(game.frameNumber()).toEqual(10)
    });

    it('if there is no bonus in the final frame, frame closes after the second roll', function() {
      for (var i = 0; i < 9; i++) {
        game.oneRoll(6);
        game.oneRoll(3);
      }
      game.oneRoll(2);
      game.oneRoll(3);
      expect(game.frameNumber()).toEqual(11)
    });

  });

  describe('game over', function() {

    it('throws an error if user makes a roll and frame is 11', function() {
      for (var i = 0; i < 10; i++) {
        game.oneRoll(4);
        game.oneRoll(3);
      }
      expect( function(){ game.oneRoll(8); } ).toThrow(new Error("Game Over"));
    });

  });
});
