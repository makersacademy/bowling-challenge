'use strict';

function Scorecard() {
  this.FRAME_MAX = 10;
  this.frames = [];
  this.currentFrame = new Frame();
}

Scorecard.prototype.total = function() {
  var finalFrames = []
  for (var i = 0; i < this.frames.length; i++) {
    finalFrames.push(this.frameResult(i+1))
  }
  return finalFrames.reduce((a,b) => a + b, 0)
};

Scorecard.prototype.turn = function(pins) {
  if (this.currentFrame.roll(pins) != false) {
    this.frames.push(this.currentFrame.getRolls())
    if (this.frames.length === 9) {
      this.currentFrame = new TenthFrame();
    } else {
      this.currentFrame = new Frame();
    }
  }
};

Scorecard.prototype.frameResult = function(frameNumber) {
  var frameSum = this.frameSum(frameNumber)
  var nextTwoFrames = [this.frames[frameNumber], this.frames[frameNumber+1]].flat()
  var rollPlusOne = nextTwoFrames[0] = nextTwoFrames[0] || 0
  var rollPlusTwo = nextTwoFrames[1] = nextTwoFrames[1] || 0
  if (this.isStrike(frameNumber)) {
    return frameSum + rollPlusOne + rollPlusTwo
  } else if (this.isSpare(frameNumber)) {
    return frameSum + rollPlusOne
  } else {
    return frameSum
  }
};

Scorecard.prototype.isSpare = function (frameNumber) {
  var frameSum = this.frameSum(frameNumber)
  if (frameSum === this.FRAME_MAX) {
    return true
  } else {
    return false
  }
};

Scorecard.prototype.isStrike = function (frameNumber) {
  var frameSum = this.frameSum(frameNumber)
  if (frameSum === this.FRAME_MAX && this.frames[frameNumber - 1].length === 1) {
    return true
  } else {
    return false
  }
};

Scorecard.prototype.frameSum = function (frameNumber) {
  return this.frames[frameNumber - 1].reduce((a,b) => a + b, 0)
};

Scorecard.prototype.getFrames = function() {
  return this.frames;
}
