function Game() {
  this._scoreCardArray = []
  this._framesArray = []
}

Game.prototype.newFrame = function(frame = new Frame) {
  this._framesArray.push(frame)

}

Game.prototype.allFrames = function() {
  return this._framesArray
}

Game.prototype.currentFrame = function() {
  return this._framesArray[this._framesArray.length - 1]
}

Game.prototype.frameNumber = function() {
  return this._framesArray.length
}

Game.prototype.play = function(rollScore, frame = new Frame) {
  if (this.frameNumber() === 0) {
    this.newFrame(frame)
  }

  var currentFrame = this.currentFrame()
  currentFrame.roll(rollScore)
  frameState = currentFrame.frameOutcome()
  if (frameState.length === 2 || rollScore === 10) {
    this._scoreCardArray.push(frameState)
    this.newFrame(frame)
  }
}

Game.prototype.scorecard = function() {
  return this._scoreCardArray
}
