'use strict';

function Bowling() {
  this.score = 0;
}

Bowling.prototype.getCurrentScore = function() {
  return this.score;
}

Bowling.prototype.isMaximumFrameScore = function () {
  return this.score === this.MAX_FRAME_SCORE;
}
//
// Bowling.prototype.firstThrow = function() {
//   if (this.isMaximumFrameScore() === false) {
//       }
//   return this.score 1++;
// // need make it add to points but to make sure this doesn't exceed 10
// }

Bowling.prototype.up = function() {
  this.score += 1;
};
