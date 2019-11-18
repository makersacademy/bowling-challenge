'use strict';

function FinalFrame() {
  this.complete = false
  this.roll1 = null
  this.roll2 = null
  this.roll3 = null
};

FinalFrame.prototype.isComplete = function() {
  if (this.isBonusRoll() && this.roll3 !== null) {
    return this.complete = true
  }
  return this.complete;
};

FinalFrame.prototype.isBonusRoll = function() {
  return this.roll1 + this.roll2 > 9 && this.roll2 > 0
};

FinalFrame.prototype.addRoll = function(rollScore) {
  if (this.roll1 === null) {
    this.roll1 = rollScore
  } else if (this.roll2 === null) {
    this.roll2 = rollScore
  } else if (!this.isComplete()) {
    this.roll3 = rollScore
  }
};