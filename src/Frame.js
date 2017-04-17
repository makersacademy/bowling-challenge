function Frame() {
  this.pinsremaining = 10
  this.currentFrame = []
}

Frame.prototype.bowl = function() {
  this.pinsremaining -= Math.floor(Math.random() * 11);
}

Frame.prototype.isComplete = function() {
  if this.pinsremaining === 0 || this.currentFrame.length === 2
}
