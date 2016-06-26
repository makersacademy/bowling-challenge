'use strict';

function Frame() {
  const MAX_PINS_PER_ROLL = 10;
  const STRIKE = 10;
  const SPARE = 10;
  this._newFrame = true;
  this._spare = false;
  this._strike = false;
  this._pinsOnCurrentFrame = 0;

  this.isRollValid = function(pins) {
    return (pins + this._pinsOnCurrentFrame) <= MAX_PINS_PER_ROLL;
  };

  this.roll = function(pins) {
    if (this._newFrame) {
      if (pins === STRIKE) {
        this._strike = true;
        this._spare = false;
        this._newFrame = true;
        this._pinsOnCurrentFrame = 0;
      } else {
        this._newFrame = false;
        this._spare = false;
        this._pinsOnCurrentFrame += pins;
      }
    } else {
      if ((this._pinsOnCurrentFrame + pins) === SPARE) {
        this._spare = true;
        this._pinsOnCurrentFrame = 0;
        this._strike = false;
        this._newFrame = true;
      } else {
        this._spare = false;
        this._pinsOnCurrentFrame = 0;
        this._strike = false;
        this._newFrame = true;
      }
    }
  };
};

Frame.prototype = {
  
  isNewFrame: function() {
    return this._newFrame;
  },

  isSpare: function() {
    return this._spare;
  },

  isStrike: function() {
    return this._strike;
  },

};
