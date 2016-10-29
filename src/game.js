'use strict';

function Game() {
  this.currentFrame = [];
  this.frameScore = 0;
  this.bowlCount = 2;
};

Game.prototype.frameScore = function(){
  return this._frameScore
};

Game.prototype.bowl = function(num){
  this.frameScore += num
  this.currentFrame.push(num)
  this.bowlCount -= 1
};
