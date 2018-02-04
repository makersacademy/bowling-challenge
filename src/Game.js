'use strict';

function Game() {
  this.score = 0;
}

Game.prototype.calculateScore = function() {
  return this.score;
};
