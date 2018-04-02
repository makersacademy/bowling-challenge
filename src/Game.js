'use strict';

function Game() {
  this._scorecard = [];
  this._frame = []
  this.MAX_FRAMES = 10;
  this.MAX_ROLLS = 2;
  this._partialScores = [];
};

Game.prototype.roll = function(pinsDown) {
  if (this._frame.length === this.MAX_ROLLS) {
    return;
  }
  if (pinsDown > 10) {
    throw new Error ('There are only 10 pins');
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

Game.prototype.turn = function() {
  if (this._scorecard.length === this.MAX_FRAMES) {
    return;
  }
  this._scorecard.push(this._frame);
  this._frame = [];
};

Game.prototype.totalScore = function() {
  var total = 0;
  for(var idx = 0; idx < this._partialScores.length; ++idx ) {
    total += this._partialScores[idx];
  };
  return total;
};
