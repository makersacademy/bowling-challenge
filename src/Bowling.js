'use strict';

function Bowling() {
  this.score = 0;
  this.frame = 1;
  this.roll = 1;
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
