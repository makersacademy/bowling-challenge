function Frame () {
  this.completionStatus = false
  this.roll1 = null
  this.roll2 = null
}

Frame.prototype = {
  constructor: Frame,

  isComplete: function () {
    return this.completionStatus
  },

  complete: function () {
    this.completionStatus = true
  }
}

if (typeof module !== 'undefined') {
  module.exports = Frame
}
