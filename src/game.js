'use strict';
function Game() {
  this.rolls = 0;
  this.score = 0;
  this.pinsRemaining = 10;
  this.currentFrameNumber = 1;
  this.currentFrame = [];
  this.frameHistory = [];
}

Game.prototype.roll = function(points) {
  if(this.getFrameNumber() > 10) {
    throw new Error("The game has finished. Start a new game to throw again.");
  }
  if(points < 0 || points > 10) {
    throw new Error("Invalid entry: points must be between 0-10")
  }
  this.rolls += 1
  this.addToCurrentFrame(points);
  this.isNextFrame();
};

Game.prototype.getNextRoll = function() {
  if(this.rolls % 2 === 0) {
    return 1;
  } else {
    return 2;
  }
};

Game.prototype.getFrameNumber = function() {
  return this.currentFrameNumber;
};

Game.prototype.addToCurrentFrame = function(points) {
  this.currentFrame.push(points);
  if (this.getNextRoll() === 1) {
    this.addCurrentFrameToFrameHistory(this.currentFrame);
    this.resetCurrentFrame();
  }
};

Game.prototype.getFrameScore = function() {
  var frameScore = 0;
  for (var i = 0; i < 2; i++) {
    frameScore += this.currentFrame[i];
  }
  return frameScore;
};

Game.prototype.isNextFrame = function() {
  if(this.getNextRoll() === 2) {
    return;
  }
  this.currentFrameNumber += 1
};

Game.prototype.addCurrentFrameToFrameHistory = function(frame) {
  this.frameHistory.push(frame);
};

Game.prototype.resetCurrentFrame = function() {
  this.currentFrame = [];
};

Game.prototype.getTotalScore = function () {
  return this.score;
};
