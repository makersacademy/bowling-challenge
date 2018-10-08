function Scorecard() {
  this.frames = [
    [null,null],
    [null, null],
    [null, null],
    [null, null],
    [null,null],
    [null, null],
    [null, null],
    [null, null],
    [null,null],
    [null, null],
    [null, null],
    [null, null],
  ]
  this._currentFrameIndex = 0;
}

Scorecard.prototype.addRoll = function(pins) {
  if (this.isGameComplete()) return false
  if (this.isCurrentFrameNew()) { this.frames[this.currentFrameIndex()] = [pins,null] }
  else { this.frames[this.currentFrameIndex()][1] = pins }
  if (this.isCurrentFrameComplete() && !this.isGameComplete()) this._currentFrameIndex += 1
}

Scorecard.prototype.nextRoll = function() {
  return (this.isCurrentFrameNew()) ? 1 : 2
}

Scorecard.prototype.currentFrame = function() {
  return this.frames[this.currentFrameIndex()]
}

Scorecard.prototype.currentFrameIndex = function() {
  return this._currentFrameIndex
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

Scorecard.prototype.isGameComplete = function() {
  if (this.currentFrameIndex() == 9 && this.isCurrentFrameComplete() && !this.isFrameStrike(this.frames[9]) && !this.isFrameSpare(this.frames[10])) return true
  if (this.currentFrameIndex() == 10 && !this.isFrameStrike(this.frames[9]) && !this.isCurrentFrameNew()) return true
  if (this.currentFrameIndex() == 11 && !this.isCurrentFrameNew()) return true
  return false
}

Scorecard.prototype.isFrameStrike = function(frame) {
  if (frame[0] == 10) return true
  return false
}

Scorecard.prototype.isFrameSpare = function(frame) {
  if (frame[0] + frame[1] === 10 && frame[1] !== null) return true
  return false
}

Scorecard.prototype.frameScore = function(frame) {
  return frame[0] + frame[1]
}

Scorecard.prototype.currentScore = function() {
  var array = [].concat.apply([], this.frames)
  var score = 0
  for (var i = 0; i < array.length && i < 20; i = i + 2) {
    score += array[i] + array[i+1]
    if (array[i] === 10) {
      score += array[i+2]
      if (array[i+2] === 10) { score += array[i+4] }
      else { score += array[i+3] }
     }
    else if (array[i] + array[i+1] === 10) { score += array[i+2] }
  }
  return score
}
