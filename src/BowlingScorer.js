var bowlingScorer = function() {
  this.totalScore = 0
  this.frames = []
};

bowlingScorer.prototype.addFrame = function(frame) {
  this.frames.push(frame);
};
