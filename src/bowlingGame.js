'use strict';

function BowlingGame(){
  this._rolls = [];
}

BowlingGame.prototype.roll = function(pins){
  this._rolls.push(pins)
};

BowlingGame.prototype.score = function(){
  var score = 0;

  for(var roll = 0; roll < 20; roll++) {
    score += this._rolls[roll];
  }
  return score;
};