'use strict';

function Game() {
  this.currentFrame = new Frame();
  this.oldFrames = [];
};

Game.prototype.bowl = function(score) {
  this.currentFrame.addScore(score);
  this._defineLastFrames();
  this.calculatePreviousSpareBonus();
  console.log("frame number turn" + this.calculateFrameNumber() + ":" + this.calculateScore())
  this.calculatePreviousStrikeBonus();
  if (this.isOver() && this.lastFrame.isSpare) {
    this.oldFrames.unshift(this.currentFrame)
    console.log("Game Over")
  }
  else if (this.isFinalFrame() && this.currentFrame.isStrike) {
    console.log("It's the final frame and it is a strike!")
    this.currentFrame.totalScore = 10
    this.FrameChange();
  }
  else if (this.isOver() && this.lastFrame.isStrike && this.currentFrame.isStrike) {
    console.log("It's over frame 10, but last frame was a strike and this frame is a strike.")
    this.lastFrame.totalScore += 10
    this.currentFrame = new Frame;
  }
  else if (this.isOver() && this.lastFrame.isStrike && this.currentFrame.isOver) {
    console.log("It's over frame 10, but last frame was a strike and this frame is now over.")
    this.lastFrame.totalScore = this.lastFrame.workingScore + this.currentFrame.totalScore;
    this.currentFrame.totalScore = 0;
    console.log("Game Over");
  }
  else if (this.currentFrame.isOver) {
    console.log("This is normal frame gameplay")
    this.calculatePreviousStrikeBonus();
    this.FrameChange();
  }
};

Game.prototype.FrameChange = function() {
  this.oldFrames.unshift(this.currentFrame)
  if (this.isOver() && !this.currentFrame.isSpare && !this.currentFrame.isStrike) {
    console.log("Game Over")
  }
  else {
    this.currentFrame = new Frame;
  }
};

// Game.prototype.checkIfFinalFrame = function () {
//
// };

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

// Spare & Strike Logic Below Here

Game.prototype.calculatePreviousStrikeBonus = function() {
  this.ScoreThreeStrikesBonus();
  this.ScoreTwoStrikeBonus();
  this.ScoreOneStrikeBonus();
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
  }
};

Game.prototype.ScoreOneStrikeBonus = function () {
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
