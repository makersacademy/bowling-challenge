'use srict'

// var Frame = require('../src/frame')
function Frame (first, second) {
  this.rolls = [first, second]
  this.MAX_POINTS = 10
  this.spare = false
  this.strike = false
}

Frame.prototype = {
  isStrike: function () {
    if (this.first === this.MAX_POINTS) {
      this.strike = true
    }
  },
  isSpare: function () {
    if (this.first + this.second === this.MAX_POINTS) {
      this.spare = true
    }
  },
  firstRoll: function () {
    return this.rolls[0]
  },
  secondRoll: function () {
    return this.rolls[1]
  },
  rollScore: function () {
    return this.first + this.second
  }

}

function Bowling () {
  this.frames = []
  this.totalPoints = 0
  this.MAX_FRAMES = 10
}
var sum

Bowling.prototype = {

  error: function () {
    if (this.frames.length > this.MAX_FRAMES) {
      throw('Max Frames Added')
    }
  },
  generatedFrame: function (a, b) {
    frame = new Frame (a, b)
  },
  addFrame: function (generatedFrame) {
    this.error()
    this.frames.push(generatedFrame)
  },
  countPoints: function () {
    this.frames.forEach(function (frame) {
      var total = 0
      for(var i in frame) { total += frame[i] }
      this.totalPoints += total
    })
  }
}

// module.exports = Bowling
