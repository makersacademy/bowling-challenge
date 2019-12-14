"use strict";

function Game() {
  this.totalScore = 0;
  this.scoreSheet = [];
  this.isPreviousFrameSpare = false;
  this.isPreviusFrameStrike = false;
};

Game.prototype.getTotalScore = function() {
  return this.totalScore;
};

Game.prototype.getScoreSheet = function() {
  return this.scoreSheet;
};

Game.prototype.play = function(roll1, roll2) {
  this.calculateBonusPoints(roll1, roll2);
  this.resetPreviousFrame();
  this.setSpareOrStrike(roll1, roll2);
  this.scoreSheet.push({ pins: [roll1, roll2], score: roll1 + roll2 });
  this.totalScore = this.calculateTotalScore();
};

Game.prototype.calculateBonusPoints = function(roll1, roll2) {
  if (this.isPreviousFrameSpare) {
    this.scoreSheet[this.scoreSheet.length - 1].score += roll1;
  } else if (this.isPreviusFrameStrike) {
    this.scoreSheet[this.scoreSheet.length - 1].score += roll1 + roll2;
  };
};

Game.prototype.resetPreviousFrame = function() {
  this.isPreviousFrameSpare = false;
  this.isPreviousFrameStrike = false;
}

Game.prototype.setSpareOrStrike = function(roll1, roll2) {
  if (roll1 === 10) {
    this.isPreviusFrameStrike = true;
  } else if (roll1 + roll2 === 10) {
    this.isPreviousFrameSpare = true;
  };
}

Game.prototype.calculateTotalScore = function() {
  return this.scoreSheet.reduce((total, frame) => {
    return total + frame.score;
  }, 0);
};
