function Frame() {
  this._frameTracker = []
  this._strikeStatus = false
  this._strikeShotsTracker = [false,true,true]
}

Frame.prototype.roll = function(rollScore) {
  this._frameTracker.push(rollScore)
}

Frame.prototype.frameStatus = function() {
  return this._frameTracker
}

Frame.prototype.strikeInitalizer = function() {
  this._strikeStatus = this._strikeShotsTracker.pop()
}

Frame.prototype.strikeStatus = function() {
  return this._strikeStatus
}
