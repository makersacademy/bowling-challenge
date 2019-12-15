'use strict';

function Bowling(){
  this.START_SCORE = [];
  this._rolls = this.START_SCORE;
}

Bowling.prototype.reset = function(){
  this._rolls = [];
}

Bowling.prototype.roll = function(pins){
  this._rolls = pins;
}

Bowling.prototype.pinsDown = function(pins){
  this._rolls.push(pins);
}

Bowling.prototype.frames = function(){
  return this._rolls.length / 2;
}

Bowling.prototype.score = function(){
  var score = 0;
  var rollIndex = 0;
  var game = this;
  
  for(var frameIndex = 0; frameIndex < this.frames(); frameIndex++){
    if(isStrick(rollIndex)){
      score += getStrickScore();
      rollIndex++;
    }
    else if(isSpare(rollIndex)){
      score += getSpareScore();
      rollIndex += 2;
    }
    else{
      score += getNormalScore();
      rollIndex += 2;
    }
  }
  return score;

  function isSpare(rollIndex){
    return game._rolls[rollIndex] + game._rolls[rollIndex + 1] == 10;
  }
  function isStrick(rollIndex){
    return game._rolls[rollIndex] == 10;
  }
  function getSpareScore(){
    return 10 + (game._rolls[rollIndex + 2]);
  }
  function getStrickScore(){
    return 10 + game._rolls[rollIndex +1] + game._rolls[rollIndex + 2];
  }
  function getNormalScore(){
    return game._rolls[rollIndex] + game._rolls[rollIndex + 1];
  }
}