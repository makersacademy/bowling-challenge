function Scorecard(Frame) {
  this.Frame = Frame
  const frame = new Frame()
  this.frames = [frame]
}

Scorecard.prototype.newFrameIfCurrFrameFinished = function () {
  if (this.currentFrame().isFinished()) {
    this.frames.push(new this.Frame())
  }
}

Scorecard.prototype.currentFrame = function () {
  return this.frames[this.frames.length - 1]
}

Scorecard.prototype.runningScores = function () {
  return this.frames.map((frame) => { 
    if (frame.isScoreFinalised()) {
      return frame.score
    }
  })
}

Scorecard.prototype.addRollToUnfinalisedScores = function (noOfPins) {
  this.frames.forEach((frame) => { 
    if (frame.isScoreFinalised() === false) {
      frame.addRoll(noOfPins)
    }
  })
}

Scorecard.prototype.roll = function (noOfPins) {
  this.addRollToUnfinalisedScores(noOfPins)

  this.newFrameIfCurrFrameFinished()

  return {
    currentFrame: this.currentFrame(),
    runningScores: this.runningScores()
  }
}