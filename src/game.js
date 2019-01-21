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
      if (spare()) {
        total += game.rolls[rollNumber] + game.rolls[rollNumber + 1] + game.rolls[rollNumber + 2]
      } else {
      total += game.rolls[rollNumber] + game.rolls[rollNumber + 1]
    }
      rollNumber += 2
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
  }

  // strike() {
  //   this.rolls.push(30)
  // }
}
