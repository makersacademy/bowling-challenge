'use strict';

function Frame() {
  this.frameScore = 0;
  this.rollCounter = 0;
  this.pinCount = 10;
};


Frame.prototype.getFrameScore = function() {
  return this.frameScore;
};

Frame.prototype.getrollCounter = function() {
  return this.rollCounter;
};

Frame.prototype.getpinCount = function() {
  return this.pinCount;
};
