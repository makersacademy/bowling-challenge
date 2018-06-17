'use strict';

function Frame() {
  this.STRIKE = 10
  this.SPARE = 10
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

Frame.prototype.isStrike = function() {
  return this.rollOne === this.STRIKE
}

Frame.prototype.isSpare = function() {
  return (this.rollOne + this.rollTwo) === this.SPARE
}

Frame.prototype.addRollOne = function(number) {
  this.rollOne = number;
  (this.totalScore) += (this.rollOne);
};

Frame.prototype.addRollTwo = function(number) {
  if (this.isStrike() === false) {
    this.rollTwo = number;
    (this.totalScore) += (this.rollTwo);
  }
};

Frame.prototype.addBonusOne = function(number) {
  if (this.isStrike() || this.isSpare()) {
    this.bonusOne = number;
    this.totalScore += this.bonusOne;
  } else {
    this.totalScore += this.DEFAULT_SCORE;
  }
};

Frame.prototype.addBonusTwo = function(number) {
  if (this.isStrike()) {
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
