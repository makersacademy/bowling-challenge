'use strict'

function Frame () {
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
    frameTotal = this.frameScore(frame1) + this.strikeBonus(frame2)
  } else if (this.isSpare(frame1)) {
    frameTotal = this.frameScore(frame1) + this.spareBonus(frame2)
  } else {
    frameTotal = this.frameScore(frame1)
  }
  return frameTotal
}

Frame.prototype.frameScore = function (frame) {
  var frameTotal = frame[0] + frame[1]
  return frameTotal
}

Frame.prototype.strikeBonus = function (frame) {
  var frameBonus = this.frameScore(frame)
  return frameBonus
}

Frame.prototype.spareBonus = function (frame) {
  var frameBonus = frame[0]
  return frameBonus
}

// create bonus instead of 2 frame logic

module.exports = Frame
