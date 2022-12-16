class Frame {
  constructor() {
    this.score = 0;
    this.rolls = [];
    this.status = "active";
  }

  addRoll(roll) {
    if (roll < 0 || roll > 10) throw 'A roll must be between 0 and 10';
    if (!Number.isInteger(roll)) throw 'A roll must be an integer';
    if (this.score + roll > 10) throw 'Rolls cannot add up to more than 10';

    this.score += roll;
    this.rolls.push(roll);
    
    if (this.rolls.length == 2) this.status = 'completed';
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
