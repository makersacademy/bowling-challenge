function Bowling(scorecard = new Scorecard()) {
  this.scorecard = scorecard
}

Bowling.prototype.roll = function(pins) {
  if (isNaN(pins)) { return "You need to put in a number"}
  if (pins > 10) { return "You cannot roll more than 10" }
  if ((this.scorecard.currentFrame()[0] + pins) > 10) { return "A frame cannot be more than 10" }
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
