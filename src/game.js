'use strict';
/**
 * @param {int} totalScore The total score the player has.
 * @param {int} frames Frame scores recorded in an array.
 */
function Game() {
    this.DEFAULT_TOTAL_SCORE = 0;
    this.DEFAULT_FRAMES = [];

    this.totalScore = this.DEFAULT_TOTAL_SCORE;
    this.frames = this.DEFAULT_FRAMES;
  };

  Game.prototype.getCurrentTotalScore = function() {
    return this.totalScore;
  };

  Game.prototype.getCurrentFrames = function() {
    return this.frames;
  };

  Game.prototype.roll = function(pinsHit) {
    this.frames.push(pinsHit);
  };

  Game.prototype.updateTotalScore = function() {
    var reduce = this.frames.reduce((a, b) => a + b, 0);
    this.totalScore = reduce
  }
