function Bowling(play) {
  this._play = typeof play !== "undefined" ?
                          play : new Play()
}

Bowling.prototype.knockDown = function(pins) {
  this._play.knockDown(pins)
}

Bowling.prototype.calculateTotal = function() {
  return this._play.calculate()
}
