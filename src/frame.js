function Frame (first, second) {
  this.rolls = [first, second]
  this.MAX_POINTS = 10
  this.spare = false
  this.strike = false
}

Frame.prototype = {
  isStrike: function () {
    if (this.firstRoll === this.MAX_POINTS) {
      this.secondRoll = 0
      this.strike = true
    }
  },
  isSpare: function () {
    if (this.firstRoll + this.secondRoll === this.MAX_POINTS) {
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
    return this.firstRoll + this.secondRoll
  }

}
