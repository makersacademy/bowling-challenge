function Score(frameNum) {
  this.frameNum = frameNum;
}

Score.prototype.score = function() {
  return (this.frameNum.baseScore());
}
