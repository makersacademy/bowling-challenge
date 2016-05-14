function Game () {
  this._cumulativeScore = 0
  this._frameNumber = 1
  this._isFirstRoll = true
  this._bonusRolls = 0
}

Game.prototype.cumulativeScore = function() {
  return this._cumulativeScore
}

Game.prototype.frameNumber = function() {
  return this._frameNumber
}

Game.prototype.bonusRolls = function() {
  return this._bonusRolls
}

Game.prototype.isFirstRoll = function() {
  return this._isFirstRoll
}

Game.prototype.roll = function(pinsDown) {
  if (this.isAStrike(pinsDown)) {
    this._bonusRolls = 2
    this._frameNumber += 1
  } else {
    this._isFirstRoll = !this._isFirstRoll
  }
  this._cumulativeScore += pinsDown
}

Game.prototype.isAStrike = function(pinsDown) {
  return (this.isFirstRoll() && pinsDown === 10)
}
