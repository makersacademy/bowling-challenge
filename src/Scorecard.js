function Scorecard () {
  this.totalScore = 0
  this.frameNumber = 1
  this.frames = []
  this.scores = []
}

Scorecard.prototype.rollOne = function (rollScore, frame = new Frame(this.frameNumber)) {
  this.frameNumber++
  this.frames.push(frame)
  frame.rollOneScore(rollScore)
};

Scorecard.prototype.rollTwo = function (rollScore) {
  var frame = this.frames[this.frames.length - 1]
  frame.rollTwoScore(rollScore)
  if(frame.rollOne + frame.rollTwo != 10) { this._calculateScore() };
};

Scorecard.prototype._calculateScore = function () {
  var scoringFrame = this.frames.length - 1
  while (this.frames.length > this.scores.length) {
    var frame = this.frames[scoringFrame]
    if (this._wasASpare(frame)) {
      this._calculateSpareBonus(frame)
    }
    if (this._wasAStrike(frame)) {
      this._calculateStrikeBonus(frame)
    }
    this.totalScore += frame.frameScore()
    this.scores.push(frame.frameScore())
    scoringFrame--
  }
};

Scorecard.prototype._wasASpare = function (frame) {
  return (frame.rollOne + frame.rollTwo === 10) && (frame.rollOne != 10)
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
  if (nextFrame.rollTwo === null) {
    frame.addBonus(nextFrame.rollOne + nextNextFrame.rollOne)
  } else {
  frame.addBonus(nextFrame.rollOne + nextFrame.rollTwo)
  }
}
