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
    this._pinsLeft -= roll;
    this._score += roll;
    this._processRoll(roll);
    return roll;
  },

  getPins: function() {
    return this._pinsLeft;
  },

  getCurrentFrameNumber: function() {
    return this._currentFrame;
  },

  getCurrentFrame: function() {
    if (!this._frames[this._currentFrame]) {
      return this._frames[this._currentFrame] = {
        roll1: null,
        roll2: null
      };
    }
    return this._frames[this._currentFrame];
  },


  // Private methods
  _roll: function() {
    return Math.floor(Math.random() * (this._pinsLeft + 1));
  },

  _processRoll: function(roll) {
    if (roll === 10 && this._currentRoll === 1) {
       
    } else if (roll === 10 && this._currentRoll === 2) {

    } else if (this._currentRoll === 1) {
      this._currentRoll = 2;
    } else {
      this._currentFrame++;
      this._currentRoll = 1;
    }
  },

}
