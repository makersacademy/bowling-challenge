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
    var score = this._reduceFrameToScore(i);
    if (score === 'N/A') {
      return output
    }
    output.push([score]);
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

Frame.prototype.totalScore = function() {
  return twoDArrayTotal(this.getFrameScores());
};

Frame.prototype._storeCurrentFrameIfCompleted = function(pins) {
  if (pins === 10 || this.currentFrame.length === 2) {
    this.frames.push(this.currentFrame);
    this.currentFrame = [];
  }
};

Frame.prototype._reduceFrameToScore = function(i) {
  var frame = this.frames[i];
  var nFrame = this.frames[i+1];
  var nNFrame = this.frames[i+2];
  var score = frame.reduce((a, b) => a + b, 0);
  if (score === 10) {
    return this._BonusOrSetToZero(score, frame, nFrame, nNFrame);
  }
  return score;
};

Frame.prototype._BonusOrSetToZero = function(score, frame, nFrame, nNFrame) {
  var bonusScore = 'N/A'
  if (_isSpareAndNextFrameIncomplete(frame, nFrame)) {
      bonusScore = this._spareCalcIfNoNextFrame(score);
  }
  if (_isSpareAndNextFrameComplete(score, frame, nFrame)) {
      bonusScore = score + nFrame[0];
  }
  if (_isStrikeAndTwoMoreCompleteFrames(frame, nFrame, nNFrame)) {
    bonusScore = score + _calcBonusForStrikeWithTwoFrames(nFrame, nNFrame);
  }
  if (_isStrikeAndOneMoreCompleteFrame(frame, nFrame, nNFrame)) {
      bonusScore = score + this._calcBonusForStrikeWithOneFrame(nFrame);
  }
  return bonusScore;
}


Frame.prototype._spareCalcIfNoNextFrame = function(score) {
  return this.currentFrame.length === 0 ?
  (0) : (score += this.currentFrame[0]);
};

function _isSpareAndNextFrameIncomplete(frame, nFrame) {
  return (frame.length === 2 &&
    typeof nFrame === 'undefined')
}

function _isSpareAndNextFrameComplete(score, frame, nFrame) {
  return frame.length === 2 &&
  score === 10 &&
  typeof nFrame === 'object'
}

function _isStrikeAndTwoMoreCompleteFrames(frame, nFrame, nNFrame) {
  return frame.length === 1 &&
  typeof nFrame === 'object' &&
  typeof nNFrame === 'object';
}

function _isStrikeAndOneMoreCompleteFrame(frame, nFrame, nNFrame) {
  return frame.length === 1 &&
  typeof nFrame === 'object' &&
  nNFrame === undefined;
}

function _calcBonusForStrikeWithTwoFrames(nFrame, nNFrame) {
  return nFrame.length === 1 ?
  (nFrame[0] + nNFrame[0]) : nFrame.reduce((a, b) => a + b, 0);
}

Frame.prototype._calcBonusForStrikeWithOneFrame = function(nFrame) {
  return nFrame.length === 1 ?
  (nFrame[0] + this.currentFrame[0]) : nFrame.reduce((a, b) => a + b, 0);
};

function twoDArrayTotal(array) {
  var length = array.length > 10 ? 10 : array.length;
  var sum = 0;
  var n;
  for (n=0; n<length; n++) {
    sum += array[n].reduce((a, b) => a + b, 0)
  }
  return sum;
}
