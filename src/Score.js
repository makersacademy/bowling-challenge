"use strict";

function Score() {
 this.runningScore = 0;
 this.runOfStrikes = 0;
 this.strike = false;
}

Score.prototype.calculateScore = function (frameScore) {
  if(this.strike === true) {
    this.runningScore += (2 * (frameScore[0] + frameScore[1]));
  } else {
  this._checkForStrike(frameScore)
  this.runningScore += (frameScore[0] + frameScore[1]);
  return frameScore[0] + frameScore[1];
  }
};

Score.prototype._checkForStrike = function (frameScore) {
  if(frameScore[0] === 10) {
    this.runOfStrikes += 1;
    this.strike = true;
  }
};

// strikes score = continued to add to
// shown score = only added to when after strikes have ended
