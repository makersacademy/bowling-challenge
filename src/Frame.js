function Frame() {
  this.firstRoll = null;
  this.secondRoll = null;
}

Frame.prototype = {

  constructor: Frame, // tider syntax

  roll: function(pins) {
    if (this.firstRoll === null) {
      this.firstRoll = pins;
    } else {
      this.secondRoll = pins;
    }
  },

  isDone: function() {
    if (this.secondRoll === null) {
      return false
    } else {
      return true
    }
  }
}
