function Frame() {
  this._frameTracker = []
  this._strikeStatus = false
  this._spareStatus = false
  this._strikeShotsTracker = [false,true,true]
  this._spareShotsTracker = [false,true]
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

Frame.prototype.spareInitalizer = function() {
  this._spareStatus = this._spareShotsTracker.pop()
}

Frame.prototype.spareStatus = function() {
  return this._spareStatus
}
