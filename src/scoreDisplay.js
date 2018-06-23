'use strict';

function ScoreDisplay(score) {
  this.DEFAULT_SCORE = 0;
  this.totalScore = score;
};

ScoreDisplay.prototype.getTotalScore = function() {
  return this.totalScore;
};
