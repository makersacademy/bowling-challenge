'use strict';
function BowlingGame(){
  this.rolls = [];
  this.gameResult = 0;
};

BowlingGame.prototype.roll = function(pins){
  this.rolls.push(pins);
}
BowlingGame.prototype.score = function(){
  for(var i=0; i<20;i++){
    this.gameResult += this.rolls[i];
  }
  return this.gameResult;
}
