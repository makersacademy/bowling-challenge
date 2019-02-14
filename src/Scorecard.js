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
  while (scoringFrame >= this.scores.length - 1) {
    var frame = this.frames[scoringFrame]
    if (this._wasASpare(frame)) {
      frame.addBonus(this.frames[scoringFrame+ 1].rollOne)
    }
    this.totalScore += frame.frameScore()
    this.scores.push(frame.frameScore())
    scoringFrame--
  }
};

Scorecard.prototype._wasASpare = function (frame) {
  console.log("testing for spare")
  return (frame.rollOne + frame.rollTwo === 10) && (frame.rollOne != 10)
}

Scorecard.prototype._wasAStrike = function (frame) {
  return frame.rollOne === 10
}
