'use srict'

var Frame = require('../src/frame')
var frame

function Bowling () {
  this.frames = []
  this.totalPoints = 0
  this.MAX_FRAMES = 10
}

Bowling.prototype = {

  error: function () {
    if (this.frames.length > this.MAX_FRAMES) {
      throw ('Max Frames Added')
    }
  },
  addFrame: function (r1, r2) {
    this.error()
    frame = new Frame (r1, r2)
    this.frames.push(frame)
  },
  countPoints: function () {
    this.frames.forEach(function (frame) {
      var total = 0
      for (var i in frame) { total += frame[i] }
      this.totalPoints += total
    })
  }
}

module.exports = Bowling
