function Frame(number) {
  this.rolls = []
  this.number = number
}

Frame.prototype.addRoll = function (noOfPins) {
  this.rolls.push(noOfPins)
}

Frame.prototype.hadStrike = function () {
  return this.rolls[0] === 10
}

Frame.prototype.hadSpare = function () {
  return (this.rolls[0] + this.rolls[1] === 10)
}

Frame.prototype.isScoreFinalised = function () {
  if (this.hadStrike() || this.hadSpare()) {
    return this.rolls.length == 3
  }
  return this.rolls.length == 2
}

Frame.prototype.score = function () {
  let score = 0
  this.rolls.forEach(function(roll) {
    score += roll
  })

  return score
}

Frame.prototype.isFinished = function () {
  if (this.number === 10 && (this.hadStrike() || this.hadSpare())) {
    return this.rolls.length == 3
  } else {
    return this.rolls.length == 2 || this.hadStrike()
  }
}
