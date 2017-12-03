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

Bowling.prototype = {

  error: function () {
    if (this.frames.length > this.MAX_FRAMES) {
      throw ('Max Frames Added')
    }
  },

  addFrame: function (generatedFrame) {
    this.error()
    this.frames.push(generatedFrame)
  },
  generatedFrame: function (a, b) {
    var frame = new Frame (a, b)
    points = frame.rollScore
    points += this.totalPoints   // implementation needs to generate frame scores to total points, but doesn't
  },
  countPoints: function () {
    this.frames.forEach(function (frame) {
      var total = 0
      console.log(frame)
      for (var i in frame) { total += frame[i] }
      console.log(total)
      this.totalPoints += total
    })
  },
  spareBonus: function (frame) {
    return 4
  },
  _followingFrame: function (frame) {
    var i                         // check if it returns the next frame
    this.frames[i] = frame
    return this.frame[i + 1]
  },
  _nextToFollowingFrame: function (frame) {
    var i
    this.frame[i] = frame
    return this.frame[i + 2] // check if it returns the next to following frame
  },
  _isStrikeInARow: function () {
    return false
  },
  strikeBonus: function () {
    if (this._isStrikeInARow === false) {
      return 2 // return normal strike bonus
    }
  },
  totalGamePoints: function () {
    var points = this.countPoints + this.spareBonus + this.strikeBonus
    return points
  }
}

module.exports = Bowling
