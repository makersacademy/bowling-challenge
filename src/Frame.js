'use strict';

function Frame (){
  this.frameScore = 0;
  this.rolls = [new Roll(), new Roll()];
  this.Done = false;
  this.Spare = false;
}

Frame.prototype.isDone = function() {
  return this.getRolls().every(roll => (roll.isSet() === true));
};

Frame.prototype.isSpare = function() {
  return (this.calculateFrameScore() === 10);
};

Frame.prototype.getFrameScore = function(){
  return this.frameScore;
};

Frame.prototype.getRolls = function(){
  return this.rolls;
};

Frame.prototype.play = function(pinsKnocked){
  this._currentRoll().setPinsKnocked(pinsKnocked);
};

Frame.prototype._currentRoll = function(){
  var currentRoll = this.getRolls().find(function(roll){
    return roll.isSet() === false;
  });
  return currentRoll;
};

Frame.prototype.calculateFrameScore = function(){
  var rollScores = this.getRolls().map(function(roll){
    return roll.getPinsKnocked();
  });
  var sum = rollScores.reduce(function(acc, val){ return acc + val},0);
  return sum;
};
