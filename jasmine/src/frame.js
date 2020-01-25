function Frame () {
  this._shots = []
}

Frame.prototype.addShot = function (pins) {
  this._shots.push(pins)
}

Frame.prototype.getShot = function (number) {
  return this._shots[number - 1]
}
