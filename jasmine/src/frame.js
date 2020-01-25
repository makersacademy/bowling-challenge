function Frame () {
  this._shots = []
  this.MAX_PINS = 10
}

Frame.prototype.addShot = function (pins) {
  if (this._shots.length === 2) throw new Error('You already inserted two shot!')
  this._shots.push(pins)
}

Frame.prototype.getShot = function (number) {
  return this._shots[number - 1]
}
