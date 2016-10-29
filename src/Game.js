
'use strict';

function Game() {
  this.MAX_FRAMES = 10;
  this.gamePins = 10;
  this.currentFrame = 0;
  this.gamePoints = [];
  this.framePoints = [];
  this.frames = [];

}

Game.prototype.bowl = function() {
  this.playFrame();
}

Game.prototype.getCurrentFrame = function() {
  return this.frames[this.currentFrame];
}

Game.prototype.playFrame = function() {
  if(this.currentFrame + 1 > this.MAX_FRAMES) {
    throw new Error("Game Over");
  }
  this.currentFrame += 1;
}

Game.prototype.frameScore = function (number) {
  this.framePoints.push(number);
}

Game.prototype.totalFramePoints = function () {
  var arr = this.framePoints;
  var total=0;
  for(var i in arr) { total += arr[i]; }
  if (total > 30) {
    throw new Error("Error: max. frame point exceeded");
  }
  else
  return total
}

Game.prototype.updateGamePoints = function (number) {
  this.gamePoints.push(number);
}

Game.prototype.totalPoints = function () {
  var arr = this.gamePoints;
  var total=0;
  for(var i in arr) { total += arr[i]; }
  if (total > 300) {
    throw new Error("Error: max. point exceeded");
  }
  else
  return total
}
