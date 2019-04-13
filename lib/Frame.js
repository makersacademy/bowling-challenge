function Frame () {
  this.roll1 = {
    pins: null,
  }
  this.roll2 = {
    pins: null,
  }
  this.bonus = null
}

Frame.prototype = {
  constructor: Frame,

  addRoll: function (pins) {
    if (this.roll1.pins === null) {
      this.roll1.pins = pins
    } else {
      this.roll2.pins = pins
    }
  },

  addBonus: function (bonus) {
    this.bonus = bonus
  },

  isComplete: function () {
    if (this.roll1.pins === 10) {
      return true
    }
    if (this.roll2.pins !== null) {
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
    return this.roll1.pins + this.roll2.pins + this.bonus
  },

  isSpare: function () {
    return (this.roll1.pins !== 10 && this.roll1.pins + this.roll2.pins === 10)
  }
}

if (typeof (module) !== 'undefined') {
  module.exports = Frame
}
