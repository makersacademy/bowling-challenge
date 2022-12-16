class Frame {

  constructor() {
    this.rolls = [];
  }

  addRoll(roll) {
    this.rolls.push(roll);
  }

  rolls() {
    return this.rolls;
  }

  score() {
    let total = 0;
    this.rolls.forEach(x => total += x);
    return total;
  }

  strike() {
    return this.rolls[0] === 10 ? true : false;
  }

  spare() {
    return this.rolls.length === 2 && this.score() === 10 ? true : false;
  }

}

module.exports = Frame;