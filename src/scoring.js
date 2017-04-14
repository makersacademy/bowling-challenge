'use strict';

function Scoring(){
  this.bowlOneScore = 0;
  this.bowlTwoScore = 0;
  this.totalScore = 0;
}

Scoring.prototype.getBowlOneScore = function () {
  return this.bowlOneScore;
};

Scoring.prototype.getBowlTwoScore = function () {
  return this.bowlTwoScore;
};

Scoring.prototype.getTotalScore = function () {
  return this.totalScore;
};
