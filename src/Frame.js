'use strict';

function Frame () {
  this.rolls = [];
  this.roll1 = 0;
  this.roll2 = 0;
  this.frameTotal = 0;
};

Frame.prototype.firstRoll = function(roll) {
  this.roll1 = roll
  this.rolls.push(roll);
};

Frame.prototype.secondRoll = function(roll) {
  this.roll2 = roll
  this.rolls.push(roll);
};

Frame.prototype.isStrike = function() {
  return this.roll1 === 10;
}

Frame.prototype.isSpare = function() {
  return (this.roll1 + this.roll2) === 10;
}
