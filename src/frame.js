'use strict';

function Frame() {
  this.totalScore = 0;
  this.MAX_SCORE = 30;
  this.rollOne = 0;
  this.rollTwo = 0;
  this.bonusOne = 0;
  this.bonusTwo = 0;
};

Frame.prototype.getCurrentFrameScore = function() {
  return this.totalScore;
};

Frame.prototype.addRollOne = function(number) {
  this.rollOne += number;
  this.totalScore += this.rollOne;
};
