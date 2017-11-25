'use srict'
const PINS = 10

function Frame (first = 0, second = 0) {
  this.first = first
  this.second = second
  this.rolls = [first, second]
  this.strike = false
  this.spare = false
}

Frame.prototype = {
  isStrike: function () {
    if (this.first === PINS) {
      this.strike = true
    }
  },
  isSpare: function () {
    if (this.first + this.second === PINS) {
      this.spare = true
    }
  }
}
