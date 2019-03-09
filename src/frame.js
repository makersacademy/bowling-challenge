function Frame() {
  this.rolls = []
}

Frame.prototype.addRoll = function (noOfPins) {
  this.rolls.push(noOfPins)
}

Frame.prototype.isScoreFinalised = function () {
  return this.rolls.length == 2
}

Frame.prototype.score = function () {
  let score = 0
  this.rolls.forEach(function(roll) {
    score += roll
  })

  return score
}