'use strict';

function ScoreCalculator() {
  this.DEFAULT_SCORE = 0;
  this.MAX_ROLL = 10;
  this.scores = [];
  this.totalScore = this.DEFAULT_SCORE;
};

ScoreCalculator.prototype.getScore = function() {
  return this.totalScore;
};

ScoreCalculator.prototype.addScore = function(scores) {
  for(var i = 0; i < (scores.length); i++) {
    this.scores.push(scores[i]);
  };
};

ScoreCalculator.prototype.calculateScore = function() {
  var [i, j, k] = [0, 1, 2];
  var scores = this.scores;
  var length = scores.length;
  for(; i < 10; (i++, j++, k++)) {
    var a = (scores[i] === undefined) ? 0 : scores[i][0];
    var b = (scores[i] === undefined) ? 0 : scores[i][1];
    var c = (scores[j] === undefined) ? 0 : scores[j][0];
    var d = (scores[j] === undefined) ? 0 : scores[j][1];
    var e = (scores[k] === undefined) ? 0 : scores[k][0];
    if (i === 9 && a === this.MAX_ROLL && c === this.MAX_ROLL) {
      this.totalScore += (a + c + d);
    } else if (a === this.MAX_ROLL && c === this.MAX_ROLL) {
      this.totalScore += (a + c + e);
    } else if (a === this.MAX_ROLL) {
      this.totalScore += (a + c + d);
    } else if (a + b === this.MAX_ROLL) {
      this.totalScore += (a + b + c);
    } else {
      this.totalScore += (a + b);
    }
  }
};

ScoreCalculator.prototype.clearScore = function() {
  this.totalScore = this.DEFAULT_SCORE;
  this.scores = [];
};
