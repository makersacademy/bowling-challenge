'use strict';

function Frame () {
  this.rolls = [];
  this.frameTotal = 0;
};

Frame.prototype.roll1 = function(roll) {
  this.rolls.push(roll);
};

Frame.prototype.roll2 = function(roll) {
  this.rolls.push(roll);
};

