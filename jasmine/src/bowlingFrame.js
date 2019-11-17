'use strict';

function Frame() {
  this.complete = false;
  this.roll1 = null
  this.roll2 = null
};

Frame.prototype.isComplete = function() {
  if(this.roll2 !== null || this.isStrike()) {
    return this.complete = true
  }
  return this.complete;
};

Frame.prototype.isStrike = function() {
  return this.roll1 === 10;
};

Frame.prototype.isSpare = function() {
  return this.roll1 + this.roll2 === 10;
};

Frame.prototype.addRoll = function(rollScore) {
  if (this.roll1 === null) {
    this.roll1 = rollScore
  } else {
    this.roll2 = rollScore
  }
};

