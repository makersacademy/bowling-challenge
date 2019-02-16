'use strict';

function Frame() {
  this.MAX_SCORE = 10;
  this.rolls = [];
}

Frame.prototype.roll = function(pins) {
  this.rolls.push(pins);

  if (this.rolls.length === 2) {
    return this.rolls;
  }
  else if (this.score() >= this.MAX_SCORE) {
    return this.rolls;
  } else {
    return false;
  }
};

Frame.prototype.score = function() {
  return this.rolls.reduce((a,b) => a + b, 0)
};

Frame.prototype.getRolls = function() {
  return this.rolls;
}
