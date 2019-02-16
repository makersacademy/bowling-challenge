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
    this.currentFrame = new Frame();
    // console.log("frame complete framesArray = " + this.frames)
  } else {
    // console.log("frames incomplete framesArray = " + this.frames)
  }
};

Scorecard.prototype.frameResult = function(frameNumber) {
  var frameSum = this.frameSum(frameNumber)
  // console.log("frames array = " + this.frames)
  // console.log(this.frames[frameNumber])
  // console.log("^")
  var nextTwoFrames = [this.frames[frameNumber], this.frames[frameNumber+1]].flat()
  // console.log("next2frames = " + nextTwoFrames)
  // console.log("frameSum = " + frameSum)
  // console.log("frameLength = " + this.frames[frameNumber - 1].length)
  if (this.isStrike(frameNumber)) {
    // console.log("identified strike")
    return frameSum + nextTwoFrames[0] + nextTwoFrames[1]
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
