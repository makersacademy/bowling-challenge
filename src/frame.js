'use strict';

function Frame() {
  this.totalScore = 0;
  this.MAX_SCORE = 30;
};

Frame.prototype.getCurrentFrameScore = function() {
  return this.totalScore;
};
