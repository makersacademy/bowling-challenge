'use strict';

function Game() {
  this.finalScore = 0;
}

Game.prototype.getFinalScore = function () {
  return this.finalScore
};

Game.prototype.frameScore = function (num) {
  this.finalScore += num;
};
