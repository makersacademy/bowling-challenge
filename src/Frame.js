'use strict';

function Frame() {
  this.rolls = [];
  this.numberOfRolls = 0;
}

Frame.prototype.pinsHit = function(score) {
  this.rolls.push(score);
  this.numberOfRolls ++;
};

Frame.prototype.isStrike = function() {
  return (this.rolls[0] === 10);
};

Frame.prototype.isSpare = function() {
  return ((this.rolls[0] + this.rolls[1]) === 10)
}

Frame.prototype.isOver = function() {
  return ( this.rolls.length === 2 || this.isStrike());
};

Frame.prototype.isFinalFrameOver = function() {
  if (this.isStrike() || this.isSpare()) { return (this.numberOfRolls === 3); }
  return this.isOver();
};
