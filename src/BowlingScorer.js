var bowlingScorer = function() {
  this.baseTotal = 0;
  this.totalScore = 0;
  this.frames = []
};

bowlingScorer.prototype.addFrame = function(frame) {
  this.frames.push(frame);
  if (this.frames.length > 2) {
    this.calculateBonus(this.frames[this.frames.length-3], this.frames[this.frames.length-2], this.frames[this.frames.length-2])
  };
  if (this.frames.length === 10) {
    this._addScores(this.frames);
  }
};

bowlingScorer.prototype.result = function(score) {
  if (score === 0) {
    return "Gutter game!"
  }
};

bowlingScorer.prototype.calculateBonus = function(previousFrame, currentFrame, nextFrame) {
  if (previousFrame._isStrike()) {
    previousFrame.frameBonus += (currentFrame.rollOne + currentFrame.rollTwo);
    this._twoStrikes(previousFrame, currentFrame, nextFrame)
  } else if (previousFrame._isSpare()) {
    previousFrame.frameBonus += currentFrame.rollOne
  } else {
    console.log("No bonus for this roll")
  }
};

bowlingScorer.prototype._twoStrikes = function(previousFrame, currentFrame, nextFrame) {
  if (previousFrame._isStrike() && nextFrame._isStrike()) {
    previousFrame.frameBonus += nextFrame.rollOne
  }
};

bowlingScorer.prototype._finalFrame = function(frame) {
  frame._tenthFrame();
};

bowlingScorer.prototype._addScores = function(frames) {
  for (var i = 0; i < this.frames.length; i++) {
    this.totalScore += this.frames[i].rollOne;
    this.totalScore += this.frames[i].rollTwo;
    this.totalScore += this.frames[i].frameBonus;
  }
};
