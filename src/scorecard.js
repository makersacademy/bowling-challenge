function Scorecard(Frame) {
  const frame = new Frame()
  this.frames = [frame]
}

Scorecard.prototype.roll = function (noOfPins) {
  return {
    currentFrame: this.frames[this.frames.length - 1]
  }
}