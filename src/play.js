function Play() {
  this._frames = []
}

Play.prototype.knockDown = function(pinsDown) {
  this._addRoll(pinsDown)
}

Play.prototype.calculate = function() {
  var total = 0
  for(var i = 0; i <= this._frames.length; i++) {
    if(i === this._frames.length) {
      return total
    } else {
      total += this._frames[i].firstAndSecondRollScore()
    }
  }
}


Play.prototype._addRoll = function(pinsDown) {
  if(this._lastFrame() === undefined || this._lastFrame().isComplete()) {
    this._addFrame(pinsDown)
  } else {
    this._lastFrame().addSecondRoll(pinsDown)
  }
}

Play.prototype._addFrame = function(pinsDown) {
  this._frames.push(new Frame(pinsDown))
}

Play.prototype._lastFrame = function() {
  return this._frames[this._frames.length - 1]
}
