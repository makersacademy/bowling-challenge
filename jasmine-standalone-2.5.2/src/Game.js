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
      var currentFrame = this.frames[this.currentFrameIndex];

      if (!this.frames[9].isStrike() && !this.frames[9].isSpare()) {
        currentFrame.addToFrame(pins);
      }

      if (currentFrame.isOver() && !this._isTenthFrame()) {
        this.currentFrameIndex ++;
      }
    }
  },

  _createFrames: function() {
    for (var i=0; i<10; i++) {
      this.frames.push(new Frame());
    }
  },

  calculateScore: function(scoreUpTo=10) {
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
  }
}






Game.prototype.getFrameScore = function(frameNumber) {
  var frame = this.frames[frameNumber - 1];
  return frame.getTotalScore();
}

Game.prototype._isTenthFrame = function() {
  return this.currentFrameIndex === 9;
}

Game.prototype.getFinalBonus = function(roll) {
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

Game.prototype.isOver = function() {
  return this.frames[9].isPointsComplete();
}
