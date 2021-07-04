"use strict";

function Bowling() {
  this.hello = 'Hello World';
  this.score = 0;
  this.totalScore = 0;
  this.roll = 1
  this.frameNum = 1;
  this.strikeFrame = 10;
  this.MAXSCORE = 300;
  this.scoreBoard = [];
  this.frame = [2,4];
}

Bowling.prototype.returnScore = function() {
  return this.totalScore;
};

Bowling.prototype.returnFrame = function() {
  return this.frame;
};

Bowling.prototype.returnScoreBoard = function() {
  return this.scoreBoard;
};

Bowling.prototype.isStrike = function() {
  if (this.score === this.strikeFrame) {
    this.strikeFrame + this.totalScore;
  };
};

Bowling.prototype.upScoreBoard = function() {
    this.scoreBoard.push(this.frame);
  };

Bowling.prototype.upScore = function(points) {
  if (this.score <= this.MAXSCORE) {
    this.totalScore = this.score += points;
  };


  if (this.frameNum === 1) {
    this.frame[0] = this.score;
    this.isStrike();
    this.frameNum = 2;
    this.score = 0;
  } else {
    this.frame[1] = this.score;
    this.upScoreBoard();
    this.frameNum = 1
    this.score = 0;
  };
};
