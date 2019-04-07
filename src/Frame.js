function Frame () {
  this.roll1 = null
  this.roll2 = null
}

Frame.prototype = {
  constructor: Frame,

  isComplete: function () {
    if ((this.roll1 !== null) && (this.roll2 !== null)) {
      return true
    } else {
      return false
    }
  },

  addRoll: function (roll) {
    if (this.isComplete()) {
      throw new Error('Could not record roll. Frame is complete.')
    }
    if (this.roll1 === null) {
      this.roll1 = roll
    } else {
      this.roll2 = roll
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = Frame
}
