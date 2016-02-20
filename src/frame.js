'use strict;'

function Frame() {
  this.rolls = [];
  this.MAX_ROLLS = 2;
}

Frame.prototype.addRoll = function (pins) {
  if(this._frameComplete()) {
    throw new Error("Rolls exceeded");
  } else {
    this.rolls.push(pins);
  }
};

Frame.prototype.isSpare = function () {
  return this.rolls[0] + this.rolls[1] === 10;
};

Frame.prototype.isStrike = function () {
  return this.rolls[0] === 10;
};

Frame.prototype._frameComplete = function () {
  if(this.rolls[0] && this.isStrike()) { return true; }
  return this.rolls.length >= this.MAX_ROLLS;
}
