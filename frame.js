const Roll = require('./roll');

class Frame {

  constructor() {
    this.roll = new Roll();
    this.frameTotal = 0;
    this.frameScores = [];
  };

  pinsRoll(pins) {
    this.frameScores = this.frameScores.concat(pins);
    this.frameTotal = this.roll.roll(pins);
    this.bonus = this.roll.strikeOrSpare();
  };


  startRoll(pins) {
    if (pins + this.frameTotal <= 10) {
      this.pinsRoll(pins);
    } else {
      throw 'Too many pins';
    }
  };

}

module.exports = Frame;
