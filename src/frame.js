'use strict'

function Frame () {
  this.frameResults = []
};

Frame.prototype.isStrike = function (arr) {
  if (arr[0] === 10) {
    return true
  } else {
    return false
  };
}

Frame.prototype.isSpare = function (arr) {
  if (arr[0] + arr[1] === 10 && !this.isStrike(arr)) {
    return true
  } else {
    return false
  };
}

Frame.prototype.scoreFrame = function (frame1, frame2) {
  var frameTotal
  if (this.isStrike(frame1)) {
    frameTotal = frame1[0] + frame1[1] + frame2[0] + frame2[1]
  } else if (this.isSpare(frame1)) {
    frameTotal = frame1[0] + frame1[1] + frame2[0]
  } else {
    frameTotal = frame1[0] + frame1[1]
  }
  return frameTotal
}

module.exports = Frame
