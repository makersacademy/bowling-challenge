//Understands how to keep track of the score in a game of 10-pin bowling

'use strict';

function ScoreManager(frameModel = Frame) {
  this._frameModel = frameModel;
  this._frames = [];
  this._gameFinished = false;
  this._currentFrame = 0;
};

ScoreManager.prototype = {
  
  currentFrame: function() {
    return this._currentFrame;
  },

  getScore: function() {
    var latestScore = 0;
    this._frames.forEach(function(frame) { latestScore += frame.getScore() });
    return latestScore;
  },

  roll: function(pins) {
    if (this._frames.length === 0 ||
        this._frames[this._frames.length-1].isComplete()) {
      this._frames.push(new this._frameModel(pins));
    } else {
      this._frames[this._frames.length-1].roll(pins);
    } 
  },

  isGameFinished: function() {
    return this._gameFinished;
  },
};
