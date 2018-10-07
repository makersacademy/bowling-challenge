function Scorecard() {
  this.frames = {1: []}
}

Scorecard.prototype.addRoll = function(pins) {
  var second_roll = true
  if (this.isCurrentFrameNew()) {
    if(pins == 10) { second_roll = false }
    this.frames[this.currentFrameNum()] = [pins,second_roll]
  }
  else {
    this.frames[this.currentFrameNum()][1] = pins
  }
  if (this.currentFrame()[1] !== true) { this.addNewFrame() }
}

Scorecard.prototype.currentFrameNum = function() {
  return Object.keys(this.frames).length
}

Scorecard.prototype.currentFrame = function() {
  return this.frames[this.currentFrameNum()]
}

Scorecard.prototype.isCurrentFrameNew = function() {
  if (this.currentFrame().length == 0) { return true }
  else { return false }
}

Scorecard.prototype.addNewFrame = function() {
  this.frames[this.currentFrameNum() + 1] = []
}
