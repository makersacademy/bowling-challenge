function Frame() {
  this._frameTracker = []
}

Frame.prototype.roll = function(rollScore) {
  this._frameTracker.push(rollScore)
}

Frame.prototype.frameOutcome = function() {
  return this._frameTracker
}
