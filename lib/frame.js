class Frame {
  constructor() {
    this.score = 0;
    this.rolls = [];
    this.status = "active";
  }

  addRoll(roll) {
    if (roll < 0 || roll > 10) throw 'A roll must be between 0 and 10';
    if (!Number.isInteger(roll)) throw 'A roll must be an integer';

    this.score += roll;
    this.rolls.push(roll);
  }

  getScore() {
    return this.score;
  }

  getRolls() {
    return this.rolls;
  }

  getStatus() {
    return this.status;
  }
}

module.exports = Frame;
