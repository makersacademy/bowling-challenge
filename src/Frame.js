function Frame () {
  this.completionStatus = false
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
