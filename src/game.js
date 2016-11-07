'use strict';

function Game() {
  this.currentFrame = new Frame();
  this.oldFrames = [];
  this.frameNumber = 1
};

Game.prototype.bowl = function(score) {
  this.currentFrame.addScore(score);
  this.defineLastFrames();
  this.calculatePreviousSpareBonus();
  if (this.isOver()) {
    this.calculatePreviousStrikeBonus();
    this.finalFrameStrikeLogic();
    /*Game Over*/
  }
  else if (this.isFinalFrame() && this.currentFrame.turnNumber === 2) {
    this.calculatePreviousStrikeBonus();
  }
  else if (this.isFinalFrame() && this.currentFrame.turnNumber === 3) {
    this.finalFrameStrikeLogic();

  }
  else if (this.currentFrame.isOver) {
    this.calculatePreviousStrikeBonus();
    this.frameChange();
  }
};

Game.prototype.frameChange = function() {
  this.oldFrames.unshift(this.currentFrame);
  this.frameNumber += 1
  if (this.isFinalFrame()) {
    this.currentFrame = new FinalFrame;
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

// Game Over Logic

Game.prototype.isOver = function () {
  return (this.currentFrame instanceof FinalFrame && this.currentFrame.isOver)
};

Game.prototype.isFinalFrame = function () {
  return (this.frameNumber === 10)
}

Game.prototype.finalFrameStrikeLogic = function () {
  if (this.lastFrame.isStrike) {
    this.lastFrame.totalScore = (10 + this.currentFrame.turn[0] + this.currentFrame.turn[1])
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

Game.prototype.defineLastFrames = function() {
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

Game.prototype.scoreOfFrame = function(frameNumber) {
  if (frameNumber === 10 && this.isOver()) {
    return this.currentFrame.totalScore
  }
  else {
    var totalFrames = this.frameNumber
    return this.oldFrames[totalFrames - frameNumber - 1].totalScore
  }
};
