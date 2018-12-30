function Game () {
  this.cur_frame = 1
  this.cur_roll = 1
  this.frameRecord = []
  this.gameRecord = []
  this.totalScore = []
  this.score
}

Game.prototype.knockDown = function (pins) {
  this.frameRecord.push(pins)
  if (this.isFrameEnd(this.cur_frame)) {
    this.resetFrame()
  }
  this.cur_roll += 1
  return pins
}

Game.prototype.resetFrame = function () {
  this.gameRecord.push(this.frameRecord)
  this.cur_frame++
  this.cur_roll = 0
  this.frameRecord = []
}

Game.prototype.frameScore = function (frameNo) {
  this.score = 0
  var index = frameNo - 1
  if (this.isStrike(this.gameRecord[index])) { this.strikeBonus(index) } else if (this.isSpare(this.gameRecord[index])) { this.spareBonus(index) } else { this.noBonus(index) }
  if (this.score === 0) {} else {
    this.totalScore.push(this.score)
    return this.score
  }
}

Game.prototype.finalFrScore = function () {
  this.score = 0
  for (var i = 0; this.gameRecord[9][i]; i++) {
    this.score += this.gameRecord[9][i]
  }
  this.totalScore.push(this.score)
  return this.score
}

Game.prototype.accumScore = function (frameNo) {
  var frameAccum = 0
  if (!this.totalScore[frameNo - 1]) { return }
  for (var i = 0; i < frameNo; i++) {
    frameAccum += this.totalScore[i]
  }
  return frameAccum
}

Game.prototype.noBonus = function (index) {
  if (!this.gameRecord[index]) { return }
  this.score += (this.gameRecord[(index)][0] + this.gameRecord[(index)][1])
}

Game.prototype.spareBonus = function (index) {
  if (!this.gameRecord[index + 1]) { return }
  this.score += 10 + this.gameRecord[index + 1][0]
}

Game.prototype.strikeBonus = function (index) {
  if (!this.gameRecord[index + 1]) { return }
  var nextFr = this.gameRecord[index + 1]
  this.isStrike(nextFr) ? this.doubleStrikeBonue(index) : this.score += 10 + nextFr[0] + nextFr[1]
}

Game.prototype.doubleStrikeBonue = function (index) {
  if (index === 8) { this.score += 20 + this.gameRecord[9][1] }
  if (!this.gameRecord[index + 2]) {} else { this.score += 20 + this.gameRecord[index + 2][0] }
}

Game.prototype.isFrameEnd = function (frameNo) {
  if (frameNo < 10) {
    return (this.frameRecord[0] === 10 || this.frameRecord.length >= 2)
  } else if (frameNo === 10 && (this.frameRecord[0] + this.frameRecord[1] < 10)) {
    return (this.frameRecord.length >= 2)
  } else if (frameNo === 10) {
    return (this.frameRecord.length >= 3)
  } else { throw new Error('game ended') }
}

Game.prototype.isStrike = function (ary) {
  if (ary === undefined || ary[0] === undefined) { return false } else { return (ary[0] === 10) }
}

Game.prototype.isSpare = function (ary) {
  if (ary === undefined || ary.length < 2) { return false }
  return (ary[0] + ary[1] === 10)
}
