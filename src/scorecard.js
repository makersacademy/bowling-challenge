'use strict';

function Scorecard() {
  this.currentGame = [];
  this.currentFrame = [];
  this.frameNum = 1;
  this.rollOneTaken = false;
  this.rollOneScore = 0;
  this.rollTwoScore = 0;
  this.frameScore = 0;

}

Scorecard.prototype.currentGameScore = function() {
  return this.currentGame;
};

Scorecard.prototype.calculateCurrentRoll = function(pins) {
  if (this.rollOneTaken === false) {
    this.rollOneScore = pins;
    this.toggleRollOne();
  } else {
    this.rollTwoScore = pins;
    this.toggleRollOne();
    this.frameNum++;
  }
};

Scorecard.prototype.toggleRollOne = function() {
  if (this.rollOneTaken === false) {
    this.rollOneTaken = true;
  } else {
    this.rollOneTaken = false;
  }
};
