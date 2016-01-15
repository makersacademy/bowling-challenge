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
  var nextNextFrame = this.frames[i+2];
  var score = frame.reduce((a, b) => a + b, 0);
  return this._addBonusOrSetScoreToZero(score, frame, nextFrame, nextNextFrame);
};

Frame.prototype._addBonusOrSetScoreToZero = function(score, frame, nextFrame, nextNextFrame) {
  var bonus_score = score
  if (frame.length === 2 && score === 10 && typeof nextFrame === 'undefined') {
      bonus_score = this.currentFrame.length === 0 ? (0) : (score += this.currentFrame[0])
  } else if (frame.length === 2 && score === 10 && typeof nextFrame === 'object') {
      bonus_score += nextFrame[0];
  }
  // if (this._isEnoughDataToCalcStrike()) {};
  if (frame.length === 1 && score === 10 && typeof nextFrame === 'object' && typeof nextNextFrame === 'object') {
    var bonus
    bonus = nextFrame.length === 1 ? (nextFrame[0] + nextNextFrame[0]) : nextFrame.reduce((a, b) => a + b, 0);
    bonus_score = score + bonus;
  } else if (frame.length === 1 && score === 10 && typeof nextFrame === 'object' && typeof nextNextFrame === 'undefined') {
      var bonus
      bonus = nextFrame.length === 1 ? (nextFrame[0] + this.currentFrame[0]) : nextFrame.reduce((a, b) => a + b, 0);
      bonus_score = score + bonus;
  }
  return bonus_score;
}

Frame.prototype._isEnoughDataToCalcStrike = function(nextFrame, nextNextFrame) {
  // if ((nextFrame.length === 2) || (typeof nextNextFrame === 'object') || ((nextFrame.length === 1) && (typeof this.currentFrame[0] === 'number'))) {
  //   return true;
  // }
  // return false;
  if ((typeof nextFrame === 'undefined') || (nextFrame.length === 1 && nextNextFrame === undefined && this.currentFrame[0] === undefined)) {
    return false;
  }

  return true;
}
