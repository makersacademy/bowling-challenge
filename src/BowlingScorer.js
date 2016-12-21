var bowlingScorer = function() {
  this.baseTotal = 0;
  this.totalScore = 0;
  this.frames = []
};

bowlingScorer.prototype.addFrame = function(frame) {
  this.frames.push(frame);
  if (this.frames.length > 1) {
    this.calculateBonus(this.frames[this.frames.length-2], this.frames[this.frames.length-1])
  };
  if (this.frames.length === 10) {
    this._addBase(this.frames);
  }
};

bowlingScorer.prototype.result = function(score) {
  if (score === 0) {
    return "Gutter game!"
  }
};

bowlingScorer.prototype.calculateBonus = function(previousFrame, nextFrame) {
  if (previousFrame._isStrike()) {
    previousFrame.frameBonus += (nextFrame.rollOne + nextFrame.rollTwo);
  } else if (previousFrame._isSpare()) {
    previousFrame.frameBonus += nextFrame.rollOne
  } else {
    console.log("No bonus for this roll")
  }
};

bowlingScorer.prototype._finalFrame = function(frame) {
  frame._tenthFrame();
};

bowlingScorer.prototype._addBase = function(frames) {
  for (var i = 0; i < this.frames.length; i++) {
    this.baseTotal += this.frames[i].rollOne;
    this.baseTotal += this.frames[i].rollTwo;
  }
};
