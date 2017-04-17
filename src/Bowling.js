'use strict';

function Bowling() {
  this.frame = 1;
  this.roll = 1;
  this.frameScore = 0;
  this.total = 0;
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
  this.roll += 1;
  this.frameScore += pins;
};

Bowling.prototype.isFrameComplete = function () {
  if (this.roll === 1) {
    return false;
  } else {
    return true;
  }
};
