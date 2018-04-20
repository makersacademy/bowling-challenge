'use strict';
function Bowling() {
  this.totalScore = 0;
  this.currentScore = 0;
  this.currentBonus = 0;
  this.frameCount = 1;
  this.frameRoll = 1;
};

Bowling.prototype.countScore = function(score) {
  if(0 < score =< 10) {
    this.currentScore = score;
    return this.currentScore;
  } else {
    throw new Error ('Wrong score number')
  };
};

Bowling.protoype.RollScore = function(score) {
  Bowling.countScore(score)
  if (this.currentScore < 10) {
    this.currentScore += this.currentScore;
  } else if (this.currentScore == 10) {
    this.currentScore += this.currentScore;
  };
  this.totalScore += this.currentScore
  this.currentScore = 0
  return this.totalScore
};

};
