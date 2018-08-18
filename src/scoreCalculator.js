'use strict';

function ScoreCalculator() {
  var DEFAULT_SCORE = 0;
  this.scores = [];
  this.totalScore = DEFAULT_SCORE;
  this.individualScores = new IndividualScores;
  // This could start to be a frame object ^^
};

ScoreCalculator.prototype.addScore = function(scores) {
  for(var i = 0; i < (scores.length); i++) {
    this.scores.push(scores[i]);
    // could initialise a frame object here that intialises on receipt of two values
    // could have bonus as an 11th frame???
    // bonus would be initiaised through the frame object
  };
};

ScoreCalculator.prototype._calculateFrameScore = function(a, b, c) {
  this.totalScore += (a + b + c);
};

ScoreCalculator.prototype.calculateScore = function() { // rename to calculate total score
  var [i, j, k] = [0, 1, 2];
  var scores = this.scores;
  var FRAME_TEN = 9;
  for(; i <= FRAME_TEN; (i++, j++, k++)) {
    var roll1 = (scores[i] === undefined) ? 0 : scores[i][0];
    var roll2 = (scores[i] === undefined) ? 0 : scores[i][1];
    var roll3 = (scores[j] === undefined) ? 0 : scores[j][0];
    var roll4 = (scores[j] === undefined) ? 0 : scores[j][1];
    var roll5 = (scores[k] === undefined) ? 0 : scores[k][0];
    // var bonus = new Bonus(frame1, frame2, frame3);
    // scores += bonus.calculate();
    if (this.individualScores.isFinalFrameStrikeWithBonusStrike(i, roll1, roll3)) {
      this._calculateFrameScore(roll1, roll3, roll4);
    } else if (this.individualScores.isConsecutiveFrameStike(roll1, roll3)) {
      this._calculateFrameScore(roll1, roll3, roll5);
    } else if (this.individualScores.isStrike(roll1)) {
      this._calculateFrameScore(roll1, roll3, roll4);
    } else if (this.individualScores.isSpare(roll1, roll2)) {
      this._calculateFrameScore(roll1, roll2, roll3);
    } else {
      this._calculateFrameScore(roll1, roll2, 0);
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
