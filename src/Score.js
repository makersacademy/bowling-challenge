"use strict";

function Score() {
 this.runningScore = 0
};

Score.prototype.calculateScore = function (frameScore) {
  this.runningScore += (frameScore[0] + frameScore[1])
  return frameScore[0] + frameScore[1];
};

// Score.protoype.runningScore = function() {
//   this.
// };
