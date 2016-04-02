"use strict";

function Frame() {
  this._score = 0;
  this.isFirstRoll = true;
  this.PINS_ERROR = "Cannot knock down more than 10 pins."
}

Frame.prototype.logRoll = function (pins) {
  this._checkPins(pins);
  this._score += pins;
  this.isFirstRoll = false;
};

Frame.prototype.getScore = function () {
  return this._score;
};

Frame.prototype.isComplete = function () {
  return !this.isFirstRoll;
};

Frame.prototype._checkPins = function (pins) {
  if (pins > 10 ||
     (!this.isFirstRoll && this._score + pins > 10)) {
    throw new Error(this.PINS_ERROR);
  }
};
