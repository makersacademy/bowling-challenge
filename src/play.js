function Play() {
  this._frames = []
}

Play.prototype.knockDown = function(pinsDown) {
  this._addFrame(pinsDown)
}

Play.prototype._addFrame = function(pinsDown) {
  this._frames.push(new Frame(pinsDown))
}

Play.prototype.calculate = function() {
  var total = 0
  for(var i = 0; i <= this._frames.length; i++) {
    if(i === this._frames.length) {
      return total
    } else {
      total += this._frames[i].firstRollScore()
    }
  }
}
