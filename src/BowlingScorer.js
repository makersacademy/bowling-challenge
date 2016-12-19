var bowlingScorer = function() {
  this.totalScore = 0
  this.frames = []
};

bowlingScorer.prototype.addFrame = function(frame) {
  this.frames.push(frame);
};

bowlingScorer.prototype.calculateBonus = function(previousFrame, nextFrame) {
  previousFrame.frameBonus += (nextFrame.rollOne + nextFrame.rollTwo);
}
