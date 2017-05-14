var Bowling = function () {
  this._rolls = []
}

Bowling.prototype.roll = function (pinsDown) {
  this._rolls.push(pinsDown)
}

Bowling.prototype.scoreIs = function () {
  var score = 0
  var rollIndex = 0
  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (this._rolls[rollIndex] + this._rolls[rollIndex + 1] === 10) {
      score += this._rolls[rollIndex] + this._rolls[rollIndex + 1] + this._rolls[rollIndex + 2]
    } else {
      score += this._rolls[rollIndex] + this._rolls[rollIndex + 1]
    }
    rollIndex += 2
  }
  return score
}

// module.exports = Bowling
