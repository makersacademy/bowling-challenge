function Bowling(play) {
  this._play = typeof play !== "undefined" ?
                          play : new Play()
  this._tableCell = 0
  this._rolls = []
  this._message = {0:"Gutter game! You scored ",
                   1:"Perfect game! You scored ",
                   2:"You scored "}
}

Bowling.prototype.knockDown = function(pins) {
  if(this.isPermittedValue(pins)) {
    this._play.knockDown(pins)
    this.addRoll(pins)
  } else {
    throw new Error("Can't score more than 10 per frame!")
  }
}

Bowling.prototype.addRoll = function(pins) {
  this._rolls.push(pins)
}

Bowling.prototype.calculateTotal = function() {
  if(this._play.isGameOver()) {
    return this._message[this._play.gameOverMessage()] + this._play.calculate()
  } else {
    return this._play.calculate()
  }
}

Bowling.prototype.incrementTableCell = function(pinsDown) {
  if (pinsDown === 10) {
    return this._tableCell += 2
  } else {
    return this._tableCell += 1
  }
}

Bowling.prototype.rolls = function() {
  return this._rolls
}

Bowling.prototype.isPermittedValue = function (pinsDown) {
  return this._play.isPermittedValue(pinsDown)
}
