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
  console.log(number);
  this.rollOne = number;
  console.log(this.rollOne);
  (this.totalScore) += (this.rollOne);
  console.log(this.totalScore);
};

Frame.prototype.addRollTwo = function(number) {
  this.rollTwo = number;
  (this.totalScore) += (this.rollTwo);
};

Frame.prototype.addBonusOne = function(number) {
  if (this.rollOne === 10 || (this.rollOne + this.rollTwo) === 10) {
    this.bonusOne = number;
    this.totalScore += this.bonusOne;
  } else {
    this.totalScore += this.DEFAULT_SCORE;
  }
};

Frame.prototype.addBonusTwo = function(number) {
  if (this.rollOne === 10) {
    this.bonusTwo = number;
    this.totalScore += this.bonusTwo;
  } else {
    this.totalScore += this.DEFAULT_SCORE;
  }
};

Frame.prototype.clearScore = function() {
  this.rollOne = this.DEFAULT_SCORE;
  this.rollTwo = this.DEFAULT_SCORE;
  this.bonusOne = this.DEFAULT_SCORE;
  this.bonusTwo = this.DEFAULT_SCORE;
  this.totalScore = this.DEFAULT_SCORE;
}
