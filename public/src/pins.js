function Pins () {
  this.leftStanding = 10
  this.needReset = false
}

Pins.prototype.managePins = function (score) {
  if (this.needReset) {
    this.leftStanding = 10
  } else {
    this.leftStanding -= score
    this.needReset = true
  }
  this._resetAfterStrike(score)
}

Pins.prototype.isImpossibleScore = function (score) {
  if (score > this.leftStanding) {
    throw new Error('Not enough pins')
  }
}

Pins.prototype._resetAfterStrike = function (score) {
  if (score === 10) {
    this.leftStanding = 10
    this.needReset = false
  }
}

module.exports = Pins
