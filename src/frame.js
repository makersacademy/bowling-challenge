function Frame() {
  this.frames = [];
  this.currentFrame = [];
}

Frame.prototype.receivePins = function(pins) {
    this.currentFrame.push(pins);
    this._storeCurrentFrameIfCompleted(pins);
}

Frame.prototype.getFrameResults = function() {
  return this.frames;
};

Frame.prototype.getFrameScores = function() {
  var output = [];
  var arrayLength = this.frames.length;
  for (var i = 0; i < arrayLength; i++) {
    output.push([this._reduceFrameToScore(i)]);
  }
  return output;
};

Frame.prototype.isTooManyPinsInOneFrame = function(numberOfPins) {
  if (this.currentFrame.length === 0 && numberOfPins === 10) {
    return false;
  }
  if (this.currentFrame[0]) {
    return ((this.currentFrame[0] + numberOfPins) > 10)
  } else {
    return (numberOfPins > 10)
  }
}

Frame.prototype._storeCurrentFrameIfCompleted = function(pins) {
  if (pins === 10 || this.currentFrame.length === 2) {
    this.frames.push(this.currentFrame);
    this.currentFrame = [];
  }
};

Frame.prototype._reduceFrameToScore = function(i) {
  var frame = this.frames[i];
  var nextFrame = this.frames[i+1];
  var score = frame.reduce((a, b) => a + b, 0)
  return this._addBonusOrSetScoreToZero(score, frame, nextFrame);
};

Frame.prototype._addBonusOrSetScoreToZero = function(score, frame, nextFrame) {
  var bonus_score = score
  if (frame.length === 2 && score === 10) {
    if (typeof nextFrame === 'undefined') {
      bonus_score = this.currentFrame.length === 0 ? (0) : (score += this.currentFrame[0])
    } else if (typeof nextFrame === 'object') {
      bonus_score += nextFrame[0];
    }
  }
  return bonus_score;
}
