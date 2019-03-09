function Scorecard(Frame) {
  this.Frame = Frame
  const frame = new Frame()
  this.frames = [frame]
}

Scorecard.prototype.currentFrame = function () {
  return this.frames[this.frames.length - 1]
}

Scorecard.prototype.roll = function (noOfPins) {
  if (this.currentFrame().isFinished()) {
    this.frames.push(new this.Frame())
  }

  const reversedFrames = this.frames.reverse();
  const lastScoredFrame = reversedFrames.find((frame) => { 
    return frame.isScoreFinalised() === true 
  })

  return {
    currentFrame: this.currentFrame(),
    lastScoredFrame: lastScoredFrame
  }
}