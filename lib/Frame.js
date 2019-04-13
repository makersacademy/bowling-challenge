function Frame () {
  this.roll1 = null
  this.roll2 = null
}

Frame.prototype = {
  constructor: Frame,

  addRoll: function (pins) {
    if (this.roll1 === null) {
      this.roll1 = pins
    } else {
      this.roll2 = pins
    }
  },

  isComplete: function () {
    if (this.roll1 === 10) {
      return true
    }
    if (this.roll2 !== null) {
      return true
    }
    return false
  },

  score: function () {
    return this.roll1 + this.roll2
  }
}

module.exports = Frame
