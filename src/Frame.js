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
    if (this.firstRoll === 10 || this.secondRoll !== null) {
      return true
    } else {
      return false
    }
  },

  score: function() {
    return this.firstRoll + this.secondRoll + this.bonus;
  },

  isSpare: function() {
    if (this.firstRoll !== 10 && this.score() === 10) {
      return true
    } else {
      return false
    }
  },

  isStrike: function() {
    if (this.firstRoll === 10) {
      return true
    } else {
      return false
    }
  }
}
