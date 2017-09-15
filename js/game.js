"use strict";

function Game(){
  this.rolls = []
}

Game.prototype.roll = function(pins){
  this.rolls.push(pins)
};

Game.prototype.isStrike = function(index){
  return this.rolls[index] === 10;
};

Game.prototype.isSpare = function(index){
  return (this.rolls[index] + this.rolls[index+1]) === 10
};

Game.prototype.strikeBonus = function(index){
  return (this.rolls[index+1] + this.rolls[index+2])
};

Game.prototype.spareBonus = function(index){
  return this.rolls[index+2]
};

Game.prototype.frameScore = function(index){
  return (this.rolls[index] + this.rolls[index+1])
};

Game.prototype.calcScore = function(){
  var frameIndex = 0
  var index = 0
  var score = 0
  while(frameIndex < 10){
    if(this.isStrike(index)){
      score += 10 + this.strikeBonus(index);
      index++, frameIndex++
    } else if(this.isSpare(index)) {
      score += 10 + this.spareBonus(index);
      index += 2, frameIndex++
    } else {
      score += this.frameScore(index);
      index += 2, frameIndex++
    }
  }
  return score
};
