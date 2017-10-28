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
  if (pins <11 && pins >= 0 ) {
    this._score += pins;
  }
  return;
};
