'use strict';

describe('ScoreManager', function() {

  var scoreManager;
  var frame;

  beforeEach(function() {
    scoreManager = new ScoreManager;
    frame = jasmine.createSpy('frame');
  });

  describe('at the start of the game', function(){

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
});
