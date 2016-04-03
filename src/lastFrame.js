"use strict";

function LastFrame () {
  this._scores = [];
  this.PINS_ERROR = "Cannot knock down more than 10 pins."
}

LastFrame.prototype.logRoll = function (pins) {
  this._checkPins(pins);
  this._scores.push(pins);
};

LastFrame.prototype.getScore = function () {
  if (this._scores.length < 1) { return 0; }
  if (this._scores.length === 1) { return this._scores[0]; }
  return this._scores.reduce(function (sum, score) {
    return sum + score;
  });
};

LastFrame.prototype.isStrike = function () {
  return this._scores[0] === 10;
};

LastFrame.prototype.isSpare = function () {
  return this._scores[0] + this._scores[1] === 10;
};

LastFrame.prototype.isComplete = function () {
  if (this.isStrike() || this.isSpare()) {
    return this._scores.length === 3;
  } else {
    return this._scores.length === 2;
  }
};

LastFrame.prototype._checkPins = function (pins) {
  if (pins > 10 ||
     (!this.isStrike() &&
     this._isSecondRoll() &&
     this._scores[0] + pins > 10) ||
     (this.isStrike() &&
     this._scores[1] < 10 &&
     this._scores[1] + pins > 10)) {
       throw new Error(this.PINS_ERROR);
     }
};

LastFrame.prototype._isSecondRoll = function () {
  return this._scores.length === 1;
};
