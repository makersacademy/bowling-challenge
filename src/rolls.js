'use strict';

function Rolls() {
  this.currentGame = [];
  this.score = 0;
  this.frameNum = 1;
  this.rollOneTaken = false;
  this.rollOneScore = 0;
  this.rollTwoScore = 0;
  this.frameScore = 0;
}

var strike = 10
var spare = 10

// SWITCHING BETWEEN ROLLS AND FRAMES

Rolls.prototype.calculateCurrentRoll = function(pins) {
  if (this.rollOneTaken === false) {
    this.rollOneScore = pins;
    this.checkForStrike();
  } else {
    this.rollTwoScore = pins;
    this.toggleRollOne();
    this.nextFrame();
    this.checkForSpare();
  }
};

Rolls.prototype.toggleRollOne = function() {
  if (this.rollOneTaken === false) {
    this.rollOneTaken = true;
  } else {
    this.rollOneTaken = false;
  }
};

Rolls.prototype.nextFrame = function() {
  this.frameNum++
};

Rolls.prototype.checkForStrike = function() {
  if (this.rollOneScore === 10) {
    this.nextFrame();
    this.currentGame.push(strike);
    this.addingFramesUp();
  } else {
    this.toggleRollOne();
  }
};

Rolls.prototype.checkForSpare = function() {
  if (this.rollOneScore + this.rollTwoScore === 10) {
    this.currentGame.push(spare);
  } else {
    this.currentGame.push(this.rollOneScore + this.rollTwoScore)
  }
  this.addingFramesUp();
};


//CALCULATING THE SCORE

Rolls.prototype.addingFramesUp = function() {
  var twoFrameBackInArray = this.currentGame.length - 3;
  var oneFrameBackInArray = this.currentGame.length - 2;
  var justFinishedFrame = this.currentGame.length - 1;
  var twoFrameBackScore = this.currentGame[this.currentGame.length - 3];
  var oneFrameBackScore = this.currentGame[this.currentGame.length - 2];
  var justFinishedFrameScore = this.currentGame[this.currentGame.length - 1];

  if (twoFrameBackScore === strike && oneFrameBackScore === strike) {
    this.currentGame.splice((twoFrameBackInArray), 1, (20 + this.rollOneScore));
  }
  // else if (twoFrameBackScore === strike && oneFrameBackScore === spare) {
  //   this.currentGame.splice((twoFrameBackInArray), 1, 20);
  // }
  // else if (oneRollBackScore === spare) {
  //   this.currentGame.splice((oneRollBackPlace), 1, (10 + this.rollOneScore));
  // }

};
