'use strict';

function Frame() {
  this.totalScore = 0;
};

Frame.prototype.getCurrentScore = function() {
  return this.totalScore;
};
