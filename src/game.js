'use strict';

var Game = function(){
  this.rolls = [];
  this.currentRoll = 0;
  this.TOTAL_FRAMES = 10;
};

Game.prototype.roll = function(pins){
  this.rolls[this.currentRoll++] = pins;
};

Game.prototype.score = function(){
  var score = 0;
  var frameIndex = 0;
  for(var frame = 0; frame < this.TOTAL_FRAMES; frame++){
    if(this._isStrike(frameIndex)){
      score += 10 + this._strikeBonus(frameIndex);
      frameIndex++;
    } else if(this._isSpare(frameIndex)){
      score = 10 + this._frameBonus(frameIndex);
      frameIndex += 2;
    } else {
      score += this._frameTotal(frameIndex);
      frameIndex += 2;
    }
  }
  return score;
};

Game.prototype._frameTotal = function(frameIndex){
  return (this.rolls[frameIndex] + this.rolls[frameIndex+1]);
};
Game.prototype._isSpare = function(frameIndex){
  return (this._frameTotal(frameIndex) === 10);
};
Game.prototype._frameBonus = function(frameIndex){
  return this.rolls[frameIndex+2];
};
Game.prototype._isStrike = function(frameIndex){
  return this.rolls[frameIndex] === 10;
};
Game.prototype._strikeBonus = function(frameIndex){
  return this._frameTotal(frameIndex+1);
};
