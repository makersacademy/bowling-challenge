function Bowling(scorecard = new Scorecard()) {
  this.scorecard = scorecard
}

Bowling.prototype.roll = function(pins) {
  this.scorecard.addRoll(pins)
}

Bowling.prototype.showNextRoll = function() {
  return this.scorecard.nextRoll()
}

Bowling.prototype.showFrames = function() {
  return this.scorecard.frames
}

Bowling.prototype.showCurrentScore = function() {
  return this.scorecard.currentScore()
}

Bowling.prototype.showCurrentFrame = function() {
  return this.scorecard.currentFrame()
}

Bowling.prototype.showCurrentFrameNum = function() {
  return this.scorecard.currentFrameIndex() + 1
}
