"use strict";

function Frame() {
  this._scores = [];
  this.PINS_ERROR = "Cannot knock down more than 10 pins."
}

Frame.prototype.logRoll = function (pins) {
  this._checkPins(pins);
  this._scores.push(pins);
};

Frame.prototype.getScore = function () {
  if (this._scores.length < 1) { return 0; }
  if (this._scores.length === 1) { return this._scores[0]; }
  return this._scores[0] + this._scores[1];
};

Frame.prototype.isSecondRoll = function () {
  return this._scores.length === 1;
};

Frame.prototype.isStrike = function () {
  return this._scores[0] === 10;
};

Frame.prototype.isSpare = function () {
  return this._scores[0] + this._scores[1] === 10;
};

Frame.prototype.isComplete = function () {
  return this.isStrike() || this._scores.length === 2;
};

Frame.prototype._checkPins = function (pins) {
  if (pins > 10 ||
     (this.isSecondRoll() && this._scores[0] + pins > 10)) {
    throw new Error(this.PINS_ERROR);
  }
};
