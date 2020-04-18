Frame = function() {
  this._turns = []
}

Frame.prototype.bowlBall = function(pins) {
  this._turns.push(pins)
}

Frame.prototype.currentTurn = function() {
  return this._turns.length
}