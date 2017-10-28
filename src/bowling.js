'use strict';

function Game() {
  this.score = 0;
}

Game.prototype.getCurrentScore = function() {
  return this.score;
};
