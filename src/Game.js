
'use strict';

function Game() {
  this.MAX_FRAMES = 10;
  this.gamePins = 10;
  this.currentFrame = 0;
  this.gamePoints = 0;
  this.framePoints = 0;
  this.frames = [];

}

Game.prototype.getCurrentFrame = function() {
  return this.currentFrame;
}

Game.prototype.playFrame = function() {
  if(this.currentFrame + 1 > this.MAX_FRAMES) {
    throw new Error("Game Over");
  }
  this.currentFrame += 1;
}

Game.prototype.getCurrentScore = function () {
  return this.framePoints;
}

Game.prototype.updateScore = function (number) {
  this.framePoints += number;
}
