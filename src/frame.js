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
    // output.push([this._reduceFrameToScore(i)]);
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
  var nextFrame = this.frames[i+1];
  var nextNextFrame = this.frames[i+2];
  var score = frame.reduce((a, b) => a + b, 0);
  if (score === 10) {
    return this._addBonusOrSetScoreToZero(score, frame, nextFrame, nextNextFrame);
  }
  return score;
};

Frame.prototype._addBonusOrSetScoreToZero = function(score, frame, nextFrame, nextNextFrame) {
  var bonus_score = 'N/A'
  if (frame.length === 2 && typeof nextFrame === 'undefined') {
      bonus_score = this.currentFrame.length === 0 ? (0) : (score += this.currentFrame[0])
  } else if (frame.length === 2 && score === 10 && typeof nextFrame === 'object') {
      bonus_score = score + nextFrame[0];
  }
  if (frame.length === 1 && typeof nextFrame === 'object' && typeof nextNextFrame === 'object') {
    var bonus
    bonus = nextFrame.length === 1 ? (nextFrame[0] + nextNextFrame[0]) : nextFrame.reduce((a, b) => a + b, 0);
    bonus_score = score + bonus;
  } else if (frame.length === 1 && typeof nextFrame === 'object' && nextNextFrame === undefined) {
      var bonus
      bonus = nextFrame.length === 1 ? (nextFrame[0] + this.currentFrame[0]) : nextFrame.reduce((a, b) => a + b, 0);
      bonus_score = score + bonus;
  }
  return bonus_score;
}

function twoDArrayTotal(array) {
  var length = array.length > 10 ? 10 : array.length;
  var sum = 0;
  var n;
  for (n=0; n<length; n++) {
    sum += array[n].reduce((a, b) => a + b, 0)
  }
  return sum;
}


// Frame.prototype._isNotEnoughDataToCalcStrike = function(nextFrame, nextNextFrame) {
//   if ((nextFrame === undefined) || (nextFrame.length === 1 && nextNextFrame === undefined && this.currentFrame[0] === undefined)) {
//     return true;
//   }
//   return false;
// }
