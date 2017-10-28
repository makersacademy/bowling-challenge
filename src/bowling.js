'use strict';

function Game() {
  this.MAX_FRAMES = 10;
  this._score = 0;
  this.frame = 1;
  this._attempts = 0;
}

Game.prototype.getCurrentScore = function() {
  return this._score;
};

Game.prototype.getCurrentFrame = function() {
  return this.frame;
};

Game.prototype.scoreUpdate = function(pins) {
  if (this.frame > this.MAX_FRAMES) {
    return;
  }
  if (pins <11 && pins >= 0 ) {
    this._score += pins;
    this._attempts += 1;
    this.frameUpdate();
  }
  return;
};

Game.prototype.frameUpdate = function() {
  if ( this._attempts === 2 ) {
    this.frame += 1;
    this._attempts = 0;
  }
  return;
};
