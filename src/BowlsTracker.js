function BowlsTracker() {
  this.bowlsLeft = 21;
  this.bowlsRecord = [];
}

BowlsTracker.prototype.recordRoll = function (pinsKnockedDown) {
  this._reduceAvailableBowls();
  this.bowlsRecord.push(pinsKnockedDown);
  // evaluateBowl()
}

BowlsTracker.prototype._reduceAvailableBowls = function () {
  this.bowlsLeft--;
}
