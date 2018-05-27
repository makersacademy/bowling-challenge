function Frame () {
  this._pins = 10
  this._hits = 0
  this._spares = 0
  this._strikes = 0
}
//TODO Add a complete frame attribute and scored frame attribute

Frame.prototype.newBall = function (number) {
  if (this._hits >= 2) {
    throw 'Frame had two hits.'
  }
  if (this._hits === 0 && number === 10) {
    this._strikes ++
  }
  if (this._hits === 1 && number === this._pins) {
    this._spares ++
  }
  this._pins -= number
  this._hits ++
}

module.exports = Frame