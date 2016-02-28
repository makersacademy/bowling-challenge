'use strict;'

function Frame() {
  this.rolls = [];
  // this.bonus0 = null;
  // this.bonus1 = null;
  this.bonus = []
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
    this.bonusBalls = this.isSpare() ? 1 : this.isStrike() ? 2 : 0;
  }
};

Frame.prototype.isSpare = function () {
  if (this.rolls.length === 2 && this.pinsLeft === 0) { return true; }
  return false;
};

Frame.prototype.isStrike = function () {
  return this.rolls[0] === 10;
};

Frame.prototype.isRollsComplete = function () {
  if(this.rolls[0] && this.isStrike()) { return true; }
  return this.rolls.length >= this.MAX_ROLLS;
}

Frame.prototype.isFrameClosed = function () {
  // if(this.isRollsComplete() && !this.isStrike() && !this.isSpare()) { return true; }
  // if(this.isStrike() && this.bonus0!==null && this.bonus1!==null) { return true; }
  // if(this.isSpare() && this.bonus0!==null) { return true; }
  // return false;
  this.bonusBalls = this.isSpare() ? 1 : this.isStrike() ? 2 : 0;
  this.bonusBalls -= this.bonus.length;
  if( this.isRollsComplete() && this.bonusBalls === 0) { return true; }
  return false;
}

Frame.prototype.addBonus = function (pins) {
  this.bonus.push(pins);
  this.bonusBalls--;
};

Frame.prototype.calcTotal = function () {
  if(!this.isFrameClosed()) { return; }
  return this.rolls[0] + (this.rolls[1] || 0) +
    (this.bonus[0] || 0) + (this.bonus[1] || 0);
}
