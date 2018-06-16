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

Frame.prototype.isMaximumScore = function() {
  return this.MAX_SCORE === this.totalScore;
};

Frame.prototype.addRollOne = function(number) {
  this.rollOne += number;
  this.totalScore += this.rollOne;
};

Frame.prototype.addRollTwo = function(number) {
  this.rollTwo += number;
  this.totalScore += this.rollTwo;
};

Frame.prototype.addBonusOne = function(number) {
  this.bonusOne += number;
  this.totalScore += this.bonusOne;
};

Frame.prototype.addBonusTwo = function(number) {
  this.bonusTwo += number;
  this.totalScore += this.bonusTwo;
};
