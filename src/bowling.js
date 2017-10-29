'use strict';

function Game() {
  this.MAX_FRAMES = 10;
  this._score = 0;
  this._frame = 1;
  this._attempts = 0;
  this.scoreHistory = [];
  this._frameScore = 0;
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
  if (this._frame !== this.MAX_FRAMES && (this._frameScore + pins) > 10) {
    throw new Error('Cannot knock down more than 10 pins per frame');
  } else if (this._frame <= this.MAX_FRAMES && pins <11 && pins >= 0 ) {
    this._score += pins;
    this._frameScore += pins;
    this._attempts += 1;
    this.frameUpdate();
    this.scoreHistory.push(pins);
  }
  return;
};

Game.prototype.frameUpdate = function() {
  if (this._frame !== this.MAX_FRAMES && this._attempts === 2 ) {
    this.newFrame();
  } else if (this._frame === this.MAX_FRAMES && this._attempts === 3 ) {
    this.newFrame();
  }
  return;
};

Game.prototype.newFrame = function() {
  this._frame += 1;
  this._attempts = 0;
  this._frameScore = 0;
};
