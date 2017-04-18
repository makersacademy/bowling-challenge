function Frame () {
  this._frameNumber = 1
  this._isFirstRollOfFrame = true
  this._bonusRolls = 0
}

Frame.prototype.score = function(pinsDown) {
  if (this._isAStrike(pinsDown))
    this._strikeScored()
  else
    this._moveOnToSecondRoll()

  return pinsDown
}

Frame.prototype._isAStrike = function(pinsDown) {
  return (this._isFirstRollOfFrame && pinsDown === 10)
}

Frame.prototype._strikeScored = function() {
  this._bonusRolls = 2
  this._frameNumber += 1
}

Frame.prototype._moveOnToSecondRoll = function() {
  this._isFirstRollOfFrame = false
}
