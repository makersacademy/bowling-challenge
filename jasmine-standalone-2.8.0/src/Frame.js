'use strict';

function Frame(final = false) {
  this.score = 0;
  this.rollNumber = 1
  this.rollOneScore = 0
  this.rollTwoScore = 0
  this.isFrameOver = false
  this.isStrike = false
  this.isSpare = false
  this.isFinalFrame = final
};

Frame.prototype.bowl = function(rollScore) {
  this.score += rollScore;
  this.setRollScore(rollScore)
  this.checkScoreType(rollScore);
  this.manageRoll(rollScore);
}

Frame.prototype.setRollScore = function(rollScore) {
  if (this.rollNumber == 1) {this.rollOneScore = rollScore};
  if (this.rollNumber == 2) {this.rollTwoScore = rollScore};
}

Frame.prototype.checkScoreType = function(rollScore) {
  if (rollScore === 10 && this.rollNumber == 1) {
    this.isStrike = true;
  }
  else if (this.rollNumber === 2 && this.score === 10) {
    this.isSpare = true
  }
}

Frame.prototype.manageRoll = function(rollScore) {
  this.endFrame(rollScore)
  if (this.isFrameOver == false) {
    this.rollNumber += 1;
   }
}

Frame.prototype.endFrame = function(rollScore) {
  if (!this.isFinalFrame && (this.rollNumber === 2 || this.isStrike)) {
    this.isFrameOver = true;
  } else if (this.isFinalFrame) {
    this.finalFrame(rollScore)
  }
}

Frame.prototype.finalFrame = function(rollScore) {
  if (this.rollNumber == 3 || (this.rollNumber == 2 && this.score < 10)) {
    this.isFrameOver = true;
   }
}
