'use strict';

function Game() {
  this.score = 0;
  this.frame = 1;
}

Game.prototype.getCurrentScore = function() {
  return this.score;
};

Game.prototype.getCurrentFrame = function() {
  return this.frame;
};
