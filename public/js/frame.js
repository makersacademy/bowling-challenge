'use strict';

function Frame(rollPtr){
  this.score = 0;
  this.rollPtr = rollPtr;

};

Frame.prototype.rollPointer = function(){
  return this.rollPtr;
};


Frame.prototype._getBonus = function(){
  var bonus = 0
  for(var i = 0; i < this._getBonusRollCount(); i ++){
    if(this.nextRollScores[i]) bonus += this.nextRollScores[i];
  }
  return bonus;
};

Frame.prototype._getBonusRollCount = function(){
    if (this.isStrike()) return 2;
    if (this.isSpare()) return 1;
    return 0;
};

Frame.prototype._getRollScores = function(){
  var result=[];
  for(var i=0; i<this.rolls.length; i++){
    result.push(this.rolls[i].numFelledPins());
  }
  return result;
};

Frame.prototype.pushNextFrame = function(frame){
  for(var i=0; i < frame._getRollScores().length; i++){
    this.nextRollScores.push(frame._getRollScores()[i]);
  }
};

Frame.prototype.getTotal = function(){
  return this._getScore() + this._getBonus();
};

Frame.prototype._getScore = function(){
  return this.score;
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

Frame.createInstance = function(rollAry, rollPtr){
  this.rollArray = rollAry;
  return new Frame(rollPtr);
};

// Frame.prototype.createRoll = function(previousRoll){
//   var newRoll = this.rollDefinition.createInstance(previousRoll);
//   return newRoll;
// };
