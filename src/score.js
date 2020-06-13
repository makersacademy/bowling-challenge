function Score(frameNum) {
  this.frameNum = frameNum;
}

Score.prototype.score = function() {
  console.log(this.frameNum.baseScore())
  return (this.frameNum.baseScore());
}
