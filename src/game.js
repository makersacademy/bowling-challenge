"use strict";

function Game() {
  this.totalScore = 0;
  this.frameSheet = [];
  this.NUMBER_OF_FRAMES = 10;
  this.currentRollNumber = 1;
};

Game.prototype.getTotalScore = function() {
  return this.totalScore;
};

Game.prototype.getFrameSheet = function() {
  return this.frameSheet;
};

Game.prototype.getCurrentRollNumber = function() {
  return this.currentRollNumber;
};

Game.prototype.calculateFrameScore = function(roll1, roll2) {
  if (roll1 === "X" ) {
    this.totalScore += 10;
  } else if (roll2 === "/") {
      this.totalScore += 10;
    } else {
      this.totalScore += roll1 + roll2;
  }
};
