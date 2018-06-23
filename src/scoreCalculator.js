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
  };
};

ScoreCalculator.prototype.calculateScore = function() {
  var i = 0;
  var j = 1;
  var k = 2;
  var scores = this.scores
  var length = scores.length;
  for(; i < 10; (i++, j++, k++)) {
    var a = (scores[i] === undefined) ? 0 : scores[i][0];
    var b = (scores[i] === undefined) ? 0 : scores[i][1];
    var c = (scores[j] === undefined) ? 0 : scores[j][0];
    var d = (scores[j] === undefined) ? 0 : scores[j][1];
    var e = (scores[k] === undefined) ? 0 : scores[k][0];
    if (i === 9 && a === 10 && c === 10) {
      this.totalScore += (a + c + d);
    } else if (a === 10 && c === 10) {
      this.totalScore += (a + c + e);
    } else if (a === 10) {
      this.totalScore += (a + c + d);
    } else if (a + b === 10) {
      this.totalScore += (a + b + c);
    } else {
      this.totalScore += (a + b);
    }
  }
};

ScoreCalculator.prototype.clearScore = function() {
  this.scores = [];
};
