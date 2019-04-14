function Frame () {
  this.roll1 = null
  this.roll2 = null
  this.roll3 = null
  this.bonus = null
  this.isFinalFrame = false
}

Frame.prototype = {
  constructor: Frame,
  
  isComplete: function () {
    if (this.isFinalFrame) {
      if (this.roll1 === 10) {
        if (this.roll3 !== null) {
          // strike + two more balls
          return true
        } else {
          return false
        }
      }
      if (this.roll1 + this.roll2 === 10) {
        if (this.roll3 !== null) {
          // spare + one more ball
          return true
        } else {
          return false
        }
      }
      if (this.roll2 !== null) {
        // not a strike, not a spare - no extra ball.
        return true
      } else {
        return false
      }
    }
    if (this.roll1 === 10) {
      return true
    }
    if (this.roll1 !== null && this.roll2 !== null) {
      return true
    }
    return false
  },

  addRoll: function (roll) {
    if (this.roll1 === null) {
      this.roll1 = roll
    } else if (this.roll2 === null) {
      this.roll2 = roll
    } else if (this.isFinalFrame) {
      this.roll3 = roll
    }
    return this
  },

  isNotComplete: function () {
    return !this.isComplete()
  },

  score: function () {
    if (this.isNotComplete()) {
      return null
    }
    if (this.bonus === null) {
      return null
    }
    return this.roll1 + this.roll2 + this.roll3 + this.bonus
  },

  isStrike: function () {
    return this.roll1 === 10
  },

  isSpare: function () {
    return (this.roll1 !== 10 && this.roll1 + this.roll2 === 10)
  }
}
