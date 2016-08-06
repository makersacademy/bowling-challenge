'use strict';

function Bowling() {
  this._score = 0;
  this._frames = {};
  this._currentFrame = 1;
  this._currentRoll = 1;
  this._pinsLeft = 10;
}

Bowling.prototype = {

  getScore: function() {
    return this._score;
  },

  play: function() {
    var roll = this._roll();
    this._addScore(roll);
    this._processRoll(roll);
    return roll;
  },

  getPins: function() {
    return this._pinsLeft;
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
  },

  _processRoll: function(roll) {

    if (roll === 10 && this._currentRoll === 1) {
      this._currentFrame++;
      return;
    }

    if (roll === 10 && this._currentRoll === 2) {
      if (this._currentFrame === 10) {
        this._currentRoll = 3;
      } else {
        this._currentFrame++;
      }
      return;
    }

    if (this._currentRoll === 1) {
      this._currentRoll = 2;
      return;
    }

    if (this._currentFrame < 10) {
      this._currentFrame++;
      this._currentRoll = 1;
    }

  },

}
