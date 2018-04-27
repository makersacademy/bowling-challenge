'use strict';

function Bowling() {
  this.totalScore = 0;
  this.currentScore = 0;
  this.currentBonus = 0;
  this.moveCount = 1;
  this.frameRoll = 1;
};

Bowling.prototype.validScore = (function(score) {

  if((score >= 0) && (score <= 10)) {
    this.currentScore += score;
    return this.currentScore;
  } else {
    throw new Error ('Wrong score number')
  };
  return this.currentScore;
});

Bowling.prototype.validScoreSecondMove = (function (score) {
  var limit = 10 - (this.currentScore)
  if(score <= limit) {
    this.currentScore += score;
    return this.currentScore;
  } else {
    throw new Error ('Wrong score number')
  };
});

Bowling.prototype.countScore = (function(score) {
  if (this.currentScore === 0) {
    this.validScore(score)
  } else {
    this.validScoreSecondMove(score)
  };
  return this.currentScore
});

Bowling.prototype.countTotal = (function() {
  //   this.totalScore += this.currentScore;
  if (this.currentScore <= 10) {
    this.totalScore += this.currentScore
  }
  return this.totalScore;
});

Bowling.prototype.currentRoll = (function () {
  if (this.currentScore == 0) {
    return this.frameRoll;
  } else if (this.currentScore <= 10) {
    this.frameRoll = 2;
    return this.frameRoll;
  } else {
  };
});

Bowling.prototype.Move = (function (score) {
  return this.moveCount
});
