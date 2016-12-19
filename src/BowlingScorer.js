var bowlingScorer = function() {
  this.totalScore = 0
  this.frames = []
};

bowlingScorer.prototype.addFrame = function(frame) {
  this.frames.push(frame);
};

bowlingScorer.prototype.calculateBonus = function(previousFrame, nextFrame) {
  if (previousFrame._isStrike()) {
    previousFrame.frameBonus += (nextFrame.rollOne + nextFrame.rollTwo);
  } else if (previousFrame._isSpare()) {
    previousFrame.frameBonus += nextFrame.rollOne
  } else {
    throw("No bonus for this roll.")
  }
};
