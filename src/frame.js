'use strict';

function Frame() {
  this.DEFAULT_SCORE = 0;
  this.totalScore = this.DEFAULT_SCORE;
  this.MAX_SCORE = 30;
  this.rollOne = this.DEFAULT_SCORE;
  this.rollTwo = this.DEFAULT_SCORE;
  this.bonusOne = this.DEFAULT_SCORE;
  this.bonusTwo = this.DEFAULT_SCORE;
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

Frame.prototype.clearScore = function() {
  this.rollOne = this.DEFAULT_SCORE;
  this.rollTwo = this.DEFAULT_SCORE;
  this.bonusOne = this.DEFAULT_SCORE;
  this.bonusTwo = this.DEFAULT_SCORE;
  this.totalScore = this.DEFAULT_SCORE;
}
