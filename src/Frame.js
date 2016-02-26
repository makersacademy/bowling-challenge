'use strict';

function Frame() {
  this.rolls = [];
  this.pinsDown = 0;
  this.numberOfRolls = 0;
};

Frame.prototype.pinsHit = function(score) {
  this.rolls.push(score);
  this.pinsDown += score;
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
  // TODO need to make exception for final frame with test or make final frame over function
};

Frame.prototype.isFinalFrameOver = function() {
  if (this.isStrike() || this.isSpare()) { return (this.numberOfRolls === 3); }
  return this.isOver();
};

// if (this.isStrike() || this.isSpare()) {
//   return (this.rolls.length === 3);
// } else {
//   return this.isOver();
// };

// TODO needs test
