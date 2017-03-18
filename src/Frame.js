'use strict';

function Frame (numberOfRolls = 2){
  this.numberOfRolls = numberOfRolls;
  this.rolls = [];
  for(var x = 0; x < this.numberOfRolls; x++) {
    this.rolls.push(new Roll);
  }
}

Frame.prototype.isDone = function() {
  return this.getRolls()[0].isStrike() || this.getRolls().every(roll => (roll.isSet() === true));
};

Frame.prototype.isSpare = function() {
  return (this.calculateFrameScore() === 10);
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
  var frameScore = 0
  for (var y = 0; y < 2; y++){
    frameScore += this.getRolls()[y].getPinsKnocked()
  }
  return frameScore
};

Frame.prototype.hasStrike = function(){
  return this.getRolls().some(roll => roll.isStrike());
};
