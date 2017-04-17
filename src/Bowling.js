'use strict';

function Bowling() {
  this.frame = 1;
  this.roll = 1;
  this.frameScore = 0;
  this.total = 0;

  this.isFrameComplete = false;
};

Bowling.prototype.getFrame = function () {
  return this.frame;
};

Bowling.prototype.getRoll = function () {
  return this.roll;
};

Bowling.prototype.getFrameScore = function () {
  return this.frameScore;
};

Bowling.prototype.getTotal = function () {
  return this.total;
};

Bowling.prototype.bowl = function (pins) {
  this.isFrameComplete = false;
  this.roll += 1;
  this.frameScore += pins;
  if (this.roll > 2) {
    this.roll = 1;
    this.isFrameComplete = true;
    this.total += this.frameScore;
    this.frameScore = 0;
  }
};
