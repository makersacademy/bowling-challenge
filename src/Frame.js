function Frame() {
  this._frameTracker = []
}

Frame.prototype.roll = function(rollScore) {
  this._frameTracker.push(rollScore)

}

Frame.prototype.frameOutcome = function() {
  if (this._frameTracker[0] === 10) {
    this._frameTracker = 'X'
  }
  else if (this._frameTracker[0] + this._frameTracker[1] === 10) {
    this._frameTracker[1] = '/'
  }
  return this._frameTracker
}
