function Frame() {
  this.firstRoll = null;
  this.secondRoll = null;
  this.bonus = 0;
}

Frame.prototype = {

  constructor: Frame,

  roll(pins) {
    if (this.firstRoll === null) {
      this.firstRoll = pins;
    } else {
      this.secondRoll = pins;
    }
  },

  isComplete() {
    if (this.firstRoll === 10 || this.secondRoll !== null) {
      return true;
    }
    return false;
  },

  score() {
    return this.firstRoll + this.secondRoll + this.bonus;
  },

  isSpare() {
    if (this.firstRoll !== 10 && this.score() === 10) {
      return true;
    }
    return false;
  },

  isStrike() {
    if (this.firstRoll === 10) {
      return true;
    }
    return false;
  },
};

if (typeof module !== 'undefined') {
  module.exports = Frame;
}
