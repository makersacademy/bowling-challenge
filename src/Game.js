var Game = function () {
  this.rolls = []
  this.frame = []
  this.frameError = false
}

Game.prototype.checkFrame = function (pinsDown) {
      if (pinsDown > (10 - (this.frame[0])) ) {
      this.frameError = true
    } else if ((this.frame.length === 1) || (pinsDown == 10)) {
      this.frame = []
    } else {
      this.frame.push(pinsDown)
    }
  }

Game.prototype.roll = function (pinsDown) {
  this.checkFrame(pinsDown)
  if (this.frameError == true) {
    this.frameError = false
    return "Error"
  } else {
  this.rolls.push(pinsDown)
  }
}

Game.prototype.finalScore = function () {

  var result = 0
  var rollNumber = 0
  var game = this

  for (var whichFrame = 0; whichFrame < 10; whichFrame++) {
    if (isStrike()) {
      result += this.rolls[rollNumber] + this.rolls[rollNumber + 1] + this.rolls[rollNumber + 2]
      rollNumber++
    } else if (isSpare()) {
      result += this.rolls[rollNumber] + this.rolls[rollNumber + 1] + this.rolls[rollNumber + 2]
      rollNumber += 2
    } else {
      result += this.rolls[rollNumber] + this.rolls[rollNumber + 1]
      rollNumber += 2
    }
  }
  return result

  function isSpare () {
    return game.rolls[rollNumber] + game.rolls[rollNumber + 1] == 10
  }

  function isStrike () {
    return game.rolls[rollNumber] == 10
  }
}
