function Frame(rolls){
  this._score = 0
  this.rolls = rolls
  this.isStrike = false
}

Frame.prototype.firstRoll = function() {
  return this.rolls[0]
}

Frame.prototype.secondRoll = function() {
  return this.rolls[1]
}

Frame.prototype.calculateScore = function() {
  if (this.firstRoll() == 10) {
    this.isStrike = true
  }
  this._score += this.firstRoll() + this.secondRoll()
}