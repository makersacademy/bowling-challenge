
'use strict';

function Game() {
  this.MAX_FRAMES = 10;
  this.MAX_GAMES_PER_FRAME = 2;
  this.gamePins = 10;
  this.currentFrame = 0;
  this.gamePoints = [];
  this.framePoints = [];
  this.frames = [];
  this.gameFrame = 0;
  this.firstBowl = [];
  this.secondBowl = [];
}

Game.prototype.bowl = function() {
  this.playFrame();
}

Game.prototype.countGameFrame = function() {
  if(this.gameFrame + 1 > this.MAX_GAMES_PER_FRAME) {
    throw new Error("Error: max role per turn is two");
  }
  this.gameFrame += 1;
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

Game.prototype.firstBowlPoints = function (number) {
  this.firstBowl.push(number);
  this.gamePoints.push(number);
  if(this.firstBowl[0] === 10) {
    return("Strike!");
      //this.firstBowl = [];
    //  this.gameFrame += 1;
  }
    return number
}

Game.prototype.secondBowlPoints = function (number) {
  this.secondBowl.push(number);
  this.gamePoints.push(number);
  if((this.secondBowl[0]) + (this.firstBowl[0]) === 10) {
    return("Spare!");
    this.firstBowl = [];
    this.secondBowl = [];
    this.gameFrame += 1;
  }
    return number;
    this.gameFrame += 1;
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
    return total
}

//module.exports = Game;
