function ScoreCalculator(frames) {
  this._frames = frames;
}

ScoreCalculator.prototype.totalScore = function() {
  var totalScore = 0;
  this._frames.forEach(function(frame, frameIndex) {
    totalScore += frame.total();
    totalScore += this._addBonusIfSpare(frame, frameIndex);
    totalScore += this._addBonusIfStrike(frame, frameIndex);
  }, this);
  return totalScore;
};

ScoreCalculator.prototype._addBonusIfSpare = function(frame, frameIndex) {
  if (frame.isSpare() && this._currentFrameIsNotTheLast(frameIndex)) {
    var bonus = this._nextFrame(frameIndex).firstRoll;
    return bonus;
  } else {
    return 0;
  }
};

ScoreCalculator.prototype._addBonusIfStrike = function(frame, frameIndex) {
  if (frame.isStrike() && this._currentFrameIsNotTheLast(frameIndex)) {
    var bonus = 0;
    bonus += this._nextFrame(frameIndex).total();
    if (this._nextFrame(frameIndex).isStrike() && this._currentFrameIsNotEvenThePenultimate(frameIndex)) {
      bonus += this._nextButOneFrame(frameIndex).firstRoll;
    }
    return bonus;
  } else {
    return 0;
  }
};

ScoreCalculator.prototype._currentFrameIsNotTheLast = function(frameIndex) {
  return frameIndex < this._frames.length - 1;
};

ScoreCalculator.prototype._currentFrameIsNotEvenThePenultimate = function(frameIndex) {
  return frameIndex < this._frames.length - 2;
};

ScoreCalculator.prototype._nextFrame = function(frameIndex) {
  return this._frames[frameIndex + 1];
};

ScoreCalculator.prototype._nextButOneFrame = function(frameIndex) {
  return this._frames[frameIndex + 2];
};
