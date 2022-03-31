class Game {
  constructor() {
    this.rolls = []
  }
  roll(pins) {
    this.rolls.push(pins)
  }

  score() {

    return this.rolls.reduce((a,b) => a + b)
  }

}

module.exports = Game;