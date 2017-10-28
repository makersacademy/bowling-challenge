'use strict';

function Game() {
  this.MAX_FRAMES = 10;
  this._score = 0;
  this._frame = 1;
  this._attempts = 0;
  this.scoreHistory = [];
}

Game.prototype.getCurrentScore = function() {
  return this._score;
};

Game.prototype.getCurrentFrame = function() {
  return this._frame;
};

Game.prototype.getScoreHistory = function() {
  return this.scoreHistory;
};

Game.prototype.scoreUpdate = function(pins) {
  if (this._frame <= this.MAX_FRAMES && pins <11 && pins >= 0 ) {
    this._score += pins;
    this._attempts += 1;
    this.frameUpdate();
    this.scoreHistory.push(pins);
  }
  return;
};

Game.prototype.frameUpdate = function() {
  if (this._frame !== this.MAX_FRAMES && this._attempts === 2 ) {
    this._frame += 1;
    this._attempts = 0;
  } else if (this._frame === this.MAX_FRAMES && this._attempts === 3 ) {
    this._frame += 1;
    this._attempts = 0;
  }
  return;
};
