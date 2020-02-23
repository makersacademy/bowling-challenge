function Frame (rolls) {
  this.rolls = rolls
}

Frame.prototype.total_without_bonus = function () {
  return this.rolls[0] + this.rolls[1]
}

Frame.prototype.isStrike = function() {
  return this.rolls[0] === 10
}

Frame.prototype.isSpare = function () {
  return this.isStrike() === false && this.total_without_bonus() === 10
}

Frame.prototype.strikeBonus = function(next_frame) {
  if (this.isStrike() && next_frame !== undefined) {
    return this.total_without_bonus() + next_frame.rolls[0]
  } else {
    return this.total_without_bonus()
  }
}

Frame.prototype.bonus = function(next_frame, next_next_frame) {
  if ( next_frame === undefined ) {
    return 0
  } else if (!this.isStrike() && !this.isSpare()) {
    return 0
  } else if (this.isSpare()) {
    return next_frame.rolls[0]
  } else {
    return next_frame.strikeBonus(next_next_frame)
  }
}

Frame.prototype.total_with_bonus = function(next_frame, next_next_frame) {
  return this.total_without_bonus() + this.bonus(next_frame, next_next_frame)
}
