function Frame () {
  this._shots = []
  this.MAX_PINS = 10
}

Frame.prototype.addShot = function (pins) {
  if (this._shots.length === 2) throw new Error('You already inserted two shot!')
  if (!Number.isInteger(pins)) throw new TypeError('You need to insert the number of pins as an Integer')
  if (pins > this.MAX_PINS || this._shots[0] + pins > this.MAX_PINS) throw new Error("You can't hit more than 10 pins!")

  this._shots.push(pins)
}

Frame.prototype.getShot = function (number) {
  return this._shots[number - 1]
}

Frame.prototype.isSpare = function () {
  return this._shots.reduce((acc, val) => acc + val) === this.MAX_PINS
}
