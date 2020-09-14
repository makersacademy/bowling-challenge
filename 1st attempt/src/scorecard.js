'use strict';

function Scorecard(){
  this.gameScore = 0
  this.frame = 1
  this.rollCount = 1
  this.frameScore = 0
  this.maxScore = 10
};

Scorecard.prototype.score = function () {
  return this.gameScore;
};

Scorecard.prototype.incrementFrame = function () {
  if (this.frame === 10) { return; }
  if (this.frameScore === this.maxScore || this.rollCount === 2) {
    this.frame += 1;
  }
};

Scorecard.prototype.enterScore = function (score) {
  this.frameScore += score;
};

Scorecard.prototype.changeRollCount = function (score) {
  if (this.rollCount === 1) {
    this.rollCount += 1;
  } else { this.rollCount -= 1; }
};

Scorecard.prototype.addToGameScore = function () {
  if (this.frameScore === this.maxScore || this.rollCount === 2) {
    this.gameScore += this.frameScore
  }
};

Scorecard.prototype.resetFrameScore = function () {
  if (this.rollCount === 1) {
    this.frameScore = 0;
  }
};
