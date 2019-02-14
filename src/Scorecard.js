function Scorecard () {
  // this.totalScore = 0
  this.frameNumber = 1
  this.frames = []
}

Scorecard.prototype.rollOne = function (rollScore, frame = new Frame(this.frameNumber)) {
  this.frames.push(frame)
  frame.rollOneScore(rollScore)
};

Scorecard.prototype.rollTwo = function (rollScore) {
  frame = this.frames[this.frames.length - 1]
  frame.rollTwoScore(rollScore)
};
