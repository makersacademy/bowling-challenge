'use strict';

function Game() {
  this.START_SCORE = 0;
  this.currentScore = this.START_SCORE;
};

Game.prototype.getCurrentScore = function() {
  return this.currentScore;
};

Game.prototype.roll = function(pins) {
  return this.currentScore += pins;
};
