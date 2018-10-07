function Scorecard() {
  this.frames = {
    1: [null,null],
    2: [null, null],
    3: [null, null],
    4: [null, null],
    5: [null,null],
    6: [null, null],
    7: [null, null],
    8: [null, null],
    9: [null,null],
    10: [null, null],
    11: [null, null],
    12: [null, null],
  }
  this._currentFrameNum = 1;
}

Scorecard.prototype.addRoll = function(pins) {
  if (this.isGameComplete()) return false
  if (this.isCurrentFrameNew()) { this.frames[this.currentFrameNum()] = [pins,null] }
  else { this.frames[this.currentFrameNum()][1] = pins }
  if (this.isCurrentFrameComplete() && !this.isGameComplete()) this._currentFrameNum += 1
}

Scorecard.prototype.currentFrame = function() {
  return this.frames[this.currentFrameNum()]
}

Scorecard.prototype.currentFrameNum = function() {
  return this._currentFrameNum
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
  if (this.currentFrameNum() == 10 && this.isCurrentFrameComplete() && !this.isFrameStrike(this.frames[10]) && !this.isFrameSpare(this.frames[10])) return true
  if (this.currentFrameNum() == 11 && !this.isFrameStrike(this.frames[10]) && !this.isCurrentFrameNew()) return true
  if (this.currentFrameNum() == 12 && !this.isCurrentFrameNew()) return true
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
  var score = 0
  for (var i = 1; i <= this.currentFrameNum() && i <= 10; i++) {
    score += this.frameScore(this.frames[i])
    if (this.isFrameStrike(this.frames[i]) && this.frames[i+1] !== undefined) {
      score += this.frameScore(this.frames[i+1])
      if (this.isFrameStrike(this.frames[i+1]) && this.frames[i+2] !== undefined) { score += this.frames[i+2][0] }
    }
    if (this.isFrameSpare(this.frames[i]) && this.frames[i+1] !== undefined) { score += this.frames[i+1][0] }
  }
  return score
}
