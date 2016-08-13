'use strict';

var Game = function(){
  this.rolls = [];
  this.currentRoll = 0;
  this.gameScore = 0;
  this.frameIndex = 0;
}

Game.prototype.roll = function(pins) {
    this.rolls[this.currentRoll++] = pins;
};

Game.prototype.gameTotal = function () {
  for(var frame = 0; frame < 10; frame += 1){
    if(this.isStrike(this.frameIndex)){
      this.gameScore += 10 + this.strikeBonus(this.frameIndex);
      this.frameIndex += 1;
    } else if (this.isSpare(this.frameIndex)){
      this.gameScore += 10 + this.spareBonus(this.frameIndex);
      this.frameIndex += 2;
    } else {
      this.gameScore += this.frameTotal(this.frameIndex)
      this.frameIndex += 2;
    }
  }
  return this.gameScore;
};

Game.prototype.isStrike = function(frameIndex) {
  return this.rolls[frameIndex] === 10;
};

Game.prototype.isSpare = function(frameIndex) {
  return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
};

Game.prototype.spareBonus = function(frameIndex) {
  return this.rolls[frameIndex + 2];
}

Game.prototype.strikeBonus = function(frameIndex) {
  return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
}

Game.prototype.frameTotal = function(frameIndex) {
  return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
}
