'use strict';

describe('ScoreManager', function() {

  var scoreManager;
  var frame;

  describe('at the start of the game', function(){

    beforeEach(function() {
      function frame(firstRoll) {
        this.isStrike = function() { return false; };
        this.isSpare = function() { return false; };
        this.roll = function() {};
        this.getScore = function() { return 4; };
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
  });
});
