'use strict';

function Bowling () {
  this.pinsLeft = 10;
  this.pinsKnocked = 0;
  this.roll1Score = 0;
  this.roll2Score = 0;
  this.totalScore = 0;
  this.frameNum = 1;
  this.rollNum = 1;
  this.gameOverview = [];
};

Bowling.prototype.firstRoll = function () {
  this.pinsKnocked = Math.round(Math.random() * (10 - 0));
  this.pinsLeft = 10 - this.pinsKnocked;
  this.changeRollNum();
  this.changeFrameNum();
};

Bowling.prototype.pinsKnockedFirst = function () {
  return this.pinsKnocked;
};

Bowling.prototype.pinsLeftAfterFirstRoll = function () {
  return this.pinsLeft;
};

Bowling.prototype.changeRollNum = function () {
  if (this.rollNum === 1) {
  this.rollNum = 2;
}
  else
    {this.rollNum = 1;
    }
};

Bowling.prototype.changeFrameNum = function ()  {
  if (this.rollNum === 2) {
  this.frameNum = this.frameNum + 1;
}
};

Bowling.prototype.currentFrame = function () {
  return this.frameNum;
};

Bowling.prototype.calculateScore = function () {

};
