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

ScoreCalculator.prototype._calculateFrameScore = function(a, c, d) {
  this.totalScore += (a + c + d);
};

ScoreCalculator.prototype.calculateScore = function() { // rename to calculate total score
  var [i, j, k] = [0, 1, 2];
  var scores = this.scores;
  for(; i < 10; (i++, j++, k++)) {
    var a = (scores[i] === undefined) ? 0 : scores[i][0];
    var b = (scores[i] === undefined) ? 0 : scores[i][1];
    var c = (scores[j] === undefined) ? 0 : scores[j][0];
    var d = (scores[j] === undefined) ? 0 : scores[j][1];
    var e = (scores[k] === undefined) ? 0 : scores[k][0];
    if (i === 9 && a === this.MAX_ROLL && c === this.MAX_ROLL) {
      this._calculateFrameScore(a, c, d);
    } else if (a === this.MAX_ROLL && c === this.MAX_ROLL) {
      this._calculateFrameScore(a, c, e);
    } else if (a === this.MAX_ROLL) {
      this._calculateFrameScore(a, c, d);
    } else if (a + b === this.MAX_ROLL) {
      this._calculateFrameScore(a, b, c);
    } else {
      this._calculateFrameScore(a, b, c = 0);
    }
  }
};



ScoreCalculator.prototype.clearScore = function() {
  this.totalScore = this.DEFAULT_SCORE;
  this.scores = [];
};


// ScoreCalculator.prototype.clearScore = function() {
//   this.totalScore = this.DEFAULT_SCORE;
//   this.scores = [];
// };
//
//
// function ScoreCalculator(scores) {
//   this.DEFAULT_SCORE = 0;
//   this.MAX_ROLL = 10;
//   this.scores = scores;
//   // this.totalScore = this.DEFAULT_SCORE;
// };
//
// // ScoreCalculator.prototype.getScore = function() {
// //   return this.scores
// // };
// //
// // ScoreCalculator.prototype.addScore = function(scores) {
// //   for(var i = 0; i < (scores.length); i++) {
// //     this.scores.push(scores[i]);
// //   };
// // };
//
// ScoreCalculator.prototype.calculateScore = function() {
//   var score = 0
//
//   frames.forEach(function(frame) {
//      // ask frame for its score
//      // bonus => ask frame for info on strike or spare
//      // bonus => use the previous two to return a bonus number
//      // add together
//
//
//   })
//
//   return score
//
//
//
//
//   var [i, j, k] = [0, 1, 2];
//   var scores = this.scores;
//   for(; i < 10; (i++, j++, k++)) {
//     var a = (scores[i] === undefined) ? 0 : scores[i][0];
//     var b = (scores[i] === undefined) ? 0 : scores[i][1];
//     var c = (scores[j] === undefined) ? 0 : scores[j][0];
//     var d = (scores[j] === undefined) ? 0 : scores[j][1];
//     var e = (scores[k] === undefined) ? 0 : scores[k][0];
//     // if strike third frame, the first frame is strike, the second frame is strike
//     if (i === 9 && a === this.MAX_ROLL && c === this.MAX_ROLL) {
//       this.totalScore += (a + c + d);
//     } else if (a === this.MAX_ROLL && c === this.MAX_ROLL) {
//       this.totalScore += (a + c + e);
//     } else if (a === this.MAX_ROLL) {
//       this.totalScore += (a + c + d);
//     } else if (a + b === this.MAX_ROLL) {
//       this.totalScore += (a + b + c);
//     } else {
//       this.totalScore += (a + b);
//     }
//   }
//   return score;
// };
//
// ScoreCalculator.prototype.clearScore = function() {
//   this.totalScore = this.DEFAULT_SCORE;
//   this.scores = [];
// };
//
