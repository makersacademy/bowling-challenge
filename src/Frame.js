function Frame () {
  this.roll1 = null
  this.roll2 = null
  this.score = null
}

Frame.prototype = {
  constructor: Frame,

  isComplete: function () {
    if (this.roll1 === 10) {
      return true
    }
    if ((this.roll1 !== null) && (this.roll2 !== null)) {
      return true
    }
    return false
  },

  addRoll: function (roll) {
    this._throwErrorIfFrameComplete()
    this._throwErrorIfFrameTotalOver10(roll)
    if (this.roll1 === null) {
      this.roll1 = roll
    } else {
      this.roll2 = roll
    }
  },

  _throwErrorIfFrameComplete: function () {
    if (this.isComplete()) {
      throw new Error('Could not record roll. Frame is complete.')
    }
  },

  _throwErrorIfFrameTotalOver10: function (roll) {
    if ((this.roll1 !== null) && (this.roll1 + roll > 10)) {
      throw new Error('Could not record roll. Frame total would be more than 10.')
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = Frame
}
