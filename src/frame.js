function Frame() {
  this.turn = []
  this.bowls = []
}

Frame.prototype.firstBowl = function(firstScore) {
  this.turn = []
  this.turn.push(firstScore)
}

Frame.prototype.secondBowl = function(secondScore) {
  this.turn.push(secondScore);
  this.bowls.push(this.turn)
}

Frame.prototype.totalFrameScore = function() {
  return this.turn.reduce((a, b) => a + b, 0);
}
