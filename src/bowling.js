function Bowling(play) {
  this._play = typeof play !== "undefined" ?
                          play : new Play()
  this._tableCell = 0
}

Bowling.prototype.knockDown = function(pins) {
  this._play.knockDown(pins)
}

Bowling.prototype.calculateTotal = function() {
  return this._play.calculate()
}

Bowling.prototype.tableCell = function(pinsDown) {
  if (pinsDown === 10) {
    return this._tableCell += 2
  } else {
    return this._tableCell += 1
  }
}
