class Bowling {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  score() {
    let total = 0;
    let turn = 0;
    for(let i = 0 ; i < 10 ; i++) {
      total += this.rolls[turn] + this.rolls[turn + 1];
      turn += 2;
    }
    return total;
  }

}

module.exports = Bowling;