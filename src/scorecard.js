function Scorecard(Frame) {
  this.Frame = Frame
  const frameNumber = 1
  const frame = new Frame(frameNumber)
  this.frames = [frame]
}

Scorecard.prototype.newFrameIfCurrFrameFinished = function () {
  if (this.currentFrame().isFinished()) {
    const frameNumber = this.frames.length + 1
    this.frames.push(new this.Frame(frameNumber))
  }
}

Scorecard.prototype.currentFrame = function () {
  return this.frames[this.frames.length - 1]
}

Scorecard.prototype.runningScores = function () {
  results = this.frames.map((frame) => { 
    if (frame.isScoreFinalised()) {
      return frame.score()
    }
  })
  return results
}

Scorecard.prototype.addRollToUnfinalisedScores = function (noOfPins) {
  this.frames.forEach((frame) => { 
    if (frame.isScoreFinalised() === false) {
      frame.addRoll(noOfPins)
    }
  })
}

Scorecard.prototype.roll = function (noOfPins) {
  this.newFrameIfCurrFrameFinished()

  this.addRollToUnfinalisedScores(noOfPins)

  return {
    currentFrame: this.currentFrame(),
    runningScores: this.runningScores()
  }
}