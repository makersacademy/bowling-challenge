'use strict';

// Properties
function Game() {
  this.frame = 1;
  this.allRolls = [];
  this.scores = {}; // key = frame, value = score

  this.isSpare = false;
  this.activeStrikes = []; // array of arrays: [[frame, allRolls index], ...]

  this.scoreOne = null;
  this.scoreTwo = null;
}

// Methods
Game.prototype.rollOne = function(pins) {
  this._addScores(pins);
  this._resolveStrikes();
  this._resolveSpare();
  this._checkStrike(pins);
}

Game.prototype.rollTwo = function(pins) {
  this._addScores(pins);
  this._resolveStrikes();
  this._checkSpare();
  this._newFrame();
}

// Private methods
Game.prototype._addScores = function(pins) {
  if (this.scoreOne === null) {
    this.scoreOne = pins;
    this.scores[this.frame] = pins;
  } else {
    this.scoreTwo = pins;
    this.scores[this.frame] += pins;
  }
  this.allRolls.push(pins);
}

Game.prototype._checkStrike = function(pins) {
  if (pins === 10) {
    this.activeStrikes.push([this.frame, this.allRolls.length - 1]);
    this._newFrame();
  }
}

Game.prototype._checkSpare = function() {
  if (this.scoreOne + this.scoreTwo === 10) { this.isSpare = true; }
}

Game.prototype._newFrame = function() {
  [this.scoreOne, this.scoreTwo] = [null, null];
  this.frame++;
}

Game.prototype._resolveStrikes = function() {
  if (this.activeStrikes.length > 0) {
    var frame = this.activeStrikes[0][0]; // frame of strike
    var index = this.activeStrikes[0][1]; // index of strike in allRolls

    // adds next two rolls from allRolls to scores dictionary
    if (index === this.allRolls.length - 3) {
      this.scores[frame] += (this.allRolls[index+1] + this.allRolls[index+2]);
      this.activeStrikes.shift();
    }
  }
}

Game.prototype._resolveSpare = function() {
  if (this.isSpare) {
    this.scores[this.frame - 1] += this.scoreOne;
    this.isSpare = false;
  }
}
