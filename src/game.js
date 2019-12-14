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
}

Game.prototype.getCurrentRollNumber = function() {
  return this.currentRollNumber;
}
