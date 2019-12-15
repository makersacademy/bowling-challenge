'use strict';

function Bowling(){
  this._rolls = [];
}

Bowling.prototype.reset = function(){
  this._rolls = [];
}

Bowling.prototype.frames = function(){
  return this._rolls.length;
}

Bowling.prototype.pinsDown = function(pins){
  this._rolls.push(pins);
}

Bowling.prototype.score = function(){
  var score = 0;
  for(var i = 0; i < this.frames(); i++){
    score += this._rolls[i];
  }
  return score;
}