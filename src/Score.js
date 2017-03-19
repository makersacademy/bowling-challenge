"use strict";

function Score() {
 this.runningScore = 0;
 this.strike = false;
 this.spare = false;
}

Score.prototype.calculateScore = function (frameScore) {
  if(this.strike === true) {
    this.runningScore += ((2 * frameScore[0]) + (2 * frameScore[1]));
  } else if (this.spare === true) {
    this.runningScore += ((2 * frameScore[0]) + frameScore[1]);
  } else {
    this._checkForStrike(frameScore);
    this._checkForSpare(frameScore);
    this.runningScore += (frameScore[0] + frameScore[1]);
    return frameScore[0] + frameScore[1];
  }
};

Score.prototype._checkForStrike = function (frameScore) {
  this.strike = frameScore[0] === 10 ? true : false;
  console.log(this.strike)
};

Score.prototype._checkForSpare = function (frameScore) {
  this.spare = (frameScore[0] != 10 && (frameScore[0] + frameScore[1]) === 10) ? true : false;
  console.log(this.spare)
};

// strikes score = continued to add to
// shown score = only added to when after strikes have ended
