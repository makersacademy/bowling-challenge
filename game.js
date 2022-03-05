class Game {
  constructor() {
    this.rolls = []
  }

  roll(pins) {
    this.rolls.push(pins)
  }

  getScore() {
    let sum = 0
    for (let i = 0; i < this.rolls.length; i++) {
      sum += this.rolls[i];
    }
    return sum
  }
}


module.exports = Game;