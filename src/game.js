'use strict';

function Game() {
  // this._NUMBEROFFRAMES = 10;
  this._MAXSCORE = 10;

  this.frame = 1;
  this.rolls = [];
  this._isSpare = false;
  this.activeStrikes = []; // array of arrays: [[turn, allRolls index], ...]

  this.scores = {};
  this.allRolls = [];
}

Game.prototype.roll = function(pins) {
  if (this.rolls.length === 0) {
    this._addRolls(pins, 1);
    this._resolveStrikes();
    this._resolveSpare();
    this._checkStrike(pins);
  } else {
    this._addRolls(pins, 2);
    this._resolveStrikes();
    this._checkSpare();
    this._newFrame();
  }
}

Game.prototype.total = function() {
  if (this.frame > 10) {
    var limit = 10;
  } else {
    var limit = this.frame - 1;
  }

  var total = 0;

  for (var i = 1; i <= limit; i++) {
    console.log(this.scores[i]);
    total += this.scores[i];
  }
  return total;
}

Game.prototype._addRolls = function(pins, rollNumber) {
  this.rolls.push(pins);
  rollNumber === 1 ? this.scores[this.frame] = pins : this.scores[this.frame] += pins;
  this.allRolls.push(pins);
}

Game.prototype._checkStrike = function(pins) {
  if (pins === this._MAXSCORE) {
    this.activeStrikes.push([this.frame, this.allRolls.length - 1]);
    this._newFrame();
  }
}

Game.prototype._checkSpare = function() {
  if (this.rolls[0] + this.rolls[1] === this._MAXSCORE) { this.isSpare = true; }
}

Game.prototype._newFrame = function() {
  this.rolls = [];
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
    this.scores[this.frame - 1] += this.rolls[0];
    this.isSpare = false;
  }
}
