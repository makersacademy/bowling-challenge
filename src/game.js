'use strict';
/**
 * Insert Comment
 * @param {int} totalScore The total score the player has.
 * @param {int} frame New instance of frame class.
 */
function Game() {
    this.DEFAULT_TOTAL_SCORE = 0;

    this.totalScore = this.DEFAULT_TOTAL_SCORE;
    this.frames = new Frames();
  };

  Game.prototype.getCurrentTotalScore = function() {
    return this.totalScore;
  };

  Game.prototype.roll = function(hit) {
    this.frames.frameScores.push(hit);
  };

  Game.prototype.updateTotalScore = function() {
    this.totalScore = frames.frameScores.reduce((a, b) => a + b, 0);
  };
