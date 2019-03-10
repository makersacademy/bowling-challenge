function Frame(roll1, roll2) {
  this._score = 0
  this._total = 0
  this._MAX_SCORE = 10
  this._roll1 = 0
  this._roll2 = 0
}


Frame.prototype.total = function(roll1, roll2) {
  this._roll1 = roll1
  this._roll2 = roll2
  this._total = roll1 + roll2
}

Frame.prototype._isStrike = function() {
  return this._roll1 = 10 == this._MAX_SCORE
  this._roll2 = 0
}
