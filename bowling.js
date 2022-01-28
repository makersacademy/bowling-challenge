class Bowling {

  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins)
  }

  calculateScore(){
    let total = 0;
    let index = 0;
    while (index <  this.rolls.length) {
      total += this.rolls[index] + this.rolls[index ++]
    }
    return total
    }
}

module.exports = Bowling;