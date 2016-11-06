'use strict';

function Frame() {
  this.rolls = [];
  this.score = 0;
  this.strike = false;
  this.spare = false;
}

Frame.prototype.bowl = function(pins) {
  if (this.score + pins > 10) {
    throw new Error('Please re-enter correct score');
  }
  this.rolls.push(pins);
  this.score += pins;
  this.assignBonus();
};

Frame.prototype.isEndFrame = function() {
  return (this.rolls.length === 2 || this.score === 10);
};

Frame.prototype.isStrike = function() {
  return this.rolls[0] === 10;
};

Frame.prototype.isSpare = function() {
  return this.rolls[0] + this.rolls[1] === 10;
};

Frame.prototype.assignBonus = function() {
  if(this.isStrike()) { this.strike = true }
  if(this.isSpare()) { this.spare = true }
};
