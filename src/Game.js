"use strict";

function Game() {
  this.scores = [];
  this.calcScore = 0;
}

Game.prototype.bowl = function(pins) {
  this.scores.push(pins);
};

Game.prototype.finalScore = function() {
  for (var i = 0; i <= (this.scores.length -1); i++) {
    this.calcScore += this.scores[i];
    console.log(i + ': ' + this.calcScore);
  }
  return this.calcScore;
};