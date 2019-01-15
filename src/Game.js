function Game () {
  this.cur_frame = 1
  this.cur_roll = 1
  this.frameRecord = []
  this.gameRecord = []
  this.totalScore = []
  this.cur_score = 0
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
  this.cur_score = 0
  var index = frameNo - 1
  if (!this.gameRecord[index]) { return }
  if (this.gameRecord[index].reduce((a, b) => a + b) === 0) { // handle 0 0 score
    this.totalScore.push(0)
    return 0
  } else if (this.isStrike(this.gameRecord[index])) { // handle strike
    this.strikeBonus(index)
  } else if (this.isSpare(this.gameRecord[index])) { // handle spare
    this.spareBonus(index)
  } else { this.noBonus(index) } // handle rest
  if (this.cur_score === 0) {} else { // if: strick or spare, return and handle when required frame available
    this.totalScore.push(this.cur_score)
    return this.cur_score
  }
}

Game.prototype.finalFrScore = function () {
  this.cur_score = 0
  for (var i = 0; this.gameRecord[9][i]; i++) {
    this.cur_score += this.gameRecord[9][i]
  }
  this.totalScore.push(this.cur_score)
  return this.cur_score
}

Game.prototype.accumScore = function (frameNo) {
  var frameAccum = 0
  if (!this.totalScore[frameNo - 1] && this.totalScore[frameNo - 1] !== 0) { return }
  for (var i = 0; i < frameNo; i++) {
    frameAccum += this.totalScore[i]
  }
  return frameAccum
}

Game.prototype.noBonus = function (index) {
  this.cur_score += (this.gameRecord[(index)].reduce((a, b) => a + b))
}

Game.prototype.spareBonus = function (index) {
  if (!this.gameRecord[index + 1]) { return }
  this.cur_score += 10 + this.gameRecord[index + 1][0]
}

Game.prototype.strikeBonus = function (index) {
  if (!this.gameRecord[index + 1]) { return }
  var nextFr = this.gameRecord[index + 1]
  this.isStrike(nextFr) ? this.doubleStrikeBonue(index) : this.cur_score += 10 + nextFr[0] + nextFr[1]
}

Game.prototype.doubleStrikeBonue = function (index) {
  if (index === 8) { this.cur_score += 20 + this.gameRecord[9][1] }
  if (!this.gameRecord[index + 2]) {} else { this.cur_score += 20 + this.gameRecord[index + 2][0] }
}

Game.prototype.isFrameEnd = function (frameNo) {
  if (frameNo < 10) {
    return (this.frameRecord[0] === 10 || this.frameRecord.length >= 2)
  } else if (frameNo === 10 && (this.frameRecord.reduce((a, b) => a + b) < 10)) {
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
