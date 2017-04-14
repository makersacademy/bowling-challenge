'use strict';

function Bowling() {
  this.score = 0;
  this.frame = 1;
  this.roll = 1;
  this.frameScore = 0;
};

Bowling.prototype.getCurrentScore = function () {
  return this.score;
};

Bowling.prototype.add = function (pins) {
  this.score += pins;
};

Bowling.prototype.getCurrentFrame = function () {
  return this.frame;
};

Bowling.prototype.getCurrentRoll = function () {
  return this.roll;
};

Bowling.prototype.bowl = function (pins) {
  this.roll += 1;
  this.frameScore += pins;
};

Bowling.prototype.getFrameScore = function () {
  return this.frameScore;
};

Bowling.prototype.isFrameComplete = function () {
  if (this.roll === 1) {
    return false;
  } else {
    return true;
  }
};
