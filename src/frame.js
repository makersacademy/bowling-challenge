'use strict';

function Frame(isLastFrame) {
  this.MAX_ROLLS = (typeof isLastFrame === 'boolean' && isLastFrame) ? 3 : 2;
  this._rolls = [];
  this.remainingPins = 10;
}

Frame.prototype.roll = function (pins) {
  if (this.isComplete()) {
    throw new Error('Invalid number of rolls');
  } else if (pins > this.remainingPins) {
    throw new Error('Invalid roll');
  } else {
  this._rolls.push(pins);
  this.remainingPins -= pins;
  }
};

Frame.prototype.getRoll = function (rollNumber) {
  return this._rolls[rollNumber - 1];
};

Frame.prototype.isComplete = function () {
  return this._rolls.length >= this.MAX_ROLLS;
};

Frame.prototype.getScore = function () {
  var score;
  if (this._rolls.length === 0) {
    score = 0;
  } else {
    score = this._rolls.reduce(function (prev, curr) {
      return prev + curr;
    });
  }
  return score;
};
