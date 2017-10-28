'use strict';

function Game() {
  this.MAX_FRAMES = 10;
  this.score = 0;
  this.frame = 1;
}

Game.prototype.getCurrentScore = function() {
  return this.score;
};

Game.prototype.getCurrentFrame = function() {
  return this.frame;
};

Game.prototype.scoreUpdate = function() {
  this.score += 3;
};
