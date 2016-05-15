function Frame(pins) {
  this._firstRoll = pins
}

Frame.prototype.firstRollScore = function() {
  return this._firstRoll
}
