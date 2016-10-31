'use strict';

function Game() {
  this.currentFrame = new Frame();
  this.oldFrames = [];
};

Game.prototype.bowl = function(score) {
  this.currentFrame.addScore(score);
  this._defineLastFrames();
  this.calculatePreviousSpareBonus();
  if (this.isOver() || this.isFinalFrame()) {
    this.calculatePreviousStrikeBonus();
    this.finalFrameLogic();
  }
  else if (this.currentFrame.isOver) {
    this.calculatePreviousStrikeBonus();
    this.frameChange();
  }
};

Game.prototype.frameChange = function() {
  this.oldFrames.unshift(this.currentFrame)
  if (this.isOver() && !this.currentFrame.isSpare && !this.currentFrame.isStrike) {
    console.log("Game Over")
  }
  else {
    this.currentFrame = new Frame;
  }
};

Game.prototype.calculateScore = function() {
  this._totalScore = 0
  for (var i = 0; i < this.oldFrames.length; i++) {
    this._totalScore += this.oldFrames[i].totalScore
  }
  this._totalScore += this.currentFrame.totalScore
  return this._totalScore
};

Game.prototype.calculateFrameNumber = function() {
  this._frameNumber = 1;
  for (var i = 0; i < this.oldFrames.length; i++) {
    this._frameNumber += 1
  }
  return this._frameNumber
};

// Game Over Logic

Game.prototype.isOver = function () {
  return (this.calculateFrameNumber() > 10)
};

Game.prototype.isFinalFrame = function () {
  return (this.calculateFrameNumber() === 10)
}

Game.prototype.finalFrameLogic = function () {
  if (this.isFinalFrame() && this.currentFrame.isStrike) {
    this.currentFrame.totalScore = 10
    this.frameChange();
  }
  else if (this.lastFrame.isStrike && this.currentFrame.isStrike) {
    this.lastFrame.totalScore += 10
    this.currentFrame = new Frame;
  }
  else if (this.lastFrame.isStrike && this.currentFrame.isOver && this.currentFrame.isSpare) {
    this.lastFrame.totalScore = this.lastFrame.workingScore + 10;
    console.log("Game Over")
  }
  else if (this.lastFrame.isStrike && this.currentFrame.isOver) {
    this.lastFrame.totalScore = this.lastFrame.workingScore + this.currentFrame.totalScore;
    this.currentFrame.totalScore = 0;
    console.log("Game Over")
  }
  else if (this.currentFrame.isOver) {
    this.calculatePreviousStrikeBonus();
    this.frameChange();
  }
};

// Spare & Strike Logic Below Here

Game.prototype.calculatePreviousStrikeBonus = function() {
  this.scoreThreeStrikesBonus();
  this.scoreTwoStrikeBonus();
  this.scoreOneStrikeBonus();
};

Game.prototype.calculatePreviousSpareBonus = function() {
  if (this.lastFrame && this.lastFrame.isSpare) {
    this.lastFrame.totalScore = 10 + this.currentFrame.turn[0]
  }
};

Game.prototype._defineLastFrames = function() {
  this.lastFrame = this.oldFrames[0];
  this.secondToLastFrame = this.oldFrames[1];
  this.thirdToLastFrame = this.oldFrames[2];
};

Game.prototype.scoreThreeStrikesBonus = function () {
  if (this.threeStrikesInARow()) {
    this.secondToLastFrame.totalScore = 30;
    this.lastFrame.workingScore = 20;
    this.currentFrame.workingScore = 10;
  }
};

Game.prototype.scoreTwoStrikeBonus = function () {
  if (this.twoStrikesInARow() && !this.currentFrame.isStrike) {
    this.secondToLastFrame.totalScore = 20 + this.currentFrame.turn[0];
    this.lastFrame.totalScore = 10 + this.currentFrame.workingScore;
  }
};

Game.prototype.scoreOneStrikeBonus = function () {
  if (this.oneStrikeInARow() && !this.currentFrame.isStrike) {
    this.lastFrame.totalScore = 10 + this.currentFrame.workingScore;
  }
};

Game.prototype.oneStrikeInARow = function () {
  return (this.lastFrame && this.lastFrame.isStrike)
};

Game.prototype.twoStrikesInARow = function() {
  return (this.secondToLastFrame && this.secondToLastFrame.isStrike && this.oneStrikeInARow())
};

Game.prototype.threeStrikesInARow = function() {
  return (this.twoStrikesInARow() && this.currentFrame.isStrike)
};
