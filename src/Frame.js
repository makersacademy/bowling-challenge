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
  }
}

if (typeof module !== 'undefined') {
  module.exports = Frame
}
