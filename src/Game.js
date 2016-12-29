/*jslint node: true */
'use strict';

function Game() {
  this.frames = []
  this.currentFrameIndex = 0;
  this._createFrames()
}

Game.prototype = {

  roll: function(pins) {
    if (this.isOver()) {
      console.log("Over");
    } else {
      this._addBonusPoints(pins);
      this._addToCurrentFrame(pins);
      this._nextFrame();
    }
  },

  _currentFrame: function() {
     return this.frames[this.currentFrameIndex];
  },

  _currentFrameIsOver: function() {
    return this._currentFrame().isOver();
  },

  _addToCurrentFrame: function(pins) {
    if (!this.frames[9].isStrike() && !this.frames[9].isSpare()) {
      this._currentFrame().addToFrame(pins);
    }
  },

  _nextFrame: function() {
    if (this._currentFrameIsOver() && !this._isTenthFrame()) {
      this.currentFrameIndex ++;
    }
  },

  _createFrames: function() {
    for (var i=0; i<10; i++) {
      this.frames.push(new Frame());
    }
  },

  getScore: function(scoreUpTo) {
    if (scoreUpTo === undefined) {
      scoreUpTo = 10;
    }
    return this._sumFrameScores(scoreUpTo);
  },

  _sumFrameScores: function(scoreUpTo) {
    var total = 0;
    for (var frameIndex = 0; frameIndex < scoreUpTo; frameIndex++) {
      total += this.frames[frameIndex].getTotalScore();
    }
    return total;
  },

  _addBonusPoints: function(pins) {
    this.frames.forEach(function(frame) {
      frame.addToBonus(pins);
    })
  },

  rollNumber: function() {
    var currentFrame = this.frames[this.currentFrameIndex];
    return currentFrame.rollNumber();
  },

  getRoll: function(frameNumber,rollNumber) {
    var frame = this.frames[frameNumber-1];
    return frame.scoreCard[rollNumber-1];
  },

  getFrameScore: function(frameNumber) {
    var frame = this.frames[frameNumber - 1];
    return frame.getTotalScore();
  },

  _isTenthFrame: function() {
    return this.currentFrameIndex === 9;
  },

  isOver: function() {
    return this.frames[9].isPointsComplete();
  },

  getFinalBonus: function(roll) {
    var frame = this.frames[9];
    if (roll === 2) {
      if (frame.isStrike()) {
        return frame.getBonusPoints(0);
      } else {
        return frame.scoreCard[1];
      }
    } else {
      if (frame.isStrike()) {
        return frame.getBonusPoints(1);
      } else {
        return frame.getBonusPoints(0);
      }
    }
  }

}
