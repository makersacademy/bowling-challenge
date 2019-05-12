"use strict";

function BowlingScoreCard() {
  this.frame = 1;
  this.FRAMELIMIT = 10;
  this.totalScore = 0;
  this.firstRoll = 0;
  this.secondRoll = 0;
  this.strikeCounter = 0;
  this.strikeTotal = 0;
};

BowlingScoreCard.prototype.getFrame = function () {
  return this.frame;
};

BowlingScoreCard.prototype.nextFrame = function () {
  if(this.getFrame() === 10){
    return;
  }
  this.frame += 1
};

BowlingScoreCard.prototype.isGameOver = function () {
  return (this.frame === this.FRAMELIMIT)
};

BowlingScoreCard.prototype.updateTotalScore = function () {
  this.totalScore = this.totalScore + this.firstRoll + this.secondRoll;
  this.firstRoll = 0;
  this.secondRoll = 0;
};

BowlingScoreCard.prototype.getTotalScore = function () {
  return this.totalScore;
};

BowlingScoreCard.prototype.enterFirstRoll = function (num) {
  if(this.isStrike(num)) {
    strikeCalculator(num);
    return;
  }
  this.firstRoll = num
};

BowlingScoreCard.prototype.strikeCalculator = function (num) {
  this.strikeTotal += num
  this.strikeCounter -= 1
  if(this.strikeCounter == 0) {
    return this.strikeTotal; //to the pending frame
  }
  return;
};

BowlingScoreCard.prototype.getFirstRoll = function () {
  return this.firstRoll;
};

BowlingScoreCard.prototype.isStrike = function (num) {
  if(this.getFirstRoll() === 10) {
    this.strikeCounter = 3;
    return true;
  }
  return false;
};

BowlingScoreCard.prototype.enterSecondRoll = function (num) {
  this.secondRoll = num;
};

BowlingScoreCard.prototype.getSecondRoll = function () {
  return this.secondRoll;
};
