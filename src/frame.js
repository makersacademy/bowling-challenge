'use strict';

function Frame() {
  this.rolls = [];
  this.score = 0;
}

Frame.prototype.bowl = function(pins) {
  if (this.score + pins > 10) {
    throw new Error('Please re-enter correct score');
  }
  this.rolls.push(pins);
  this.score += pins;
};

Frame.prototype.isEndFrame = function() {
  return (this.rolls.length === 2 || this.score === 10);
};
