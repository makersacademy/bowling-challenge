'use strict';

function Game() {
  this.MAX_FRAMES = 10;
  this._score = 0;
  this.frame = 1;
}

Game.prototype.getCurrentScore = function() {
  return this._score;
};

Game.prototype.getCurrentFrame = function() {
  return this.frame;
};

Game.prototype.scoreUpdate = function(pins) {
  this._score += pins;
};
