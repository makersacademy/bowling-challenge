'use strict';

function Frame(){
  this.rolls = [];
};

Frame.prototype.addRoll = function(roll) {
  if (this.rolls.length === 0 && roll === 10) {
    this.rolls.push(roll);
    this.rolls.push(0);
  } else if (this.rolls.length < 2) {
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

Frame.prototype.isAStrike = function () {
  if(this.rolls[0] === 10){
    return true
  } else {
    return false
  };
};
};
