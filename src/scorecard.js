class Scorecard {
  constructor() {
    this.rolls = []
  }

  addRoll(pins) {
    let roll = new Roll(pins)
    this.rolls.push(roll)
  }

  calculateScore() {
    let score = 0
    this.rolls.forEach(function(roll) {
      score += roll.pins
    })
    return score
  }
}