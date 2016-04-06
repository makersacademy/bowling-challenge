"use strict";

function LastFrame () {
  this.scores = [];
  this.PINS_ERROR = "Cannot knock down more than 10 pins."
}

LastFrame.prototype.logRoll = function (pins) {
  this._checkPins(pins);
  this.scores.push(pins);
};

LastFrame.prototype.getScore = function () {
  if (this.scores.length < 1) { return 0; }
  if (this.scores.length === 1) { return this.scores[0]; }
  return this.scores.reduce(function (sum, score) {
    return sum + score;
  });
};

LastFrame.prototype.isSecondRoll = function () {
  return this.scores.length === 1;
};

LastFrame.prototype.isThirdRoll = function () {
  return this.scores.length === 2;
};

LastFrame.prototype.isStrike = function () {
  return this.scores[0] === 10;
};

LastFrame.prototype.isSpare = function () {
  return this.scores[0] + this.scores[1] === 10;
};

LastFrame.prototype.isComplete = function () {
  if (this.isStrike() || this.isSpare()) {
    return this.scores.length === 3;
  } else {
    return this.scores.length === 2;
  }
};

LastFrame.prototype._checkPins = function (pins) {
  var exceedPinsInFirstTwoRolls = !this.isStrike() &&
                                  this.isSecondRoll() &&
                                  this.scores[0] + pins > 10
  var exceedPinsInLastTwoRolls =  this.isStrike() &&
                                  this.scores[1] < 10 &&
                                  this.scores[1] + pins > 10
  if (pins > 10 || exceedPinsInFirstTwoRolls || exceedPinsInLastTwoRolls) {
       throw new Error(this.PINS_ERROR);
     }
};
