'use strict';

function Frame() {
  this.rolls = [];
}

Frame.prototype.recordRoll = function(score) {
  this.rolls.push(score);
};

Frame.prototype.score = function() {
  return this.rolls.reduce((a,b) => a + b, 0)
};
