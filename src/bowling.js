'use strict';

function Bowling(){
  this.START_SCORE = [];
  this._rolls = this.START_SCORE;
  this.MAX_SCORE = 10;
}

Bowling.prototype.reset = function(){
  return this._rolls = [];
}

Bowling.prototype.roll = function(pins){
  return this._rolls = pins;
}

Bowling.prototype.pinsDown = function(pins){
  return this._rolls.push(pins);
}

Bowling.prototype.frames = function(){
  return this._rolls.length / 2;
}

Bowling.prototype.calculateScore = function(frameNumber){
  var score = 0;
  var rollIndex = 0;
  var game = this;
  
  for(var frameIndex = 0; frameIndex < frameNumber; frameIndex++){
    if(isStrick()){
      score += getStrickScore();
      rollIndex ++;
    }
    else if(isSpare()){
      score += getSpareScore();
      rollIndex += 2;
    }
    else{
      score += getNormalScore();
      rollIndex += 2;
    }
  }
  return score;

  function isSpare(){
    return game._rolls[rollIndex] + game._rolls[rollIndex + 1] == game.MAX_SCORE;
  }
  function isStrick(){
    return game._rolls[rollIndex] == game.MAX_SCORE;
  }
  function getSpareScore(){
    return game.MAX_SCORE + (game._rolls[rollIndex + 2]);
  }
  function getStrickScore(){
    return game.MAX_SCORE + game._rolls[rollIndex +1] + game._rolls[rollIndex + 2];
  }
  function getNormalScore(){
    return game._rolls[rollIndex] + game._rolls[rollIndex + 1];
  }
}