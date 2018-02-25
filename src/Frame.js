// 'use strict';
// 'use strict' is unnecessary inside of modules
// But needed for jQuery I believe...

function Frame() {
  // Maybe this should be in Game...
  this.pins = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  this.rollCounter = 0;
  this.rolls = [];
  this.strike = false;

  this.currentScore = 0;
  this.spare = false;
}

Frame.prototype.roll = function (pinsKnocked) {
  this._isRollLegit();
  this._isStrike(pinsKnocked);

  if (this.strike !== true) {
    this.rolls.push({ roll: parseInt(`${pinsKnocked}`) });
    this._calculateScore(pinsKnocked);
    this._isSpare();
  }

  return pinsKnocked;
};

Frame.prototype._isRollLegit = function () {
  this.rollCounter += 1;

  if (this.strike === true) {
    throw 'You scored a strike. Start next frame!';
  } else if (this.rollCounter >= 3) {
    throw 'You cannot roll again. Start next frame!';
  }
};

Frame.prototype._isStrike = function (pinsKnocked) {
  if (pinsKnocked === 10) {
    this.strike = true;
    this._calculateScore(pinsKnocked);
    this.rolls.push({ roll: parseInt(`${pinsKnocked}`) });
  }
};

Frame.prototype._calculateScore = function (pinsKnocked) {
  this.currentScore += pinsKnocked;
}

Frame.prototype._isSpare = function () {
  if (this.currentScore === 10) {
    this.spare = true;
  }
}
