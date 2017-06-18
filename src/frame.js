"use strict";

function Frame() {
  this.rolls = [new Roll, new Roll];
  this.score = [0,0]
}

Frame.prototype.calculateFrameScore = function(rollsArray) {
  this.score[0] = rollsArray[0].score
  this.score[1] = rollsArray[1].score
};


Frame.prototype.strike = function() {
  return this.score[0] === 10
}

Frame.prototype.spare = function() {
  return ((this.score[0] + this.score[1] === 10) && this.score[0] != 10)
}

Frame.prototype.roll = function(rollsArray, index) {
  rollsArray[index].bowl(10 - this.score[0]);
}

Frame.prototype.addRoll = function() {
  this.rolls.push(new Roll);
}
