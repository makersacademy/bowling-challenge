'use strict;'

function Frame() {
  this.rolls = [];
  this.bonusBalls = 0;
  this.MAX_ROLLS = 2;
  this.pinsLeft = 10;
}

Frame.prototype.addRoll = function (pins) {
  if (pins > this.pinsLeft) {
    throw new Error("Invalid roll");
  } else {
    this.rolls.push(pins);
    this.pinsLeft -= pins;
    if(this._isSpare()) { this.bonusBalls = 1; }
    if(this._isStrike()) {this.bonusBalls = 2; }
  }
};

Frame.prototype._isSpare = function () {
  return (this.rolls.length === 2 && this.pinsLeft === 0);
};

Frame.prototype._isStrike = function () {
  return this.rolls[0] === 10;
};

Frame.prototype.isRollsComplete = function () {
  return this.rolls.length >= this.MAX_ROLLS || this._isStrike();
}

Frame.prototype.isFrameClosed = function () {
  if( this.isRollsComplete() && this.bonusBalls === 0) { return true; }
  return false;
}

Frame.prototype.addBonus = function (pins) {
  this.rolls.push(pins);
  this.bonusBalls--;
};

Frame.prototype.calcTotal = function () {
  if(!this.isFrameClosed()) { return; }
  return this.rolls.reduce(function(a, b) { return a + b; }, 0);
}
