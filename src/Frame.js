function Frame() {
  this.firstRoll = null;
  this.secondRoll = null;
  this.bonus = 0;
}

Frame.prototype = {

  constructor: Frame,

  roll: function(pins) {
    if (this.firstRoll === null) {
      this.firstRoll = pins;
    } else {
      this.secondRoll = pins;
    }
  },

  isComplete: function() {
    if (this.secondRoll === null) {
      return false
    } else {
      return true
    }
  },

  score: function() {
    return this.firstRoll + this.secondRoll + this.bonus;
  },
}
