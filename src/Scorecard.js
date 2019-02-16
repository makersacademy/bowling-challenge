function Scorecard () {
  this.totalScore = 0
  this.frameNumber = 1
  this.frames = []
  this.scores = []
  this.rollNumber = 1
}

Scorecard.prototype.rollBall = function (rollScore) {
  if (this.frameNumber === 11 && this.rollNumber === 1) { this.finalRound(rollScore) }
  else if (this.rollNumber === 1) { this.rollOne(rollScore) }
  else { this.rollTwo(rollScore) }
};

Scorecard.prototype.finalRound = function (rollScore) {
  if (this._wasASpare(this.frames[9])) { this.lastRoundSpare(rollScore) }
  else if (this._wasAStrike(this.frames[9])) { this.lastRoundStrike(rollScore) }
  else { throw new Error('Cannot enter more than 10 frames') }
};

Scorecard.prototype.rollOne = function (rollScore, frame = new Frame(this.frameNumber)) {
  if (this.frameNumber >= 11) { throw new Error('Cannot enter more than 10 frames') }
  this.frameNumber++
  this.frames.push(frame)
  frame.rollOneScore(rollScore)
  if (rollScore != 10) { this.rollNumber = 2 }
}

Scorecard.prototype.rollTwo = function (rollScore) {
  var frame = this.frames[this.frames.length - 1]
  frame.rollTwoScore(rollScore)
  if (!this._wasASpare(frame)) { this._calculateScore() };
  this.rollNumber = 1
}

Scorecard.prototype.lastRoundStrike = function (rollScore) {
  var frame = this.frames[9]
  if (frame.bonus === null) { frame.addBonus(rollScore) }
  else {
    frame.addBonusTwo(rollScore)
    this._calculateScore()
    this.frameNumber++
  }
}

Scorecard.prototype.lastRoundSpare = function (rollOne) {
  var frame = this.frames[this.frames.length - 1]
  frame.addBonus(rollOne)
  this._calculateScore()
  this.frameNumber++
}

Scorecard.prototype._calculateScore = function () {
  var scoringFrame = this.frames.length - 1
  while (this.frames.length > this.scores.length) {
    var frame = this.frames[scoringFrame]
    if (scoringFrame !== 9) { this._addBonus(frame) }
    this.totalScore += frame.frameScore()
    this.scores.push(frame.frameScore())
    scoringFrame--
  }
}

Scorecard.prototype._addBonus = function (frame) {
  if (this._wasASpare(frame)) { this._calculateSpareBonus(frame) }
  if (this._wasAStrike(frame)) { this._calculateStrikeBonus(frame) }
}

Scorecard.prototype._wasASpare = function (frame) {
  return (frame.rollOne + frame.rollTwo === 10) && (frame.rollOne !== 10)
}

Scorecard.prototype._wasAStrike = function (frame) {
  return frame.rollOne === 10
}

Scorecard.prototype._calculateSpareBonus = function (frame) {
  var nextFrame = this.frames[frame.frameNumber]
  frame.addBonus(nextFrame.rollOne)
}

Scorecard.prototype._calculateStrikeBonus = function (frame) {
  var nextFrame = this.frames[frame.frameNumber]
  var nextNextFrame = this.frames[frame.frameNumber + 1]
  if (nextFrame.rollTwo === null && nextNextFrame) {
    frame.addBonus(nextFrame.rollOne + nextNextFrame.rollOne)
  } else if (nextFrame.rollTwo === null) {
    frame.addBonus(nextFrame.rollOne + nextFrame.bonus)
  } else {
    frame.addBonus(nextFrame.rollOne + nextFrame.rollTwo)
  }
}
