function Frame(pins) {
  this._firstRoll = pins
  this._secondRoll = null
}

Frame.prototype.addSecondRoll = function(pinsDown) {
  this._secondRoll = pinsDown
}

Frame.prototype.firstRollScore = function() {
  return this._firstRoll
}

Frame.prototype.isComplete = function() {
  return (this._secondRoll !== null)
}

Frame.prototype.firstAndSecondRollScore = function() {
  return this._firstRoll + this._secondRoll
}
