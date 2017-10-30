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
  var bonus = 0;
  if (frame.isSpare() && this._currentFrameIsNotTheLast(frameIndex)) {
    bonus += this._nextFrame(frameIndex).firstRoll;
  }
  return bonus;
};

ScoreCalculator.prototype._addBonusIfStrike = function(frame, frameIndex) {
  var bonus = 0;
  if (frame.isStrike() && this._currentFrameIsNotTheLast(frameIndex)) {
    bonus += this._nextFrame(frameIndex).firstRoll + this._nextFrame(frameIndex).secondRoll;
    if (this._nextFrame(frameIndex).isStrike() && this._currentFrameIsNotEvenThePenultimate(frameIndex)) {
      bonus += this._nextButOneFrame(frameIndex).firstRoll;
    }
  }
  return bonus;
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

ScoreCalculator.prototype._nextFrameIsTheTenth = function(frameIndex) {
  return frameIndex === 8;
};
