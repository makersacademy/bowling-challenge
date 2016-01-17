function Game(frame) {
  this.framesLog = typeof frame !== 'undefined' ? frame : new Frame();
}

Game.prototype.bowlA = function(numberOfPins) {
  var error = 'Nope. Ten pins max per frame'
  if (this._isEndOfGame()) {return 'Game over: Ten frames played'}
  if (this._isTooManyPins(numberOfPins)) {throw new Error(error)}
  this.framesLog.receivePins(numberOfPins);
}

Game.prototype.seeFrameResults = function() {
  return this.framesLog.getFrameResults();
}

Game.prototype.seeFrameScores = function() {
  return this.framesLog.getFrameScores();
}

Game.prototype.totalScore = function() {
  return this.framesLog.totalScore()
};

Game.prototype._isEndOfGame = function() {
  if (this._isLastFrameSpare()) {
    return this._isSpareComplete();
  }
  if (this._isLastFrameStrike()) {
    return this._isStrikeComplete();
  }
  return this._isNoBonusBallsAndTenCompleteFrames();
};

Game.prototype._isTooManyPins = function(numberOfPins) {
  return (this.framesLog.isTooManyPinsInOneFrame(numberOfPins));
};

Game.prototype._isLastFrameSpare = function() {
  return (typeof this.framesLog.frames[9] !== 'undefined') &&
  (this.framesLog.frames[9].reduce((a, b) => a + b, 0) === 10) &&
  (this.framesLog.frames[9].length === 2);
};

Game.prototype._isLastFrameStrike = function() {
  return (typeof this.framesLog.frames[9] !== 'undefined') &&
  (this.framesLog.frames[9].reduce((a, b) => a + b, 0) === 10) &&
  (this.framesLog.frames[9].length === 1);
}

Game.prototype._isSpareComplete = function() {
  if (this.framesLog.currentFrame.length === 1) {
    return true;
  } else {
    return false;
  }
};

Game.prototype._isStrikeComplete = function() {
  if ((typeof this.framesLog.frames[10] !== 'undefined') &&
    (this.framesLog.frames[10].length === 2)) {
    return true;
  }
  if ((typeof this.framesLog.frames[10] !== 'undefined') &&
    (this.framesLog.frames[10].length === 1) &&
    (typeof this.framesLog.frames[11] !== 'undefined')) {
    return true;
  }
  return false;
};

Game.prototype._isNoBonusBallsAndTenCompleteFrames = function () {
  return this.framesLog.frames.length >= 10
};
