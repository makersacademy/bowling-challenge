function Frame() {
  'use strict';

  this._pins = 10;
  this._rolls = [];
}

Frame.prototype.roll = function () {
  var rollOutcome = this._getRandomIntInclusive(0, this.remainingPins());
  this._pins -= rollOutcome;
  this._rolls.push(rollOutcome);
};

Frame.prototype.isFirstRoll = function () {
  return this._rolls.length === 0;
};

Frame.prototype.isAStrike = function () {
  return this._rollOutcome(1) === 10;
};

Frame.prototype.isASpare = function () {
  return (this._rollOutcome(1) + this._rollOutcome(2)) === 10;
};

Frame.prototype.remainingPins = function () {
  return this._pins;
};

Frame.prototype.points = function () {

};

// TODO: #isComplete

Frame.prototype._rollOutcome = function (num) {
  return this._rolls[num - 1];
};

Frame.prototype._getRandomIntInclusive = function (min, max) {
  // From MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
