function Lane(pins) {
  this.pins = typeof pins !== 'undefined' ? pins : this.defaults.pins;
  this.pinsUp = this.pins;
}

Lane.prototype.knockPins = function(pins) {
  pins = typeof pins !== 'undefined' ? pins : this._randomRoll();
  if (pins > this.pinsUp) { throw new Error('Not enough pins to knock') }
  this.pinsUp -= pins;
  if (this.pinsUp === 0) { this.reset(); }
  return pins;
}

Lane.prototype.reset = function() {
  this.pinsUp = this.pins;
}

Lane.prototype._randomRoll = function() {
  return Math.floor(Math.random() * (this.pinsUp + 1));
}

Lane.prototype.defaults = {
  pins: 10
}
