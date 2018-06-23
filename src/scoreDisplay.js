'use strict';

function ScoreDisplay(score) {
  this.totalScore = score;
  this.GUTTER_GAME = 0;
  this.PERFECT_GAME = 300;
};

ScoreDisplay.prototype.getTotalScore = function() {
  return this.totalScore;
};

ScoreDisplay.prototype.isGutterGame = function() {
  return this.totalScore === this.GUTTER_GAME;
};

ScoreDisplay.prototype.isPerfectGame = function() {
  return this.totalScore === this.PERFECT_GAME;
};

ScoreDisplay.prototype.reset = function() {
  this.totalScore = 0;
};
