function Scorecard() {
<<<<<<< HEAD
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
=======
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
    11: [null],
    12: [null],
  }
  this._currentFrameNum = 1;
>>>>>>> temporary
}

Scorecard.prototype.addRoll = function(pins) {
  if (this.isGameComplete()) return false
<<<<<<< HEAD
  if (this.isCurrentFrameNew()) { this.frames[this.currentFrameIndex()] = [pins,null] }
  else { this.frames[this.currentFrameIndex()][1] = pins }
  if (this.isCurrentFrameComplete() && !this.isGameComplete()) this._currentFrameIndex += 1
}

Scorecard.prototype.nextRoll = function() {
  return (this.isCurrentFrameNew()) ? 1 : 2
=======
  if (this.isFrameNew(this.currentFrame())) { this.frames[this.currentFrameNum()][0] = pins }
  else { this.frames[this.currentFrameNum()][1] = pins }
  if (this.isCurrentFrameComplete() && !this.isGameComplete()) this._currentFrameNum += 1
}

Scorecard.prototype.nextRoll = function() {
  return (this.isFrameNew(this.currentFrame())) ? 1 : 2
>>>>>>> temporary
}

Scorecard.prototype.currentFrame = function() {
  return this.frames[this.currentFrameIndex()]
}

Scorecard.prototype.currentFrameIndex = function() {
  return this._currentFrameIndex
}

Scorecard.prototype.isFrameNew = function(frame) {
  if (frame[0] == null) { return true }
  else { return false }
}

Scorecard.prototype.isCurrentFrameComplete = function() {
  if (this.currentFrame()[0] == 10) return true
  if (this.currentFrame()[1] !== null ) return true
  return false
}

Scorecard.prototype.isGameComplete = function() {
<<<<<<< HEAD
  if (this.currentFrameIndex() == 9 && this.isCurrentFrameComplete() && !this.isFrameStrike(this.frames[9]) && !this.isFrameSpare(this.frames[10])) return true
  if (this.currentFrameIndex() == 10 && !this.isFrameStrike(this.frames[9]) && !this.isCurrentFrameNew()) return true
  if (this.currentFrameIndex() == 11 && !this.isCurrentFrameNew()) return true
=======
  if (this.currentFrameNum() == 10 && this.isCurrentFrameComplete() && !this.isFrameStrike(this.frames[10]) && !this.isFrameSpare(this.frames[10])) return true
  if (this.currentFrameNum() == 11 && !this.isFrameStrike(this.frames[10]) && !this.isFrameNew(this.currentFrame())) return true
  if (this.currentFrameNum() == 12 && !this.isFrameNew(this.currentFrame())) return true
>>>>>>> temporary
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
  return frame[0] + (frame[1] === undefined ? 0 : frame[1])
}

Scorecard.prototype.currentScore = function() {
  var array = [].concat.apply([], this.frames)
  var score = 0
<<<<<<< HEAD
  for (var i = 0; i < array.length && i < 20; i = i + 2) {
    score += array[i] + array[i+1]
    if (array[i] === 10) {
      score += array[i+2]
      if (array[i+2] === 10) { score += array[i+4] }
      else { score += array[i+3] }
     }
    else if (array[i] + array[i+1] === 10) { score += array[i+2] }
=======
  for (var i = 1; i <= this.currentFrameNum() && i <= 10; i++) {
    score += this.frameScore(this.frames[i])
    if (this.isFrameStrike(this.frames[i]) && !this.isFrameNew(this.frames[i+1])) {
      score += this.frameScore(this.frames[i+1])
      if (this.isFrameStrike(this.frames[i+1]) && !this.isFrameNew(this.frames[i+2])) { score += this.frames[i+2][0] }
    }
    if (this.isFrameSpare(this.frames[i]) && !this.isFrameNew(this.frames[i+1])) { score += this.frames[i+1][0] }
>>>>>>> temporary
  }
  return score
}
