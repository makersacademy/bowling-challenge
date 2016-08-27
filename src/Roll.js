function Roll(score) {
  this._score = score
}

Roll.prototype.score = function() {
  return this._score
}

Roll.prototype.isStrike = function() {
  if(this._score === 10) { return true }
}

Roll.prototype.setRollNumber = function(num) {
  this._rollNumber = num
}

Roll.prototype.rollNumber = function() {
  return this._rollNumber
}