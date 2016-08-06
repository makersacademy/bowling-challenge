'use strict';

function Bowling() {
  this._score = 0;
  this._frames = {};
  this._currentFrame = 1;
  this._currentRoll = 1;
  this._pinsLeft = 10;
  this._hasBonusPoints = 0;
}

Bowling.prototype = {

  getScore: function() {
    return this._score;
  },

  play: function() {
    if (this._currentFrame === 11) {
      return false;
    }
    var roll = this._processRoll();
    this._resetPins();
    return roll;
  },

  getCurrentFrameNumber: function() {
    return this._currentFrame;
  },

  getFrame: function(frame) {
    if (frame > 10 || frame < 1) {
      return;
    }
    if (!this._frames[frame]) {
      return this._frames[frame] = {
        1: null,
        2: null
      };
    }
    return this._frames[frame];
  },

  getCurrentFrame: function() {
    return this.getFrame(this._currentFrame);
  },


  // Private methods
  _roll: function() {
    return Math.floor(Math.random() * (this._pinsLeft + 1));
  },

  _addScore: function(score) {
    this._pinsLeft -= score;
    this.getCurrentFrame()[this._currentRoll] = score;
    this._score += score;
    if (this._hasBonusPoints > 0) {
      this._score += score;
      this._hasBonusPoints--;
    }
  },

  _resetPins: function() {
    if (this._currentFrame === 10 && this._pinsLeft === 0 && this._currentRoll < 3) {
      this._currentRoll++;
      this._pinsLeft = 10;
      return;
    }
    if (this._pinsLeft === 0 || this._currentRoll >= 2) {
      this._currentFrame++;
      this._currentRoll = 1;
      this._pinsLeft = 10;
      return;
    }
    this._currentRoll++;
  },

  _processRoll: function() {

    var roll = this._roll();
    this._addScore(roll);
    if (this._pinsLeft === 0 && this._currentRoll === 1) {
      this._hasBonusPoints = 2;
    }
    if (this._pinsLeft === 0 && this._currentRoll === 2) {
      this._hasBonusPoints = 1;
    }
    return roll;

  },

}
