function Roll(pins) {
  this._knockedPins = pins
};

Roll.prototype.getKnockedPins = function() {
  return this._knockedPins
}
