'use strict';

function Frame(firstRoll){
  this.rolls = [firstRoll];
};

Frame.prototype.addSecondRoll = function(roll) {
  if (this.rolls[0] === 10) {
    throw new Error('This frame was already a strike')
  } else if (this.rolls.length < 2) {
    this.rolls.push(roll);
  } else {
    throw new Error('This frame already contains two rolls');
  };
};

Frame.prototype.totalFrameScore = function() {
  return this.rolls.reduce((a, b) => a + b, 0)
};

Frame.prototype.isASpare = function () {
  if(this.totalFrameScore() === 10 && this.rolls.length === 2) {
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

Frame.prototype.pinsFirstRoll = function () {
  return this.rolls[0]
};
