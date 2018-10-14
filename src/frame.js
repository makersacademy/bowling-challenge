function Frame () {
  this.complete = false
  // this.note = ''
  // this.outcome = ''
  this.rolls = []
  this.score = 0
}

Frame.prototype._calculateOutcome = function (pinsKnockedDown) {
  if (pinsKnockedDown === 0) {
    return 'Bad luck'
  }
  if (pinsKnockedDown === 10) {
    return 'Strike'
  }
  if (this.rolls.length !== 0 && this.rolls[0].pins + pinsKnockedDown === 10) {
    return 'Spare'
  }
  return ''
}

Frame.prototype.bowl = function (pinsKnockedDown) {
  let roll = { pins: pinsKnockedDown }
  roll.outcome = this._calculateOutcome(pinsKnockedDown)
  this.rolls.push(roll)
}

Frame.prototype.setComplete = function (complete) {
  this.complete = complete
}
