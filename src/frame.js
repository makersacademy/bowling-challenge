"use strict";

function Frame() {
  this.scores = [];
  this.PINS_ERROR = "Cannot knock down more than 10 pins."
}

Frame.prototype.logRoll = function (pins) {
  this._checkPins(pins);
  this.scores.push(pins);
};

Frame.prototype.getScore = function () {
  if (this.scores.length < 1) { return 0; }
  if (this.scores.length === 1) { return this.scores[0]; }
  return this.scores[0] + this.scores[1];
};

Frame.prototype.isSecondRoll = function () {
  return this.scores.length === 1;
};

Frame.prototype.isStrike = function () {
  return this.scores[0] === 10;
};

Frame.prototype.isSpare = function () {
  return this.scores[0] + this.scores[1] === 10;
};

Frame.prototype.isComplete = function () {
  return this.isStrike() || this.scores.length === 2;
};

Frame.prototype._checkPins = function (pins) {
  if (pins > 10 ||
     (this.isSecondRoll() && this.scores[0] + pins > 10)) {
    throw new Error(this.PINS_ERROR);
  }
};
