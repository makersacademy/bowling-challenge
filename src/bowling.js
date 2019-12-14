
function Bowling() {
  this._scores = []
  this._frame = 1
}

Bowling.prototype.roll = function(pins) {
  this._scores.push(pins)
}

Bowling.prototype.score = function() {
  return this._scores.reduce((a, b) => a + b, 0)
}

Bowling.prototype.getFrame = function() {
  return this._frame
}



module.exports = Bowling