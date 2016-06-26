'use strict';

describe('ScoreManager', function() {

  var scoreManager;
  var frame;

  describe('at the start of the game, with all rolls valid', function(){

    beforeEach(function() {
      frame = {
        isRollValid: function(pins) { return true; },
        isNewFrame: function() {},
        isStrike: function() { return false; },
        isSpare: function() { return false; },
        roll: function() { }
      };
      scoreManager = new ScoreManager(frame);
    });

    it('.currentFrame() returns 0', function() {
      expect(scoreManager.currentFrame()).toEqual(0);
    });

    it('.getScore() returns 0', function() {
      expect(scoreManager.getScore()).toEqual(0);
    });

    it('.roll(4) updates the score to 4', function() {
      scoreManager.roll(4);
      expect(scoreManager.getScore()).toEqual(4);
    });

    it('.isRollValid(10) returns true', function() {
      expect(scoreManager.isRollValid(10)).toEqual(true)
    });

    it('.isGameFinished() returns false', function() {
      expect(scoreManager.isGameFinished()).toEqual(false)
    });
  });


  describe('at the start of the game, with all rolls invalid', function(){

    beforeEach(function() {
      frame = {
        isRollValid: function(pins) { return false; } 
      };
      scoreManager = new ScoreManager(frame);
    });

    it('an invalid roll raises an error', function() {
      expect(function() { scoreManager.roll(5); }).toThrow('Cannot roll: not enough pins');
    });
  });


  describe('after 2 valid rolls, no bonus', function(){

    beforeEach(function() {
      frame = {
        isRollValid: function(pins) { return true; },
        isNewFrame: function() { return false; },
        isSpare: function() { return false; },
        isStrike: function() { return false; },
        roll: function() { }
      };
      scoreManager = new ScoreManager(frame);
      scoreManager.roll(3);
      frame.isNewFrame = function() { return true; };
      scoreManager.roll(4);
    });

    it('.currentFrame returns 1', function() {
      expect(scoreManager.currentFrame()).toEqual(1);
    });

    it('.getScore returns the sum of the two rolls', function() {
      expect(scoreManager.getScore()).toEqual(7);
    });
  });

  describe('after 3 valid rolls, first frame was spare', function(){

    beforeEach(function() {
      frame = {
        isRollValid: function(pins) { return true; },
        isNewFrame: function() { return true; },
        isSpare: function() { return false; },
        isStrike: function() { return false; },
        roll: function() { }
      };
      scoreManager = new ScoreManager(frame);
      scoreManager.roll(6);
      frame.isNewFrame = function() { return false; };
      scoreManager.roll(4);
      frame.isNewFrame = function() { return true; };
      frame.isStrike = function() { return false; };
      frame.isSpare = function() { return true; };
      scoreManager.roll(1);
    });

    it('.currentFrame returns 2', function() {
      expect(scoreManager.currentFrame()).toEqual(2);
    });

    it('.getScore returns the sum of the three rolls plus third roll bonus', function() {
      expect(scoreManager.getScore()).toEqual(12);
    });
  });

  describe('after 3 valid rolls, first frame was strike', function(){

    beforeEach(function() {
      frame = {
        isRollValid: function(pins) { return true; },
        isNewFrame: function() { return true; },
        isSpare: function() { return false; }, 
        isStrike: function() { return false; },
        roll: function() { }
      };
      scoreManager = new ScoreManager(frame);
      scoreManager.roll(10);
      frame.isNewFrame = function() { return true; };
      frame.isStrike = function() { return true; };
      scoreManager.roll(4);
      frame.isNewFrame = function() { return false; };
      frame.isSpare = function() { return false; };
      frame.isStrike = function() { return true; };
      scoreManager.roll(1);
    });

    it('.getScore returns the sum of the three rolls plus second/third roll bonus', function() {
      expect(scoreManager.getScore()).toEqual(20);
    });
  });
});
