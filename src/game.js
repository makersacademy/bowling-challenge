class Game {
  constructor() {
    this.rolls = []
  }

  roll(pins) {
    this.rolls.push(pins)
  }

  score() {
    var total = 0
    for(var i = 0; i < 20; i++) {
      total += this.rolls[i]
    }
    return total
  }

  // strike() {
  //   this.rolls.push(30)
  // }
}
