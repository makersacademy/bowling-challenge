'use strict';

function Game() {
  this.rolls = []
  this.currentRoll = 0;
  this.totalScore = 0;
}

Game.prototype.roll = function roll(pins) {
  this.totalScore += pins;
  return pins;
};

Game.prototype.score = function score() {
  return this.totalScore;
};
