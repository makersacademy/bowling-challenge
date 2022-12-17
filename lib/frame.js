class Frame {
  constructor() {
    this.score = 0;
    this.rolls = [];
    this.status = "active";
  }

  addRoll(roll) {
    if (this.rolls.length >= 2) throw 'Cannot add more than two throws to a frame';
    if (roll < 0 || roll > 10) throw 'A roll must be between 0 and 10';
    if (!Number.isInteger(roll)) throw 'A roll must be an integer';
    if (this.score + roll > 10) throw 'Rolls cannot add up to more than 10';

    this.score += roll;
    this.rolls.push(roll);
    
    this.#updateStatus();
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

  #updateStatus() {
    if (this.score === 10 && this.rolls.length === 1) {
      this.status = 'strike';
    } else if (this.rolls.length === 2 && this.score === 10) {
      this.status = 'spare';
    } else if (this.rolls.length === 2) {
      this.status = 'completed';
    }
  }
}

module.exports = Frame;
