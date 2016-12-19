var bowlingScorer = function() {
  this.baseTotal = 0;
  this.totalScore = 0;
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

bowlingScorer.prototype._addBase = function(frames) {
  for (var i = 0; i < this.frames.length; i++) {
    this.baseTotal += this.frames[i].rollOne;
    this.baseTotal += this.frames[i].rollTwo;
  }
};
