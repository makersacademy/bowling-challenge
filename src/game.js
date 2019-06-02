'use strict';

function Game() {
  this.frame = 1;

  this.allRolls = [];
  this.scores = {};

  // array of arrays with format [[frameNumber, allRolls index], ...]
  this.activeStrikes = [];

  this.scoreOne = null;
  this.scoreTwo = null;
}

Game.prototype.rollOne = function(pins) {
  this.scoreOne = pins;
  this.allRolls.push(pins);
  this._checkStrike(pins);
}

Game.prototype.rollTwo = function(pins) {
  this.scoreTwo = pins;
  this.allRolls.push(pins);
  this._newFrame();
}

Game.prototype._checkStrike = function(pins) {
  if (pins === 10) {
    this.activeStrikes.push([this.frame, this.allRolls.length - 1])
    this._newFrame();
  }
}

Game.prototype._newFrame = function() {
  this.scoreOne = null;
  this.scoreTwo = null;
  this.frame++
}
