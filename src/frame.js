'use strict';

function Frame(roll1, roll2 = 0) {
  this.roll1 = roll1;
  this.roll2 = roll2;
  this.frameScore = roll1 + roll2;
};

Frame.prototype.isStrike = function() {
  return this.roll1 === 10;
};

Frame.prototype.isSpare = function () {
  return this.roll1 + this.roll2 === 10 && this.roll1 != 10;
};

