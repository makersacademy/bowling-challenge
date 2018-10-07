function Scorecard() {
  this.frames = {1: [null,null]}
}

Scorecard.prototype.addRoll = function(pins) {
  if (this.isCurrentFrameNew()) {
    this.frames[this.currentFrameNum()] = [pins,null]
  }
  else {
    this.frames[this.currentFrameNum()][1] = pins
  }

  if (this.isCurrentFrameComplete()) this.addNewFrame()
}

Scorecard.prototype.currentFrameNum = function() {
  return Object.keys(this.frames).length
}

Scorecard.prototype.currentFrame = function() {
  return this.frames[this.currentFrameNum()]
}

Scorecard.prototype.isCurrentFrameNew = function() {
  if (this.currentFrame()[0] == null) { return true }
  else { return false }
}

Scorecard.prototype.isCurrentFrameComplete = function() {
  if (this.currentFrame()[0] == 10) return true
  if (this.currentFrame()[1] !== null ) return true
  return false
}

Scorecard.prototype.addNewFrame = function() {
  this.frames[this.currentFrameNum() + 1] = [null,null]
}

Scorecard.prototype.isGameComplete = function() {

}

Scorecard.prototype.isFrameStrike = function(frame) {
  if (frame[0] == 10) return true
  return false
}

Scorecard.prototype.isFrameSpare = function(frame) {
  if (frame[0] + frame[1] === 10 && frame[1] !== null) return true
  return false
}
