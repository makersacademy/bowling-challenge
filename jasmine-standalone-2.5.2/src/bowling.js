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

// Business logic methods

Bowling.prototype.firstRoll = function () {
  this.pinsKnocked = Math.round(Math.random() * (10 - 0));
  this.pinsLeft = 10 - this.pinsKnocked;
  this.storeScore();
  this.calculateScore();
  this.scoreArray();
  this.changeRollNum();
  this.changeFrameNum();
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

Bowling.prototype.storeScore = function () {
  if (this.rollNum === 1) {
  this.roll1Score = this.pinsKnocked;
}
else if (this.rollNum === 2) {
  this.roll2Score = this.pinsKnocked;
};
}

Bowling.prototype.calculateScore = function () {
  if (this.rollNum === 2) {
    this.totalScore = this.roll1Score + this.roll2Score;
}
};


Bowling.prototype.scoreArray = function () {
  if (this.rollNum === 2) {
    var frameScore = [this.frameNum, this.roll1Score, this.roll2Score, this.totalScore ];
    this.gameOverview.push(frameScore);
  }
}


// methods to display variables

Bowling.prototype.pinsKnockedFirst = function () {
  return this.pinsKnocked;
};

Bowling.prototype.pinsLeftAfterFirstRoll = function () {
  return this.pinsLeft;
};

Bowling.prototype.currentFrame = function () {
  return this.frameNum;
};

Bowling.prototype.score = function () {
  return this.totalScore;
};

Bowling.prototype.gameScoreOverview = function () {
  return this.gameOverview;
};
