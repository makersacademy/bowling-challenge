const Roll = require('./roll');

class Frame {

  constructor() {
    this.roll = new Roll();
    this.frameTotal = 0;
    this.frameScores = [];
  };

  startRoll = (pins) => {
    // pins + this.frameTotal <= 10 ? roll(pins) : throw 'Too many pins';
    if (pins + this.frameTotal <= 10) {
      this.frameScores = this.frameScores.concat(pins);
      this.frameTotal = this.roll.roll(pins);
      this.bonus = this.roll.strikeOrSpare();
    } else {
      throw 'Too many pins';
    }
  };

}

module.exports = Frame;
