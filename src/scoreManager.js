//Understands how to keep track of the score in a game of 10-pin bowling

'use strict';

function ScoreManager(frameModel = Frame, bonusChecker = BonusChecker) {
  this._frameModel = frameModel;
  this._bonusChecker = new bonusChecker;
  this._frames = [];
};

ScoreManager.prototype = {
  
  currentFrame: function() {
    return this._frames.length;
  },

  getScore: function() {
    var latestScore = 0;
    this._frames.forEach(function(frame) { latestScore += frame.getScore() });
    return latestScore;
  },

  roll: function(pins) {
    if (this.currentFrame() < 10) {
      if (this._frames.length === 0 ||
          this._frames[this._frames.length-1].isComplete()) {
        this._frames.push(new this._frameModel(pins, false));
        this._bonusChecker.checkBonus(this._frames);
      } else {
        this._frames[this._frames.length-1].roll(pins);
        this._bonusChecker.checkBonus(this._frames);
      } 
    } else {
      if (this._frames[this._frames.length-1].isComplete()) {
        this._frames.push(new this._frameModel(pins, true));
        this._bonusChecker.checkBonus(this._frames);
      } else {
        this._frames[this._frames.length-1].roll(pins);
        //this._bonusChecker.checkBonus(this._frames);
      } 
    }
  },

  isGameFinished: function() {
    return this._gameFinished;
  },

};
