function Scorecard () {
  // this.totalScore = 0
  this.frameNumber = 1
  this.frames = []
}

Scorecard.prototype.rollOne = function (rollScore, frame = new Frame(frameNumber)) {
  this.frames.push(frame)
  frame.rollOneScore(rollScore)
};
