function BowlingBall() {}

BowlingBall.prototype.roll = function(pinsObject, bowlsTrackerObject, pinsKnockedDown) {
  if (pinsObject._isValidRoll(pinsKnockedDown)) {
    bowlsTrackerObject._recordRoll(pinsKnockedDown, pinsObject);
  }
}
