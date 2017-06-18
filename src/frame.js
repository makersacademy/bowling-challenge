var Frame = function (last_frame) {
  this.rolls = []
  this.last_frame = !!last_frame

  Frame.prototype.add_roll = function (knocked_down_pins) {
    if (this.is_strike() && knocked_down_pins === 0) {
      return
    }
    var max_knocked_down_pins = knocked_down_pins
    this.rolls.forEach(function (roll, index) {
      max_knocked_down_pins += roll
    })
    if (!this.last_frame && max_knocked_down_pins > 10) {
      throw new Error('Maximum knocked down pins in each frame is 10')
    }
    if (this.last_frame && max_knocked_down_pins > 30) {
      throw new Error('Maximum knocked down pins in last frame is 30')
    }
    if (!this.last_frame && this.rolls.length >= 2) {
      throw new Error('Each frame can have at most two rolls')
    }
    if (this.last_frame && this.rolls.length >= 3) {
      throw new Error('Last frame can have at most three rolls')
    }
    this.rolls.push(knocked_down_pins)
  }

  Frame.prototype.score_no_bonus = function () {
    if (this.last_frame) {
      if (this.is_spare()) {
        return this.rolls[0] + this.rolls[1]
      }
      if (this.is_strike()) {
        return this.rolls[0]
      }
    }
    var score = 0
    this.rolls.forEach(function (roll, index) {
      score += roll
    })
    return score
  }

  Frame.prototype.is_spare = function () {
    return this.rolls[0] + this.rolls[1] === 10
  }

  Frame.prototype.is_strike = function () {
    return this.rolls[0] === 10 && this.rolls[1] !== null
  }
}
