function Frame () {
  this.roll1 = null
  this.roll2 = null
  this.bonus = null
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

  addBonus: function (bonus) {
    this.bonus = bonus
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
    if (!this.isComplete()) {
      return null
    }
    if (this.bonus === null) {
      return null
    }
    return this.roll1 + this.roll2 + this.bonus
  },

  isSpare: function () {
    return (this.roll1 !== 10 && this.roll1 + this.roll2 === 10)
  }
}

if (typeof (module) !== 'undefined') {
  module.exports = Frame
}
