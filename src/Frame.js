function Frame() {
  this.game = []
  this.roll = 0
  this.problem = false
}

Frame.prototype.checkPins = function() {
  if (this.game.length > 1) {
    this.problem = true
  }
}

Frame.prototype.newRoll = function(pins) {
  frame.checkPins();
  if (this.problem === true) {
    throw new Error('To many goes man')
  } else {
    this.roll += pins;
    this.game.push(this.roll);
    this.roll = 0 }
}
