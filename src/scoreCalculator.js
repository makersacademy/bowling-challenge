'use strict';

function ScoreCalculator() {
  this.DEFAULT_SCORE = 0;
  this.scores = [];
  this.totalScore = this.DEFAULT_SCORE;
};

ScoreCalculator.prototype.getScore = function() {
  return this.totalScore;
};

ScoreCalculator.prototype.addScore = function(scores) {
  for(var i = 0; i < (scores.length); i++) {
    this.scores.push(scores[i]);
  }
};
