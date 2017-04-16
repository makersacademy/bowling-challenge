'use strict';
function Game() {
  this.rolls = 0;
  this.totalScore = 0;
  this.bonusPoints = 0;
  this.pinsRemaining = 10;
  this.currentFrameNumber = 1;
  this.currentFrame = [];
  this.previousFrameScore = 0;
  this.frameHistory = [];
  this.isASpare = false;
  this.isAStrike = false;
}

Game.prototype.roll = function(points) {
  if(this.getFrameNumber() > 10) {
    throw new Error("The game has finished. Start a new game to throw again.");
  }
  if(points < 0 || points > 10) {
    throw new Error("Invalid roll: points must be between 0-10")
  }
  if(points > this.pinsRemaining) {
    throw new Error("Invalid roll: only " + this.pinsRemaining + " pins remaining")
  }
  this.rolls += 1
  this.updatePinsRemaining(points);
  this.addToCurrentFrame(points);
  this.isNextFrame();
};


Game.prototype.updatePinsRemaining = function(points) {
  this.pinsRemaining -= points
  if (this.pinsRemaining === 0) {
    this.strikeORSpare();
  }
};

Game.prototype.getFrameNumber = function() {
  return this.currentFrameNumber;
};

Game.prototype.strikeORSpare = function() {
  if(this.getNextRoll() === 1) {
    this.isASpare = true;
  } else {
    this.isAStrike = true;
    this.rolls += 1
  }
};

Game.prototype.addToCurrentFrame = function(points) {
  this.currentFrame.push(points);
  if (this.getNextRoll() === 1) {
    this.addCurrentFrameToFrameHistory(this.currentFrame);
    this.prepareNextFrame();
  }
};

Game.prototype.getNextRoll = function() {
  if(this.rolls % 2 === 0) {
    return 1;
  } else {
    return 2;
  }
};

Game.prototype.getFirstRollScore = function() {
  return this.currentFrame[0];
};

Game.prototype.getSecondRollScore = function() {
  return this.frameHistory[(this.currentFrameNumber-2)][1];
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

Game.prototype.prepareNextFrame = function() {
  this.resetCurrentFrame();
  this.resetPins();
  this.calculateFrameScore(this.currentFrameNumber);
  this.updateTotalScore();
};

Game.prototype.resetCurrentFrame = function() {
  this.currentFrame = [];
};

Game.prototype.resetPins = function() {
  this.pinsRemaining = 10;
};

Game.prototype.calculateFrameScore = function(frameNumber) {
  var frameScore = 0;
  for (var i = 0; i < 2; i++) {
    frameScore += this.frameHistory[frameNumber - 1][i]
  }
  if(frameNumber === this.currentFrameNumber) {
    return this.previousFrameScore = frameScore;
  }
  return frameScore;
};

Game.prototype.updateTotalScore = function () {
  this.totalScore += this.previousFrameScore
};
