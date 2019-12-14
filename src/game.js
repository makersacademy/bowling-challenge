"use strict";

function Game() {
  this.totalScore = 0;
  this.frameSheet = [];
};

Game.prototype.getTotalScore = function() {
  return this.totalScore;
};

Game.prototype.getFrameSheet = function() {
  return this.frameSheet;
}
