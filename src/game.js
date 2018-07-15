"use strict";

function Game() {
  this.totalScore = 0;
  this.scores = [];
}

Game.prototype.enterScore = function (score) {
  this.scores.push(score);
  this._calculateTotalScore();
};

Game.prototype._calculateTotalScore = function () {
  this.totalScore = 0;
  for ( var index in this.scores) {
    this.totalScore += this.scores[index];
  }
};
