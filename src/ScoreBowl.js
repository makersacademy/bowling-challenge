function ScoreBowl() {
  this.record = [];
}

ScoreBowl.prototype.evaluateScore = function(pinsObject, bowlsTrackerObject) {
  if (!_isFinalFrame(bowlsTrackerObject)) {
    this.regularScore(pinsObject, bowlsTrackerObject);
  } else {
    this.finalFrameScore(pinsObject, bowlsTrackerObject)
  };
};

ScoreBowl.prototype.regularScore = function(pinsObject, bowlsTrackerObject) {
  if (_isfirstBowlInFrame(bowlsTrackerObject) && _isAStrike(pinsObject, bowlsTrackerObject)) {
    this.record.push("X");
    this.record.push(null);
  } else if (!_isfirstBowlInFrame(bowlsTrackerObject) && _isASpare(pinsObject, bowlsTrackerObject)) {
    this.record.push("/");
  } else if (_isAGutterBall(pinsObject, bowlsTrackerObject)) {
    this.record.push("-");
  } else {
    this.record.push((bowlsTrackerObject._currentPinsKnockedOver().toString()))
  };
};

ScoreBowl.prototype.finalFrameScore= function(pinsObject, bowlsTrackerObject) {
  if (_isfirstBowlInFrame(bowlsTrackerObject) && _isAStrike(pinsObject, bowlsTrackerObject)) {
    this.record.push("X");
  } else if (_isAFinalFrameSpare(pinsObject, bowlsTrackerObject)) {
    this.record.push("/");
  } else if (_isAStrike(pinsObject, bowlsTrackerObject)) {
    this.record.push("X");
  } else if (_isAGutterBall(pinsObject, bowlsTrackerObject)) {
    this.record.push("-");
  } else {
    this.record.push((bowlsTrackerObject._currentPinsKnockedOver().toString()));
  };
};


_isAGutterBall = function(pinsObject, bowlsTrackerObject) {
  if ( bowlsTrackerObject._currentPinsKnockedOver() === 0) {
    return true;
  } else {
    return false;
  };
};

_isAFinalFrameSpare = function(pinsObject, bowlsTrackerObject) {
  if (_isASpare(pinsObject, bowlsTrackerObject) && (bowlsTrackerObject._previousPinsKnockedOver() != 10)) {
    return true;
  } else {
    return false;
  };
};
