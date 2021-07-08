'use strict';

function TenthFrame() {
  this.MAX_SCORE = 10;
  this.rolls = [];
}

TenthFrame.prototype.roll = function(pins) {
  this.rolls.push(pins);
  if (this.score() >= this.MAX_SCORE) {
    if (this.rolls.length === 3) {
      return this.rolls;
    } else {
      return false;
    }
  } else {
    if (this.rolls.length === 2) {
      return this.rolls;
    } else {
      return false;
    }
  }

};

TenthFrame.prototype.score = function() {
  return this.rolls.reduce((a,b) => a + b, 0)
};

TenthFrame.prototype.getRolls = function() {
  return this.rolls;
}
