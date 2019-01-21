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
    var game = this

    for(var frameNumber = 0; frameNumber < 10; frameNumber++) {
      if (strike()) {
        total += strikeScore()
        rollNumber += 1
      } else if (spare()) {
        total += spareScore()
        rollNumber += 2
      } else {
      total += normalScore()
      rollNumber += 2

      }
    }
    return total

    function spare() {
      return game.rolls[rollNumber] + game.rolls[rollNumber + 1] == 10
    }

    function spareScore() {
      return game.rolls[rollNumber] + game.rolls[rollNumber + 1] + game.rolls[rollNumber + 2]
    }

    function normalScore() {
      return game.rolls[rollNumber] + game.rolls[rollNumber + 1]
    }

    function strike() {
      return game.rolls[rollNumber] == 10
    }

    function strikeScore() {
      return game.rolls[rollNumber] + game.rolls[rollNumber + 1] + game.rolls[rollNumber + 2]
    }
  }

  // strike() {
  //   this.rolls.push(30)
  // }
}
