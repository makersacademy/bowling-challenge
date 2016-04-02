'use strict';

function Frame(rollDefinition=Roll){
  this.score = 0;
  this.rolls = [];
  this.rollDefinition = rollDefinition;
};

Frame.prototype.getScore = function(){
  return this.score;
};

Frame.prototype.getRolls = function(){
  return this.rolls;
};

Frame.prototype.roll = function(){
  var previousRoll = this._getPreviousRoll();
  var newRoll = this.createRoll(previousRoll);
  this.score += newRoll.numFelledPins();
  this.rolls.push(newRoll);
};

Frame.prototype._getPreviousRoll = function(){
  return this.rolls[this.rolls.length - 1];
}

Frame.prototype.isStrike = function(){
  return this.rolls.length === 1 && this.rolls[0].isStrike();
};

Frame.prototype.isSpare = function(){
  return this.rolls.length === 2 && this.rolls[1].isSpare();
}

Frame.prototype.isComplete = function(){
  var twoRolls = this.rolls.length === 2;
  return this.isStrike() || twoRolls;
};

Frame.prototype.createRoll = function(previousRoll){
  var newRoll = this.rollDefinition.createInstance(previousRoll);
  return newRoll;
};
