'use strict';

function Frame(rollDefinition=Roll){
  this.score = 0;
  this.rolls = [];
  this.nextFrames = [];
  this.rollDefinition = rollDefinition;
};


Frame.prototype.getBonus = function(){
  if(this.isStrike()){
    if (!!this.nextFrames[0]){
      if (this.nextFrames[0].isStrike()){
        if (!!this.nextFrames[1]){
          return this.nextFrames[0].getScore() + this.nextFrames[1].getRollScores()[0];
        } else {
          return this.nextFrames[0].getScore();
        }
      } else {
        return this.nextFrames[0].getScore();
      }
    } else {
      return 0;
    }
  } else if (this.isSpare()) {
    if (!!this.nextFrames[0]){
      return this.nextFrames[0].getRollScores()[0];
    } else {
      return 0;
    }
  } else {
    return 0;
  }
};





Frame.prototype.getRollScores = function(){
  result=[];
  for(i=0; i<this.rolls.length; i++){
    result.push(this.rolls[i].numFelledPins());
  }
  return result;
};


Frame.prototype.getTotal = function(){
  return this.getScore() + this.getBonus();
};

Frame.prototype.getScore = function(){
  return this.score;
};


Frame.prototype.pushNextFrame = function(frame){
  this.nextFrames.push(frame);
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
