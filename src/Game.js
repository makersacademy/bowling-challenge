'use strict';

function Game() {
  this._scorecard = [];
  this._frame = []
  this.MAX_FRAMES = 10;
  this.MAX_ROLLS = 2;
  this._partialScores = [];
  this.MAX_NO_PINS = 10;
};

Game.prototype.roll = function(pinsDown) {
  if (this._frame.length === this.MAX_ROLLS) {
    return;
  }
  if (pinsDown > this.MAX_NO_PINS) {
    throw new Error ('There are only 10 pins');
  }
  this._frame.push(pinsDown);
};

Game.prototype.roll2 = function(pinsDown) {
  var standingPins = this.MAX_NO_PINS - this._frame[0]
  if (this._frame.length === this.MAX_ROLLS) {
    return;
  }
  if (pinsDown > standingPins ) {
    throw new Error ('There are not that many pins');
  }
  this._frame.push(pinsDown);
};

Game.prototype.frameScore = function() {
  var frameTot = 0;
  for(var idx = 0; idx < this._frame.length; ++idx ) {
    frameTot += this._frame[idx];
  };
  this._partialScores.push(frameTot)
  return frameTot;
};

Game.prototype.archiveFrame = function() {
  if (this._scorecard.length === this.MAX_FRAMES) {
    return;
  }
  this._scorecard.push(this._frame);
  this.resetFrame();
};

Game.prototype.resetFrame = function() {
  this._frame = [];
};

Game.prototype.round = function(pinsDown1, pinsDown2) {
  this.roll(pinsDown1);
  this.roll2(pinsDown2);
  this.archiveFrame();
  this.frameScore();
};

Game.prototype.totalScore = function() {
  var total = 0;
  for(var idx = 0; idx < this._partialScores.length; ++idx ) {
    total += this._partialScores[idx];
  };
  return total;
};
