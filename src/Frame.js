'use strict';

function Frame() {
  this.frameScore = 0;
  this.rollCounter = 0;
  this.pinCount = 10;
};


Frame.prototype.getFrameScore = function() {
  return this.frameScore;
};

Frame.prototype.getRollCounter = function() {
  return this.rollCounter;
};

Frame.prototype.getPinCount = function() {
  return this.pinCount;
};
