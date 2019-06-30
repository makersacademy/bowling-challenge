function Frame() {
  this.rolls = []
  this.singleScore = 0
}

Frame.prototype.addPins = function(pins) {
  this.rolls.push(pins)
}

Frame.prototype.frameScore = function() {
  if(this.rolls.length == 2) {
  return this.singleScore = this.rolls[0] + this.rolls[1]
  }
}