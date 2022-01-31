class Roll {

  constructor() {
    this.frameScore = 0
  }

  roll(pins) {
    this.pins = pins
    return this.frameScore += pins
  }

  strikeOrSpare() {
    if (this.pins === 10) {
      return 'strike';
    } else if (this.frameScore === 10) {
      return 'spare';
    } else {
      return 'none';
    }
  }






}

module.exports = Roll;