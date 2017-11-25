'use srict'

function Frame (first, second) {
  this.first = first
  this.second = second
  this.rolls = [first, second]
  this.strike = false
  this.spare = false
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
}

Bowling.prototype = {
  addFrame: function (frame) {
    this.frames.push(frame)
  }
}
