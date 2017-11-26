'use srict'

function Frame (first, second) {
  this.first = first
  this.second = second
  this.rolls = [first, second]
}

Frame.prototype = {
  isStrike: function () {
    if (this.first === 10) {
      this.strike = true
    }
  },
  isSpare: function () {
    if (this.first + this.second === 10) {
      this.spare = true
    }
  }
}

function Bowling () {
  this.frames = []
  this.totalPoints = 0
}

Bowling.prototype = {
  addFrame: function (frm) {
    this.frames.push(frm)
    if (this.frames.length > 10) {
      throw ('Max Frames Added')
    }
  },
  countPoints: function () {
    this.frames.forEach(function (frame) {
      var total = 0
      for (var i in frame) { total += frame[i] }
      this.totalPoints += total
    })
  }
}
