'use strict';

function Game(){
  this._score = []
}

Game.prototype.roll = function(pinsKnockedDown){
  this._score.push(pinsKnockedDown)
}

Game.prototype.score = function(){
  return this._score
}
