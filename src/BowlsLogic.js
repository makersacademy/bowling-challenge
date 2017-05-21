_evaluateBowl = function(pinsObject, bowlsTrackerObject) {
  if (!_isFinalFrame(bowlsTrackerObject)) {
    _regularRulesLogic(pinsObject, bowlsTrackerObject);
  } else {
    _finalFrameRulesLogic(pinsObject, bowlsTrackerObject)
  };
};

_regularRulesLogic = function(pinsObject, bowlsTrackerObject) {
  if (_isfirstBowlInFrame(bowlsTrackerObject) && _isAStrike(pinsObject, bowlsTrackerObject)) {
    bowlsTrackerObject._reduceAvailableBowls();
    pinsObject.reset();
  };
  if (!_isfirstBowlInFrame(bowlsTrackerObject)) {
    pinsObject.reset();
  };
};

_finalFrameRulesLogic = function(pinsObject, bowlsTrackerObject) {
  if (_isAStrike(pinsObject, bowlsTrackerObject)) {
    pinsObject.reset();
  };
  if (!_isfirstBowlInFrame(bowlsTrackerObject)) {
    if (_isASpare(pinsObject, bowlsTrackerObject)) {
      pinsObject.reset();
    } else if (!_finalFrameExtraBowlAcquired(pinsObject, bowlsTrackerObject)) {
      bowlsTrackerObject._reduceAvailableBowls();
    };
  };
};

_isAStrike = function(pinsObject, bowlsTrackerObject) {
  if (bowlsTrackerObject._currentPinsKnockedOver() === 10) {
    return true;
  } else {
    return false;
  }
};

_isASpare = function(pinsObject, bowlsTrackerObject) {
  if (bowlsTrackerObject._framePinsKnockedOver() === 10) {
    return true;
  } else {
    return false;
  }
};

_finalFrameExtraBowlAcquired = function(pinsObject, bowlsTrackerObject) {
  if (bowlsTrackerObject._framePinsKnockedOver() >= 10) {
    return true;
  } else {
    return false;
  }
};
