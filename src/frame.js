'use srict'

function Frame (first, second) {
  this.first = first
  this.second = second
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
  }
}

module.exports = Frame
