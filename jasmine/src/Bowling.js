"use strict";

function Bowling() {
  this.hello = 'Hello World';
  this.score = 0;
  this.roll = 1
  this.frameNum = 1;
  this.strikeFrame = 10;
  this.MAXSCORE = 300;
  this.scoreBoard = [,,,,,,,,,];
  this.frame = [,];
}

Bowling.prototype.returnScore = function() {
  return this.score;
};

Bowling.prototype.returnFrame = function() {
  return this.frameNum;
};

Bowling.prototype.isStrike = function() {
  this.score = (this.strikeFrame + this.score) + (this.score)
};

Bowling.prototype.upScore = function(points) {
  if (this.score <= this.MAXSCORE) {
    this.score += points;
  };

  if (this.frameNum === 1) {
    this.frameNum = 2
  } else {
    this.frameNum = 1
  };
};
