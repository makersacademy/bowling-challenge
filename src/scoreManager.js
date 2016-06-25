'use strict';

function ScoreManager() {
  this._score = 0;
  this._gameFinished = false;
};

ScoreManager.prototype = {
  
  currentFrame: function() {
    return 0;
  },

  getScore: function() {
    return this._score;
  },

  roll: function(pins) {
    this._score += pins;
  },

  isRollValid: function(pins) {
    return true;
  },

  isGameFinished: function() {
    return this._gameFinished;
  }
};
