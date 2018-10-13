function Frame () {
  this.complete = false
  this.note = ''
  this.outcome = ''
  this.rolls = []
  this.score = 0
}

Frame.prototype.bowl = function (pinsKnockedDown) {
  this.rolls.push(pinsKnockedDown)
}
