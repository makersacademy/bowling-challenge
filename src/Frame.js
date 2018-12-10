'use strict';

function Frame () {
  this.total = 0
  this.rolls = 0
  this.strike = false
  this.spare = false
};

Frame.prototype.addScore = function(score) {
  this.total += score;
};

Frame.prototype.addRoll = function() {
  this.rolls ++;
};

Frame.prototype.isOver = function() {
  return this.rolls >= 2 || this.total >= 10;
};

Frame.prototype.scoreStrike = function() {
  if (this.rolls === 1 && this.total === 10) this.strike = true;
};

Frame.prototype.scoreSpare = function() {
  if (this.rolls === 2 && this.total === 10) this.spare = true;
};
