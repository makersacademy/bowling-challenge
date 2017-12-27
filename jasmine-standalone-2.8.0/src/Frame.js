'use strict';

function Frame() {
  this.score = 0;
  this.rollNumber = 1
  this.rollOneScore = 0
  this.isFrameOver = false
  this.isStrike = false
  this.isSpare = false
};

Frame.prototype.bowl = function(rollScore) {
  this.score += rollScore;
  this.checkScoreType(rollScore);
  this.manageRoll(rollScore);
}

Frame.prototype.checkScoreType = function(rollScore) {
  if (rollScore === 10) {this.isStrike = true}
  if (this.rollNumber === 2 && this.score === 10) {this.isSpare = true}
}

Frame.prototype.manageRoll = function(rollScore) {
  if (this.rollNumber === 2 || rollScore === 10) {
    this.isFrameOver = true;
  } else {
    this.rollNumber += 1;
    this.rollOneScore = rollScore;
   }
}
