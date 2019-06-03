'use strict';

// Properties
function Game() {
  this.frame = 1;

  this.allRolls = [];
  this.scores = {};

  // array of arrays with format [[frame, allRolls index], ...]
  this.activeStrikes = [];

  this.scoreOne = null;
  this.scoreTwo = null;
}

// Methods
Game.prototype.rollOne = function(pins) {
  this.scoreOne = pins;
  this.allRolls.push(pins);

  if (this.activeStrikes.length > 0) { this._resolveStrikes(); }

  this.scores[this.frame] = pins;
  this._checkStrike(pins);
}

Game.prototype.rollTwo = function(pins) {
  this.scoreTwo = pins;
  this.allRolls.push(pins);

  if (this.activeStrikes.length > 0) { this._resolveStrikes(); }

  this.scores[this.frame] += pins;
  this._newFrame();
}

// Private methods
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

Game.prototype._resolveStrikes = function() {
  var frame = this.activeStrikes[0][0];
  var index = this.activeStrikes[0][1];

  if (index === this.allRolls.length - 3) {
    this.scores[frame] += (this.allRolls[index + 1] + this.allRolls[index + 2]);
    this.activeStrikes.shift();
  }
}
