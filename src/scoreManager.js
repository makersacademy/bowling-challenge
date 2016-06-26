//Understands how to keep track of the score in a game of 10-pin bowling

'use strict';

function ScoreManager(frameModel = new Frame) {
  this._frameModel = frameModel
  this._score = 0;
  this._gameFinished = false;
  this._currentFrame = 0;
  this._adjacentStrike = false;
};

ScoreManager.prototype = {
  
  currentFrame: function() {
    return this._currentFrame;
  },

  getScore: function() {
    return this._score;
  },

  roll: function(pins) {
    if (this.isRollValid(pins)) {
      this._score += pins;
      this.checkBonusPoints(pins);
      this._frameModel.roll(pins);
      if (this._frameModel.isNewFrame()) {
        this._currentFrame += 1;
      }
    } else {
      throw('Cannot roll: not enough pins');
    }
  },

  //This is wrapping a method from a different object so that the interface deal with 
  //just the scoreManager rather than scoreManager + frame
  isRollValid: function(pins) {
    return this._frameModel.isRollValid(pins);
  },

  isGameFinished: function() {
    return this._gameFinished;
  },

  checkBonusPoints: function(pins) {
    if (this._frameModel.isSpare()) {
      this._adjacentStrike = false;
      this._score += pins;
    } else if (this._frameModel.isStrike()) {
      this._adjacentStrike = true;
      this._score += pins;
    } else {
      this._adjacentStrike = false;
    }  
  }
};
