'use strict';

function Frame(){
  this.rolls = [];
};

Frame.prototype.addRoll = function(roll) {
  if (this.rolls.length < 2) {
    this.rolls.push(roll);
  } else {
    throw new Error('This frame already contains two rolls');
  };

Frame.prototype.totalScore = function() {
  return this.rolls.reduce((a, b) => a + b, 0)
};

Frame.prototype.isASpare = function () {
  if(this.totalScore() === 10) {
    return true
  } else {
    return false
  }
};
};
