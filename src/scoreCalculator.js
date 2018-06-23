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

console.log(1)
ScoreCalculator.prototype.calculateScore = function() {
  var i = 0;
  var j = 1;
  var k = 2;
  var scores = this.scores
  var length = scores.length;
  console.log('score is ', this.totalScore);
  console.log(length);
  console.log(2)
  for(; i < 10; (i++, j++, k++)) {
    var a = (scores[i] === undefined) ? 0 : scores[i][0];
    var b = (scores[i] === undefined) ? 0 : scores[i][1];
    var c = (scores[j] === undefined) ? 0 : scores[j][0];
    var d = (scores[j] === undefined) ? 0 : scores[j][1];
    var e = (scores[k] === undefined) ? 0 : scores[k][0];
    console.log(3)
    console.log('this is a: ', a);
    console.log('this is b: ', b);
    console.log('this is c: ', c);
    console.log('this is d: ', d);
    console.log('this is e: ', e);
    if (a === 10 && c === 10) {
      console.log(4)
      this.totalScore += (a + c + e);
    } else if (a === 10) {
      console.log(5)
      this.totalScore += (a + c + d);
    } else if (a + b === 10) {
      console.log(6)
      this.totalScore += (a + b + c);
    } else {
      console.log(7)
      this.totalScore += (a + b);
    }
    console.log(8)
    console.log('score is ', this.totalScore);
  }
  console.log(9)
};
console.log(10)
