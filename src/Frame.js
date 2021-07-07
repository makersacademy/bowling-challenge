'use strict'

var Frame = function(rolls) {
  this.MAXIMUM_SCORE = 10
  this.rolls = rolls
}

Frame.prototype.total = function(next_frame, next_next_frame) {
  return this._frameScore() + this._bonusScore(next_frame, next_next_frame)
}

Frame.prototype._frameScore = function() {
  return this.rolls.reduce(function(score, roll) {
    return score + roll
  })
}

Frame.prototype._bonusScore = function(next_frame, next_next_frame) {
  if (undefined === next_frame) return 0
  if (this._isStrike()) return next_frame._strikeBonus(next_next_frame)
  if (this._isSpare()) return next_frame._spareBonus()
  return 0
}

Frame.prototype._isSpare = function() {
  return this._frameScore() == this.MAXIMUM_SCORE
}

Frame.prototype._isStrike = function() {
  return this._firstRoll() == this.MAXIMUM_SCORE
}

Frame.prototype._spareBonus = function() {
  return this._firstRoll()
}

Frame.prototype._strikeBonus = function(next_frame) {
  // this refers to the "next" frame here as its called on the object of the next frame
  if (this._isStrike() && next_frame !== undefined) {
    return this._frameScore() + next_frame._firstRoll()
  }
  return this._firstRoll() + this._secondRoll()
}

Frame.prototype._firstRoll = function() {
  return this.rolls[0]
}

Frame.prototype._secondRoll = function () {
  return this.rolls[1]
}
