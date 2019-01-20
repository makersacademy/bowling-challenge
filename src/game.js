class Game {
  constructor() {
    this.rolls = []
  }

  roll(pins) {
    this.rolls.push(pins)
  }

  score() {
    var total = 0
    var rollNumber = 0

    for(var frameNumber = 0; frameNumber < 10; frameNumber++) {
      if (this.rolls[rollNumber] + this.rolls[rollNumber + 1] == 10) {
        total += this.rolls[rollNumber] + this.rolls[rollNumber + 1] + this.rolls[rollNumber + 2]
      } else {
      total += this.rolls[rollNumber] + this.rolls[rollNumber + 1]
    }
      rollNumber += 2
    }
    return total
  }

  // strike() {
  //   this.rolls.push(30)
  // }
}
