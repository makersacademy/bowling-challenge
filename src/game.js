'use strict';

function Game() {
  this.currentFrame = new Frame();
  this.oldFrames = [];
};

Game.prototype.bowl = function(score) {
  this.currentFrame.addScore(score);
  this.calculatePreviousSpareBonus();
  if (this.currentFrame.isOver) {
    this.calculatePreviousStrikeBonus();
    this.FrameChange();
  }
};

Game.prototype.FrameChange = function() {
  this.oldFrames.unshift(this.currentFrame)
  this.currentFrame = new Frame;
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
  this._frameNumber = 0;
  for (var i = 0; i <= this.oldFrames.length; i++) {
    this._frameNumber += 1
  }
  return this._frameNumber
};

Game.prototype.calculatePreviousStrikeBonus = function() {
  this._defineLastFrames();
  this.ScoreThreeStrikesBonus();
  this.ScoreTwoStrikeBonus();
  this.ScoreOneStrikeBonus();
};

Game.prototype.calculatePreviousSpareBonus = function() {
  this._defineLastFrames();
  if (this.lastFrame && this.lastFrame.isSpare) {
    this.lastFrame.totalScore = 10 + this.currentFrame.turn[0]
  }
};

Game.prototype._defineLastFrames = function() {
  this.lastFrame = this.oldFrames[0];
  this.secondToLastFrame = this.oldFrames[1];
  this.thirdToLastFrame = this.oldFrames[2];
};

Game.prototype.ScoreThreeStrikesBonus = function () {
  if (this.threeStrikesInARow()) {
    this.secondToLastFrame.totalScore = 30;
    this.lastFrame.workingScore = 20;
    this.currentFrame.workingScore = 10;
  }
};

Game.prototype.ScoreTwoStrikeBonus = function () {
  if (this.twoStrikesInARow() && !this.currentFrame.isStrike) {
    this.secondToLastFrame.totalScore = 20 + this.currentFrame.turn[0];
    this.lastFrame.totalScore = 10 + this.currentFrame.workingScore;
    console.log("I'm calculating two strikes in a row!");
  }
};

Game.prototype.ScoreOneStrikeBonus = function () {
  if (this.oneStrikeInARow() && !this.currentFrame.isStrike) {
    this.lastFrame.totalScore = this.currentFrame.totalScore + this.lastFrame.workingScore;
    console.log("I'm calculating one strikes in a row!");
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
