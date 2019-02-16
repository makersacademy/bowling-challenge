'use strict';

function Scorecard() {
  this.FRAME_MAX = 10;
  this.frames = [];
  this.currentFrame = new Frame();
}

Scorecard.prototype.total = function(frames) {
  var score = 0
  frames.forEach(function(element) {
    score = score + element.reduce((a,b) => a + b, 0)
  });
  return score
};

Scorecard.prototype.turn = function(pins) {
  if (this.currentFrame.roll(pins) != false) {
    this.frames.push(this.currentFrame.getRolls())
    if (this.frames.length === 9) {
      this.currentFrame = new TenthFrame();
    } else {
      this.currentFrame = new Frame();
    }
    // console.log("framesArray = " + this.frames )
    // console.log("frame 10 = " + this.frames[9] )
  }
};

Scorecard.prototype.frameResult = function(frameNumber) {
  var frameSum = this.frameSum(frameNumber)
  console.log("frameSum = " + frameSum )
  var nextTwoFrames = [this.frames[frameNumber], this.frames[frameNumber+1]].flat()
console.log("nextTwoFrames = " + nextTwoFrames )
  if (this.isStrike(frameNumber)) {
    return frameSum + nextTwoFrames[0] + nextTwoFrames[1]
  } else if (this.isSpare(frameNumber)) {
    return frameSum + nextTwoFrames[0]
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
